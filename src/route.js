import { Routes, Route } from "react-router-dom";
import CreateEvents from "./pages/createEvent";
import ShowEvents from "./pages/showEvent";
import Landing from "./pages/landing";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="create" element={<CreateEvents />} />
            <Route path="event" element={<ShowEvents />} />
        </Routes>
    );
};
export default RoutesComponent;
