import axios from "axios";
import { createContext, useContext, useState } from "react";
// import { useNavigate } from 'react-router-dom';

const registerContext = createContext();

const AppRegisterProvider = ({ children }) => {
    // const navigate = useNavigate();

    const [usersData, setUsersData] = useState([])

    const userAdd = async (user) => {

        try {
            const res = await axios.post("https://shopping-go-backend-peach.vercel.app/api/users", user)
            setUsersData([...usersData, res.data])
            // navigate('/verifyphone');
        } catch (error) {
            console.error(error);
        }
    }


    return <registerContext.Provider value={{ usersData, userAdd }}> {children}</registerContext.Provider>
}
export const useRegisterContext = () => {
    return useContext(registerContext)
}
export default AppRegisterProvider;