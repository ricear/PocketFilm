import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import {Http,Jsonp,Headers} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private headers =new Headers({'Content-Type': 'application/json'});

  constructor(public http:Http,public jsonp:Jsonp,public config:ConfigService) {
    console.log('Hello HttpServiceProvider Provider');
  }

  //post 提交数据

  doPost(apiUrl,json,callback){
    var api=this.config.apiUrl+apiUrl;
    this.http.post(api,JSON.stringify(json),{headers:this.headers}).subscribe(function(res){
        callback(res.json());
    })
  }

  doPostWithOuterApi(apiUrl,json,callback){
    this.http.post(apiUrl,JSON.stringify(json),{headers:this.headers}).subscribe(function(res){
      callback(res.json());
  })
  }

  //请求数据
  //apiUrl ： api/focus
  //apiUrl ： api/focus?page=1
  doGet(apiUrl,callback){
    var api;
    if(apiUrl.indexOf('?')==-1){
      api=this.config.apiUrl+apiUrl;
    }else{
      api=this.config.apiUrl+apiUrl;
    }
    this.http.get(api).subscribe(function(data){
      callback(JSON.parse(data['_body'])); /*回调函数*/
    },function(err){
      console.log(err);
    })
  }

  doTestGet(apiUrl){
    var promise=new Promise((resolve,reject)=>{
      var api;
    if(apiUrl.indexOf('?')==-1){
      api=this.config.apiUrl+apiUrl;
    }else{
      api=this.config.apiUrl+apiUrl;
    }
    this.http.get(api).subscribe(function(data){
      resolve(data); /*回调函数*/
    },function(err){
      console.log(err);
    })
    })
    return promise;
  }

}
