import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Card, Button, Nav, Spinner, Alert } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";

const ProductSlider = () => {
  // API url
  const url = "https://run.mocky.io/v3/67d7ab84-df42-482c-b1c0-ad626c5afbc3";
  let [products, setProducts] = useState([]);
  let [errorDetails, setErrorDetails] = useState(null);
  let [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchProductData(url);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const fetchProductData = (api_url) => {
    fetch(api_url)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error Occurred!");
        }
        return response.json();
      })
      .then(
        (data) => {
          setErrorDetails("");
          setLoader(false);
          setProducts(data);
        },
        (error) => {
          setErrorDetails(error.message);
          setLoader(false);
          setProducts([]);
        }
      );
  };

  return (
    <>
      {loader && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {errorDetails && (
        <Alert
          variant="danger"
          onClose={() => fetchProductData(url)}
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{errorDetails}</p>
        </Alert>
      )}
      <Slider {...settings}>
        {products.map((product, index) => {
          return (
            <Card key={product.id} style={{ width: "inherit" }}>
              <Card.Img
                variant="top"
                src={`https://picsum.photos/id/${index + 1}/600/400`}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="product-actions">
                  <Button variant="outline-secondary">
                    <Nav.Link href="/Product">
                      {product.productButtonText}
                    </Nav.Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </Slider>
    </>
  );
};

export default ProductSlider;
