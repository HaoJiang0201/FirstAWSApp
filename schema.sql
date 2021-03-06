-- 创建用户表
CREATE TABLE users (
    uid SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255),
    email_verified BOOLEAN,
    date_created DATE,
    last_login DATE
);
-- 新建一行数据
INSERT INTO users ( username )
VALUES ('Howard');
-- 更新一行数据
UPDATE users
SET email='haojiang0201@gmail.com'
WHERE uid=1;

CREATE TABLE posts (
    pid SERIAL PRIMARY KEY,
    title VARCHAR(255),
    body VARCHAR,
    search_vector TSVECTOR,
    user_id INT REFERENCES users(uid),
    author VARCHAR REFERENCES users(username),
    date_created TIMESTAMP
);

CREATE TABLE comments (
    cid SERIAL PRIMARY KEY,
    comment VARCHAR(255),
    author VARCHAR REFERENCES users(username),
    user_id INT REFERENCES users(uid),
    post_id INT REFERENCES posts(pid),
    date_created TIMESTAMP
);

CREATE TABLE appointments (
    aid SERIAL PRIMARY KEY,
    title VARCHAR(10),
    start_time TIMESTAMP WITH TIME ZONE UNIQUE,
    end_time TIMESTAMP WITH TIME ZONE UNIQUE
);