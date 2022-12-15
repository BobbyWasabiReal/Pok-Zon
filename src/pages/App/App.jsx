import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import ShopPage from '../ShopPage/ShopPage';
import BackpackPage from '../BackpackPage/BackpackPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/backpack" element={<BackpackPage />} />
          </Routes>
        </>
        :
        <>
          <NavBar setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
          </Routes>
        </>
      }
    </main>
  );
}
