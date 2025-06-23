import './Home.css';

const Home = () => (
    <div className="home-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
            <div className="hero-bg">
                {/* Replace with actual hero image if available */}
            </div>
            <div className="hero-text">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh eu feugiat nulla facilisisaliquam</h2>
                <div className="hero-slide">(slide)</div>
            </div>
        </section>

        {/* Champagne Products Section */}
        <section className="products-section">
            <h2 className="products-title">CHAMPAGNE PRODUCTS</h2>
            <div className="products-row">
                <div className="product-card">
                    <div className="product-img placeholder-img" />
                    <div className="product-label">Champagne Flute</div>
                </div>
                <div className="product-card">
                    <div className="product-img placeholder-img" />
                    <div className="product-label">Champagne Fat</div>
                </div>
            </div>
        </section>

        {/* Product Details Section */}
        <section className="details-section">
            <div className="details-row">
                <div className="details-img placeholder-img" />
                <div className="details-text">
                    <h3>CHAMPAGE FLUTE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>
                    <div className="see-more">see more!</div>
                </div>
            </div>
            <div className="details-row reverse">
                <div className="details-text">
                    <h3 className="pink">CHAMPAGE FAT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>
                    <div className="see-more">see more!</div>
                </div>
                <div className="details-img placeholder-img" />
            </div>
        </section>

        {/* Badges Section */}
        <section className="badges-section">
            <div className="badges-row">
                <div className="badge">
                    <div className="badge-icon">🗸</div>
                    <div className="badge-label">FDA APPROVED</div>
                </div>
                <div className="badge">
                    <div className="badge-icon">🗸</div>
                    <div className="badge-label">FDA APPROVED</div>
                </div>
                <div className="badge">
                    <div className="badge-icon">🗸</div>
                    <div className="badge-label">FDA APPROVED</div>
                </div>
            </div>
        </section>
    </div>
);

export default Home; 