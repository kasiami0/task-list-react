import "./style.css";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                className={`list__item 
                    ${task.done && hideDone ? "list__item--hidden" : ""}`}
                key={task.id}
            >
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className="list__button list__button--done"
                >
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className=
                    {`list__itemText ${task.done ? "list__itemContent--done" : ""}`}
                >
                    {task.content}
                </span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="list__button list__button--remove"
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default List;