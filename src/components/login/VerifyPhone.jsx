import { useEffect, useState } from "react";
import { MdVerifiedUser } from "react-icons/md";
function VerifyPhone() {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isRunning, setIsRunning] = useState(true); // To track if the timer is running or not

  useEffect(() => {
    let countdown;

    if (isRunning) {
      countdown = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(countdown);
            setIsRunning(false); // Stop timer and show reset button
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [isRunning]);

  const resetTimer = () => {
    setTimeLeft(120); // Reset to 2 minutes
    setIsRunning(true); // Start the timer again
  };

  // Calculate minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return (
    <>
      <div className="w-full background">
        <div className="ocean overflow-x-clip w-screen z-[1]">
          <div className="wave overflow-x-hidden"></div>
          <div className="wave overflow-x-hidden"></div>
        </div>

        <div className=" w-full">
          <div className="flex mx-auto flex-col w-[60%] items-center justify-center h-screen">
            <div className="border border-gray-400 p-10 boxd bg-white z-[2] ">
              <div className="w-full flex items-center justify-center gap-6">
                <img src="/src/assets/loginLogo.png" className="w-[70px] flex " alt="no found" />
                <div className="text-4xl font-bold pt-3 text-[#197185]">Verify Phone Number</div>
              </div>
              <div className="w-full my-5 border-t border-t-[#00000088] rounded-full"></div>
              <div className="flex w-full gap-10 justify-between">
                <div className="w-[40%]">
                  <div>

                    {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis laborum odit consectetur voluptatum, ducimus porro
                  harum assumenda minus aliquid quaerat ipsum aut suscipit culpa,
                  neque similique perferendis voluptatem repellendus! Ipsa! */}
                  </div>
                  <div>
                    {/* <MdVerifiedUser className="text-[100px]"/> */}
                    <img src="/src/assets/Verified2.gif" alt="" />
                  </div>
                </div>
                <div className="w-[50%]">
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your Phone Number
                    </label>
                    <input
                      type="tel"

                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      OTP
                    </label>
                    <input
                      type="number"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                  <div className="flex items-start mb-5">
                    <div>
                      <div className="flex items-center h-5 gap-5">
                        <h1>{`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</h1>

                        {!isRunning && (
                          <button className="text-[#197185]" onClick={resetTimer}>Reset</button>
                        )}

                        <div className="">

                          {timeLeft === 0 && !isRunning && <p className=" text-[12px]">Time's Up! Click Reset to Send OTP again.</p>}
                        </div>
                      </div>
                    </div>

                  </div>
                  <button
                    type="submit"
                    className="font-medium bg-blue-600 text-white py-3 px-7 rounded-full"
                  >
                    Conform
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyPhone;
