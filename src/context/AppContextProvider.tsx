import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const AppContext = createContext();
// Hook do użycia kontekstu
export const useAppContext: any = () => useContext(AppContext);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [linksStorage, setLinksStorage] = useLocalStorage("links", "");
  const [tasksStorage, setTasksStorage] = useLocalStorage("tasks", "");

  useEffect(() => {
    if (linksStorage) {
      setLinks((JSON.parse(String(linksStorage)) as []) || []);
    }

    if (tasksStorage) {
      setTasks((JSON.parse(String(tasksStorage)) as []) || []);
    }
    // console.log();
    // console.log(String(tasksStorage));
    // const storedData = localStorage.getItem("myItem");
    // if (storedData) {
    //   const parsedData = JSON.parse(storedData);
    //   setLinks(parsedData.links || []);
    //   setTasks(parsedData.tasks || []);
    // }
  }, []);

  // Stan przechowujący obiekty typu linki i zadania
  const [links, setLinks] = useState([]);
  const [tasks, setTasks] = useState([]);
  // Funkcja dodająca nowy link
  const addLink = (id) => {
    const linkExists = checkIfExists(links, id);

    if (!linkExists) {
      const itemToAdd = [...links, id];
      const serializedItem = JSON.stringify(itemToAdd);

      setLinks(itemToAdd);

      setLinksStorage(serializedItem);
    }
    // localStorage.setItem("myItem", serializedItem);
  };

  const checkIfExists = (array: any[], idToCheck: any) => {
    return array.some((item) => item === idToCheck);
  };
  // Funkcja dodająca nowe zadanie
  const addTask = (id) => {
    const taskExists = checkIfExists(tasks, id);

    if (!taskExists) {
      const itemToAdd = [...tasks, id];
      const serializedItem = JSON.stringify(itemToAdd);

      setTasks(itemToAdd);

      setTasksStorage(serializedItem);
    }
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Funkcja sprawdzająca istnienie UUID w linkach
  const linkExists = (id) => {
    return links.some((link) => link === id);
  };

  // Funkcja sprawdzająca istnienie UUID w zadaniach
  const taskExists = (id) => {
    return tasks.some((task) => task === id);
  };

  // Wartości dostępne w kontekście
  const contextValues = {
    links,
    tasks,
    addLink,
    addTask,
    removeTask,
    linkExists,
    taskExists,
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};
