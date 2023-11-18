
const AboutUsPage = () => {
    return (
        <>
            <figure className='w-full relative'>
                <img src='https://i.ibb.co/Tk86kvy/banner.jpg' className='w-full max-h-screen'></img>
                <div className='inset-0 bg-primary absolute bg-opacity-60 h-full'></div>
            </figure>

            <div className="py-8 px-4 text-base-100">
                <h2 className="text-3xl font-semibold mb-6 text-center text-base-200">About Us</h2>
                <div className="max-w-2xl mx-auto">
                    <p className="mb-4">
                        Welcome to The Royal Padma Resort, where luxury meets tranquility. Established in 2007, we take pride in providing a world-class experience for our guests.
                    </p>
                    <p className="mb-4">
                        At The Royal Padma Resort, our mission is to create memorable and exceptional stays for our guests. We are dedicated to delivering unmatched hospitality and ensuring every guest leaves with a sense of joy and satisfaction.
                    </p>
                    <p className="mb-4">
                        Our values revolve around excellence, integrity, and guest-centric service. We continuously strive to exceed expectations and set new standards in the hospitality industry.
                    </p>
                    <h3 className="text-xl font-semibold mb-4">Meet Our Team</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <img src="https://i.ibb.co/CBqYk9h/5.jpg" alt="Team Member 1" className="w-32 h-32 object-cover rounded-full" />
                        <img src="https://i.ibb.co/smBT1Fg/3.jpg" alt="Team Member 2" className="w-32 h-32 object-cover rounded-full" />
                        <img src="https://i.ibb.co/kg8HqrX/395762467-1663904640762669-2203044785351541489-n.jpg" alt="Team Member 3" className="w-32 h-32 object-cover rounded-full" />
                        <img src="https://i.ibb.co/bgghWH8/395662659-1663904524096014-3466572140924993965-n.jpg" alt="Team Member 4" className="w-32 h-32 object-cover rounded-full" />
                        {/* Add more team member photos as needed */}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 mt-6">Management Team</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <img src="https://i.ibb.co/f22ckGR/bgrmvy-removebg-preview.png" alt="Management 1" className="w-32 h-32 object-cover rounded-full" />
                        <img src="https://i.ibb.co/bd2G6Q4/395733404-1663904460762687-6145296191011661099-n.jpg" alt="Management 2" className="w-32 h-32 object-cover rounded-full" />
                        <img src="https://i.ibb.co/qg5sKcN/395708906-1663904567429343-7950522434652262049-n.jpg" alt="Management 3" className="w-32 h-32 object-cover rounded-full" />
                        {/* Add more management photos as needed */}
                    </div>
                </div>
            </div>
        </>

    );
};

export default AboutUsPage;
