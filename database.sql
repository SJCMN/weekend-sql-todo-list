

CREATE TABLE "tasks" (
"id" SERIAL PRIMARY KEY,
"task_name" VARCHAR(64),
"completed" BOOLEAN DEFAULT FALSE,
"date" DATE
);

CREATE TABLE "titles" (
"id" SERIAL PRIMARY KEY,
"title_name" VARCHAR(32),
"date" DATE
);

INSERT INTO "tasks" ("task_name", "completed", "date")
VALUES
('milk', FALSE, '10-15-2021'),
('butter', FALSE, '10-15-2021'),
('eggs', FALSE, '10-15-2021'),
('bread', FALSE, '10-15-2021');

INSERT INTO "titles" ("title_name", "date")
VALUES
('Groceries', '10-15-2021'),
('Projects', '10-15-2021'),
('Books', '10-15-2021'),
('Movies', '10-15-2021');

SELECT * FROM "tasks";

UPDATE "tasks"
SET "completed" = true
WHERE "id" = 1;

DELETE FROM "tasks"
WHERE "id" = 1;