import { useContext } from "react"
import { AuthContext } from "../Contexts/Auth/Auth_cotext"


export const useAuth = () => {
    const data = useContext(AuthContext)
    return data;
}