import { useState } from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Contact from './contact';

function App() {
  const [content, setContent] = useState("I am learning React");
  const items = ["React", "Node.js", "Express.js"];

  function handleUpdate() {
    const num = Math.floor(Math.random() * items.length);
    setContent(`I am learning ${items[num]} and hooks as well`);
  }

  return (
    <div className="App">
      <h1>{content}</h1>
      <button onClick={handleUpdate}>Update Me</button>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
