CREATE TABLE "users" (
    "user_id" bigserial PRIMARY KEY,
    "name" varchar NOT NULL,
    "email" varchar NOT NULL,
    "phone" varchar NOT NULL,
    "password" varchar NOT NULL,
    "salt" varchar NOT NULL,
    "created_at" timestamp NOT NULL DEFAULT (now())
);