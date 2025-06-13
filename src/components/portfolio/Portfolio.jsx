 import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Smag",
    img: "/smag.png",
    desc: "Gives salyes analysis along with insights and strategies to improve sales for small to medium scale business",
    link:"https://github.com/samhitaveluri/smag-full",
  },
  {
    id: 2,
    title: "GPS Attendance Tracker",
    img: "/gps.png",
    desc: "Automatic employee attendance tracking app that runs in background along with fake gps and anomaly detection features.",
    // link:"https://github.com/samhitaveluri/Cryptoverse",
  },
  {
    id: 3,
    title: "Podmedia",
    img: "/podmedia.png",
    desc: "An application that summarizes podcast episodes by providing the RSS feed URL of the podcast.",
    link:"https://github.com/samhitaveluri/Podmedia",
  },
   
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link}>See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
