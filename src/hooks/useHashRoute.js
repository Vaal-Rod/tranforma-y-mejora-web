import { useEffect, useState } from "react";

// Router mínimo por hash: "#/servicios/analitica" → ["servicios", "analitica"].
// Funciona en hosting estático (Vercel) sin configurar reescrituras de rutas.
const readPath = () =>
  window.location.hash
    .replace(/^#\/?/, "")
    .split("/")
    .filter(Boolean)
    .map(decodeURIComponent);

export function useHashRoute() {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const onHashChange = () => {
      setPath(readPath());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return path;
}
