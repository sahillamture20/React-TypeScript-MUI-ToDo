import { Button, Checkbox, Paper, Stack, Typography, TextField } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material"
import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  todoCompleteHandler: (id: TodoItemType["id"]) => void;
  todoDeleteHandler: (id: TodoItemType["id"]) => void;
  editHandler: (id: TodoItemType["id"], newTitle: TodoItemType["title"]) => void
};
const TodoItem = ({ todo, todoCompleteHandler, todoDeleteHandler, editHandler }: PropsType) => {

    const [isTeaxtActive, setIsTeaxtActive] = useState<boolean>(false);
    const [textValu, setTextValu] = useState<TodoItemType["title"]>(todo.title);
  return (
    <Paper>
      <Stack direction={"row"} alignContent={"center"} >
        {
            isTeaxtActive? (
              <TextField
                value={textValu}
                onChange={(e) => setTextValu(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        setIsTeaxtActive(false);
                        todoDeleteHandler(todo.id);
                        todo.title = textValu;
                        editHandler(todo.id, textValu);
                    }
                }}
              />
            ) : (
              <Typography marginRight={"auto"} alignContent={"center"} p={"1rem"}>{textValu}</Typography>
            )
        }
        <Checkbox checked={todo.isCompleted} onChange={() => todoCompleteHandler(todo.id)}/>
        <Button onClick={() => setIsTeaxtActive(!isTeaxtActive)}><Edit /></Button>
        <Button onClick={() => todoDeleteHandler(todo.id)}><Delete /></Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
