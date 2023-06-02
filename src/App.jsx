import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    {
      text: 'BrainwashBr ainwaasasdasd ssdasdasjdasuohs odifhdoua dshBrain',
      completed: false,
      id: 'asdsad',
    },
    {
      text: 'asdsada',
      completed: true,
      id: 'sdasda',
    },
    {
      text: 'sadassfd',
      completed: true,
      id: 'sdaaswqsda',
    },
    {
      text: 'asdasdasdsada',
      completed: false,
      id: 'sdassvddsdda',
    },
  ]);

  const [query, setQuery] = useState('');

  function createTask(text) {
    const newTask = {
      text: text,
      completed: false,
      id: nanoid(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  function removeTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <Container>
      <Header></Header>
      <main>
        <Section>
          <TaskForm onCreate={createTask} />
        </Section>
        <Section title="Your Tasks">
          <TaskList tasks={tasks} onRemove={removeTask} />
        </Section>
      </main>
    </Container>
  );
}
export default App;
