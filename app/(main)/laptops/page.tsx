"use client";
import Link from "next/link";
import Card from "@/components/_card";
import { laptops } from "./laptopDieres";
import { useAppContext } from "@/hooks/useContextApi";
import AddToCart from "@/components/addToCart";

export default function Category() {
  const { category } = useAppContext();
  const FilteredLp = category
    ? laptops.filter((item) => item.category === category)
    : laptops;
  return (
    <div>
      <section className="mx-20 h-56 rounded-b-3xl drop-shadow-md bg-no-repeat bg-cover bg-center bg-[url(/images/vecteezy_abstract-modern-geometric-background-with-diagonal-lines_.jpg)]  flex items-center justify-center">
        <h1 className="text-3xl text-center font-semibold">
          {category || "All Laptops"}
        </h1>
      </section>
      <div className="mx-10 my-4 breadcrumbs text-sm">
        <ul>
          {category?<><li>
            <Link href='./laptops'>All Laptops</Link>
          </li>
          <li>
            <Link href={`./laptops`}>{category}</Link>
          </li>
          </>:<li>
            <Link href='./laptops'>All Laptops</Link>
          </li>}
          
        </ul>
      </div>
      <section className=" flex flex-col items-center flex-wrap gap-4 my-12 mx-8 md:flex-row md:justify-center md:items-stretch ">
        {FilteredLp.map((laptop) => (
          <div key={laptop.id} >
            <Link
              href={`/laptops/${laptop.id}`}
            >
              <div className="transition delay-150 duration-280 ease-in-out hover:-translate-y-1 hover:scale-105 z-20">
              <Card
                src={laptop.img}
                title={laptop.title}
                description={laptop.description}
                price={laptop.price}
              />
              </div>
            
            </Link>
            <AddToCart
              item={{id:laptop.id,item:laptop,quantity:1}}
              style="btn-outline"
            >Add To Cart</AddToCart>
          </div>
        ))}
      </section>
    </div>
  );
}
