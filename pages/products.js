import axios from "axios"
import { useState, useEffect } from "react"
import { Segment, Modal } from "semantic-ui-react"
import Head from "../components/head"
import Dash from "../components/dash"
import { ProductList, ProductActions, ProductForm } from "../components/products"
import { withUser } from "../core/guard"

const Products = () => {
  let [products, setProducts] = useState([])
  let [openForm, setOpenForm] = useState(false)
  let [errors, setErrors] = useState()

  const fetch = async search => {
    try {
      let res = await axios.get("/api/products", { params: { search } })
      setProducts(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const onSubmit = async product => {
    try {
      let res = await axios.post("/api/products", product)
      setProducts([res.data, ...products])
      setOpenForm(false)
    } catch (error) {
      setErrors(error.response.data)
    }
  }

  const onSearch = search => fetch(search)

  useEffect(() => {
    fetch()
  }, [])

  return (
    <Dash>
      <Head title="Productos - Admin" />
      <Segment basic>
        <ProductActions onSearch={onSearch} onAdd={() => setOpenForm(true)} />
        <ProductList products={products} />
        <Modal open={openForm} onClose={() => setOpenForm(false)}>
          <Modal.Header>Agregar Producto</Modal.Header>
          <Modal.Content>
            <ProductForm onSubmit={onSubmit} errors={errors} />
          </Modal.Content>
        </Modal>
      </Segment>
    </Dash>
  )
}

export default withUser(Products)
