import { FC } from "react";
import Navbar from "./navbar";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
