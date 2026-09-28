import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileCta from "./components/layout/MobileCta";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Oracle from "./pages/Oracle";
import Sectors from "./pages/Sectors";
import Topics from "./pages/Topics";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useHashRoute } from "./hooks/useHashRoute";
import { serviceById } from "./data/services";

// Resuelve la ruta actual a { page, active (ítem del menú), title, props }.
function resolveRoute([section, param]) {
  switch (section) {
    case undefined:
      return { page: Home, title: "Mejora y tecnología" };
    case "quienes-somos":
      return { page: About, active: "nosotros", title: "Quiénes somos" };
    case "servicios":
      if (param === "oracle-erp-fusion") {
        return { page: Oracle, active: "servicios", title: "Oracle ERP Fusion" };
      }
      if (param && !serviceById(param)) break;
      return { page: Services, active: "servicios", title: "Servicios", props: { openId: param } };
    case "sectores":
      return { page: Sectors, active: "sectores", title: "Sectores" };
    case "temas-clave":
      return { page: Topics, active: "temas", title: "Temas clave" };
    case "contacto":
      return { page: Contact, active: "contacto", title: "Contáctanos" };
    default:
      break;
  }
  return { page: NotFound, title: "Página no encontrada" };
}

function App() {
  const path = useHashRoute();
  const { page: Page, active, title, props = {} } = resolveRoute(path);

  useEffect(() => {
    document.title = `${title} | Transforma`;
  }, [title]);

  return (
    <>
      <Header active={active} />
      <main id="contenido">
        {/* key: remonta la página al cambiar de ruta (p. ej. entre servicios) */}
        <Page key={path.join("/")} {...props} />
      </main>
      <Footer />
      {active !== "contacto" && <MobileCta />}
    </>
  );
}

export default App;
