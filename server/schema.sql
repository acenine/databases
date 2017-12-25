CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userID INT NOT NULL,
  name TEXT NOT NULL,
  PRIMARY KEY (userID)
);
CREATE TABLE rooms (
  roomID INT NOT NULL,
  name TEXT NOT NULL,
  PRIMARY KEY (roomID)
);
CREATE TABLE room_user (
  ID INT NOT NULL,
  roomID INT NOT NULL,
  userID INT NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (roomID) REFERENCES rooms (roomID),
  FOREIGN KEY (userID) REFERENCES users (userID)
);
CREATE TABLE messages (
  messageID INT NOT NULL,
  body TEXT NOT NULL,
  userID INT NOT NULL,
  roomID INT NOT NULL,
  PRIMARY KEY (messageID),
  FOREIGN KEY (userID) REFERENCES users (userID),
  FOREIGN KEY (roomID) REFERENCES rooms (roomID)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

