export const getCurrentTodos = ({todo}) => todo.todos;
export const isTodosExist = state => Boolean(getCurrentTodos(state).length);
export const isLoading = ({todo}) => todo.loading;
export const getActiveTodosCount = ({todo}) => todo.todos.filter(todo => !todo.completed).length;