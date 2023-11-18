
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";
import ShowImage from './ShowImage';
import Header from '../Header/Header';

const TabTesting = () => {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [colorOne, setColorOne] = useState(true)
    const [colorTwo, setColorTwo] = useState(false)

    useEffect(() => {
        axios.get('https://the-royal-padma-server-side.vercel.app/room-imageries')
            .then(res => {
                setImages(res.data);
                axios.get('https://the-royal-padma-server-side.vercel.app/amenities-imageries')
                    .then(res => {
                        setAmenities(res.data);
                        setLoading(false); // Set loading to false when the data is loaded
                    })
                    .catch(error => {
                        console.error('Error fetching images:', error);
                        setLoading(false); // Set loading to false in case of an error
                    });
            })
            .catch(error => {
                console.error('Error fetching images:', error);
                setLoading(false); // Set loading to false in case of an error
            });


    }, []);

    const handleColorChangeOne = () =>{
        setColorOne(true)
        setColorTwo(false)
    }

    const handleColorChangeTwo = () =>{
        setColorOne(false)
        setColorTwo(true)
    }
    return (
        <>
            <div className='flex justify-center items-center text-center mx-10 py-16'>
                <Tabs style={{ height: '100%', width: '100%' }}>
                    <TabList>
                        <Tab onClick={handleColorChangeOne}>
                            <Header color={colorOne} name='Rooms'></Header>
                        </Tab>
                        <Tab onClick={handleColorChangeTwo}>
                            <Header color={colorTwo} name='Amenities'></Header>
                        </Tab>
                    </TabList>
                    {
                        loading ? (
                            <span className="loading loading-spinner loading-lg"></span>
                        ) : (
                            <>
                                <TabPanel>
                                    <div className='grid grid-cols-1 w-full gap-5'>
                                        {images.map((room, index) => (
                                            <div key={index}>
                                                <ShowImage image={room}></ShowImage>
                                            </div>
                                        ))}
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='grid grid-cols-1 w-full gap-5'>
                                        {amenities.map((amenity, index) => (
                                            <div key={index}>
                                                <ShowImage image={amenity}></ShowImage>
                                            </div>
                                        ))}
                                    </div>
                                </TabPanel>
                            </>
                        )
                    }
                </Tabs>
            </div>
        </>
    );
};

export default TabTesting;