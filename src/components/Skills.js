import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>A full stack developer, having experience in <br></br> React.js, Redux, Mongo, Express, Node  </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="skills" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" alt="skills" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="skills" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="skills" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png" alt="skills" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="skills" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="skills" />
                                <h5>Mongo DB</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/128/4494/4494740.png" alt="skills" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
