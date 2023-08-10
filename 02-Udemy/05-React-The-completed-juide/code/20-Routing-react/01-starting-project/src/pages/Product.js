import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];
const Products = () => {
  return (
    <>
      <h1>Product page</h1>
      <ul>
        {PRODUCTS.map((elem) => {
          return (
            <li key={elem.id}>
              <Link to={`/products/${elem.id}`}>{elem.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
