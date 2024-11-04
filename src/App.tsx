import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useState, useEffect } from "react";
import { getTodo, saveTodo } from "./utils/features";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodo());

  const [todoTitle, setTodoTitle] = useState<TodoItemType["title"]>("");

  const addTodoHandler = (): void => {
    if (todoTitle.trim() === "") {
      return;
    }
    const newTodo: TodoItemType = {
      id: Math.floor(Math.random()*1000),
      title: todoTitle,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
    setTodoTitle("");
  }

  const todoCompleteHandler = (id: TodoItemType["id"]): void => {
    const newTodo: TodoItemType[] = todos.map(todo =>
      todo.id === id? {...todo, isCompleted:!todo.isCompleted } : todo
    )
    setTodos(newTodo);  
  };

  const todoDeleteHandler = (id: TodoItemType["id"]): void => {
    const newTodo: TodoItemType[] = todos.filter(todo =>
      todo.id !== id
    )
    setTodos(newTodo)     
  };

  const editHandler = (
    id: TodoItemType['id'],
    newTitle: TodoItemType['title'],
  ) : void => {
    const newTodos: TodoItemType[] = todos.map((i) => {
      if (i.id === id) i.title = newTitle;
      return i;
    })
    setTodos(newTodos);
  }

  useEffect(() =>{
    saveTodo(todos);
  }, [todos])

  return (
    <Container maxWidth="sm" sx={{ height: "95vh" }}>
      <AppBar position="static"  sx={{ borderBottomRightRadius: '16px', borderBottomLeftRadius: "16px"}}>
        <Toolbar>
          <Typography variant="h2">Todo App</Typography>
        </Toolbar>
      </AppBar>
      <Stack height={"72%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem key={i.id} todo={i} todoCompleteHandler={todoCompleteHandler} todoDeleteHandler={todoDeleteHandler} editHandler={editHandler}/>
        ))}
      </Stack>
      <TextField fullWidth label={"New Task"} value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)}/>
      <Button sx={{margin: '1rem 0'}} fullWidth variant="contained" onClick={() => addTodoHandler()}>
        Add
      </Button>
    </Container>
  );
}

export default App;
