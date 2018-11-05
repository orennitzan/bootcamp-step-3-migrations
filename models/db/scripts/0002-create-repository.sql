SET client_min_messages TO WARNING;

DROP TABLE IF EXISTS repository CASCADE;
CREATE TABLE repository (
  id serial,
  owner int not null  REFERENCES users (id),
  full_name varchar(255) not null,
  description varchar(255),
  html_url varchar(255),
  language varchar(255),
  stargazer_count int,
  create_date timestamp DEFAULT now(),
  PRIMARY KEY (id)
);

INSERT INTO repository (owner, full_name, description, html_url, language) VALUES( 1,'test_rep_1', 'This is test rep 1', 'html.o1.gimail.com', 'javascript' );
INSERT INTO repository (owner, full_name, description, html_url, language) VALUES( 2,'test_rep_2', 'This is test rep 2', 'html.o2.gimail.com', 'javascript' );
INSERT INTO repository (owner, full_name, description, html_url, language) VALUES( 3,'test_rep_3', 'This is test rep 3', 'html.o3.gimail.com', 'javascript' );
INSERT INTO repository (owner, full_name, description, html_url, language) VALUES( 3,'test_rep_4', 'This is test rep 4', 'html.o3.gimail.com', 'javascript' );
