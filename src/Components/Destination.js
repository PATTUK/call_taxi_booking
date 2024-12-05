import React from 'react';
import './Destination.css';
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car3 from '../assets/car3.jpg';
import car4 from '../assets/car4.jpg';

const Destination = () => {
  const DropAreas = [
    {
      image: car1,
      Cartype: 'Suzuki Swift',
      travelHours: '6hr 10mins',
      km: 366.2,
      dropLocation: 'Salem',
      description:
        'Book Chennai to Salem Cabs at lowest price ₹6958 from Chennai Call Taxi. Get the best deals for Chennai to Salem car rentals.',
      WhatsAppUrl: `
      https://api.whatsapp.com/send?phone=919566341883&text=BookanSuzukiSwiftfromChennaitoSalem.TotalDistance:366.2/km`,
    },
    {
      image: car2,
      Cartype: 'ETIOS',
      travelHours: '4hr 30mins',
      km: 290.5,
      dropLocation: 'Bangalore',
      description:
        'Enjoy a safe journey from Chennai to Bangalore with our premium cab service at affordable rates.',
      WhatsAppUrl: `https://api.whatsapp.com/send?phone=919566341883&text=BookanETIOSfromChennaitoBangalore.TotalDistance:290.5/km`,
    },
    {
      image: car3,
      Cartype: 'Volkswagen SUV',
      travelHours: '4hr 30mins',
      km: 290.5,
      dropLocation: 'Kanniyakumari',
      description:
        'Enjoy a safe journey from Chennai to Bangalore with our premium cab service at affordable rates.',
      WhatsAppUrl:'https://api.whatsapp.com/send?phone=919566341883&text=BookanVolkswagenSUVfromChennaitoKanniyakumari.TotalDistance:590.5/km`',
    },
    {
      image: car4,
      Cartype: 'INNOVA',
      travelHours: '4hr 30mins',
      km: 290.5,
      dropLocation: 'Ooty',
      description:
        'Enjoy a safe journey from Chennai to Bangalore with our premium cab service at affordable rates.',
      WhatsAppUrl: `https://api.whatsapp.com/send?phone=919566341883&text=BookanInnovafromChennaitoOoty.TotalDistance:480.5/km`,
    },
  ];

  return (
    <div className="DestinationDetails" id='Destination'>
      <div>
        <h4>The Top Places For Outstation</h4>
        <h2>Chennai Drop Taxi Routes</h2>
      </div>
      <div className="DestinationGrid">
        {DropAreas.map((dropareas, index) => (
          <div className="DropCard" key={index}>
            <img src={dropareas.image} className="imageplace" alt='image'/>
            <span>
              {dropareas.Cartype} | {dropareas.travelHours} | {dropareas.km}/km
            </span>
            <p>Chennai to {dropareas.dropLocation}</p>
            <p>{dropareas.description}</p>
            <a href="tel:9566341883"><i class="fa-solid fa-phone"></i> Call Us</a>
            <a 
            href={dropareas.WhatsAppUrl} target="_blank" rel="noopener noreferrer">
             <i class="fa-brands fa-whatsapp"></i> WhatsApp Us 
            </a>
            <a href="#About">Book Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
