create database ex1 default character set utf8mb4 default collate utf8mb4_general_ci;

use ex1;

create table member (
	id varchar(20) not null primary key,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) 
);

alter table member modify id varchar(10);
alter table member drop column age;
alter table member add interest varchar(100);

create table user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender enum('F', 'M', '') default '',
    birthday date not null,
    age int(3) not null default 0
);



select * from user;