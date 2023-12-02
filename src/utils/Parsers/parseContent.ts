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

    if (acc[category].todo) {
      acc[category].forEach((element) => {
        return element.todo.forEach((todoElement) => {
          todoElement.uuid = uuidv5(element.path + todoElement.title, uuidv5.URL);
        });
      });
    }

    return acc;
  }, {});

  console.log(groupedByCategory);
  return { meta: contentObject.categoryDescription, groupedByCategory };
};
