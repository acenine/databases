DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userID INT NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  PRIMARY KEY (userID),
  UNIQUE KEY (username)
);
-- CREATE TABLE rooms (
--   roomID INT NOT NULL,
--   name TEXT NOT NULL,
--   PRIMARY KEY (roomID)
-- );
-- CREATE TABLE room_user (
--   ID INT NOT NULL,
--   roomID INT NOT NULL,
--   userID INT NOT NULL,
--   PRIMARY KEY (ID),
--   FOREIGN KEY (roomID) REFERENCES rooms (roomID),
--   FOREIGN KEY (userID) REFERENCES users (userID)
-- );
CREATE TABLE messages (
  messageID INT NOT NULL AUTO_INCREMENT,
  text TEXT NOT NULL,
  userID INT NOT NULL,
  roomname varchar(20) NOT NULL,
  PRIMARY KEY (messageID),
  FOREIGN KEY (userID) REFERENCES users (userID)
  -- FOREIGN KEY (roomID) REFERENCES rooms (roomID)
);
/* Create other tables and define schemas for them here! */

/* -- add user to table --*/
insert into users (username) values ('cleo');
/* -- add message from user to table --*/
insert into messages (text, roomname, userID) values ('yo', 'pit of misery', (select userID from users where users.username = 'cleo'));

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

