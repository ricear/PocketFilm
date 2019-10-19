"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const netModule = require("net");
const metrics_1 = require("../services/metrics");
const Debug = require("debug");
const meter_1 = require("../utils/metrics/meter");
const shimmer = require("shimmer");
const serviceManager_1 = require("../serviceManager");
class NetworkTrafficConfig {
}
exports.NetworkTrafficConfig = NetworkTrafficConfig;
const defaultConfig = {
    upload: false,
    download: false
};
const allEnabled = {
    upload: true,
    download: true
};
class NetworkMetric {
    constructor() {
        this.logger = Debug('axm:features:metrics:network');
    }
    init(config) {
        if (config === false)
            return;
        if (config === true) {
            config = allEnabled;
        }
        if (config === undefined) {
            config = defaultConfig;
        }
        this.metricService = serviceManager_1.ServiceManager.get('metrics');
        if (this.metricService === undefined) {
            return this.logger(`Failed to load metric service`);
        }
        if (config.download === true) {
            this.catchDownload();
        }
        if (config.upload === true) {
            this.catchUpload();
        }
        this.logger('init');
    }
    destroy() {
        if (this.timer !== undefined) {
            clearTimeout(this.timer);
        }
        if (this.socketProto !== undefined && this.socketProto !== null) {
            shimmer.unwrap(this.socketProto, 'read');
            shimmer.unwrap(this.socketProto, 'write');
        }
        this.logger('destroy');
    }
    catchDownload() {
        if (this.metricService === undefined)
            return this.logger(`Failed to load metric service`);
        const downloadMeter = new meter_1.default({});
        this.metricService.registerMetric({
            name: 'Network In',
            id: 'internal/network/in',
            historic: true,
            type: metrics_1.MetricType.meter,
            implementation: downloadMeter,
            unit: 'MBytes/sec',
            handler: function () {
                return this.implementation.val() / 1024 / 1024;
            }
        });
        setTimeout(() => {
            const property = netModule.Socket.prototype.read;
            const isWrapped = property && property.__wrapped === true;
            if (isWrapped) {
                return this.logger(`Already patched socket read, canceling`);
            }
            shimmer.wrap(netModule.Socket.prototype, 'read', function (original) {
                return function () {
                    this.on('data', (data) => {
                        if (typeof data.length === 'number') {
                            downloadMeter.mark(data.length);
                        }
                    });
                    return original.apply(this, arguments);
                };
            });
        }, 500);
    }
    catchUpload() {
        if (this.metricService === undefined)
            return this.logger(`Failed to load metric service`);
        const uploadMeter = new meter_1.default();
        this.metricService.registerMetric({
            name: 'Network Out',
            id: 'internal/network/out',
            type: metrics_1.MetricType.meter,
            historic: true,
            implementation: uploadMeter,
            unit: 'MBytes/sec',
            handler: function () {
                return this.implementation.val() / 1024 / 1024;
            }
        });
        setTimeout(() => {
            const property = netModule.Socket.prototype.write;
            const isWrapped = property && property.__wrapped === true;
            if (isWrapped) {
                return this.logger(`Already patched socket write, canceling`);
            }
            shimmer.wrap(netModule.Socket.prototype, 'write', function (original) {
                return function (data) {
                    if (typeof data.length === 'number') {
                        uploadMeter.mark(data.length);
                    }
                    return original.apply(this, arguments);
                };
            });
        }, 500);
    }
}
exports.default = NetworkMetric;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZXRyaWNzL25ldHdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBZ0M7QUFDaEMsaURBQStEO0FBRS9ELCtCQUE4QjtBQUM5QixrREFBMEM7QUFDMUMsbUNBQWtDO0FBQ2xDLHNEQUFrRDtBQUVsRCxNQUFhLG9CQUFvQjtDQUdoQztBQUhELG9EQUdDO0FBRUQsTUFBTSxhQUFhLEdBQXlCO0lBQzFDLE1BQU0sRUFBRSxLQUFLO0lBQ2IsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQTtBQUVELE1BQU0sVUFBVSxHQUF5QjtJQUN2QyxNQUFNLEVBQUUsSUFBSTtJQUNaLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQTtBQUVELE1BQXFCLGFBQWE7SUFBbEM7UUFHVSxXQUFNLEdBQWEsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUE7SUEwR2xFLENBQUM7SUF2R0MsSUFBSSxDQUFFLE1BQXVDO1FBQzNDLElBQUksTUFBTSxLQUFLLEtBQUs7WUFBRSxPQUFNO1FBQzVCLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNuQixNQUFNLEdBQUcsVUFBVSxDQUFBO1NBQ3BCO1FBQ0QsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sR0FBRyxhQUFhLENBQUE7U0FDdkI7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLCtCQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2xELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLCtCQUErQixDQUFDLENBQUE7U0FDcEQ7UUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtTQUNyQjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJ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