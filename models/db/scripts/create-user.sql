SET client_min_messages TO WARNING;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id serial,
  login varchar(255) not null,
  avatar_url varchar(255),
  html_url varchar(255),
  create_date timestamp DEFAULT now(),
  PRIMARY KEY (id)
);

INSERT INTO users (login, avatar_url,html_url) VALUES( 'oren1','o1.gimail.com','html.o1.gimail.com' );
INSERT INTO users (login, avatar_url,html_url) VALUES( 'oren2','o2.gimail.com','html.o2.gimail.com' );
INSERT INTO users (login, avatar_url,html_url) VALUES( 'oren3','o3.gimail.com','html.o3.gimail.com' );
INSERT INTO users (login, avatar_url,html_url) VALUES( 'oren4','o4.gimail.com','html.o4.gimail.com' );