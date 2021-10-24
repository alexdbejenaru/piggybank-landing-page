import articles from '../data/articles';

const Articles = () => {
    return ( 
        <>
            <div className="articles-section">
                <ul className="articles-list">
                    {articles.map(( article, index ) => (
                        <li key={ index } className="article-container">
                            <div className="article-container_box">
                                <div className="articles-list_figure">
                                    <img className="articles-list_figure__image" src={article.image} alt={article.title} />
                                </div>
                                <p className="article-list_author">{article.author}</p>
                                <h3 className="articles-list_title">{article.title}</h3>
                                <p className="articles-list_text">{article.text}</p>
                                <div className="articles_cta cta">
                                    <button>
                                        Read more...
                                    </button>
                                </div>
                            </div>
                        </li> 
                    ))}
                </ul>
            </div>
        </>
     );
}
 
export default Articles;