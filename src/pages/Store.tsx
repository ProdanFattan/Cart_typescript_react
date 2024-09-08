import { Row, Col } from "react-bootstrap";
import StoreItems from "../data/items.json";
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {StoreItems.map((item) => (
          <Col>{JSON.stringify(item)}</Col>
        ))}
        -
      </Row>
    </>
  );
};

export default Store;
