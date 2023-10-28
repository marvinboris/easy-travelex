import React from 'react';
import imgGriddot from "../../assets/images/svg/Grid_dots.svg"
import caroussel7 from "../../assets/images/caroussels/caroussel7.webp";
import imgCarRental from "../../assets/images/car.png";
import imgCircleRental from "../../assets/images/svg/circleCar.svg";
import Boutons from './boutons';

function CarRental() {
    return (
      <section className="section CarRental layer_section restSection">
        <img src={imgGriddot} alt="" className="grid_dots" />
        <div className="struct">
          <div className="section_container">
            <div className="image_group_container">
              <div className="image_container">
                <img src={caroussel7} alt="" />
              </div>
  
              <img src={imgCarRental} alt="" className="car" />
  
              <img src={imgCircleRental} alt="" className="imgCircleRental" />
            </div>
  
            <div className="text_group_container">
              <h1 className="title "> Car Rental</h1>
              <div className="space"></div>
              <div className="group_title">
                <h4 className="h4">Rent cars from us !</h4>
                <p>Get a nice car for city ride</p>
                <div className="sub_bar"></div>
              </div>
  
              <p className="normal_description">
                Drive in style with our high-quality car rentals. Whether you need
                a vehicle for a road trip or a corporate event, we have a wide
                range of cars to suit your needs. Our competitive prices,
                convenient locations, and superior customer service make us the
                top choice for all your car rental needs. Book today and
                experience the freedom of the open road with us!
              </p>
  
              <div className="space_btn">
                <Boutons
                  text="Check our cars"
                  isNice={true}
                  isIcon={true}
                ></Boutons>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default CarRental;