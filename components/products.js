import { Card, Icon, Image } from "semantic-ui-react"

export const ProductList = ({ products }) => (
  <Card.Group centered>
    {products.map(product => (
      <ProductCart key={product._id} product={product} />
    ))}
  </Card.Group>
)

export const ProductCart = ({ product }) => (
  <Card>
    <Image src={product.image || "/product.png"} wrapped size="small" centered />
    <Card.Content>
      <Card.Header>{product.name}</Card.Header>
      <Card.Description>{product.description}</Card.Description>
      <Card.Content extra>
        <a>
          <Icon name="boxes"></Icon>
          {product.existence}
        </a>
        <a>
          <Icon name="dollar sign"></Icon>
          {product.price.toLocaleString()}
        </a>
      </Card.Content>
    </Card.Content>
  </Card>
)
