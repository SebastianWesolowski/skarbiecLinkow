export const getAllCategories = (contentObject: { category: any }[]) => {
  const categories = contentObject.map((item: { category: any }) => item.category);
  // @ts-ignore
  return [...new Set(categories)];
};
