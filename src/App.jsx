import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Search from './components/Search/Search';

function initTasks() {
  const tasks = localStorage.getItem('tasks');

  if (tasks) {
    return JSON.parse(tasks);
  } else {
    return [];
  }
}

function App() {
  const [tasks, setTasks] = useState(initTasks);

  const [query, setQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

    return () => {};
  }, [tasks]);

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

  function checkTask(id, completed) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          const checkedTask = {
            ...task,
            completed,
          };

          return checkedTask;
        } else {
          return task;
        }
      })
    );
  }

  const filteredTasks = tasks.filter((task) => task.text.toLowerCase().includes(query));

  return (
    <Container>
      <Header></Header>
      <main>
        <Section>
          <TaskForm onCreate={createTask} />
        </Section>
        <Section title="Your Tasks">
          <Search value={query} setQuery={setQuery} />

          <TaskList tasks={filteredTasks} onRemove={removeTask} onCheck={checkTask} />
        </Section>
      </main>
    </Container>
  );
}
export default App;
