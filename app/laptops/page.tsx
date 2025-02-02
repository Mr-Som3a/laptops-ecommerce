"use client";
import Link from "next/link";
import Card from "../../components/_card";
import { laptops } from "./laptopDieres";
import { useAppContext } from "@/hooks/useContextApi";

export default function Category() {
  const { category } = useAppContext();
  const FilteredLp = category
    ? laptops.filter((item) => item.category === category)
    : laptops;
  return (
    <div className="">
      <section className="mx-20 h-56 rounded-b-3xl drop-shadow-md bg-no-repeat bg-cover bg-center bg-[url(/images/vecteezy_abstract-modern-geometric-background-with-diagonal-lines_.jpg)]  flex items-center justify-center">
        <h1 className="text-3xl text-center font-semibold">
          {category || "All Laptops"}
        </h1>
      </section>

      <section className=" flex flex-col items-center flex-wrap gap-4 my-12 mx-8 md:flex-row md:justify-center md:items-stretch ">
        {FilteredLp.map((laptop) => (
          <Link
            className=" transition delay-150 duration-300 ease-in-out  hover:-translate-y-1 hover:scale-110 "
            href={`/laptops/${laptop.category}/${laptop.id}`}
            key={laptop.id}
          >
            <Card
              src={laptop.src}
              alt={laptop.alt}
              title={laptop.title}
              description={laptop.description}
              price={laptop.price}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
