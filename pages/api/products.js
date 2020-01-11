import auth from "../../core/auth"

export default auth(async (req, res) => {
  switch (req.method) {
    case "GET":
      let products = await req.session.getProducts(req.query)
      return res.send(products)
    case "POST":
      let product = await req.session.createProduct(req.body)
      return res.send(product)
    default:
      return res.status(404).end()
  }
})
