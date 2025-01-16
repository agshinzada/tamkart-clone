import { ReactNode } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-cdark">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
