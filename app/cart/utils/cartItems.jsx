import React from 'react';
import Link from "next/link";
function CartItems(props) {
    return (
        <>

            <div className="card lg:card-side bg-base-100 my-2">
                <figure>
                    <img
                        className="w-48"
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        alt="Album"
                    />
                </figure>
                <div className="card-body">
                    <Link
                        href="/laptops"
                        className="hover:link-hover hover:text-cyan-700"
                    >
                        <h2 className="card-title">The Item Name</h2>
                    </Link>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn min-h-8 h-8 px-2 ">
                            <h1 className="text-xl  "><span className="w-[18px] h-[18px]">ـــ</span></h1>
                        </button>
                        <div>4</div>
                        <button className="btn min-h-8 h-8 px-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                                ></path>
                            </svg>
                        </button>
                        <button className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="22"
                                height="22"
                                viewBox="0,0,256,256"
                            >
                                <g
                                    fill="#fa5252"
                                    fillRule="nonzero"
                                    stroke="none"
                                    strokeWidth="1"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeMiterlimit="10"
                                    strokeDasharray=""
                                    strokeDashoffset="0"
                                    fontFamily="none"
                                    fontWeight="none"
                                    fontSize="none"
                                    textAnchor="none"
                                    style={{ mixBlendMode: "normal" }}
                                >
                                    <g transform="scale(2,2)">
                                        <path d="M49,1c-1.66,0 -3,1.34 -3,3c0,1.66 1.34,3 3,3h30c1.66,0 3,-1.34 3,-3c0,-1.66 -1.34,-3 -3,-3zM24,15c-7.17,0 -13,5.83 -13,13c0,7.17 5.83,13 13,13h77v63c0,9.37 -7.63,17 -17,17h-40c-9.37,0 -17,-7.63 -17,-17v-52c0,-1.66 -1.34,-3 -3,-3c-1.66,0 -3,1.34 -3,3v52c0,12.68 10.32,23 23,23h40c12.68,0 23,-10.32 23,-23v-63.35937c5.72,-1.36 10,-6.50062 10,-12.64062c0,-7.17 -5.83,-13 -13,-13zM24,21h80c3.86,0 7,3.14 7,7c0,3.86 -3.14,7 -7,7h-80c-3.86,0 -7,-3.14 -7,-7c0,-3.86 3.14,-7 7,-7zM50,55c-1.66,0 -3,1.34 -3,3v46c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3v-46c0,-1.66 -1.34,-3 -3,-3zM78,55c-1.66,0 -3,1.34 -3,3v46c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3v-46c0,-1.66 -1.34,-3 -3,-3z"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CartItems;