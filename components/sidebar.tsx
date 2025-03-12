import { lists } from "@/app/(main)/laptops/lists";
import React from "react";
import CategorySelection from "./categorySelection";

interface lists {
  icon: string;
  id: number;
  dir: string;
  label: string;
}

const Sidebar = () => {
  return (
    <>
      <div className="drawer-side shadow-lg">
        <ul className="z-50 menu text-base-content min-h-full w-60 ">
          {lists.map((item) => (
            <li key={item.id} className="text-base mb-1 ">
              <CategorySelection
                category={item.category}
                src={item.icon}
                alt={item.label}
                label={item.label}
              />
            </li>
          ))}
        </ul>
        {/* <ul className="menu bg-base-200 rounded-box w-56">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details open>
              <summary>Parent</summary>
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
                <li>
                  <details open>
                    <summary>Parent</summary>
                    <ul>
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default Sidebar;
