import React from "react";
import edit1 from "../assets/img/edit1.png";
import "../../src/App.css";

const Aboutme = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #19222C, #192639, #19203a, #1d1a39, #241136)",
      }}
    >
      <div
        className="main-about-me"
        style={{
          width: "65%",
          margin: "auto",
          marginBottom: "5rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="left-aboutme-section" style={{ textAlign: "center" }}>
          <h1>About Me</h1>
          <img
            src={edit1}
            alt="my-img"
            style={{ width: "200px", borderRadius: "50%", marginBottom:"3rem", }}
          />
        </div>

        <div className="right-aboutme-section-desc">
          <p>
            Back in 2006, in an cyber cafe, I was wondering looking at the
            internet, how beautifully the web pages provided information and
            there was no limit of resources, what ever you think of it was
            presented in front of you with a click of a button.
            <br />
            <br />
            That day I really wanted to make such amazing webpages. It all
            started then. Thankfully now I am an web application developer
            living my dreams of developing and designing web applications. After
            completion of my Masters in Computer Applications, I started
            learning full-stack web development from Masai School (full time)
            which then made me capable enough and revived my old childhood
            dreams once again. I am just enjoying since then.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
