import React, { useState } from 'react';
import axios from 'axios';
import BikeCard from '../components/BikeCard';

const bikes = [
  { name: "Yamaha R15", price: "$1500", image: "https://via.placeholder.com/150" },
  { name: "Honda Shine", price: "$1000", image: "https://via.placeholder.com/150" },
  { name: "Royal Enfield", price: "$1800", image: "https://via.placeholder.com/150" }
];

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', bikeModel: '' });
  const [chatMsg, setChatMsg] = useState('');
  const [chatReply, setChatReply] = useState('');

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.bikeModel) return alert('Fill all fields');
    try {
      await axios.post('http://localhost:5000/api/buy', form);
      alert('Buyer info saved!');
      setForm({ name: '', email: '', bikeModel: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to save');
    }
  };

  const handleChat = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/chat', { message: chatMsg });
      setChatReply(res.data.reply);
    } catch (err) {
      console.error(err);
      alert('Chat error');
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🚲 Bike Shop</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {bikes.map(bike => (
          <BikeCard
            key={bike.name}
            bike={bike}
            onBuy={() => setForm({ ...form, bikeModel: bike.name })}
          />
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">📝 Enter Details</h2>
        <input
          className="w-full p-2 border mb-2"
          placeholder="Your Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full p-2 border mb-2"
          placeholder="Your Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full p-2 border mb-2 bg-gray-100"
          placeholder="Selected Bike"
          value={form.bikeModel}
          readOnly
        />
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">💬 AI Chatbot</h2>
        <input
          className="w-full p-2 border mb-2"
          placeholder="Ask something..."
          value={chatMsg}
          onChange={e => setChatMsg(e.target.value)}
        />
        <button onClick={handleChat} className="bg-purple-600 text-white px-4 py-2 rounded">
          Ask
        </button>
        {chatReply && <p className="mt-4 bg-gray-100 p-3 rounded">{chatReply}</p>}
      </div>
    </div>
  );
}
