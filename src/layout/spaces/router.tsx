import { createBrowserRouter } from "react-router-dom";
import Spaces from "./Spaces";
import NotFoundPage from "../../app/NotFoundPage";

const spaceRouter = createBrowserRouter([
    {
        path: "/spaces",
        element: <Spaces />,
        errorElement: <NotFoundPage />,
        children: [
            
        ]
    }
]);

export default spaceRouter;