import { FacebookIcon, InstagramIcon, LinkedinIcon, LucideYoutube, TwitterIcon, Youtube } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import cell from "../assets/images/cell.jpeg"
import woman from "../assets/images/woman.mp4"
import view from "../assets/images/view.jpeg"
import download from "../assets/images/download.jpeg"
import man from "../assets/images/man.jpeg"

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center text-blue-900  mx-auto px-4 bg-blue-200">
            <nav className="w-full flex justify-between items-center p-4 bg-blue-200">
            <a href="#" className="text-2xl font-bold">Postpone</a>
                <div className="space-x-4">
                    <Link to="/writeletter" className="hover:underline">Write a Letter</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                    <Link to="/signup" className="hover:underline">Sign Up</Link>
                    <Link to="/login" className=" hover:underline">Login</Link>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-10">
                <h1 className="text-3xl text-blue-900 rounded-lg font-bold mb-6">Postpone a Letter to the Future</h1>

                <form>

                    <textarea className="w-full p-2 mb-4 text-blue-900 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        id="content"
                        rows="10"
                        placeholder="Hello,"></textarea>

<div className="flex mb-4 flex-row">
          <label className="mr-2">Deliver in</label>
          <select className="p-1 h-8 border border-blue-900 rounded-md focus:ring focus:ring-blue-500 focus:outline-none outline-blue-900">
            <option></option>
            <option>1 day</option>
            <option>2 days</option>
            <option>1 week</option>
            <option>4 weeks</option>
            <option>1 month</option>
            <option>3 months</option>
            <option>6 months</option>
            <option>1 year</option>
            <option>3 years</option>
            <option>5 years</option>
            <option>10 years</option>
          </select>

          <div className="mt-1 items-center mx-5">
            {/* <hr className="border-gray-700" /> */}
            <p className="text-center text-sm">OR</p>
            {/* <hr className="border-gray-300" /> */}
          </div>
          <div className="flex flex-row flex-1">
            <label></label>
            <input type="datetime-local"  className='rounded-md border border-blue-900 h-8 focus:ring focus:ring-blue-500 focus:outline-none outline-blue-900' placeholder=''/>
          </div>
        </div>


        <div className="flex mb-4">
          <label className="mr-2">Select your audience</label>
          <select className="p-1 border border-blue-900 rounded-md focus:ring focus:ring-blue-500 focus:outline-none outline-blue-900">
            <option></option>
            <option>Yourself</option>
            <option>Others</option>
          </select>
        </div>

                    <div className="mb-4">
                        <label htmlFor="file" className="block text-gray-700 mb-2">
                            Attach a File (Optional)
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500"

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="smsNumber" className="block text-gray-700 mb-2">
                            Send SMS Notification (Optional)
                        </label>
                        <input
                            type="tel"
                            id="smsNumber"
                            name="smsNumber"
                            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500"

                            placeholder="Enter phone number"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="Email" className="block text-blue-900 mb-2">
                            Email (Optional)
                        </label>
                        <input type="email"
                            id="email"
                            className="w-full p-2 border rounded mt-2"
                            // value={email}
                            // onChange={handleEmailChange}
                            placeholder="Please enter an email"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring   
 focus:ring-blue-500"
                    >
                        Postpone
                    </button>
                </form>

            </div>

            {/* About Section */}
            <section className="w-full bg-blue-300 p-8 text-center">

                <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
                    <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
                        <div className="w-full md:w-1/2 lg:pr-32">

                            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
                                There’s a better way to talk with people.
                            </h2>

                            <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-white font-light tracking-wider leading-relaxed">
                                Postpone allows you to send letters to your future self, and with the features of attaching a file, videos and images to the message Write about your hopes, dreams, or just how your day went. It's a great way to reflect and see how much you've grown.
                            </h3>

                        </div>

                        <div className="w-full h-[500px] md:w-1/2 flex justify-center">
                            <img src={cell} alt="Hero" />
                        </div>

                    </div>
                </div>

                {/* <h2 className="text-3xl font-bold mb-4">About Postpone</h2>
                <p className="max-w-2xl mx-auto">FutureMe allows you to send letters to your future self. Write about your hopes, dreams, or just how your day went. It's a great way to reflect and see how much you've grown.</p>
                <div class="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img src="https://loremflickr.com/g/600/600/girl"/>
                </div> */}
            </section>

            {/* Why Us Section */}
            <section className="text-blue-900 body-font bg-gray-100 w-full">

                <div className="flex justify-center mt-10 text-4xl font-regular">
                    Why Us?
                </div>

                <div className="container px-5 py-12 mx-auto">

                    <div className="flex flex-wrap text-center justify-center">

                        <div className="p-4 md:w-1/4 sm:w-1/2">

                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">

                                {/* 1st why Us */}
                                <div className="flex justify-center">
                                    <img
                                        src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                                        className="w-32 mb-3"
                                        alt="Latest Milling Machinery"
                                    />
                                </div>

                                <h2 className="title-font font-regular text-2xl ttext-blue-900 hover:text-blue-500">
                                    Latest App
                                </h2>

                            </div>

                        </div>

                        {/* 2nd why Us */}
                        <div className="p-4 md:w-1/4 sm:w-1/2">

                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">

                                <div className="flex justify-center">

                                    <img
                                        src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                                        className="w-32 mb-3 "
                                        alt="Reasonable Rates"
                                    />
                                </div>

                                <h2 className="title-font font-regular text-2xl text-blue-900 hover:text-blue-500">
                                    Free Rates
                                </h2>

                            </div>
                        </div>

                    {/* 3rd WhyUs  */}
                        <div className="p-4 md:w-1/4 sm:w-1/2">

                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">

                                <div className="flex justify-center">

                                    <img
                                        src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                                        className="w-32 mb-3" fill="text-blue-700"
                                        alt="Time Efficiency"
                                    />
                                </div>

                                <h2 className="title-font font-regular text-2xl text-blue-900 hover:text-blue-500">
                                    Time Efficiency
                                </h2>

                            </div>
                        </div>

                    {/* 4th Why Us  */}
                        <div className="p-4 md:w-1/4 sm:w-1/2">

                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">

                                <div className="flex justify-center">

                                    <img
                                        src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                                        className="w-32 mb-3"
                                        alt="Expertise in Industry"
                                    />
                                </div>

                                <h2 className="title-font font-regular text-2xl text-blue-900 hover:text-blue-500">
                                    Experts
                                </h2>

                            </div>
                        </div>

                    </div>
                </div>

            </section>

                    {/* video Section */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">

                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">

                    <video
                        className="min-w-full min-h-full absolute object-cover"
                        src={woman}
                        type="video/mp4"
                        autoPlay
                        muted
                        loop
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-1">
                    </div>
                </div>

                <div className="video-content space-y-2 z-10">
                    <h1 className="font-light text-6xl"> Postpone allows you to send letters to your future self. Write about your hopes, dreams, or just how your day went. It's a great way to reflect and see how much you've grown.</h1>

                </div>
            </section>


            {/* <section className="w-full p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Watch Our Video</h2>
                <div className="max-w-2xl mx-auto">
                    <video controls className="w-full">
                        <source src="path-to-your-video.mp4" type="video/mp4" />

                    </video>
                </div>
            </section> */}


                {/* Feature Section */}
            <section className="relative overflow-hidden bg-blue-300 w-full pt-16 pb-32 space-y-24">

                {/* First Feature */}
                <div className="relative bg-blue-300">

                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 m-10">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">Short Message Service(SMS)</h2>
                                    <p className="mt-4 text-lg text-white">
                                        This product utilizes advanced SMS algorithms to send message, enabling it to accurately process and analyze text-based inputs.
                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-blue-400 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-700 hover:bg-blue-700 hover:ring-blue-700" href="#">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="647" height="486" className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" style={{ color: 'transparent' }} src={view} alt="Feature 1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Feature */}
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path>
                                        </svg>
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">Video And Image File</h2>
                                    <p className="mt-4 text-lg text-white">
                                        The product has a built-in file upload capabilities, allowing files, images and videos to be attached to messages expressed with text.
                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-blue-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-700 hover:bg-blue-700 hover:ring-blue-700" href="#">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img alt="Inbox user interface" loading="lazy" width="647" height="486" className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" style={{ color: 'transparent' }} src={download} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Feature */}
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 m-10">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path>
                                        </svg>
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">Downloads</h2>
                                    <p className="mt-4 text-lg text-white">
                                        The product features the capabilities, enabling it to engage in natural and context-aware conversations with users across various platforms and channels.
                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-blue-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-700 hover:bg-blue-700 hover:ring-blue-700" href="#">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img alt="Customer profile user interface" loading="lazy" width="647" height="486" className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" style={{ color: 'transparent' }} src={man} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* footer Section */}
            <footer className="w-full bg-gray-100 p-4 text-center">
                {/* <p>© 2024 Postpone. All rights reserved.</p> */}

                <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0 m-10">
                    <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
                        {/* Logo and Description */}
                        <div className="md:w-[316px]">
                            <h1 className="text-blue-900 font-extrabold text-[18px]">
                                Postpone
                            </h1>
                            <p className="mt-[18px] text-[15px] font-normal text-blue/[80%]">
                                Postpone allows you to send letters to your future self. Write about your hopes, dreams, or just how your day went. It's a great way to reflect and see how much you've grown.
                            </p>

                            <div className="mt-[18px] flex gap-4">
                                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="#"><FacebookIcon />
                                    {/* <img
                                        alt="facebook icon"
                                        loading="lazy"
                                        width="36"
                                        height="36"
                                        decoding="async"
                                        style={{ color: 'transparent' }}
                                        src="https://www.englishyaari.com/img/facebook.svg"
                                    /> */}
                                </a>

                                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="#"><LinkedinIcon />
                                    {/* <img
                                        alt="linkedin icon"
                                        loading="lazy"
                                        width="36"
                                        height="36"
                                        decoding="async"
                                        style={{ color: 'transparent' }}
                                        src="https://www.englishyaari.com/img/linkdin.svg"
                                    /> */}
                                </a>

                                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="#"><InstagramIcon />
                                    {/* <img
                                        alt="instagram icon"
                                        loading="lazy"
                                        width="36"
                                        height="36"
                                        decoding="async"
                                        style={{ color: 'transparent' }}
                                        src="https://www.englishyaari.com/img/instagram1.svg"
                                    /> */}
                                </a>

                                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="#"><TwitterIcon />
                                    {/* <img
                                        alt="twitter icon"
                                        loading="lazy"
                                        width="36"
                                        height="36"
                                        decoding="async"
                                        style={{ color: 'transparent' }}
                                        src="https://www.englishyaari.com/img/twitter.svg"
                                    /> */}
                                </a>

                                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href=""><Youtube />
                                    {/* <img
                                        alt="youtube icon"
                                        loading="lazy"
                                        width="36"
                                        height="36"
                                        decoding="async"
                                        style={{ color: 'transparent' }}
                                        src=<LucideYoutube />
                                    /> */}
                                </a>

                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="md:w-[316px]">
                            <div className="mt-[23px] flex">
                                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z"
                                            fill="blue"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-[18px]">
                                    <a href="tel:+233-54865151" className="font-Inter text-[14px] font-medium text-blue-900">
                                        +233-54865151
                                    </a>
                                    <p className="font-Inter text-[12px] font-medium text-blue-900">Support Number</p>
                                </div>
                            </div>
                            <div className="mt-[23px] flex">
                                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V14.25C0.25 14.4489 0.329018 14.6397 0.46967 14.7803C0.610322 14.921 0.801088 15 1 15H19C19.1989 15 19.3897 14.921 19.5303 14.7803C19.671 14.6397 19.75 14.4489 19.75 14.25V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM18.0196 1.5L10 7.55231L1.98039 1.5H18.0196ZM1.5 13.5V1.94769L9.65461 7.62555C9.7518 7.69413 9.87403 7.73168 10 7.73168C10.126 7.73168 10.2482 7.69413 10.3454 7.62555L18.5 1.94769V13.5H1.5Z"
                                            fill="blue"
                                        />
                                    </svg>

                                </div>

                                <div className="ml-[18px]">

                                    <a href="mailto:postpone@email.com" className="font-Inter text-[14px] font-medium text-blue-900">
                                        postpone@email.com
                                    </a>
                                    <p className="font-Inter text-[12px] font-medium text-blue-900">Support Email</p>
                                </div>
                            </div>
                        </div>

                        {/* Important Links */}
                        <div className="mt-[23px]">
                            <h3 className="text-[16px] font-semibold text-blue-900">Important Links</h3>
                            <div className="mt-[18px] flex flex-wrap gap-x-[60px] gap-y-[18px]">
                                <ul>
                                    <li>
                                        <a href="#" className="text-[14px] font-normal text-blue-/[80%]">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/writeletter" className="text-[14px] font-normal text-blue/[80%]">
                                            Write a Letter
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    {/* <li>
                                        <a href="#" className="text-[14px] font-normal text-white/[80%]">
                                            Privacy Policy
                                        </a>
                                    </li> */}
                                    <li>
                                        <a href="#" className="text-[14px] font-normal text-blue/[80%]">
                                            Terms and Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="text-[14px] font-normal text-blue/[80%]">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about" className="text-[14px] font-normal text-blue/[80%]">
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[43px] border-t-[1px] border-[#F1F5FF] opacity-[0.3]" />

                <div className="mt-[19px] pb-[32px] text-center">
                    <p className="text-[14px] font-normal text-blue/[80%]">
                        Copyright © 2024 Postpone. All rights reserved.
                    </p>
                </div>

            </footer >
        </div >
    );
};

export default LandingPage;