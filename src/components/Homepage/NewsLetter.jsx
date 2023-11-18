import { useState } from 'react';
import toast from 'react-hot-toast';

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubscribe = (event) => {
        event.preventDefault();

        // Regular expression to validate email
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (!email.match(emailRegex)) {
            toast.error('Please enter a valid email address', {
                duration: 5000,
                style: { 
                    background: 'red',
                    color: 'white',
                },
            });
            return;
        }

        setEmail('');
        setTimeout(() => {
            toast('Thank you for subscribing! Stay tuned for updates, deals, and exclusive offers.', {
                duration: 5000,
                style: {
                    background: 'green',
                    color: 'white',
                },
            });
        }, 1000);
    };

    return (
        <div className="w-full md:px-10 mt-20">
            <div className="bg-base-200 p-4 md:p-8 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8 text-center text-primary">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-center text-primary text-opacity-70 mb-6">
                    Stay in the loop with our newsletter! Get updates, exclusive deals, and offers delivered straight to your inbox.
                </p>
                <div className="join text-center flex flex-col md:flex-row w-full justify-center">
                    <input
                        className="input input-bordered join-item text-primary w-full md:w-60"
                        placeholder="Your Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button className="btn join-item mt-2 md:mt-0 rounded-r-full bg-primary text-base-200 hover:bg-secondary hover:scale-105"
                        onClick={handleSubscribe}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
