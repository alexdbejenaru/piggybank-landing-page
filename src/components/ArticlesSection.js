import Articles from './Articles';

const ArticlesSection = () => {
    return ( 
        <>
        <section className="article-section-bg">
            <div class="custom-shape-divider-top-1635070899">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
                </svg>
            </div>

            <div className="article-section-container">
                <div className="article-section">
                    <h2 className="article-section_title">Articles</h2>
                </div>

                <Articles />
            </div>

            <div class="custom-shape-divider-bottom-1635078703">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
        </>
     );
}
 
export default ArticlesSection;