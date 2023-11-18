import React, { useContext, useState } from 'react';
import { AuthContext } from "../../contexts/Auth/AuthProvider";
import toast from 'react-hot-toast';

const ContactUsPage = () => {
    const { user } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        name: user ? user.displayName : '',
        email: user ? user.email : '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });

        toast('Thank you for contacting us!', {
            duration: 5000,
            style: {
                background: 'green',
                color: 'white',
            },
        });
    };

    return (
        <>
            <figure className='w-full relative'>
                <img src='https://i.ibb.co/MR1V3hM/lounge.jpg' className='w-full max-h-screen'></img>
                <div className='inset-0 bg-primary absolute bg-opacity-60 h-full'></div>
            </figure>
            <div className="py-8 px-4 text-base-100">
                <h2 className="text-3xl font-semibold mb-6 text-center text-base-200">Contact Us</h2>
                <div className="max-w-2xl mx-auto">
                    <p className="mb-4">
                        Have questions or need assistance? We're here to help! Reach out to us through the following contact options:
                    </p>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Contact Form</h3>
                        <div className="flex items-center justify-center p-12">
                            <div className="mx-auto w-full max-w-[550px]">
                                <form>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="name"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="email"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="example@domain.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="subject"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            placeholder="Enter your subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            required
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="message"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            rows="4"
                                            name="message"
                                            id="message"
                                            placeholder="Type your message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            required
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Phone Numbers</h3>
                        <p className="mb-2">Customer Support: 01758550331</p>
                        <p>Reservations: 01987654321</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Email Addresses</h3>
                        <p className="mb-2">General Inquiries: info@theroyalpadmaresort.com</p>
                        <p>Customer Support: support@theroyalpadmaresort.com</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Physical Address</h3>
                        <p>The Royal Padma Resort</p>
                        <p>Sreemongol, Bangladesh</p>
                    </div>
                    <p className="mb-4">
                        We value your feedback and look forward to assisting you with any inquiries. Your satisfaction is our priority!
                    </p>
                </div>
            </div>
        </>

    );
};

export default ContactUsPage;
