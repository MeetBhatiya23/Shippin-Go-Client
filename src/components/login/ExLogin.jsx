import { NavLink } from "react-router-dom"


function ExLogin() {
    return (
        <>
            <div className="">
                <div className="flex justify-center gap-8 items-center border border-black boxd w-[70%] p-10 h-[70vh]">
                    <img src="/src/assets/Sign up.gif" className="w-[40%]" alt="" />
                    <div className="w-[40%]">
                        <div className="mt-5">
                            <form className="max-w-sm mx-auto">
                                <div>
                                    <div>
                                        <div className="w-full flex justify-center">

                                        </div>
                                        <div className="p-8">
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
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div >
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExLogin