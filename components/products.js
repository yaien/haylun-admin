import { Card, Icon, Image, Menu, Button, Input, Modal, Form } from "semantic-ui-react"
import { useForm } from "../core/hooks"

export const ProductForm = ({ onSubmit, errors, error }) => {
  const form = useForm()

  return (
    <Form onSubmit={form.wrapSubmit(onSubmit)}>
      <Form.Field>
        <label>Nombre</label>
        <input name="name" required onChange={form.input("name")} />
      </Form.Field>
      <Form.Field>
        <label>Existencia</label>
        <input
          name="existence"
          type="number"
          min="0"
          required
          onChange={form.input("existence", Number)}
        />
      </Form.Field>
      <Form.Field>
        <label>Precio</label>
        <input name="price" type="number" min="0" required onChange={form.input("price", Number)} />
      </Form.Field>
      <Form.Field>
        <label>Descripción</label>
        <textarea name="description" onChange={form.input("description")} />
      </Form.Field>
      <Button type="submit" fluid primary>
        Agregar
      </Button>
      {error && <Message color="red">{error}</Message>}
    </Form>
  )
}

export const ProductActions = ({ onSearch, onAdd }) => (
  <Menu stackable>
    <Menu.Item style={{ flexGrow: 1 }}>
      <Input
        icon="search"
        placeholder="Search..."
        onChange={e => onSearch && onSearch(e.target.value)}
      />
    </Menu.Item>

    <Menu.Item>
      <Button color="blue" onClick={onAdd}>
        Agregar
      </Button>
    </Menu.Item>
  </Menu>
)

export const ProductList = ({ products }) => (
  <Card.Group centered>
    {products.map(product => (
      <ProductCard key={product._id} product={product} />
    ))}
  </Card.Group>
)

export const ProductCard = ({ product }) => (
  <Card>
    <Image src={product.image || "/product.png"} wrapped size="small" centered />
    <Card.Content>
      <Card.Header>{product.name}</Card.Header>
      <Card.Description>{product.description}</Card.Description>
      <Card.Content extra>
        <span>{product.published ? "DESPUBLICAR" : "PUBLICAR"}</span>
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
