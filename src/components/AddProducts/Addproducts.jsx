import axios from "axios";
import { useState } from "react";
import { FaImages } from "react-icons/fa";

function Addproducts() {
    const [addTodos, setAddTodos] = useState([]);
    const [input, setInput] = useState("");
    const [isEditing, setIsEditing] = useState(null);
    const [editInput, setEditInput] = useState("");
    const [currentColour, setCurrentColour] = useState("");
    const [colourlist, setColourList] = useState({});
    const [toggle, setToggle] = useState(false);
    const [imageList, setImageList] = useState([""]);
    const [setscroller, setSetscroller] = useState(false);
    const [products, setProducts] = useState([]);
    const [disInput, setDisInput] = useState("")
    const [Discription, setDiscription] = useState([])
    const [newProduct, setNewProduct] = useState({
        title: "",
        modelName: "",
        company: "",
        price: 0,
        description: [],
        category: "Choose Your Categories",
        feature: false,
        shipping: false,
        stars: 0,
        stock: 0,
        review: 0,
        colours: [],
        images: {},
        offers: 0,
        productType: "",
    });

    // POST - Add to Product Data for API
    console.log(Discription);

    const AddData = async () => {
        const res = await axios.post("http://localhost:3000/api/products", { ...newProduct, description: Discription, colours: addTodos, images: colourlist });
        setProducts([...products, res.data]);
        setNewProduct({
            title: "",
            modelName: "",
            company: "",
            price: 0,
            description: "",
            category: "",
            feature: false,
            shipping: false,
            stars: 0,
            stock: 0,
            review: 0,
            colours: [],
            images: {},
            offers: 0,
            productType: "",
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewProduct((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // Stored Data for variadle
    const openModel = () => {
        setSetscroller(true);
        document.body.classList.add("no-scroll");
    };

    const CloseModal = () => {
        setSetscroller(false);
        document.body.classList.remove("no-scroll");
    };

    const addColours = () => {
        if (input.trim()) {
            setAddTodos([...addTodos, input]);
            setInput(" ");
        }
    };
    // console.log(colourlist);

    const handleImageChange = (index, value) => {
        const updatedImageList = imageList.map((img, imgIndex) => {
            return imgIndex === index ? value : img;
        });
        setImageList(updatedImageList);
    };
    const deleteTodo = (clickindex) => {
        setAddTodos(addTodos.filter((_, index) => index !== clickindex));
    };

    const startEdit = (clickindex) => {
        setIsEditing(clickindex);
        setEditInput(addTodos[clickindex]);
    };

    const saveEdit = (index) => {
        const updateTodo = addTodos.map((todo, i) =>
            i === index ? editInput : todo
        );
        setAddTodos(updateTodo);
        setIsEditing(null);
    };

    const addImages = () => {
        setColourList({ ...colourlist, [currentColour]: imageList });
        let size = imageList.length;
        let emptyArr = new Array(size).fill("");
        setImageList(emptyArr);
    };

    const addDiscription = () => {
        if (disInput?.trim) {
            setDiscription([...Discription, disInput])
            setDisInput("")
        }
    }
    // console.log(addTodos);

    return (
        <div>
            <div>Add Products</div>
            <form className="flex justify-center items-center pt-20">
                <div className="w-[1000px]">
                    <div className="mb-5">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Your Products Title
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your Title..."
                            name="title"
                            value={newProduct.title}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="text"
                            className="block text-black mb-2 text-sm font-medium "
                        >
                            Modal Name
                        </label>
                        <input
                            type="text"
                            id="text"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            name="modelName"
                            value={newProduct.modelName}
                            onChange={handleInputChange}
                            placeholder="Please Enter Your Products Modal Name"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="text"
                            className="block mb-2 text-black text-sm font-medium "
                        >
                            Company
                        </label>
                        <input
                            type="text"
                            id="repeat-text"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                            placeholder="Please Enters Your Products Company Name"
                            name="company"
                            value={newProduct.company}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="tel"
                            className="block text-black mb-2 text-sm font-medium "
                        >
                            Price
                        </label>
                        <input
                            type="tel"
                            id="text"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Please Enter Your Products Price"
                            required
                            name="price"
                            value={newProduct.price}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Your Products Discription
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Please Enter Your Products Discription..."
                            name="description"
                            value={disInput}
                            onChange={(e) => setDisInput(e.target.value)}
                        ></textarea>
                         <div className="text-xs text-gray-600">
                           * Notes : please one discription topic type in input and then click add discription button and then secound discription type
                        </div>
                        <div className="mt-5">
                            <button type="button" onClick={() => addDiscription()} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Dis...</button>
                        </div>
                       
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="text"
                            className="block mb-2 text-black text-sm font-medium "
                            name="categories"
                        >
                            Categories
                        </label>
                        {/* <input
              type="text"
              id="repeat-text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              placeholder="Please Enter Your Products Categories"
            /> */}
                        <select id="countries" name="categories" onClick={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a Categories</option>
                            <option value={newProduct.category}>Electronics</option>
                            <option value={newProduct.category}>Home & Kitchen</option>
                            <option value={newProduct.category}>Fashion</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="text"
                            className="block mb-2 text-black text-sm font-medium "
                        >
                            Stars
                        </label>
                        <input
                            type="number"
                            id="repeat-text"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                            placeholder="Please Enter Your Products Stars Rating"
                            name="stars"
                            value={newProduct.stars}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="text"
                            className="block text-black mb-2 text-sm font-medium "
                        >
                            Stock
                        </label>
                        <input
                            type="number"
                            id="text"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Please Enter Your Products Available Stocks"
                            name="stock"
                            value={newProduct.stock}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-5 ">
                        <label
                            htmlFor="text"
                            className="block text-black mb-2 text-sm font-medium "
                        >
                            Colours
                        </label>
                        <div className="flex gap-2 ">
                            <div className="w-full">
                                <input
                                    type="text"
                                    id="text"
                                    className="shadow-sm w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Please Enter Your Products Colour Available"
                                    name="colour"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                    onClick={() => addColours()}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                        <div>
                            <ul>
                                {addTodos.map((todo, index) => {
                                    return (
                                        <>
                                            <div className="flex gap-3 p-1">
                                                {isEditing === index ? (
                                                    <>
                                                        <li className="text-black w-full" key={index}>
                                                            <input
                                                                type="text"
                                                                className="w-full bg-gray-300 p-2 rounded-lg text-black "
                                                                placeholder={todo}
                                                                name="edit"
                                                                value={editInput}
                                                                onChange={(e) => setEditInput(e.target.value)}
                                                            />
                                                        </li>
                                                        <button
                                                            className="bg-green-400 p-2 rounded-2xl px-10"
                                                            onClick={() => saveEdit(index)}
                                                        >
                                                            Save
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <input
                                                            type="text"
                                                            className="cursor-not-allowed w-full bg-gray-300 p-2 rounded-lg text-black "
                                                            placeholder={todo}
                                                            name="edit"
                                                            disabled
                                                        />
                                                        <button
                                                            className="bg-green-400 p-2 rounded-2xl px-10"
                                                            onClick={() => startEdit(index)}
                                                        >
                                                            Edit
                                                        </button>
                                                    </>
                                                )}

                                                <button
                                                    className="bg-red-400 rounded-2xl w-40 p-0"
                                                    onClick={() => deleteTodo(index)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="text"
                            className="block mb-2 text-black text-sm font-medium "
                        >
                            Offers
                        </label>
                        <input
                            type="number"
                            id="repeat-text"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Please Enter Your Products Offers Available"
                            min="1"
                            max="9"
                            name="offers"
                            value={newProduct.offers}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="text"
                            className="block text-black mb-2 text-sm font-medium "
                        >
                            Products Type
                        </label>
                        <input
                            type="text"
                            id="text"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Please Enter Your Products Types..."
                            required
                            name="productType"
                            value={newProduct.productType}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="text"
                            className="block text-black mb-2 text-sm font-medium "
                        >
                            Images - ( First Type Images Colour and then Upload Images Links
                            Particular Colours )
                        </label>
                        {/* <div className="flex gap-2 ">

                            <div className="w-full">
                                <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                            </div>
                            <div>
                                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add</button>
                            </div>
                        </div> */}
                        <ul>
                            {addTodos.map((todo, index) => {
                                console.log(currentColour);

                                return (
                                    <>
                                        <div className="flex gap-3 p-1">
                                            <li className="text-black w-full " key={index}>
                                                <input
                                                    type="text"
                                                    disabled
                                                    className="cursor-not-allowed w-full bg-gray-300 p-2 rounded-lg text-black"
                                                    placeholder={todo}
                                                />
                                            </li>
                                            <button
                                                className="bg-green-400 rounded-2xl w-40 p-0"
                                                onClick={() => {
                                                    setCurrentColour(todo);
                                                    setToggle(true);
                                                    openModel();
                                                }}
                                            >
                                                Add Images
                                            </button>
                                        </div>
                                    </>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required
                            />
                        </div>
                        <label
                            htmlFor="terms"
                            className="ms-2 text-black text-sm font-medium "
                        >
                            I agree with the{" "}
                            <a
                                href="#"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                terms and conditions
                            </a>
                        </label>
                    </div>
                    <button
                        type="submit"
                        onClick={() => AddData()}
                        className="bg-blue-700 p-2 rounded-full px-4 text-white hover:bg-blue-500 "
                    >
                        Add Your Products
                    </button>
                </div>
            </form>

            {/*--------------------------------------------- modal for images ---------------------------------------------*/}
            {toggle && (
                <>
                    {setscroller && (
                        <div
                            id="crud-modal"
                            tabIndex="-1"
                            className="flex h-screen bg-[#a3a3a37a] fixed top-0 right-0 left-0 z-100 justify-center items-center w-full md:inset-0  max-h-full"
                        >
                            <div className="relative p-4 w-full max-w-md max-h-full">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Please Enter your Choice to last Images
                                        </h3>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setToggle(false);
                                                CloseModal();
                                            }}
                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            data-modal-toggle="crud-modal"
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 14"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                ></path>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-4 md:p-5 overflow-y-auto max-h-[64vh] scroll-hide">
                                        {imageList?.map((ff, i) => (
                                            <div key={i} className="grid gap-4 mb-4 grid-cols-2 ">
                                                <div className="col-span-2" key={i}>
                                                    <label
                                                        htmlFor={`image-${i}`}
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Images Link
                                                    </label>
                                                    <input
                                                        value={ff}
                                                        onChange={(e) =>
                                                            handleImageChange(i, e.target.value)
                                                        }
                                                        type="text"
                                                        name={`image-${i}`}
                                                        id={`image-${i}`}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                        placeholder="Type product Images Link"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="flex justify-around">
                                            <button
                                                onClick={() => setImageList([...imageList, ""])}
                                                type="botton"
                                                className="text-white mr-3 inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                <svg
                                                    className="me-1 -ms-1 w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                Add Images Tage
                                            </button>
                                            <div className="flex justify-center items-center">
                                                <button
                                                    type="submit"
                                                    onClick={() => addImages()}
                                                    className="text-white  inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                    <FaImages className="mr-3" /> Upload Images
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Addproducts;
