import handler from "../../core/handler"
import Cookies from "cookies"

export default handler(async (req, res) => {
  const cookies = new Cookies(req, res)
  cookies.set("session")
  res.end()
})
