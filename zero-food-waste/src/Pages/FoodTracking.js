import React, { useState } from 'react';
import '../CSS/FoodTracking.css';

const FoodTracking = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({
    productName: '',
    quantity: '',
    unit: '',
    purchaseDate: '',
    expirationDate: '',
    notificationDays: ''
  });

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addToInventory = (e) => {
    e.preventDefault();
    setInventory([...inventory, newItem]);
    setNewItem({
      productName: '',
      quantity: '',
      unit: '',
      purchaseDate: '',
      expirationDate: '',
      notificationDays: ''
    });
  };

  return (
    <div className="food-tracking-system">
      <div className="new-item-form">
        <h2>Add New Item</h2>
        <form onSubmit={addToInventory}>
          <input
            type="text"
            name="productName"
            value={newItem.productName}
            onChange={handleNewItemChange}
            placeholder="Product Name"
            required
          />
          <input
            type="number"
            name="quantity"
            value={newItem.quantity}
            onChange={handleNewItemChange}
            placeholder="Quantity"
            required
          />
          <select
            name="unit"
            value={newItem.unit}
            onChange={handleNewItemChange}
            required
          >
            <option value="">Select Unit</option>
            <option value="kg">Kg</option>
            <option value="ml">Ml</option>
            <option value="pcs">Pieces</option>
          </select>
          <input
            type="date"
            name="purchaseDate"
            value={newItem.purchaseDate}
            onChange={handleNewItemChange}
            required
          />
          <input
            type="date"
            name="expirationDate"
            value={newItem.expirationDate}
            onChange={handleNewItemChange}
            required
          />
          <input
            type="number"
            name="notificationDays"
            value={newItem.notificationDays}
            onChange={handleNewItemChange}
            placeholder="Notification Days Before Expiry"
            required
          />
          <button type="submit">Add to Inventory</button>
        </form>
      </div>
      <div className="inventory-list">
        <h2>Inventory</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Purchase Date</th>
              <th>Expiration Date</th>
              <th>Days to Notify</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={index}>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>{item.purchaseDate}</td>
                <td>{item.expirationDate}</td>
                <td>{item.notificationDays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodTracking;
