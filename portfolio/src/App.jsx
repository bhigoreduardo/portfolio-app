import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Home from "src/pages/Home";

function App() {
  return (
    <main className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
