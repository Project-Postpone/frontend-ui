import React from 'react'
import laptop from "../assets/images/laptop.jpg"

const CreateAccount = () => {
    return (
        <div
            className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12"
            style={{ backgroundImage: `url(${laptop})` }}
        >
            <div className="container mx-auto py-8">
                <h2 className="font-lato text-3xl text-center font-extrabold text-white">
                    Create Account
                </h2>
                <form className="mt-6">
                    <div className="grid grid-cols-8 gap-4">
                        <div className="col-start-2 col-end-5">
                            <div className="mb-4">
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name*"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="lname"
                                    type="text"
                                    placeholder="Last Name*"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email*"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="phone"
                                    type="number"
                                    placeholder="Phone Number*"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="job"
                                    type="text"
                                    placeholder="Gender"
                                />
                            </div>
                        
                        </div>

                        <div className="col-start-5 col-end-8">
                            
                            <div className="mb-4">
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="address1"
                                    type="text"
                                    placeholder="Address"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="address2"
                                    type="text"
                                    placeholder="Address 2"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="city"
                                    type="text"
                                    placeholder="City"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="region"
                                    type="text"
                                    placeholder="State / Region"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    className="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                                    id="pin"
                                    type="number"
                                    placeholder="GPS-Address"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-8">
                        <div className="col-start-2 col-end-8">
                            <button
                                className="font-lato bg-sky-700 border border-primary text-white text-h4 py-3 px-3.5 rounded-lg w-full lg:mt-8 mt-4"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount