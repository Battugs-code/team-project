export const getTodo = async (req, res) => {
  const { username } = req.body;
  const todos = await getTodoService(username);
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const { username, task, startdate, enddate, progress } = req.body;

  const todos = await createTodoService(
    username,
    task,
    startdate,
    enddate,
    progress
  );

  res.json(todos);
};

export const updateTodo = async () => {
  const { username, task, startdate, enddate, progress } = req.body;
  const todos = await updateTodoServices(
    username,
    task,
    startdate,
    enddate,
    progress
  );
  res.json(todos);
};

export const deleteTodo = async () => {
  const { username } = req.body;
  const todos = await deleteTodoServices(username);
  res.json(todos);
};
