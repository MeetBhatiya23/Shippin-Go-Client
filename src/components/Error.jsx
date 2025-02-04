
import { NavLink } from "react-router-dom"
function Error() {
  return (
    <>
      <div className=" flex flex-col items-center pt-10 ">
        <div className="flex flex-col items-center">
          <div className="home-title text-[100px] text-[#eb4141] p-0">404</div>
          <div className="text-[30px] text-[#eb4141]">UH OH! You're lost.</div>
        </div>
        <div className=" text-[#4385ee]"> This page are looking for dose not exist.How you get for mystery.But you can click button below to go back to the Shoppin Go</div>
        <NavLink to="/">

          <button className="p-2 mt-4 bg-[#e75a5a] rounded-md text-white hover:bg-[#f92626]" >Go Back</button>
        </NavLink>
      </div>
    </>
  )
}

export default Error