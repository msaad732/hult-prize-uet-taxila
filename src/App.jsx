import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Guidelines from './pages/Guidelines';
import Timeline from './pages/Timeline';
import Contact from './pages/Contact';
import Register from './pages/Register';

function App() {
    return (
        <div className="min-h-screen bg-black flex flex-col">
            <ScrollToTop />
            <Navbar />

            <main className="flex-1 pt-16 md:pt-20">
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/guidelines" element={<Guidelines />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
