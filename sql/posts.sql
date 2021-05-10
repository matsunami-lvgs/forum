create table posts (
    id integer primary key,
    name varchar(25) ,
    body varchar(800) not null,
    time timestamp with time zone not null
);