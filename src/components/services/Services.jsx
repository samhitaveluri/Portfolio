import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Skills that I know and
          <br /> currently working on
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            Skills  with
            <motion.b whileHover={{color:"orange"}}> Hands On </motion.b>  Experience
          </h1>
        </div>
        {/* <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div> */}
      </motion.div>
      <motion.div className="listContainer"  variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Languages</h2>
          <p>
            Python, C, C++, Java, Javascript, SQL.  
          </p> 
          <h6>

          </h6>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend</h2>
          <p>
            Html, CSS, Bootstrap, PHP, React.js, Jquery, Redux.  
          </p> 
          <h5>
            For state management and dynamic frontend to make the web app efficient.
          </h5>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend</h2>
          <p>
            Node.js, MongoDB, MySQL. 
          </p> 
          <h5>Familiar with backend javascript frameworks, API's and Database management</h5>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Familiar with</h2>
          <p>
            Machine learning, Fullstack web developement. 
          </p> 
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
