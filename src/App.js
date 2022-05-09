import './App.css';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Books } from './components/Books';
import { Contact } from './components/Contact';
import { Movies } from './components/Movies';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: require('./components/en.json')
  },
  ka: {
    translation: require('./components/ka.json')
  }
};


  i18n.use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });




function App() {

  return (
   
    <Router>
    <div className="App">
    <Header />
 

      
<Switch>
  <Route exact path="/">
    <Home />
    </Route>
    <Route path="/Books">
      <Books />
      </Route>
       <Route path="/Movies"> 
       <Movies />
       </Route>
       <Route path="/Contact">
        <Contact />
        </Route>
        </Switch>
        <Footer />
        </div>
        </Router>
  );
}

export default App;
