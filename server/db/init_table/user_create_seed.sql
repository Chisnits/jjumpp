CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  facebook_token VARCHAR(255),
  facebook_id VARCHAR(255),
  user_first_name VARCHAR(255),
  user_last_name VARCHAR(255),
  email VARCHAR(255),
  gender VARCHAR(255)
);