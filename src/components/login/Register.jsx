import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useRegisterContext } from "../../context/registerUserContext"

function Register() {
    const { userAdd } = useRegisterContext()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        state: "",
        city: ""
    })
    console.log(formData);

    // const [inputdata, setinputdata] = useState("")

    const handlechange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

        userAdd(formData)
    }
    return (
        <>
            <div className="mt-5 ">
                <div className="max-w-sm mx-auto ">
                    <div>
                        <div>
                            <div className="w-full flex justify-center">
                                <div className="w-36 ">
                                    <img src="/src/assets/loginLogo.png" alt="Not Found Logo" />
                                </div>
                            </div>
                            <div className="border border-gray-400 rounded-lg p-8">
                                <div className="text-3xl mb-5">Create Account</div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handlechange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First And Last Name" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handlechange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="shopping@shopping_go.com" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
                                    <input type="password" name="password" value={formData.password} onChange={handlechange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="At least 6 characters" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium ">Address</label>
                                    <input type="text" name="address" value={formData.address} onChange={handlechange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium ">Phone</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handlechange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address" required />
                                </div>

                                <div className="flex justify-around gap-3 ">
                                    <div className="mb-5">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium ">City</label>
                                        <input type="text" name="city" value={formData.city} onChange={handlechange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="city" required />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium ">State</label>
                                        <input type="text" name="state" value={formData.state} onChange={handlechange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="state" required />
                                    </div>
                                </div>
                                <div className="flex items-start mb-5">

                                    <label htmlFor="remember" className="ms-2 text-[12px] ">To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</label>
                                </div>
                                <button type="button" onClick={() => handleSubmit()} className="w-full bg-yellow-500 text-sm p-2 rounded-full">Create Your Account</button>
                                <hr className="mt-5 text-gray-400" />
                                <div className="pt-3 text-sm">
                                    <div><b>Buying for work?</b></div>
                                    <div className="pt-2 text-[12px] text-blue-700">Create a free business account</div>
                                </div>

                                <div>
                                    <div>
                                        <div className="w-full p-4 text-[12px] text-gray-500 flex justify-center items-center">

                                        </div>
                                    </div>
                                </div><hr />

                                <div className="mt-5">
                                    <div className="text-sm rounded-lg w-full">Already have an account?
                                        <NavLink to="/login">
                                            <span className="text-blue-700"> Sign in </span>
                                        </NavLink>
                                    </div>
                                    <div className="text-sm mt-5">
                                        By creating an account or logging in, you agree to Amazon’s <span className="text-blue-700 underline">Conditions of Use</span> and <span className="text-blue-700 underline">Privacy Policy.</span>
                                    </div>
                                </div>


                            </div>

                            <div className="p-6 text-[12px]">
                                <div className="flex mt-5 justify-around ">
                                    <div>Conditions of Use </div>
                                    <div> Privacy Notice</div>
                                    <div>Help </div>
                                </div>
                                <div className="mt-5 flex justify-center">
                                    <div> © 1996-2024, ShoppingGo.com, Inc. or its affiliates</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}

export default Register


{/* <div className="mb-5">
<label htmlFor="email" className="block mb-2 text-sm font-medium">Mobile Number</label>
<input type="tel" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Number" required />
</div> */} 