import { createContext, useState, useContext, useEffect, useCallback } from "react"
import { Loader } from "semantic-ui-react"
import Center from "./center"
import axios from "axios"
import { useRouter } from "next/router"
import Loading from "./loading"

export const SessionContext = createContext(null)

export const Session = props => {
  const [user, setUser] = useState()
  const [ready, setReady] = useState(false)

  const logout = useCallback(async () => {
    await axios.post("/api/logout")
    setUser(null)
  }, [])

  const login = useCallback(async credentials => {
    let res = await axios.post("/api/login", credentials)
    setUser(res.data)
  }, [])

  useEffect(() => {
    axios
      .get("/api/user")
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setReady(true))
  }, [])

  if (!ready) {
    return <Loading />
  }

  const value = { user, ready, logout, login }

  return <SessionContext.Provider value={value}>{props.children}</SessionContext.Provider>
}

export const useSession = () => useContext(SessionContext)

export default Session
