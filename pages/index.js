import { useEffect, useState, Fragment } from "react"
import Link from "next/link"
import Head from "../components/head"
import Master from "../components/master"
import Session from "../components/session"
import Dash from "../components/dash"
import { Segment, Header, Image } from "semantic-ui-react"

const Home = () => {
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

export default Home
