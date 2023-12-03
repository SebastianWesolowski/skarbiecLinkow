// @ts-ignore
import { v5 as uuidv5 } from "uuid";

// @ts-ignore
export const parseContent = (contentObject: any) => {
  const linkItems = contentObject.linkItems;

  linkItems.forEach((item: { path: any; uuid: any }) => {
    const uuid = uuidv5(item.path, uuidv5.URL);
    item.uuid = uuid;
  });

  const groupedByCategory: { [key: string]: any[] } = linkItems.reduce((acc: any, item: any) => {
    const category = item.category;

    if (!acc.hasOwnProperty(category)) {
      acc[category] = [];
    }

    acc[category].push({ ...item });

    acc[category].forEach((element: any) => {
      if (element.todo) {
        return element.todo.forEach((todoElement) => {
          todoElement.uuid = uuidv5(element.path + todoElement.title, uuidv5.URL);
        });
      }
      return element;
      // return element.todo.forEach((todoElement) => {
      //   todoElement.uuid = uuidv5(element.path + todoElement.title, uuidv5.URL);
      // });
    });

    return acc;
  }, {});

  return { meta: contentObject.categoryDescription, groupedByCategory };
};
