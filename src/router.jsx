import {Routes, Route} from 'react-router-dom';
import ContainerApp from './ContainerApp';
import Dashboard from "./Components/Dashboard/Dashboard";

const RouterComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<ContainerApp />} />
            <Route path="/presentacion" element={<ContainerApp />} />
            <Route path="/panel-admin" element={<Dashboard />} />
        </Routes>
    );
};
export default RouterComponent;