import { useState, useEffect } from 'react';
import axios from 'axios';
import './newscomponent.css'; // Import CSS file for NewsComponent styling
import Topbar from './Topbar';
import Footer from './Footer';



function Sports() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c78ac8912da347fa96ff947a51879847');
                setNews(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
        <Topbar/>
        <div className="news-container"> {/* Apply container class */}
            <h2>Breaking News</h2>
            <ul className="news-grid"> {/* Apply grid class */}
                {news.map(article => (
                    <li key={article.title} className="news-item"> {/* Apply item class */}
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.urlToImage ? ( // Conditionally render image
                                <img src={article.urlToImage} alt={article.title} className="news-image" /> // Render news image
                            ) : (
                                <img src="placeholderimage.png"  className="news-placeholder-image" /> // Render placeholder image
                            )}
                            <div className="news-details"> {/* Apply details class */}
                                <h3 className="news-title">{article.title}</h3> {/* Apply title class */}
                                <p className="news-description">{article.description}</p> {/* Apply description class */}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <Footer/>
        </>
    );
}

export default Sports;
