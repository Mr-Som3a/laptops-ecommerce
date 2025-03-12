import AddToCart from "@/components/addToCart";
import React from "react";
import { laptops } from "../laptopDieres";
import CartItems from "../../cart/utils/cartItems";

const imagesDires = [
  {
    id: 1,
    src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
},
  {
    id: 2,
    src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
},
  {
    id: 3,
    src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
},
];

interface Props {
  params: { id: number };
}
export const LaptopDetails = ({ params: { id } }: Props) => {
  const laptop = laptops.find((item) => item.id === id);
  console.log(laptop);

  return (
    <div className="container flex space-x-10 p-20">
      <section>
        <div className="avatar">
          <div className="rounded-xl w-80">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
            {imagesDires.map(item =>(
                <div role="button" key={item.id} className="avatar ">
            <div className=" transition duration-300 ease-in-out hover:shadow-teal-800 hover:shadow-md rounded-xl w-20">
              <img src={item.src} />
            </div>
          </div>
            ))}
          
        </div>
      </section>
      <section>
        <h1 className="text-4xl mb-4 font-bold">Product Name</h1>
        <div className="text-xl "> Price : 300$</div>
        <h2 className="text-2xl my-2">Description</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          blanditiis ipsa deserunt, perferendis obcaecati dolores est libero
          laborum suscipit officiis dolorum debitis recusandae, qui voluptatem
          ea saepe, quia architecto reiciendis.
        </p>
        <div className="flex space-x-4 max-w-56 mt-8">
          <AddToCart item={{id:id,item:laptop!,quantity:1}} children="Add To Cart" style="btn-outline" />
          <AddToCart item={{id:id,item:laptop!,quantity:1}} children="Buy Now" style="btn-info" />
        </div>
        <div className="my-4 text-sm link text-slate-500 underline underline-offset-1">
          delivery Terms & Condition
        </div>
        <div className="my-2 font-semibold ">Secure your payment</div>
        <div className="flex my-3 space-x-4">
          <img src="/images/mastercard.svg" alt="masterCard" />
          <img src="/images/visa.svg" alt="localBank" />
          <img src="/images/paypal.svg" alt="visa" />
        </div>
        <div className="card-bordered border-2 p-4 rounded-lg">
          <div className="font-bold">
            <img
              className="inline-block"
              src="/images/return.svg"
              alt="return-cashback-money"
            />
            Return
          </div>
          <div>
            You have 60 days to return the item(s) using any of the following
            methods:
          </div>
          <div>
            <img className="inline-block" src="/images/dot.svg"  alt="" />
            Free store return
          </div>
          <div>
            <img className="inline-block" src="/images/dot.svg" alt="" />
            Free returns via USPS Dropoff Service
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaptopDetails;
