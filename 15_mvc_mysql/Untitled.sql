use ex1;

create table visitor (
	id int primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext
);

desc visitor;

insert into visitor values
	(null, '홍길동', '내가 왔다.'), 
    (null, '이찬혁', '으라차차');


create user 'user'@'%' identified by '!QAZxcde32';
grant all privileges on *.* to 'user'@'%' with grant option;
flush privileges;
alter user 'user'@'%' identified with mysql_native_password by '!QAZxcde32';

select * from mysql.user;

insert into visitor values
	(null, '서승환', '내가짱');

select * from visitor;