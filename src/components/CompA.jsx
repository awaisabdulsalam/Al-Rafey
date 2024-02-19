import { useContext } from "react"
import { userContext } from "./Context.jsx"


const CompA = () => {
    const user = useContext(userContext);
  return (
    <div>CompA {user}</div>
  )
}

export default CompA