import { Fragment } from "react"
import { Segment, Header, Image } from "semantic-ui-react"
import Head from "../components/head"
import Session from "../components/session"
import Dash from "../components/dash"

const Products = () => {
  return (
    <Fragment>
      <Head />
      <Session>
        <Dash>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
        </Dash>
      </Session>
    </Fragment>
  )
}

export default Products
