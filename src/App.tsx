import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="treatments" element={<Treatments />} />
        <Route path="packages" element={<Packages />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="not-found">
              <span className="eyebrow">404</span>
              <h1>This page is taking a quiet moment.</h1>
              <a href="/">Return home</a>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
