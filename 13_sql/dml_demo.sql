-- DML (data manipulation language)

use test1;

create table customer (
	custid  char(10) primary key,  -- pk
    custname varchar(10) not null,
    addr char(10) not null,
    phone char(11),
    birth date
);

create table orders (
	orderid int primary key auto_increment,  -- pk
    custid char(10) not null,  -- fk
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    -- setting fk
    foreign key (custid) references customer(custid) on update cascade on delete cascade
);

-- 외래키 제약조건
-- 두 테이블 사이에 관계를 맺음 -> 데이터의 무결성
-- 다른 테이블의 기본키를 이 테이블의 외래키로 연결

-- 용어
-- 기준 테이블: 기본키를 갖는 테이블 (customer)
-- 참조 테이블: 외래키가 있는 테이블 (orders)
-- 외래키 연결: foreign key (참조테이블_열이름) references 기준테이블(열이름)

-- on update cascade: 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경
-- on delete cascade: 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제

-- 테이블끼리 관계를 맺고 나면 테이블 삭제할 때 주의
-- customer.custid, orders.custid "관계"를 맺음
-- customer에 존재하는 회원만 orders 테이블에 데이터를 추가 
-- orders테이블이 존재하고 있는 상황에서 customer 테이블을 삭제(drop)하면?
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날라갔기 때문에 알 수 없음.
-- pk-fk 연결된 테이블은 외래키가 설정된 테이블 (참조테이블)이 먼저 삭제 
-- (1) orders 테이블 삭제 -> (2) customer 테이블 삭제


insert into customer (custid, custname, addr, phone, birth) 
	values ('lucky', 'Jerry', 'New York', '01012345678', '2001-01-01');

insert into customer (custid, custname, addr, phone, birth) 
	values ('wow', 'Tom', 'Seoul', '01098765432', '2005-12-31');
    
insert into customer values
	('qwer', 'Sergei', 'Moscow', '01098765432', '2005-12-31'),
    ('yhgt', 'Jean', 'Lyon', '01062457543', '1999-12-30'),
    ('rfde', 'Ryuhei', 'Tokyo', '01013572467', '2004-12-29');

insert into orders values (null, 'qwer', 'vodka', 3000, 2);
insert into orders values
	(null, 'yhgt', 'wine', 5000, 3),
    (null, 'qwer', 'wine', 5000, 1);

-- update / delete
update customer set addr = 'Paris' where custid = 'yhgt';
delete from customer where custid = 'wow';

delete from customer where custid = 'yhgt';  -- orders에도 같이 삭제됨 (on delete cascade)
desc orders;
select * from customer;
select * from orders;



