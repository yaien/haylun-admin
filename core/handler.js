export default callback => async (req, res) => {
  try {
    await callback(req, res)
  } catch (err) {
    if (err.response) return res.status(err.response.status).send(err.response.data)
    console.log(err)
    return res.status(500).send({ error: err.message })
  }
}
