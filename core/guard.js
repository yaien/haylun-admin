import { useSession } from "../components/session"
import { useEffect, Component } from "react"
import { useRouter } from "next/router"

export const withGuest = Component => props => {
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session.user) {
      router.replace("/")
    }
  }, [session.user, router])

  if (session.user) return null

  return <Component {...props} />
}

export const withUser = Component => props => {
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!session.user) {
      router.push("/login")
    }
  }, [session.user, router])

  if (!session.user) return null

  return <Component {...props} />
}
