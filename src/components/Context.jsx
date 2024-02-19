import { createContext } from "react"
import CompA from "./CompA"

export const userContext = createContext()

const Context = () => {
  return (
    <>
    <userContext.Provider value={"Code..."}>
        <CompA />
    </userContext.Provider>
    </>
  )
}

export default Context