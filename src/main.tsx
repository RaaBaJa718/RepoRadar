import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import CandidateSearch from "./pages/CandidateSearch.tsx";
import SavedCandidates from "./pages/SavedCandidates.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // ✅ App wraps all pages
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <h2>Welcome to RepoRadar</h2>, // ✅ Homepage
      },
      {
        path: "candidates", // ✅ Corrected path
        element: <CandidateSearch />,
      },
      {
        path: "saved", // ✅ Corrected path
        element: <SavedCandidates />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}