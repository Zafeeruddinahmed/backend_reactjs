// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from the backend when the component mounts
    fetch('/api/items')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <header>
        <h1>MERN Website</h1>
      </header>
      <main>
        <section className="items">
          <h2>Items List</h2>
          <ul>
            {items.map((item) => (
              <li key={item._id}>{item.name}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
};

export default App;
