import React from 'react';
import './Tariff.css';
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car3 from '../assets/car3.jpg';
import car4 from '../assets/car4.jpg';

const Tariff = () => {

  const CarList = [
    {
      carImage:car1,
      carType: 'Suzuki Swift',
      oneWay: 14,
      roundTrip: 13,
      rating: '★★★★★',
    },
    {
      carImage:car2,
      carType: 'ETIOS',
      oneWay: 14,
      roundTrip: 13,
      rating: '★★★★★',
    },
    {
      carImage:car3,
      carType: 'Volkswagen SUV',
      oneWay: 19,
      roundTrip: 17,
      rating: '★★★★★',
    },
    {
      carImage:car4,
      carType: 'INNOVA',
      oneWay: 19,
      roundTrip: 18,
      rating: '★★★★★',
    },
    
  ];


  return (
    <div className="tariff-container" id='Tariff'>
      <div className="tariff-header">
        <h4>Lowest Price</h4>
        <h1>Our Outstation Tariff</h1>
      </div>
      <div className="tariff-grid">
        {CarList.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.carImage} alt={car.carType} className="car-image" />
            <h4>Car Brand: {car.carType}</h4>
            <p>One Way Trip: ₹{car.oneWay}/km</p>
            <p>Round Trip: ₹{car.roundTrip}/km</p>
            <span className="car-rating">Rating: {car.rating}</span>
            <br />
            <a href='#About' className='CarBtn'>Book Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tariff;
