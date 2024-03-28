import  { useState, useEffect } from 'react';
import axios from 'axios';
import './newscomponent.css'; // Import CSS file for NewsComponent styling
import Topbar from './Topbar';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

function NewsComponent() {
    const [news, setNews] = useState([]);
    const [shownNews, setShownNews] = useState([]); // State to track which news items have triggered a toast
    
    useEffect(() => {
        const fetchData = async () => {
           
            try {
               
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c78ac8912da347fa96ff947a51879847');
                setNews(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchData();
    }, []);

    // Function to display toast message for news item
    const displayToast = (article) => {
        // Check if the news item has already triggered a toast
        if (!shownNews.includes(article.title)) {
            toast(article.title);
            // Add the news item to the shownNews array
            setShownNews([...shownNews, article.title]);
        }
    };

    return (
        <>
        <Topbar />
        <div className="news-container"> {/* Apply container class */}
            <h2>Latest Headlines</h2>
            <ul className="news-grid"> {/* Apply grid class */}
                {news.map(article => (
                    <li key={article.title} className="news-item" onMouseEnter={() => displayToast(article)}> {/* Apply item class */}
                        <div>
                            {article.urlToImage ? ( // Conditionally render image
                                <img src={article.urlToImage} alt={article.title} className="news-image" /> // Render news image
                            ) : (
                                <img src="placeholderimage.png"  className="news-placeholder-image" /> // Render placeholder image
                            )}
                            <div className="news-details"> {/* Apply details class */}
                                <h3 className="news-title">{article.title}</h3> {/* Apply title class */}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <Footer />

        {/* ToastContainer for displaying toast messages */}
        <ToastContainer position="top-right" />
        </>
    );
}

export default NewsComponent;
