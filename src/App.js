import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  {id: 1, content: "pierwsze", done: false},
  {id: 2, content: "drugie", done: true},
];

 const hideDone = false;

function App() {
  return (
    <Container>
      <Header header="Lista zadań" />
      <Section
        header="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        header="Lista zadań"
        body={<List tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
