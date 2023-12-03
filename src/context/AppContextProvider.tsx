import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const AppContext = createContext({});
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

  const [links, setLinks] = useState([]);
  const [tasks, setTasks] = useState<any>([]);
  const addLink = (id: any) => {
    const linkExists = checkIfExists(links, id);

    if (!linkExists) {
      const itemToAdd: any = [...links, id];
      const serializedItem = JSON.stringify(itemToAdd);

      setLinks(itemToAdd);

      setLinksStorage(serializedItem);
    }
  };

  const checkIfExists = (array: any[], idToCheck: any) => {
    return array.some((item) => item === idToCheck);
  };
  const addTask = (id: string) => {
    const taskExists = checkIfExists(tasks, id);

    if (!taskExists) {
      const itemToAdd: string[] = [...tasks, id];
      const serializedItem = JSON.stringify(itemToAdd);

      setTasks(itemToAdd);

      setTasksStorage(serializedItem);
    }
  };

  const removeTask = (id: string) => {
    const updatedTasks = tasks.filter((task: any) => task.id !== id);
    setTasks(updatedTasks);
  };

  const linkExists = (id: string) => {
    return links.some((link) => link === id);
  };

  const taskExists = (id: string) => {
    return tasks.some((task: string) => task === id);
  };

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
