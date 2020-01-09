import handler from "./handler"
import haylun from "./haylun"
import Cookies from "cookies"

export default callback =>
  handler(async (req, res) => {
    const cookies = new Cookies(req, res)
    const token = cookies.get("session")
    if (!token) return res.status(401).end()
    req.session = haylun.session(token)
    await callback(req, res)
  })
