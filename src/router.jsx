import { Routes, Route } from "react-router-dom";
import ContainerApp from "./ContainerApp";
import Dashboard from "./Components/Dashboard/Dashboard";
import Privacy from "./Components/PoliticaTerminos/PrivacyPolicy";
import Terms from "./Components/PoliticaTerminos/TermsConditions";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<ContainerApp />} />
      <Route path="/presentacion" element={<ContainerApp />} />
      <Route path="/panel-admin" element={<Dashboard />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
    </Routes>
  );
};

export default RouterComponent;
