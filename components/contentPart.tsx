import React from "react";

function ContentPart({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="absolute bottom-9 left-6 btn btn-primary drawer-button lg:hidden"
        >
          =
        </label>
        {children}
        {/* <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn btn-active">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div> */}
      </div>
    </>
  );
}

export default ContentPart;
