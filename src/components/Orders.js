import React, { useContext, useState } from 'react';
import { OrdersContext } from '../contexts/OrdersContext';

const Orders = () => {
  const { orders } = useContext(OrdersContext);
  const [orderStatus, setOrderStatus] = useState({}); // { orderId: 'confirmed' | 'completed' }

  if (orders.length === 0) {
    return <p className="text-center">No orders placed yet.</p>;
  }

  const handleConfirm = (orderId) => {
    setOrderStatus((prev) => ({ ...prev, [orderId]: 'confirmed' }));
  };

  const handleComplete = (orderId) => {
    setOrderStatus((prev) => ({ ...prev, [orderId]: 'completed' }));
  };

  // Sort orders: completed orders at the bottom
  const sortedOrders = [...orders].sort((a, b) => {
    const statusA = orderStatus[a.id];
    const statusB = orderStatus[b.id];
    if (statusA === 'completed' && statusB !== 'completed') return 1;
    if (statusA !== 'completed' && statusB === 'completed') return -1;
    return 0;
  });

  return (
    <div className="space-y-6">
      {sortedOrders.map((order) => {
        let bgColor = '';
        if (orderStatus[order.id] === 'confirmed') {
          bgColor = 'bg-yellow-100';
        } else if (orderStatus[order.id] === 'completed') {
          bgColor = 'bg-green-100';
        }

        return (
          <div key={order.id} className={`border border-coffeeBrown rounded p-6 relative ${bgColor}`}>
            <div className="absolute top-2 right-4 text-sm text-gray-500">
              {new Date(order.orderTime).toLocaleString()}
            </div>
            <h3 className="text-xl font-semibold mb-2">{order.name}</h3>
            <p className="mb-2"><strong>Contact:</strong> {order.contactNumber}</p>
            <p className="mb-2"><strong>Address:</strong> {order.address}</p>
            <div className="mb-2">
              <strong>Items:</strong>
              <ul className="list-disc list-inside">
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.name} - ₹{item.price.toFixed(2)}</li>
                ))}
              </ul>
            </div>
            <p className="mb-2"><strong>Total Amount:</strong> ₹{order.totalAmount.toFixed(2)}</p>
            <div>
              <strong>Payment Screenshot:</strong>
              <img
                src={order.paymentScreenshot}
                alt="Payment Screenshot"
                className="mt-2 max-w-full h-auto rounded"
              />
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleConfirm(order.id)}
                className="px-4 py-2 bg-yellow-300 rounded hover:bg-yellow-400 transition"
              >
                Order Confirmed
              </button>
              <button
                onClick={() => handleComplete(order.id)}
                className="px-4 py-2 bg-green-300 rounded hover:bg-green-400 transition"
              >
                Order Completed
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
