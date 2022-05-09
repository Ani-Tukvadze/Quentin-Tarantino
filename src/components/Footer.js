import facebook from './img/facebook.webp'
import twitter from './img/twitter.webp'
import instagram from './img/instagram.webp'
import youtube from './img/youtube.webp'


export function Footer () {
    return (
        <div>
            <footer>
                <div className="social">
                    <a href="https://www.facebook.com/Tarantino.Archives" target="_blank"><img src={facebook} alt="t3"/></a>
                    <a href="https://twitter.com/QTArchives" target="_blank"><img src={twitter} alt="t4"/></a>
                    <a href="https://www.instagram.com/tarantinoxx/?hl=en" target="_blank"><img src={instagram} alt="t5"/></a>
                    <a href="https://www.youtube.com/user/TarantinoArchives" target="_blank"><img src={youtube} alt="t6"/></a>
                    </div>
                    </footer>
                    </div>
    )
}