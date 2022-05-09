import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export function Nav () {
  const {t} = useTranslation();

  function changeLanguage(language){
    i18n.changeLanguage(language);
  }
  const [lang, setLang] = useState('en');
  function changeLanguageBetween() {
    if(lang === 'en') {
      setLang('ka');
    } else {
      setLang('en');
    }
      i18n.changeLanguage(lang);
  }

    return (
        
        <nav className="main-nav">
        <ul>
           <li><Link to="/" className="about">{t("about")}</Link></li>
           <li><Link to="/Books">{t("books")}</Link></li>
           <li><Link to="/Movies">{t("movies")}</Link></li>
           <li><Link to="/Contact">{t("contact")}</Link></li>
           <li> 
              <button className="ka-btn" onClick={()=> changeLanguage('ka')}>GEO</button>
              <button className="en-btn" onClick={()=> changeLanguage('en')}>ENG</button> 
              </li>

        </ul>
       
  
        
    </nav>
    
    )
}