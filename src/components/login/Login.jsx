import { NavLink } from "react-router-dom"

function Login() {
    return (
        <>
            <div className="mt-5">
                <form className="max-w-sm mx-auto">
                    <div>
                        <div>
                            <div className="w-full flex justify-center">
                                <div className="w-36 ">
                                    <img src="/src/assets/loginLogo.png" alt="Not Found Logo" />
                                </div>
                            </div>
                            <div className="border border-gray-400 rounded-lg p-8">
                                <div className="text-4xl mb-5">Sign in</div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email or mobile phone number</label>
                                    <input type="email" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                                    <input type="password" id="password" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Password" required />
                                </div>
                                <div className="flex items-start mb-5">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-blue-300  dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-sm font-medium">Remember me</label>
                                </div>
                                <button type="submit" className="w-full bg-yellow-500 p-2 rounded-full">Submit</button>
                                <hr className="mt-5 text-gray-400" />
                                <div className="pt-3 text-sm">
                                    <div><b>Buying for work?</b></div>
                                    <div className="pt-2">Shop on Shopping Go Business</div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="w-full p-4 text-[12px] text-gray-500 flex justify-center items-center">
                                        ---------------------------- New To Shopping GO ? ----------------------------
                                    </div>
                                </div>
                            </div>
                            <NavLink to="/register">
                                <div className="">
                                    <button className="border border-gray-400 text-sm rounded-lg p-2 w-full ">Create Your Shopping Go Account </button>
                                </div>
                            </NavLink>
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
                </form>
            </div >


        </>
    )
}

export default Login
