import Skeleton from "react-loading-skeleton";

const CartSkeleton = ({ carts }) => {
  return Array(carts)
    .fill(0)
    .map((item, i) => {
      return (
        <div className="cart-skeleton" key={i}>
          <div className="left-skeleton">
            <Skeleton
              circle={true}
              width={40}
              height={40}
              style={{ "margin-right": "10px" }}
            />
          </div>
          <div className="right-skeleton">
            <Skeleton count={4} style={{ "margin-bottom": "10px" }} />
          </div>
        </div>
      );
    });
};

export default CartSkeleton;
