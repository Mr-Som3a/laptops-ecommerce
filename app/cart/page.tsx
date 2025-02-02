import CartItems from "./utils/cartItems";
import OrderSummary from "./utils/orderSummary";
export default function cart() {
  return (
    <section>
      <div className="flex justify-between"><h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
      <div className="text-xl text-green-700">3 Items</div>
      </div>
      <div className="grid grid-cols-8 gap-x-4">
        <div className="groupOfCards col-span-5 ">
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
        </div>
        <div className="card col-span-3 bg-base-100 w-96 shadow-xl max-h-[25rem]">
          <OrderSummary />
        </div>
      </div>
    </section>
  );
}
