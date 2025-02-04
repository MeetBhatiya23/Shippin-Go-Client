import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function ReatingProducts({ stars }) {
    // console.log(stars);

    const StartsReating = Array.from({ length: 5 }, (elem, index) => {
        const i = index + 0.5;

        return (
            <span key={index}>

                {stars >= index + 1 ? (
                    <FaStar className="text-yellow-500" />
                ) : stars >= i ? (
                    <FaRegStarHalfStroke className="text-yellow-500" />
                ) : (
                    <FaRegStar className="text-yellow-500" />
                )}
            </span>

        )
    })

    return (
        <div className="flex gap-3 items-center">
            <div className="flex">
                {StartsReating}
            </div>
            <div>({stars} Rating)</div>
        </div>
    )
}

export default ReatingProducts