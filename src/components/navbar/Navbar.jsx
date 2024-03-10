import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        > 
        </motion.span>
        <div className="social">
          <a href="https://github.com/samhitaveluri">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://linkedin.com/in/samhitaveluri">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://leetcode.com/SamhitaVeluri/">
            <img src="/leetcode.png" alt="" />
          </a>
          {/* <a href="#">
            <img src="/dribbble.png" alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
