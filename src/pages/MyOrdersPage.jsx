import React, { useEffect, useState } from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";

function MyOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAdress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 1",
              img: p1,
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "67897",
          createdAt: new Date(),
          shippingAdress: { city: "Lahore", country: "Pakistan" },
          orderItems: [
            {
              name: "Product 2",
              img: p2,
            },
          ],
          totalPrice: 120,
          isPaid: false,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="w-full lg:max-w-7xl mx-auto px-0 lg:px-8 py-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>

      {/* Responsive scrollable table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-3 text-left text-sm text-gray-700 font-semibold min-w-[80px]">
                Image
              </th>
              <th className="py-2 px-3 text-left text-sm text-gray-700 font-semibold min-w-[130px]">
                Order ID
              </th>
              <th className="py-2 px-3 text-left text-sm text-gray-700 font-semibold min-w-[150px]">
                Created
              </th>
              <th className="py-2 px-3 text-left text-sm text-gray-700 font-semibold min-w-[160px]">
                Shipping Address
              </th>
              <th className="py-2 px-3 text-left text-sm text-gray-700 font-semibold min-w-[100px]">
                Items
              </th>
              <th className="py-2 px-3 text-left text-sm text-gray-700 font-semibold min-w-[100px]">
                Price
              </th>
              <th className="py-2 px-3 text-left text-sm text-gray-700 font-semibold min-w-[100px]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3 text-left text-sm">
                  <img
                    src={order.orderItems[0].img}
                    alt="Product"
                    className="w-10 h-12 object-cover rounded"
                  />
                </td>
                <td className="py-2 px-3 text-left text-sm text-gray-900">
                  #{order._id}
                </td>
                <td className="py-2 px-3 text-left text-sm text-gray-900">
                  {new Date(order.createdAt).toLocaleDateString()}{" "}
                  {new Date(order.createdAt).toLocaleTimeString()}
                </td>
                <td className="py-2 px-3 text-left text-sm">
                  {order.shippingAdress.city}, {order.shippingAdress.country}
                </td>
                <td className="py-2 px-3 text-left text-sm">
                  {order.orderItems.length}
                </td>
                <td className="py-2 px-3 text-left text-sm">
                  ${order.totalPrice}
                </td>
                <td className="py-2 px-3 text-left text-sm">
                  <span
                    className={`px-2 py-1 rounded-sm text-xs ${
                      order.isPaid
                        ? "bg-green-200 text-green-700"
                        : "bg-red-200 text-red-700"
                    }`}
                  >
                    {order.isPaid ? "Paid" : "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyOrdersPage;
