import { Fragment } from "react"
import { Segment, Header, Image } from "semantic-ui-react"
import Head from "../components/head"
import Dash from "../components/dash"

const Products = () => {
  return (
    <Fragment>
      <Head />
      <Dash>
        <Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </Dash>
    </Fragment>
  )
}

export default Products
