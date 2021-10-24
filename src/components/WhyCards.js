import cards from '../data/cards';
import Api from '../images/icon-api.svg';

const WhyCards = () => {
    return ( 
        <>
            <div className="cards-section">
                <ul className="cards-list">
                    {cards.map(( card, index ) => (
                        <li key={ index }>
                            <div className="card-container">
                                <figure className="cards-list_figure">
                                    <img className="cards-list_figure__image" src={card.image} alt={card.title} />
                                </figure>
                                <h3 className="cards-list_title">{card.title}</h3>
                                <p className="cards-list_text">{card.text}</p>
                            </div>
                        </li> 
                    ))}
                </ul>
            </div>
        </>
     );
}
 
export default WhyCards;