import Link from "next/link";
export default function Home() {
  // const image = "https://www.rawpixel.com/image/16050581/png-empty-white-screen-laptop-electronics-minimalist-modern"
  return (
    <>
      <div className="hero bg-no-repeat  bg-gradient-to-t from-[#16222A] to-[#3a6073] min-h-screen">
        <div className="hero-content text-slate-200  flex-col lg:flex-row-reverse justify-between">
          <img
            src="images/pngwing.com.png"
            alt="laptop"
            className="max-w-sm scale-150 rounded-lg shadow-2xl"
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
                <button className="lg:me-4 btn btn-neutral-[white]">
                  Shop
                </button>
              </Link>
              <button className="btn btn-outline text-slate-200">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>

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
