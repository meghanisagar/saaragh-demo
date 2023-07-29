import { Button, Card } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Sagar Meghani - React Developer</Card.Title>
        <Button
          variant="outline-dark"
          onClick={() => window.open("https://dev-sagar.in", "_blank")}
        >
          Please visit my web site for Information
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ContactUs;
