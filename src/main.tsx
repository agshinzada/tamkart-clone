import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/fonts/fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "./index.css";

import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import Homepage from "./pages/Homepage.tsx";
import CardsPage from "./pages/CardsPage.tsx";
import CampaignPage from "./pages/CampaignPage.tsx";
import FaqsPage from "./pages/FaqsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/cards",
        element: <CardsPage />,
      },
      {
        path: "/campaigns",
        element: <CampaignPage />,
      },
      {
        path: "/faq",
        element: <FaqsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
