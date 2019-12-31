import Nav from "./nav";
import { Container } from "reactstrap";

const Master = props => {
  return (
    <div>
      <Nav />
      <Container>{props.children}</Container>
    </div>
  );
};

export default Master;
