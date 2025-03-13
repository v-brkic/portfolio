import React from 'react';
import './MainComponent.css';

const MainComponent = () => {
  return (
    <>
      <div id="myCarousel" className="carousel slide mb-6 pointer-event" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item ">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="transparent"></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <p className="opacity-75">I study at "Fakultet Elektrotehnike i Računarstva" in Zagreb, capital of Croatia, which is known to be best 
                  Computer Science college in Croatia.</p>
                <p ><a className="btn btn-lg btn-primary" href="https://www.fer.unizg.hr/" target="_blank">College link</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item active carousel-item-start">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="transparent"></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption ">
                <p className="opacity-75">I am a quick learner and team work oriented friendly guy. I can probably fit in your team</p>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item-next">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="transparent"></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-end">
                <p className="opacity-75">I come from small northern town in Croatia. Croatia is known for its most beautiful Adriatic Sea 
                  and to all heavenly tourist accomodations and activities.
                <p><a className="btn btn-lg btn-primary" href="https://www.google.com/search?client=firefox-b-d&q=croatia" target="_blank">Croatia's info</a></p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default MainComponent;
