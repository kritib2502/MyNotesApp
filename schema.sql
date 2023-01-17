-- Create the database
DROP DATABASE IF EXISTS notes_app;
CREATE DATABASE notes_app;
USE notes_app;

-- Create a user that can access the database
DROP USER IF EXISTS 'root'@'localhost';
CREATE USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Pa$$4U!';
GRANT ALL PRIVILEGES ON notes_app.* TO 'root'@'localhost';

-- Create all the tables
DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  contents TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);