import './App.css';
import { Header } from './components/Header';
import { Books } from './components/Books';
import { Contact } from './components/Contact';

import { Home } from './components/Home';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';




function App() {
  return (
    <div className="App">

      <Header />
      <Home />
      <Contact />
      
          {/* <Header />
          <Routes>
          <Route path="Home" element={<Home />} /> 
          <Route path="Books" element={<Books />} /> 
          <Route path="Movies" element={<Movies />} />
          <Route path="Contact" element={<Contact />} />
          </Routes>
          */}
     
    </div>
   
  );
}

export default App;
