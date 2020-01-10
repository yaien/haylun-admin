import { useEffect, useState, Fragment } from "react"
import Link from "next/link"
import Head from "../components/head"
import Master from "../components/master"
import Dash from "../components/dash"
import { Segment, Header, Image } from "semantic-ui-react"
import { withUser } from "../core/guard"

const Home = () => {
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

export default withUser(Home)
