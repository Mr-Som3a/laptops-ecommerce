import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="hero  min-h-screen">
        <div className="absolute bg-gradient-to-t -z-20 from-[#33c8e5] to-[#003370] w-96 h-96 -top-10 -left-20 rotate-[30deg]"></div>
        <div className="absolute rounded-full -z-10 bg-gradient-to-t from-[#33c8e5] to-[#02ffac] w-80 h-80 -top-10 left-16 rotate-[90deg]"></div>
        <div className="absolute bg-gradient-to-t -z-20 from-[#33c8e5] to-[#003370] w-96 h-96 -bottom-10 -right-20 rotate-[-30deg]"></div>
        <div className="absolute rounded-full -z-10 bg-gradient-to-t from-[#33c8e5] to-[#02ffac] w-80 h-80 -bottom-10 right-16 rotate-[-90deg]"></div>
        <div className="hero-content  flex-col lg:flex-row-reverse justify-between">
          <img
            src="/images/ggg.png"
            alt="laptop"
            className="max-w-sm scale-150 rounded-lg "
          />
          <div className="w-1/2 ">
            <h1 className="text-5xl font-bold">
              Quality Used Laptops at Unbeatable Prices
            </h1>
            <p className="py-6">
              Discover a wide selection of reliable used laptops that fit your
              budget and needs. Our commitment to quality ensures you get the
              best value without compromising performance.
            </p>
            <div className="flex flex-col lg:flex-row">
              <Link href="/laptops">
                <button className="lg:me-4 btn btn-neutral">Shop</button>
              </Link>
              <button className="btn btn-outline ">About Us</button>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div className="hero min-h-80 bg-[url(https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-neutral-content ">
          <div className="">
            <h1 className="mb-5 text-4xl font-bold">
              Discover Our Latest Arrivals
            </h1>
            <p className="mb-5">
              Explore our featured laptops and find the perfect device for your
              needs today!
            </p>
            <button className="btn btn-primary">Shop</button>
          </div>
        </div>
      </div>
    </>
  );
}
