-- database: 데이터의 집합
-- DBMS: Database Management System (ex: MySQL)
-- SQL: 데이터베이스를 구축 및 관리하고 활용하기 위해 사용하는 언어
-- 	cf: schema = database (almost same)
 

-- * create database
-- create database test1 default character set utf8mb4 collate utf8mb4_unicode_ci; -- utfmb4: emoji도 포함

-- * show database
show databases;


use test1;

  create table products (
 	id int not null auto_increment primary key,
	name varchar(20) not null,
	model_number varchar(15) not null,
    series varchar(30) not null
 );

show tables;

-- table 구조 확인
desc products;

-- table 삭제
drop table products;

-- table 수정
-- * add column
alter table products add new_column varchar(20);
-- * alter column
alter table products modify new_colummn int;
-- * delete column
alter table products drop new_column;






