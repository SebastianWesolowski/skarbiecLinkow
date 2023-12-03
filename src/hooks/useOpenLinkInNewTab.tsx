import { useEffect } from "react";

const useOpenLinkInNewTab = (uuid) => {
  useEffect(() => {
    const handleLinkClick = (event) => {
      // Sprawdź, czy kliknięty element to link
      if (event.target.tagName === "A") {
        const link = event.target;

        // Sprawdź, czy link ma atrybut target ustawiony na '_blank'
        if (link.getAttribute("target") === "_blank") {
          // Otwórz link w nowym oknie
          window.open(link.href, "_blank");

          // Zatrzymaj domyślne zachowanie kliknięcia
          event.preventDefault();
        }
      }
    };

    // Dodaj nasłuchiwanie kliknięć na cały dokument
    document.addEventListener("click", handleLinkClick);

    return () => {
      // Usuń nasłuchiwanie po odmontowaniu komponentu
      document.removeEventListener("click", handleLinkClick);
    };
  }, []); // Pusta tablica oznacza, że ten efekt wykona się tylko raz

  // Hook nie zwraca żadnych danych
};

export default useOpenLinkInNewTab;
