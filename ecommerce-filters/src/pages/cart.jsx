import React from "react";
import { ShoppingCartState } from "../context/context";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const Cart = () => {
  const {
    dispatch,
    state: { cart },
  } = ShoppingCartState();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-3 text-left">Shopping Cart</h1>
      <table className="mt-8 w-full border-collapse border border-gray-300">
        <thead>
          <tr className="border bg-gray-200">
            <th className="text-left p-3">Image</th>
            <th className="text-center p-3">Product Name</th>
            <th className="text-center p-3">Price</th>
            <th className="text-center p-3">Qty</th>
            <th className="text-center p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem) => (
            <tr className="border border-t-0" key={cartItem.id}>
              <td className="text-center p-3">
                <img
                  style={{ height: "100px" }}
                  src={cartItem.thumbnail}
                  alt={cartItem.title}
                />
              </td>
              <td className="text-center p-3">{cartItem.title}</td>
              <td className="text-center p-3">{cartItem.price.toFixed(2)}</td>
              <td className="text-center p-3 relative">
                <FaCircleMinus
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QTY",
                      payload: {
                        id: cartItem.id,
                        qty: Math.max(cartItem.qty - 1, 0), // Prevent negative quantities
                      },
                    })
                  }
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
                />
                <input
                  onChange={(e) => {
                    const qty = Math.max(parseInt(e.target.value, 10) || 0, 0); // Validate input
                    dispatch({
                      type: "UPDATE_QTY",
                      payload: {
                        id: cartItem.id,
                        qty,
                      },
                    });
                  }}
                  type="number"
                  min="0"
                  value={cartItem.qty}
                  className="w-12 text-center border rounded"
                />
                <FaCirclePlus
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QTY",
                      payload: {
                        id: cartItem.id,
                        qty: cartItem.qty + 1,
                      },
                    })
                  }
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                />
              </td>
              <td className="text-center p-4">
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: cartItem })
                  }
                  className="px-3 py-2 text-white rounded-md mt-2 bg-blue-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-4">
        <label className="font-bold mr-2">Sub Total:</label>
        <span>
          {cart
            .reduce((acc, curr) => acc + curr.price * curr.qty, 0)
            .toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Cart;