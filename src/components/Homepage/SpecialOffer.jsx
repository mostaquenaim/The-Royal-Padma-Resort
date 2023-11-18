import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const SpecialOffer = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        axios.get('https://the-royal-padma-server-side.vercel.app/promotions') // Replace with your actual API endpoint
            .then((res) => setOffers(res.data))
            .catch((error) => console.error('Error fetching offers:', error));
    }, []);

    const handleCallToAction = () =>{
        window.location.href='/rooms'
    }
    return (
        <div className="p-4 text-base text-primary">
            <Header name='Special Offers & Promotions'></Header>
            <div className="space-y-3">
                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className={`bg-base-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} justify-around gap-3 md:gap-6 lg:gap-10 items-center`}
                    >
                        <img
                            data-aos='fade-right'
                            src={offer.image_url}
                            alt={offer.title}
                            className="md:w-1/2 object-cover rounded-md mb-4"
                        />
                        <div
                            data-aos='fade-up'
                            data-aos-anchor-placement="top-bottom"
                        >
                            <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-2">{offer.title}</h3>
                            <p className="text-opacity-70 text-lg">{offer.description}</p>
                            <button className='btn btn-accent' onClick={handleCallToAction}>Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialOffer;
