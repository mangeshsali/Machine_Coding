import { useState } from "react";

export default function App() {
  const [textQuery, setTextQuery] = useState("");
  const [task, setTask] = useState([]);
  const [dragItem, setDragItem] = useState(null);

  const onChangeHandler = (e) => {
    setTextQuery(e.target.value);
  };

  const UpdateHandler = () => {
    const Obj = {
      id: Date.now(),
      title: textQuery,
      status: "TODO",
    };
    setTask((prev) => [...prev, Obj]);
    setTextQuery("");
  };

  const dropOver = (e) => {
    e.preventDefault();
  };
  const DeleteHandler = () => {};
  const handleDrop = (e, status) => {
    const updatedTasks = task.map((ele) =>
      ele.id === dragItem.id ? { ...ele, status: status } : ele
    );
    setTask(updatedTasks);
    setDragItem(null);
  };

  const handleDragStart = (e, item) => {
    setDragItem(item);
  };

  console.log("ID", dragItem);
  console.log("ALL", task);
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={textQuery}
          onChange={(e) => onChangeHandler(e)}
        />
        <button onClick={UpdateHandler}>Update</button>
      </div>

      <div className="parent-board">
        <div className="border">
          <p className="label-heading">TODO</p>

          <div
            onDragOver={(e) => dropOver(e)}
            onDrop={(e) => handleDrop(e, "TODO")}
            className=""
          >
            {task.length > 0 &&
              task.map((item, idx) =>
                item.status === "TODO" ? (
                  <div
                    key={idx}
                    className="todo"
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                  >
                    <p>{item.title}</p>
                    <button onClick={() => DeleteHandler(item.id)}>
                      Delete
                    </button>
                  </div>
                ) : null
              )}
          </div>
        </div>

        <div
          onDragOver={(e) => dropOver(e)}
          onDrop={(e) => handleDrop(e, "PENDING")}
          className="border"
        >
          <p className="label-heading">Pending</p>
          <div>
            {task.length > 0 &&
              task.map((item, idx) =>
                item.status === "PENDING" ? (
                  <div
                    key={idx}
                    className="todo"
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                  >
                    <p>{item.title}</p>
                    <button onClick={() => DeleteHandler(item.id)}>
                      Delete
                    </button>
                  </div>
                ) : null
              )}
          </div>
        </div>

        <div
          onDragOver={(e) => dropOver(e)}
          onDrop={(e) => handleDrop(e, "DONE")}
          className="border"
        >
          <p className="label-heading">Done</p>
          <div>
            {task.length > 0 &&
              task.map((item, idx) =>
                item.status === "DONE" ? (
                  <div
                    key={idx}
                    className="todo"
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                  >
                    <p>{item.title}</p>
                    <button onClick={() => DeleteHandler(item.id)}>
                      Delete
                    </button>
                  </div>
                ) : null
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
