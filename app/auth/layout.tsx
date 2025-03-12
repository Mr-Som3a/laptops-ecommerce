import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-16 ">
        {children}

        <div className=" h-24 text-center m-auto bg-gradient-to-t from-[#b0dafb] to-[#ffffff]">
          powerd by: Som3a <img src=""  className ='w-[20px] inline-block ms-2' alt="" />
        </div>
    </div>);
};

export default AuthLayout;

