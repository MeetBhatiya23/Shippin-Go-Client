import { useState } from 'react';
import categories from '../constant/category.json';

function Fashion() {
    const { fashion } = categories;
    const [toggle, setToggle] = useState({}); // Toggle state for categories
    const [isFashionVisible, setIsFashionVisible] = useState(false); // Toggle state for the main fashion header

    const handleFashionToggle = () => {
        setIsFashionVisible(!isFashionVisible); // Toggle visibility for all categories
        setToggle({}); // Reset individual category toggles
    };

    const handleToggle = (categori) => {
        setToggle(prevToggle => ({
            ...prevToggle,
            [categori]: !prevToggle[categori] // Toggle the specific category
        }));
    };

    const handleSubToggle = (categori, itemType) => {
        setToggle(prevToggle => ({
            ...prevToggle,
            [categori]: {
                ...prevToggle[categori],
                [itemType]: !prevToggle[categori]?.[itemType] // Toggle the specific itemType
            }
        }));
    };

    return (
        <>
            <div className='pl-2'>
                <h1 className='text-lg' onClick={handleFashionToggle}>
                    Fashion
                </h1>
                {isFashionVisible && ( // Check if the main Fashion section is visible
                    Object.entries(fashion).map(([categori, items]) => (
                        <div key={categori} className='pl-2'>
                            <h2 className='text-[17px]' onClick={() => handleToggle(categori)}>
                                {categori.charAt(0).toUpperCase() + categori.slice(1).toLowerCase()}
                            </h2>
                            {toggle[categori] && ( // Check the toggle state for this category
                                <div>
                                    {Object.entries(items).map(([itemType, itemList]) => (
                                        <div key={itemType} className='pl-2'>
                                            <h3 className='text-sm' onClick={() => handleSubToggle(categori, itemType)}>
                                                {itemType.charAt(0).toUpperCase() + itemType.slice(1).toLowerCase()}
                                            </h3>
                                            {toggle[categori]?.[itemType] && ( // Check the toggle state for this itemType
                                                <ul className='pl-2'>
                                                    {itemList.map((item, index) => (
                                                        <li className='text-[10px]' key={`${index}`}>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default Fashion;
