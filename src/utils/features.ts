export const saveTodo = (todos: TodoItemType[]) => {
    localStorage.setItem('todo', JSON.stringify(todos));
}

export const getTodo = (): TodoItemType[] => {
 const todos = localStorage.getItem('todo');
 return todos ? JSON.parse(todos) : [];
}