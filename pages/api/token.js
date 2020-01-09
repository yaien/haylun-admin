import Cookies from "cookies"
import haylun from "../../core/haylun"
import handler from "../../core/handler"

/**
 */
export default handler(async (req, res) => {
  const session = await haylun.login(req.body.email, req.body.password)
  const user = await session.getUser()
  const cookies = new Cookies(req, res)
  cookies.set("session", session.auth.access_token, {
    maxAge: session.auth.expires_in,
    sameSite: true
  })
  res.end()
})
