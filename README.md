# 🚲 AI Chatbot for Bike Sellers

A full-stack web application for a bike shop featuring an AI-powered chatbot.  
Customers can browse bike models, submit purchase details, and interact with an AI chatbot for assistance.

---

## Features

- Browse and select from a list of bikes
- Submit buyer details which are saved to MongoDB
- AI chatbot powered by OpenAI GPT-3.5-turbo for customer inquiries
- Responsive UI styled with Tailwind CSS

---

## Tech Stack

- **Backend:** Node.js, Express, MongoDB, Mongoose, OpenAI API  
- **Frontend:** React, Axios, Tailwind CSS  
- **Others:** dotenv, CORS

---

## Folder Structure

```plaintext
bike-shop-ai-chatbot/
├── client/                # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── BikeCard.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   └── tailwind.config.js
├── server/                # Express backend
│   ├── models/
│   │   └── Buyer.js
│   ├── routes/
│   │   └── buyerRoutes.js
│   ├── index.js
│   └── .env
├── README.md
```


---

## Getting Started

### Prerequisites

- Node.js & npm installed
- MongoDB instance (local or cloud)
- OpenAI API key

### Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/chalana05/AI-Chatbot-for-Bike-Sellers/edit/main/README.md
cd bike-shop-ai-chatbot
