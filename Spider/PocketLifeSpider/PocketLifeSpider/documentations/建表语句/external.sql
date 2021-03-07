drop table if exists pocket.drama;
create external table pocket.drama(
`_id` string,
`acquisition_time` string,
`description` string,
`drama_description` string,
`drama_url` string,
`id` string,
`introduction` string,
`name` string,
`play_time` string,
`sources` string,
`src` string,
`type` string,
`update_time` string
)
PARTITIONED BY (date_id string)
row format delimited fields terminated by '\t'
STORED AS TEXTFILE;

drop table if exists pocket.movie;
create external table pocket.movie(
`_id` string,
`acquisition_time` string,
`actors` string,
`description` string,
`directors` string,
`duration` string,
`id` string,
`language` string,
`name` string,
`nickname` string,
`region` string,
`release_date` string,
`score` string,
`sources` string,
`src` string,
`type` string,
`type2` string,
`update_status` string,
`update_time` string
)
PARTITIONED BY (date_id string)
row format delimited fields terminated by '\t'
STORED AS TEXTFILE;


drop table if exists pocket.piece;
create external table pocket.piece(
`_id` string,
`acquisition_time` string,
`description` string,
`drama_url` string,
`name` string,
`src` string,
`type` string,
`type2` string,
`url` string
)
PARTITIONED BY (date_id string)
row format delimited fields terminated by '\t'
STORED AS TEXTFILE;

drop table if exists pocket.tv;
create external table pocket.tv(
`_id` string,
`acquisition_time` string,
`introduction` string,
`name` string,
`sources` string,
`src` string,
`type` string
)
PARTITIONED BY (date_id string)
row format delimited fields terminated by '\t'
STORED AS TEXTFILE;