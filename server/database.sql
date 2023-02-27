CREATE DATABASE Study-Sync

CREATE TABLE User (
    user_id SERIAL PRIMARY KEY,
    bio VARCHAR(255),
    password VARCHAR,
    email_address VARCHAR(100),
    class_level VARCHAR(20)
)

CREATE TABLE Schedules (
    id integer REFERENCES User(user_id),
    subj VARCHAR(20) REFERENCES Subjects(sub),
    code integer CONSTRAINT nonneg_code CHECK (code >= 0),
    quarter char,
    year integer, 
    schedule bytea(98), /* store schedule as a binary string length 98, one bit for each hour 8am-10pm for Monday-Sunday */

)

CREATE TABLE Subjects (
    sub VARCHAR 20,
)

CREATE TABLE matches (
    sender_id integer REFERENCES User(user_id),
    recipient_id integer REFERENCES User(user_id),
    CHECK (sender_id <> recipient_id)
)