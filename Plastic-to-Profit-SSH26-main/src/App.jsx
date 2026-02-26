import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import SafeTradingPage from './pages/SafeTradingPage';
import ListWastes from './pages/ListWastes';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/SafeTrading" element={<SafeTradingPage/>}/>
            <Route path="/ListPlastics" element={<ListWastes/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;