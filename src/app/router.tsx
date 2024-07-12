import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Spaces from "../layout/spaces/Spaces";
import NotFoundPage from "./NotFoundPage";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <Navigate to="/spaces" />
            },
            {
                path: "/spaces",
                element: <Spaces />
            }
        ]
    }
]);

export default appRouter;