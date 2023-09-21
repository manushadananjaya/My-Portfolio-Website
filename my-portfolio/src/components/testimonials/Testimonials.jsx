import React from "react";
import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Edward Kenway",
      title: "Senior Developer",
      img: "https://media.istockphoto.com/id/1197071216/photo/portrait-of-a-smart-and-handsome-it-specialist-wearing-glasses-smiles-behind-him-personal.jpg?s=612x612&w=0&k=20&c=Dy8TjvDmeXWhR6gAZ_OuqLu3ytUJmtycEYdVQenpWoI=",
      icon: "assets/twitter.png",
      desc: "I highly recommend for the Web development position. Their strong work ethic and dedication make them an ideal candidate.",
    },
    {
      id: 2,
      name: "Emily Rhodes",
      title: "Co-Founder of DELKA",
      img: "https://t3.ftcdn.net/jpg/02/65/60/80/360_F_265608067_Nth2hs7Ri68NZBgHHhGuWIxaP6Z1m170.jpg",
      icon: "assets/youtube.png",
      desc: "An exceptional team player and would be a valuable addition to any organization.",
      featured: true,
    },
    {
      id: 3,
      name: "Hythm Kenway",
      title: "CEO of ALBI",
      img: "https://img.freepik.com/premium-photo/handsome-indian-male-software-developer-modern-office-radiating-confidence-with-subtle-smile-embodies-expertise-innovation-fastpaced-tech-industry-generative-ai_213438-10559.jpg",
      icon: "assets/linkedin.png",
      desc: "I have had the pleasure of working closely with , and I can confidently say that they excel in  problem-solving.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Recommendations</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured " : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={d.img} className="pics" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
