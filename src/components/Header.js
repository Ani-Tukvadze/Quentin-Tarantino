import t2 from './img/t2.webp'
import facebook from './img/facebook.webp'
import twitter from './img/twitter.webp'
import instagram from './img/instagram.webp'
import youtube from './img/youtube.webp'




export function Header() {
    return (
        <div>
             <header>
        <h1>Quentin Tarantino</h1>
    </header>
    <br></br>
    <section class="banner">
        <img src={t2} alt="tarantino club"/>
        <div className="welcome">
            <h2>Welcome To <br></br><span>Tarantino Club</span></h2>
        </div>
    </section>
    <br></br>
    <nav className="main-nav">
        <ul>
            <li><a href="about.html" className="about">about</a></li>
            <li><a href="books.html">books</a></li>
            <li><a href="movies.html">movies</a></li>
            <li><a href="contact.html">contact</a></li>
        </ul>
    </nav>
    {/* <main>
        <article>
            <h2>
                Tarantino
            </h2>
            <p>
                Quentin Tarantino, in full Quentin Jerome Tarantino, (born March 27, 1963, Knoxville, Tennessee, U.S.),
                American director and screenwriter whose films are noted for their stylized violence, razor-sharp dialogue,
                and fascination with film and pop culture.Tarantino worked in a video store in California before selling 
                two screenplays that became True Romance (1993) and Oliver Stone’s Natural Born Killers (1994). In 1992 he
                made his directing debut with Reservoir Dogs, a violent film about a failed jewelry store robbery. 
                Two years later he established himself as a leading director with Pulp Fiction. The provocative film,
                which featured intersecting crime stories, won the Palme d’Or at the Cannes film festival, and Tarantino
                later received (with Roger Avary) an Academy Award for best original screenplay. For Jackie Brown (1997), 
                he adapted an Elmore Leonard novel about a flight attendant entangled in criminal activities.
                Tarantino subsequently wrote and directed Kill Bill: Vol. 1 (2003) and Kill Bill: Vol. 2 (2004), 
                which centres on a trained assassin (played by Uma Thurman) and her quest for revenge. Grindhouse (2007),
                an homage to B-movie double features, paired Tarantino’s Death Proof, a thriller about a homicidal stuntman,
                with Robert Rodriguez’s horror film Planet Terror. Tarantino’s next three films took an irreverent approach 
                to history. Inglourious Basterds (2009), set during World War II, follows a group of Jewish American soldiers 
                trained to kill Nazis in German-occupied France. Django Unchained (2012), set in the antebellum American South, 
                tells the lively tale of a freed slave attempting to rescue his wife from a cruel plantation owner. For writing 
                the screenplay of that film, Tarantino won another Academy Award. The post-Civil War western The Hateful Eight (2015)
                chronicles the fisticuffs and verbal barbs exchanged by a group of travelers trapped at an inn during a snowstorm. 
                His next film, Once Upon a Time…in Hollywood (2019), centres on a washed-up actor (Leonardo DiCaprio) and his stuntman
                (Brad Pitt), both of whom cross paths with Charles Manson in 1969 Los Angeles. The movie received a standing ovation 
                when it premiered at the Cannes film festival. In 2021 Tarantino published a novel based on the dramedy.
            </p>
        </article>
        <ul className="images">
            <li><img src={t} alt="t1"/></li>
            <li><img src={m} alt="t2"/></li>
        </ul>
    </main> */}
    
    <footer>

        <div className="social">
        <a href="https://www.facebook.com/Tarantino.Archives"><img src={facebook} alt="t3"/></a>
        <a href="https://twitter.com/QTArchives" ><img src={twitter} alt="t4"/></a>
        <a href="https://www.instagram.com/tarantinoxx/?hl=en" ><img src={instagram} alt="t5"/></a>
        <a href="https://www.youtube.com/user/TarantinoArchives"><img src={youtube} alt="t6"/></a>
        </div>
        
    </footer>
        </div>
    )
}
