import React from "react";

export default function Navbar() {
  return (
    <div className="flex gap-x-12 bg-white w-full items-center p-6">
      <div className="flex items-center gap-x-20">
        <img src="/logo.png" alt="logo" className="size-12"/>

        <div className="flex gap-x-8">
          <button>Products</button>
          <button>Contacts</button>
        </div>
      </div>
    </div>
  );
}
