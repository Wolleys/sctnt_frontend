import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Events from "../../pages/eventPage";
import NotFound from "../../pages/notFound";
import DisplayEvents from "../../pages/eventPage/displayEvents";
import EventDetails from "../../pages/eventPage/actions/eventDetails";

const EventsRoutes: FC = () => {
    return (
        <Routes>
            <Route element={<Events />}>
                <Route path="/" element={<DisplayEvents />} />
                <Route path="event/:eventId" element={<EventDetails />} />
            </Route>
            {/* Catch all undefined routes */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default EventsRoutes;
