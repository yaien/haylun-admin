import Head from "../components/head"
import Dash from "../components/dash"
import { Segment, Header, Image } from "semantic-ui-react"
import { withUser } from "../core/guard"

const Home = () => {
  return (
    <Dash>
      <Head title="Dashboard | Admin" />
      <Segment basic>
        <Header as="h3">Application Content</Header>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Segment>
    </Dash>
  )
}

export default withUser(Home)
