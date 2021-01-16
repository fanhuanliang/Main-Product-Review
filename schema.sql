CREATE DATABASE FEC;

USE FEC;

CREATE TABLE reviewList (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  date_create DATE NOT NULL,
  overall_rate INT NOT NULL,
  username VARCHAR(500) NOT NULL,
  age VARCHAR(200) NOT NULL,
  recommend BOOLEAN,
  purchase_for VARCHAR(500) NOT NULL,
  title VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  play_experience INT,
  level_difficulty INT,
  build_time INT,
  building_experience VARCHAR(200),
  helpful_yes: INT,
  helpful_no: INT,
)
