export const createTodoService = async (username, email, password) => {
  const response = await db.query(
    `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
    [username, email, password]
  );
  return response.rows[0];
};

export const getTodoService = async () => {
  const response = await db.query("SELECT * FROM users");
  return response.rows;
};

export const updateTodoServices = async (
  id,
  username,
  email,
  password,
  firstname,
  lastname
) => {
  const response = await db.query(
    `UPDATE users 
     SET username = $1, email = $2, password = $3, firstname = $4, lastname = $5 
     WHERE id = $6 
     RETURNING *`,
    [username, email, password, firstname, lastname, id]
  );
  return response.rows[0];
};
export const deleteTodoServices = async (userid) => {
  const response = await db.query(
    `DELETE FROM account WHERE userid = $1 RETURNING *`,
    [userid]
  );
  return response.rows[0];
};
