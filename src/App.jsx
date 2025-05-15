import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description:
        "Estudar React para impulsionar a jornada de se tornar um desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Tailwind Css",
      description:
        "Estudar Tailwind para tornar minha estilização mais dinamica",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar TypeScript",
      description:
        "Estudar TS para se melhorar o desenvolvimento dos meus projetos",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Estudar Java",
      description:
        "Estudar Python para conseguir se aprofundar em análise de dados, ciência de dados, IA, automação, back-end web",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Estudar Inglês",
      description: "Estudar Inglês para se melhorar minhas chances de carreira",
      isCompleted: false,
    },
    {
      id: 6,
      title: "Estudar Matemática",
      description:
        "Estudar Matemática para me aprofundar melhor em Análise de Dados.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaksClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title:
        title /* eu podia ter colocado apenas title, sem os :tile, pois o paramentro recebe o "mesmo valor"*/,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 front-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaksClick={onDeleteTaksClick}
        />
      </div>
    </div>
  );
}

export default App;
