 import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Animenz",
    img: "/animenz.png",
    desc: "This web app with good user interface gives animes suggestions based on searched anime. It uses KNN algorithm to find the best recommendations.",
    link:"https://github.com/samhitaveluri/Animenz",
  },
  {
    id: 2,
    title: "Cryptoverse",
    img: "/crypto.png",
    desc: "This web app gives news updates along price graphs of cryptocurrencies over years. Main tech used - React.js, REST-apis, Reduxjs/toolkit, Chart.js.",
    link:"https://github.com/samhitaveluri/Cryptoverse",
  },
  {
    id: 3,
    title: "Podmedia",
    img: "/podmedia.png",
    desc: "An application that summarizes podcast episodes by providing the RSS feed URL of the podcast. Used - Streamlit,WhisperX and GPT3.5 APIs from OpenAI.",
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
