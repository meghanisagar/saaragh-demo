import { Card,Nav } from "react-bootstrap";
const Product = () => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/300x100" />
        <Card.Body>
          <Card.Text>
            This is sample product page for display purpose only.
          </Card.Text>
          <Card.Footer className="text-muted">
            <Nav.Link href="/">Main Product page</Nav.Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
