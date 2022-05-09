import {useEffect, useState} from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import icon from './img/icon.png';






export function Books() {
    const {t, i18n} = useTranslation();
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);


            try {
                const {data: response} = await axios.get(`https://api.airtable.com/v0/appQXxHBBaLLaLeMj/books_${i18n.language}?api_key=keyTietW0kIxFf4E8`);
                setBooks(response.records);
            } catch (error) {
                console.error(error.message);
            }

            setLoading(false);
        }

        fetchBooks();
    }, [i18n.language]);

    function search(e) {
        setSearchQuery(e.target.value);
    } 


    return (
        
        <div className="book-title">
           
        <h2>{t("books title")}</h2>

        <div className="search">
                <input type="text" id="search" placeholder={t("search")} onInput={(e) => search(e)}/>
                <img className='searchimg' src={icon}></img>
            </div>

        
    <table>
   
        <tr>
            <th>{t("book title")}</th>
            <th>{t("book author")}</th>
            <th>{t("year")}</th>
            <th>{t("publisher")}</th>
        </tr>

        {books.filter(book => book.fields.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1)
         .sort((a, b) => (new Date(b.fields.date) - (new Date(a.fields.date))))
         .map(book => 
       
        <tr>
            <td>{book.fields.title}</td>
            <td>{book.fields.author}</td>
            <td>{book.fields.date}</td>
            <td>{book.fields.publisher}</td>
        </tr>
        )}
    </table>
    </div>

    )
}