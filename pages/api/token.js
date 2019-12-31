import Cookies from "cookies"
import haylun from "../../core/haylun"

/**
 */
export default async (req, res) => {
  try {
    const session = await haylun.login(req.body.email, req.body.password)
    const user = await session.getUser()
    const cookies = new Cookies(req, res)
    cookies.set("session", session.auth.access_token, {
      maxAge: session.auth.expires_in,
      sameSite: true
    })
    res.send(user)
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).send(err.response.data)
    }
    console.log(err)
    return res.status(500).send(err)
  }
}
