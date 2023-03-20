import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

function ToDos({ type, todos, deletetodo, updatetodo, statetodo }) {
  todos = todos.sort((a, b) => b.priority - a.priority);

  return (
    <Box className={"todos " + type}>
      <Box>{ type === "active"? "To Do": "Done"}</Box>
      {todos.map((todo) => {
        const priorityColor = todo.priority > 7? "red": (todo.priority > 4? "orange": "green");
        return (
          <Box key={todo.id} className="flex m-t-10 align-items-c todo">
            <Checkbox onChange={() => statetodo(todo.id, !todo.done)} checked={todo.done} />
            <Box className="priority" display="inline-block" sx={{backgroundColor: priorityColor}}>{todo.priority}</Box>
            <Box className="description" display="inline-block">{todo.description}</Box>
            <Box className="flex">
              {type === "active" && (
                <Button className='m-r-10' variant='contained' onClick={() => updatetodo(todo.id)}>Update</Button>
              )}
              <Button variant='contained' onClick={() => deletetodo(todo.id)}>Delete</Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default ToDos;
