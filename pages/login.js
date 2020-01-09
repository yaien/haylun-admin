import axios from "axios"
import Head from "../components/head"
import Master from "../components/master"
import Center from "../components/center"
import { Card, Form, Button, Message } from "semantic-ui-react"
import { useState } from "react"
import { useRouter } from "next/router"

const Login = () => {
  const [form, setForm] = useState({})
  const [error, setError] = useState()
  const router = useRouter()

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  async function onSubmit(e) {
    e.preventDefault()
    try {
      const res = await axios.post("/api/token", form)
      router.push("/")
    } catch (err) {
      switch (err.response.data.error) {
        case "USER_NOT_FOUND":
          setError("Usuario no registrado")
          break
        case "INVALID_PASSWORD":
          setError("Contraseña incorrecta")
          break
      }
    }
  }

  return (
    <Master>
      <Head />
      <Center>
        <Card>
          <Card.Content>
            <Card.Header textAlign="center">Inicio de Sesión</Card.Header>
            <Card.Description>
              <Form onSubmit={onSubmit}>
                <Form.Field>
                  <label>Correo</label>
                  <input name="email" type="email" required onChange={onChange} />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input name="password" type="password" required onChange={onChange} />
                </Form.Field>
                <Button type="submit" fluid primary>
                  Inicia Sesión
                </Button>
                {error && <Message color="red">{error}</Message>}
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
      </Center>
    </Master>
  )
}

export default Login
