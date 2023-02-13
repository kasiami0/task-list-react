import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div className="buttonsContainer">
            <button onClick={toggleHideDone} className="buttonsContainer__button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                onClick={setAllDone}
                className="buttonsContainer__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;