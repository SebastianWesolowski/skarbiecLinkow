const linkItems = [
  {
    path: "http://frontend-app.com",
    name: "Frontend App",
    category: "Frontend",
    description: "Aplikacja frontendowa do zarządzania produktami",
    tags: ["frontend", "web", "javascript"],
    todo: [
      { title: "title", description: "Implementacja funkcji koszyka" },
      { description: "Optymalizacja wydajności" },
    ],
  },
  {
    path: "http://design-system.com",
    name: "Design System",
    category: "Frontend",
    description: "Biblioteka komponentów do współdzielenia w aplikacjach frontendowych",
    tags: ["frontend", "UI", "CSS"],
    todo: [
      { title: "title", description: "Dodanie nowych komponentów" },
      { description: "Testy jednostkowe", title: "ss" },
    ],
  },
  {
    path: "http://backend-api.com",
    name: "Backend API",
    category: "Backend",
    description: "REST API obsługujące dane użytkowników",
    tags: ["backend", "API", "Node.js"],
    todo: [
      { title: "title", description: "Implementacja autoryzacji" },
      { description: "Dodanie obsługi błędów", title: "ss" },
    ],
  },
  {
    path: "http://database-service.com",
    name: "Database Service",
    category: "Backend",
    description: "Usługa bazodanowa do przechowywania danych aplikacji",
    tags: ["backend", "database", "SQL"],
  },
];
export default linkItems;
