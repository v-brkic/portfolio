import React from "react";
import "./ContentComponent.css";

const ContentComponent = () => {
  return (
    <>
      <div className="row">
        <h1>
          <b>Interest</b>
        </h1>
        <hr className="featurette-divider mt-5" />
        <div className="col-lg-4">
          <h2 className="fw-normal">Mobile applications</h2>
          <p>
            In my spare time, when I don't have any commitments (college, hobbies), I work on my
            "fun" mobile apps to further improve my skills in developing them.
          </p>
        </div>
        <div className="col-lg-4">
          <h2 className="fw-normal">Web applications</h2>
          <p>
            I am also passionate about web application development, on college team projects, 
            I've been mostly doing backend but I continuously work to
            enhance my skills and gain valuable experience as a full-stack developer. 
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details »
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <h2 className="fw-normal">Cybersecurity</h2>
          <p>
            I'm pursuing a cybersecurity certification to acquire a foundational understanding of
            the field. This not only helps me recognize the various risks we face but also equips me
            with basic strategies for mitigating them.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details »
            </a>
          </p>
        </div>

        <h1 className="pt-4 mt-5">
          <b>Some of own exercise projects</b>
        </h1>
        <hr className="featurette-divider mt-5" />

        {/* Primjer s 6 slika unutar 500x500 prostora */}
        <div className="row featurette mt-5">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal">
              <b>Loyalty Android Application </b>
              <span className="text-body-secondary">Try for a bar.</span>
            </h2>
            <br />
            <p className="lead">
              
              I have developed an integrated, modern Android application that combines all key functionalities: authentication, database operations, 
              QR scanning and generation, animated screens, and a Compose-style design. 
              Through this process, I have gained knowledge of a wide range of Android and Firebase technologies, as well as application architecture in the Jetpack Compose environment.
              <br /> Here are only 2 images previewing, but more detailed functionalities images you can see on github
            </p>
            <p className="lead">
            Link to Github for more images and code:{" "}
              <a href="https://github.com/v-brkic/LoyaltyApp.git" target="_blank" rel="noreferrer">
                https://github.com/v-brkic/LoyaltyApp.git
              </a>
            </p>
          </div>

          {/* Ovdje zamjenjuješ placeholder sa slikama */}
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            {/* Okvir veličine 500x500 */}
            <div
              style={{
                width: "500px",
                height: "500px",
                border: "1px solid #ccc",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* Primjer šest slika unutar tog prostora.
                  Možeš podesiti veličine ili stil prema želji. 
                  Ovdje ih raspoređujemo da svaka bude ~50% širine unutar retka (2 stupca). 
                  Kad se smanji prozor, možda će "pasti" u više redova ovisno o responsive ponašanju. 
              */}
              <img
                src="/images/s19.png"
                alt="Screen 1"
                style={{ width: "48%", margin: "0.5%" }}
              />
              <img
                src="/images/s18.png"
                alt="Screen 2"
                style={{ width: "48%", margin: "0.5%" }}
              />
            </div>
          </div>
        </div>

        <hr className="featurette-divider mt-5" />
        <div className="row featurette mt-5">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal">
              <b>Reservation Android App </b>
              <br />
              <span className="text-body-secondary">Car detailing.</span>
            </h2>
            <p className="lead">
            Through this hands-on project, I have covered various aspects of modern Android development: from the fundamentals of Jetpack Compose and the reactive UI model, 
            to design and theming with Material3, all the way to Firebase integration (Firestore and Auth), state management, and animations. 
            Additionally, I have learned to work with date/time APIs, present statistics, and build a more “serious” UI tailored for branding and the final polished look.
            <br /> Here are only 2 images previewing, but more detailed functionalities images you can see on github
            </p>
            <p className="lead">
              Link to Github for more images and code:{" "}
              <a href="https://github.com/v-brkic/ReservationApp.git" target="_blank" rel="noreferrer">
                https://github.com/v-brkic/ReservationApp.git
              </a>
            </p>
          </div>
          {/* Ovdje zamjenjuješ placeholder sa slikama */}
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            {/* Okvir veličine 500x500 */}
            <div
              style={{
                width: "500px",
                height: "500px",
                border: "1px solid #ccc",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* Primjer šest slika unutar tog prostora.
                  Možeš podesiti veličine ili stil prema želji. 
                  Ovdje ih raspoređujemo da svaka bude ~50% širine unutar retka (2 stupca). 
                  Kad se smanji prozor, možda će "pasti" u više redova ovisno o responsive ponašanju. 
              */}
              <img
                src="/images/s21.png"
                alt="Screen 1"
                style={{ width: "48%", margin: "0.5%" }}
              />
              <img
                src="/images/s24.jpg"
                alt="Screen 2"
                style={{ width: "48%", margin: "0.5%" }}
              />
            </div>
          </div>
        </div>

        <hr className="featurette-divider mt-5" />
        <div className="row featurette mt-5">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              <b>Web application for predictive monitoring of smart buildings<span className="text-body-secondary"> Machine learning</span></b>
              <br />
            </h2>
            <p className="lead">
            In this project, a web application for predictive monitoring of advanced buildingswas
developed, aiming to optimize the energy balance through the use of renewable energy
sources. By installing photovoltaic panels on the roofs of residential buildings, it enables
the monitoring and analysis of solar energy distribution. The application collects data
on the production and consumption of energy from the panels, storing it in a PostgreSQL
database, and visualizes it through a web interface built with the Native framework. The
displayed graphical and statistical data include historical trends of energy consumption
by different devices in the building, total production, storage, and consumption of energy
over a selected period, as well as future external weather conditions. Additionally, the
application provides predictive analytics using multiple linear regression to analyze and
estimate future variables with the aim of optimizing the sale of surplus energy produced.
            <br /> Here some images previewing, but more detailed functionalities images you can see on github
            </p>
            <p className="lead">
              Link to Github for more images and code: https://github.com/v-brkic/smartBuildingMonitoring.git{" "}
              <a href="" target="_blank" rel="noreferrer">
                
              </a>
            </p>
          </div>
          {/* Ovdje zamjenjuješ placeholder sa slikama */}
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            {/* Okvir veličine 500x500 */}
            <div
              style={{
                width: "650px",
                height: "700px",
                border: "1px solid #ccc",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* Primjer šest slika unutar tog prostora.
                  Možeš podesiti veličine ili stil prema želji. 
                  Ovdje ih raspoređujemo da svaka bude ~50% širine unutar retka (2 stupca). 
                  Kad se smanji prozor, možda će "pasti" u više redova ovisno o responsive ponašanju. 
              */}
              <img
                src="/images/graf1.png"
                alt="Screen 1"
                style={{  width: "48%", margin: "0.5%" }}
              />
              <img
                src="/images/graf2.png"
                alt="Screen 2"
                style={{  width: "48%",margin: "0.5%" }}
              />
              <img
                src="/images/graf3.png"
                alt="Screen 2"
                style={{  width: "48%",margin: "0.5%" }}
              />
              <img
                src="/images/graf4.png"
                alt="Screen 2"
                style={{  width: "48%",margin: "0.5%" }}
              />
              <img
                src="/images/statistika.png"
                alt="Screen 2"
                style={{  width: "90%",margin: "0.5%" }}
              />

            </div>
          </div>
        </div>
        <hr className="featurette-divider mt-5" />
      </div>
    </>
  );
};

export default ContentComponent;
