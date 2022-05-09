import { useTranslation } from "react-i18next";
import { Nav } from './Nav';


export function Header() {

  const {t} = useTranslation();
  


    return (
       
             <header>
                 
        <h1 className='header-title'>{t("title")}</h1>
    <Nav />
   </header>



    )
}
