import React, { useState } from 'react';
import { useProductContext } from '../context/productContext';
import { useFilterContext } from '../context/filter_context';
import ReatingProducts from './ReatingProducts';
import FormetPrice from '../helpers/FormetPrice';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

function SuggetionProduct() {
    const { getSingleProduct, isSingleLoding, singleProducts } = useProductContext();
    const { productType } = singleProducts;
    const { filter_products } = useFilterContext();

    // Filtered products based on productType
    const suggetionProduct = filter_products.filter((data) => data.productType === productType);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    // Calculate the start and end indexes for slicing
    const startIndex = currentPage * itemsPerPage;
    const currentProducts = suggetionProduct.slice(startIndex, startIndex + itemsPerPage);

    // Navigation functions
    const handleNext = () => {
        if (startIndex + itemsPerPage < suggetionProduct.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Button styles
    const buttonClass = 'border border-gray-400 p-2 rounded-lg text-lg';
    const enabledClass = 'text-gray-700 hover:bg-gray-200';
    const disabledClass = 'text-gray-400 bg-gray-100 cursor-not-allowed';

    return (
        <div className='flex px-4 items-center'>
            {/* Previous Button */}
            <div className='flex items-center'>
                <button
                    className={`${buttonClass} ${currentPage === 0 ? disabledClass : enabledClass}`}
                    onClick={handlePrevious}
                    disabled={currentPage === 0}
                >
                    <LuArrowLeft />
                </button>
            </div>

            <div className='grid grid-cols-5'>
            {/* Product Cards */}
            {currentProducts.map((data, index) => (
                <>
                    <NavLink to={`/SingleProduct/${data._id}`}>
                        <div key={index} className=' px-3 py-10 cursor-pointer'>
                            <div className='flex justify-center'>
                                <img className='w-40' src={data.images[Object.keys(data.images)[0]]} alt="" />
                            </div>
                            <div className='text-sm text-[#2e93a5] hover:text-[#ff6405] hover:underline font-semibold'>
                                {data.title.substring(0, 150)} ...
                            </div>
                            <div className='text-sm'>
                                <ReatingProducts stars={data.stars} />
                            </div>
                            <div className='text-gray-700 font-normal flex gap-2'>
                                <div className='text-2xl'>
                                    <FormetPrice price={data.price * (100 - data.offers) / 100} />
                                </div>
                                <div className='text-red-500 text-xs flex items-end'>
                                    (-{data.offers}% Off)
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </>
            ))}
            </div>

            {/* Next Button */}
            <div className='flex items-center'>
                <button
                    className={`${buttonClass} ${startIndex + itemsPerPage >= suggetionProduct.length ? disabledClass : enabledClass}`}
                    onClick={handleNext}
                    disabled={startIndex + itemsPerPage >= suggetionProduct.length}
                >
                    <LuArrowRight />
                </button>
            </div>
        </div>
    );
}

export default SuggetionProduct;
