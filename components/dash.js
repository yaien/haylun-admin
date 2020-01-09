import Master from "./master"
import { Sidebar, Segment, Menu, Icon } from "semantic-ui-react"

const Dash = props => {
  return (
    <Master>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="uncover"
          icon="labeled"
          inverted
          vertical
          visible
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Inicio
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="boxes" />
            Productos
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>{props.children}</Sidebar.Pusher>
      </Sidebar.Pushable>
    </Master>
  )
}

export default Dash
