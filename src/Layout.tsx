import { ReactNode } from "react";
import Header from "./components/Header";
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
