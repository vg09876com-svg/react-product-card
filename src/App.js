import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const firstName = "Victor";

function App() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        My Product Store
      </h1>

      <div className="d-flex justify-content-center">
        <Card style={{ width: "22rem" }} className="shadow">
          <Card.Body>
            <Image />

            <div className="mt-3">
              <Name />
              <Price />
              <Description />

              <button className="btn btn-dark w-100 mt-3">
                Add to Cart
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Greeting */}
      <div className="text-center mt-5">
        <h2>
          Hello, {firstName ? firstName : "there!"}
        </h2>

        {firstName && (
          <p className="text-success">
            Thanks for visiting my store! 👋
          </p>
        )}
      </div>
    </div>
  );
}

export default App;