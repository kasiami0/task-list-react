import "./style.css";

const List = ({tasks, hideDone}) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                className={`list__item 
                    ${task.done && hideDone ? "list__item--hidden" : ""}`}
                key={task.id}
            >
                <button className="list__button list__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className=
                        {`list__itemText ${task.done ? "list__itemContent--done" : ""}`}
                >
                    {task.content}
                </span>
                <button className="list__button list__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default List;