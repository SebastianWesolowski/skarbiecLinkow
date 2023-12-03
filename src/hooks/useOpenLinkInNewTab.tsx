import { useEffect } from "react";

const useOpenLinkInNewTab = (uuid) => {
  useEffect(() => {
    const handleLinkClick = (event) => {
      if (event.target.tagName === "A") {
        const link = event.target;

        if (link.getAttribute("target") === "_blank") {
          window.open(link.href, "_blank");

          event.preventDefault();
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);
};

export default useOpenLinkInNewTab;
