import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Animenz",
    img: "/animenz.png",
    desc: "This web app with good user interface gives animes suggestions based on searched anime. It uses deep learning soft clustering alogorithms to find the best recommendations.",
  },
  {
    id: 2,
    title: "Cryptoverse",
    img: "/crypto.png",
    desc: "This web app gives news updates along price graphs of cryptocurrencies over years. Main tech used - React.js, REST-apis, Reduxjs/toolkit, Chart.js.",
  },
  {
    id: 3,
    title: "ChatApp",
    img: "/chatapp.png",
    desc: "This app built with Node JS and ChatEngine.io will support group chats, 1-on-1 chats, realtime messaging, image and file support, read receipts and more!.",
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
            <button>See Demo</button>
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
