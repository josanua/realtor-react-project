import {useState} from "react";

export default function Profile() {
    const [formData, setFormData] = useState({
        name: "Sahand",
        email: "<EMAIL>"
    })
    const {name, email} = formData;

    return (
        <>
            <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
                <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 mt-6 px-3">
                    <form className="mt-6">
                        {/* user */}
                        <input type="text" id="name" value={name} placeholder="Name" className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" disabled/>
                        {/* email */}
                        <input type="email" id="name" value={email} placeholder="E-mail" className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" disabled/>

                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className="flex items-center">
                                Do you want to change your name?
                                <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">Edit</span>
                            </p>
                            <p className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer">Sign out</p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}