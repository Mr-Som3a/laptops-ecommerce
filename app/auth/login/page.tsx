'use client'
import React from "react";

const Login = () => {
  return (
    <div className=" w-[80%] mx-auto my-5 p-6 border-1 rounded-lg flex items-center">
      <div>
        <img src="/images/form.svg" className="w-[25rem]  "/>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="w-96 m-auto flex flex-col justify-center items-center space-y-4 ">
      <h1 className="text-2xl"> Log in</h1>
      <label className="input input-bordered flex items-center gap-2">
        <img src="/images/email.svg" className="w-[20px]"/>
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <img src="/images/user.svg" className="w-[20px]"/>
        <input type="text" className="grow" placeholder="Username" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <img src="/images/password.svg" className="w-[20px]"/>
        <input type="password" className="grow" placeholder="*******" />
      </label>
      <button onClick={()=>{}} className="btn btn-wide btn-primary">Login</button>
      <div className="divider">OR</div>
      <button className="btn btn-wide btn-outline">Google <img className="w-[20px]" src="/images/google.svg" alt="" /></button>
      <button className="btn btn-wide btn-outline">Facebook <img className="w-[20px]" src="/images/facebook.svg" alt="" /></button>
    </div>
    </div>    
  );
};

export default Login;
