import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="bg-blue-600 min-h-screen flex flex-col items-center text-white">
            <nav className="w-full flex justify-between items-center p-4 bg-blue-800">
                <div className="text-2xl font-bold">Postpone</div>
                <div className="space-x-4">
                    <Link to="/write-letter" className="hover:underline">Write a Letter</Link>
                    <Link to="/read-public-letters" className="hover:underline">Read Public Letters</Link>
                    <Link to="/education" className="hover:underline">Education</Link>
                    <Link to="/business" className="hover:underline">Business</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                    <Link to="/signup" className="hover:underline">Sign Up</Link>
                    <Link to="/login" className="hover:underline">Login</Link>
                </div>
            </nav>
            <div className="flex flex-col items-center justify-center text-center w-full flex-1">
                <h1 className="text-4xl font-bold mb-4">Write a letter to your future self</h1>
                <form className="bg-white text-black p-6 rounded shadow-md w-full max-w-[800px] m-10">
                    <textarea className="w-full p-2 mb-4 border rounded" rows="10" placeholder="Dear FutureMe,"></textarea>
                    
                    <div className="flex mb-4">
                        <label className="mr-2">Deliver in</label>
                        <select className="p-2 border rounded">
                            <option>6 months</option>
                            <option>1 year</option>
                            <option>3 years</option>
                            <option>5 years</option>
                            <option>10 years</option>
                        </select>
                    </div>
                    <div className="flex mb-4">
                        <label className="mr-2">Select your audience</label>
                        <select className="p-2 border rounded">
                            <option>Private</option>
                            <option>Public, but anonymous</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label>Email:</label>
                        <input type="email" className="w-full p-2 border rounded mt-2" placeholder="Please enter an email" />
                    </div>
                    <div className="flex mb-4">
                        <label className="mr-2">Pick your style</label>
                        <div>
                            <label className="inline-flex items-center mr-4">
                                <input type="radio" className="form-radio" name="style" value="free" />
                                <span className="ml-2">Send just this letter</span>
                            </label>
                        
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded">Send to the Future</button>
                </form>
            </div>
            <section className="w-full bg-blue-700 p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">About Postpone</h2>
                <p className="max-w-2xl mx-auto">FutureMe allows you to send letters to your future self. Write about your hopes, dreams, or just how your day went. It's a great way to reflect and see how much you've grown.</p>
            </section>
            <section className="w-full p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Watch Our Video</h2>
                <div className="max-w-2xl mx-auto">
                    <video controls className="w-full">
                        <source src="path-to-your-video.mp4" type="video/mp4" />
                        
                    </video>
                </div>
            </section>
            <footer className="w-full bg-blue-800 p-4 text-center">
                <p>© 2024 Postpone. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;