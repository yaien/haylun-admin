import axios from "axios";
import Head from "../components/head";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Form,
  Input,
  Button,
  FormGroup,
  Label
} from "reactstrap";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({});

  function onChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function onSubmit(e) {
    e.preventDefault();
    const res = await axios.post("/api/token", data);
    console.log(res.data);
  }

  return (
    <Container>
      <Head title="Inicio de Sesíon" />
      <div className="mt-5">
        <div className="row">
          <div className="col col-md-6 offset-md-3 col-sm-12">
            <Card>
              <CardHeader>Inicio de Sesión</CardHeader>
              <CardBody>
                <Form onSubmit={onSubmit}>
                  <FormGroup>
                    <Label>Correo</Label>
                    <Input
                      type="email"
                      name="email"
                      required
                      onChange={onChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Contraseña</Label>
                    <Input
                      type="password"
                      name="password"
                      required
                      onChange={onChange}
                    />
                  </FormGroup>
                  <Button type="submit" block color="primary">
                    Inicia Sesión
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
