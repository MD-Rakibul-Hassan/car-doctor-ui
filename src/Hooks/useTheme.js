import { useContext } from "react"
import { ThemeContext } from "../Contexts/Theme/Theme_context"


export const useTheme = () => {
    const data = useContext(ThemeContext)
    return data
}