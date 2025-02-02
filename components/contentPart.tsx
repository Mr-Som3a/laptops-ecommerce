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
      </div>
    </>
  );
}

export default ContentPart;
