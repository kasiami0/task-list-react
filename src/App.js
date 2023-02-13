import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "pierwsze", done: false },
    { id: 2, content: "drugie", done: true },
  ]);

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => (
      { ...task, done: true }
    )));
  }

  return (
    <Container>
      <Header header="Lista zadań" />
      <Section
        header="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        header="Lista zadań"
        body={<List
          tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />}
        extraHeaderContent={<Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          setAllDone={setAllDone}
        />}
      />
    </Container>
  );
}

export default App;
