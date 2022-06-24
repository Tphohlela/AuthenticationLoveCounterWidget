create table love_user(
	id serial not null primary key,
	username text not null,
	password text null,
	love_count int default 0
);