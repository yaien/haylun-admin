import Cookies from "cookies"
import auth from "../../core/auth"

export default auth(async (req, res) => {
  const user = await req.session.getUser()
  res.send(user)
})
