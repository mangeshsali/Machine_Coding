import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const AddHandler = () => {
    setTodo((prev) => [...prev, input]);
    setInput("");
  };

  const onDelete = (id) => {
    const Updated = todo.filter((ele, index) => index !== id);
    setTodo(Updated);
  };

  const EditHandler = (item, index) => {
    setInput(item);
    setIsEdit(true);
    setEditIndex(index);
  };

  const SetEditHandler = () => {
    const Updated = [...todo];

    Updated[editIndex] = input;

    setTodo(Updated);

    setInput("");
    setIsEdit(false);
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => onChangeHandler(e)} value={input} />
      {isEdit ? (
        <button onClick={SetEditHandler}>Edit</button>
      ) : (
        <button onClick={AddHandler}>ADD</button>
      )}

      {todo.length > 0 &&
        todo.map((ele, index) => {
          return (
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "solid black 2px",
              }}
              onClick={() => EditHandler(ele, index)}
            >
              <ul>{ele}</ul>
              <button onClick={() => onDelete(index)}>Delete</button>
            </li>
          );
        })}
    </div>
  );
}
