use test1;

create table user (
	id int primary key auto_increment,
    userid varchar(20),
    name varchar(10),
    pw varchar(20)
);

select * from user;