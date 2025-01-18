import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/fonts/fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import Homepage from "./pages/Homepage.tsx";
import CardsPage from "./pages/CardsPage.tsx";
import CampaignPage from "./pages/CampaignPage.tsx";
import FaqsPage from "./pages/FaqsPage.tsx";
import PartnersPage from "./pages/PartnersPage.tsx";
import CardDetailPage from "./pages/CardDetailPage.tsx";
import PartnerDetailPage from "./pages/PartnerDetailPage.tsx";
import CampaignDetailPage from "./pages/CampaignDetailPage.tsx";

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
      {
        path: "/partners",
        element: <PartnersPage />,
      },
      {
        path: "/cards/:id",
        element: <CardDetailPage />,
      },
      {
        path: "/partners/:id",
        element: <PartnerDetailPage />,
      },
      {
        path: "/campaigns/:id",
        element: <CampaignDetailPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
