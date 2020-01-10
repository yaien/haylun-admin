import axios from "axios"
import Master from "./master"
import { Sidebar, Segment, Menu, Icon, Input } from "semantic-ui-react"
import { useCallback } from "react"
import { useRouter } from "next/router"

const Dash = props => {
  const router = useRouter()

  const logout = async () => {
    try {
      await axios.post("/api/logout")
      router.push("/login")
    } catch (err) {
      console.error(err)
    }
  }

  const active = pathname => router.pathname === pathname

  const goto = pathname => () => router.push(pathname)

  return (
    <Master>
      <Menu>
        <Menu.Item header active={active("/")} onClick={goto("/")}>
          Admin
        </Menu.Item>
        <Menu.Item active={active("/products")} onClick={goto("/products")}>
          <Icon name="boxes" />
          Productos
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item onClick={logout}>Cerrar Sesíon</Menu.Item>
        </Menu.Menu>
      </Menu>
      {props.children}
    </Master>
  )
}

export default Dash
