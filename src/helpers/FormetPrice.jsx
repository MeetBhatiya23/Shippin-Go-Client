// import { number } from "prop-types"


const FormetPrice=({price})=> {
  // console.log(offers,"900000000000000000");

  
  // if(!price) {
  //   return 0
  // }

  // if(typeof price == "number") {
  //   return (
  //     new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumSignificantDigits:3}).format(price)
  //   )
  // }


  
    return (
      new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumSignificantDigits:3}).format(price)
      
    )
  

}

export default FormetPrice