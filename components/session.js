import { createContext, useState, useContext, useEffect } from "react"
import { Loader } from "semantic-ui-react"
import Center from "./center"
import axios from "axios"
import { useRouter } from "next/router"

export const SessionContext = createContext(null)

export const Session = props => {
  const router = useRouter()
  const [user, setUser] = useState()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    axios
      .get("/api/user")
      .then(res => {
        setUser(res.data)
        setReady(true)
      })
      .catch(err => {
        setUser(null)
        router.push("/login")
      })
  }, [])

  if (!ready) {
    return (
      <Center>
        <Loader size="massive" indeterminate active />
      </Center>
    )
  }

  if (!user) {
  }

  return <>{props.children}</>
}

export const useSession = () => useContext(SessionContext)

export default Session
