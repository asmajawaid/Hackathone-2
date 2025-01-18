'use client'
import Image from "next/image";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

// export default function Cart() {
//   return (
//     <>
//      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-6">
//   {/* Left Section */}
//   <div>
//     <h1 className="text-lg md:text-xl font-medium text-black">Bag</h1>
    
//     {/* Product Item */}
//     <div className="flex flex-row mt-4 items-start gap-4">
//       <Image
//         src="/images/card3.jpg"
//         alt="chair"
//         width={100}
//         height={100}
//         className="rounded-lg"
//       />
//       <div className="flex-1">
//         {/* Content */}
//         <div className="flex flex-col gap-2">
//           <h2 className="text-[#272343] font-medium">Library Stool Chair</h2>
//           <p className="text-sm text-gray-600">Ashen Slate / Cobalt Bliss</p>
//           {/* Size & Quantity */}
//           <div className="flex flex-row justify-between text-sm text-gray-700 mt-2">
//             <div className="flex items-center gap-2">
//               <span className="font-medium">Size:</span>
//               <span>L</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="font-medium">Quantity:</span>
//               <span>1</span>
//             </div>
//           </div>
//           <div className="text-base font-medium text-gray-950 mt-2">MRP: $99</div>

//         </div>
//         {/* Icons */}
//         <div className="flex flex-row gap-4 mt-3">
//           <FaRegHeart className="text-xl text-gray-600 cursor-pointer hover:text-[#029FAE]" />
//           <RiDeleteBin6Line className="text-xl text-gray-600 cursor-pointer hover:text-[#029FAE]" />
//         </div>
//       </div>
//     </div>
//     <hr className="my-4" />

//     {/* Another Product Item */}
//     <div className="flex flex-row mt-4 items-start gap-4">
//       <Image
//         src="/images/card9.jpg"
//         alt="chair"
//         width={100}
//         height={100}
//         className="rounded-lg"
//       />
//       <div className="flex-1">
//         {/* Content */}
//         <div className="flex flex-col gap-2">
//           <h2 className="text-[#272343] font-medium">Library Stool Chair</h2>
//           <p className="text-sm text-gray-600">Ashen Slate / Cobalt Bliss</p>
//           {/* Size & Quantity */}
//           <div className="flex flex-row justify-between text-sm text-gray-700 mt-2">
//             <div className="flex items-center gap-2">
//               <span className="font-medium">Size:</span>
//               <span>L</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="font-medium">Quantity:</span>
//               <span>1</span>
//             </div>

//           </div>
//           <span className="text-base font-medium text-gray-950 mt-2">MRP: $99</span>

//         </div>
//         {/* Icons */}
//         <div className="flex flex-row gap-4 mt-3">
//           <FaRegHeart className="text-xl text-gray-600 cursor-pointer hover:text-[#029FAE] " />
//           <RiDeleteBin6Line className="text-xl text-gray-600 cursor-pointer hover:text-[#029FAE]" />
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* Right Section */}
//   <div className="bg-slate-50 p-4 rounded-lg shadow-md">
//     <h2 className="font-medium text-lg md:text-xl">Summary</h2>
//     {/* Subtotal */}
//     <div className="flex flex-row justify-between mt-6 text-sm md:text-base">
//       <span>Subtotal</span>
//       <span>$198.00</span>
//     </div>
//     {/* Delivery */}
//     <div className="flex flex-row justify-between mt-4 text-sm md:text-base">
//       <span>Estimated Delivery & Handling</span>
//       <span>Free</span>
//     </div>
//     {/* Total */}
//     <div className="flex flex-row justify-between mt-6 border-t border-b border-gray-400 py-4 text-sm md:text-base font-medium">
//       <span>Total</span>
//       <span>$198.00</span>
//     </div>
//     {/* Checkout Button */}
//     <button className="w-full bg-[#029FAE] text-white text-sm md:text-base font-medium rounded-3xl mt-6 p-3 hover:bg-[#027d8e] transition">
//       Member Checkout
//     </button>
//   </div>
// </div>


//     </>
//   );
// }


type CartItem = {
  id: number;
  name: string;
  image: string;
  size: string;
  quantity: number;
  price: number;
};

export default function Cart() {
  // State for cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Library Stool Chair",
      image: "/images/card3.jpg",
      size: "L",
      quantity: 1,
      price: 99,
    },
    {
      id: 2,
      name: "Library Stool Chair",
      image: "/images/card9.jpg",
      size: "L",
      quantity: 1,
      price: 99,
    },
  ]);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Functions to handle cart actions
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-6">
      {/* Left Section */}
      <div>
        <h1 className="text-lg md:text-xl font-medium text-black">Bag</h1>

        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="flex flex-row mt-4 items-start gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="flex-1">
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#272343] font-medium">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.size}</p>
                  <div className="flex flex-row justify-between text-sm text-gray-700 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Size:</span>
                      <span>{item.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Quantity:</span>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                        className="w-12 text-center border rounded"
                      />
                    </div>
                  </div>
                  <div className="text-base font-medium text-gray-950 mt-2">
                    MRP: ${item.price * item.quantity}
                  </div>
                </div>
                <div className="flex flex-row gap-4 mt-3">
                  <FaRegHeart className="text-xl text-gray-600 cursor-pointer hover:text-[#029FAE]" />
                  <RiDeleteBin6Line
                    onClick={() => removeItem(item.id)}
                    className="text-xl text-gray-600 cursor-pointer hover:text-[#029FAE]"
                  />
                </div>
              </div>
            </div>
            <hr className="my-4" />
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="bg-slate-50 p-4 rounded-lg shadow-md">
        <h2 className="font-medium text-lg md:text-xl">Summary</h2>
        <div className="flex flex-row justify-between mt-6 text-sm md:text-base">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex flex-row justify-between mt-4 text-sm md:text-base">
          <span>Estimated Delivery & Handling</span>
          <span>Free</span>
        </div>
        <div className="flex flex-row justify-between mt-6 border-t border-b border-gray-400 py-4 text-sm md:text-base font-medium">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <button className="w-full bg-[#029FAE] text-white text-sm md:text-base font-medium rounded-3xl mt-6 p-3 hover:bg-[#027d8e] transition">
          Member Checkout
        </button>
      </div>
    </div>
  );
}

