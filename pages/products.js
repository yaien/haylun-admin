import axios from "axios"
import { useState, useEffect } from "react"
import { Segment } from "semantic-ui-react"
import Head from "../components/head"
import Dash from "../components/dash"
import { ProductList } from "../components/products"
import { withUser } from "../core/guard"

const Products = () => {
  let [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <Dash>
      <Head title="Productos - Admin" />
      <Segment basic>
        <ProductList products={products} />
      </Segment>
    </Dash>
  )
}

export default withUser(Products)
