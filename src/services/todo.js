import { db } from "../db";
export const createTodoService = async (
  username,
  task,
  startdate,
  enddate,
  progress
) => {
  const response = await db.query(
    `INSERT INTO todos (username, task, startdate, enddate, progress) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [username, task, startdate, enddate, progress]
  );
  return response.rows[0];
};

export const getTodoService = async (username) => {
  const response = await db.query("SELECT * FROM todos WHERE username = $1", [
    username,
  ]);
  return response.rows;
};

export const updateTodoServices = async (
  username,
  task,
  startdate,
  enddate,
  progress
) => {
  const response = await db.query(
    `UPDATE todos 
     SET startdate = $3, enddate = $4, progress = $5 
     WHERE username = $1 AND task = $2 
     RETURNING *`,
    [username, task, startdate, enddate, progress]
  );
  return response.rows;
};

export const deleteTodoServices = async (username) => {
  const response = await db.query(
    `DELETE FROM todos WHERE username = $1 RETURNING *`,
    [username]
  );
  return response.rows;
};
