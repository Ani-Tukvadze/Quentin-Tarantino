import t2 from './img/t2.webp'
import { Carousel } from './Carousel';
import "../styles.css";
import { useTranslation } from 'react-i18next';



export function Home () {
    const {t} = useTranslation();

    
    return (
       
        <div>
         
        <section className="banner">
        <img src={t2} alt="tarantino club"/>
        <div className="welcome">
            <h2> {t("welcome")}<br></br><span> {t("club")}</span></h2>
        </div>
    </section>
   
    

            <main>
        <article>
            <h2>

            {t("article title")}

            </h2>
            <p>
            {t("text")}
            </p>
        </article>
    </main>
    
    <div className='carousel1'>
             <Carousel />
        </div>
        </div>


    )
}