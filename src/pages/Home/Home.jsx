import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../../utils/imageUtils';
import { ICONS } from '../../utils/iconUtils';
import './Home.css';


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const heroContent = [
        {
            id: 1,
            title: "Introduction",
            backgroundImage: IMAGES.HERO_BG,
            icon: IMAGES.LOGO_DARK,
            text: "Magical potion elegance and sophistication combined, just like a Champagne Flute glass.",
        },
        {
            id: 2,
            title: "Introduction",
            backgroundImage: IMAGES.HERO_BG,
            icon: IMAGES.LOGO_DARK,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh eu feugiat nulla facilisisaliquam",
        }
    ];

    useEffect (() => {
        const timer = setInterval(()=>{
            setCurrentSlide((prev)=>
                prev === heroContent.length - 1 ? 0 : prev + 1
            );
        }, 5000)
        return () => clearInterval(timer);
    },[]);

    // Handle scroll position restoration when returning from product detail
    useEffect(() => {
        const savedScrollPosition = sessionStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            // Add a small delay to ensure content is fully rendered
            setTimeout(() => {
                window.scrollTo(0, parseInt(savedScrollPosition));
                sessionStorage.removeItem('scrollPosition'); // Clear after use
            }, 100);
        }
    }, []);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? heroContent.length - 1 : prev - 1
        );
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) =>
            prev === heroContent.length - 1 ? 0 : prev + 1
        );
    };

    const handleSeeMore = (product) => {
        // Store current scroll position before navigating - use more reliable method
        const currentScrollPosition = window.pageYOffset || 
                                     document.documentElement.scrollTop || 
                                     document.body.scrollTop || 0;
        sessionStorage.setItem('scrollPosition', currentScrollPosition.toString());
        
        // Navigate to SubProduct page with product data and source info
        navigate(`/products/${product.id}`, { 
            state: { 
                productData: product,
                fromHome: true 
            } 
        });
    };

    return(
        <div className="home-wrapper">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg">
                    {/* Replace with actual hero image if available */}
                </div>
                <div className="hero-icon">
                    <img src={heroContent[currentSlide].icon} alt="hero-icon" />
                </div>
                <div className="hero-text">
                    <h2>{heroContent[currentSlide].text}</h2>
                </div>
                {/* Slider Navigation */}
                <div className="slider-navigation">
                    <div className="slider-arrows">
                        <button
                            className="slider-arrow prev-arrow"
                            onClick={handlePrevSlide}
                            aria-label="Previous slide"
                        >
                        </button>
                        <button
                            className="slider-arrow next-arrow"
                            onClick={handleNextSlide}
                            aria-label="Next slide"
                        >
                        </button>
                    </div> 
                </div>
            </section>

            {/* Champagne Products Section */}
            <section className="products-section">
                <h2 className="products-title">CHAMPAGNE PRODUCTS</h2>
                <div className="products-row">
                    <div className="product-card">
                        <img className="product-img" src={IMAGES.CHAMPAGNE_FLUTE} alt="Champagne Flute" />
                        <div className="product-label">
                            <h3>Champagne Flute</h3>
                        </div>
                    </div>
                    <div className="product-seperator">
                        <img className="product-seperator-icon" src={ICONS.SPARKLING_ICON} alt="Sparkling Icon" />
                    </div>
                    <div className="product-card">
                        <img className="product-img" src={IMAGES.CHAMPAGNE_COUPE} alt="Champagne Coupe" />
                        <div className="product-label">
                            <h3>Champagne Coupe</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Section */}
            {/* OLD DETAILS SECTION - COMMENTED OUT
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
                        <h3 className="pink">CHAMPAGE COUPE</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>
                        <div className="see-more">see more!</div>
                    </div>
                    <div className="details-img placeholder-img" />
                </div>
            </section>
            */}

            {/* NEW PRODUCT DETAILS SECTION */}
            <section className="product-details-section">
                {[
                    {
                        id: 1,
                        title: "CHAMPAGNE FLUTE",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.",
                        image: IMAGES.CHAMPAGNE_FLUTE
                    },
                    {
                        id: 2,
                        title: "CHAMPAGNE COUPE",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.",
                        image: IMAGES.CHAMPAGNE_COUPE
                    }
                ].map((product, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div key={product.id} className="product-detail-row split-row">
                            {/* Left Half */}
                            <div className="left-half">
                                {isEven ? (
                                    <div className={`product-detail-image-container ${isEven ? 'bg-burgundy' : 'bg-pink'}`}>
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="product-detail-image"
                                        />
                                    </div>
                                ) : (
                                    <div className="product-detail-content bg-white">
                                        <h2 className="product-detail-title">{product.title}</h2>
                                        <p className="product-detail-description">{product.description}</p>
                                        <button 
                                            onClick={() => handleSeeMore(product)} 
                                            className="see-more-link"
                                        >
                                            - see more -
                                        </button>
                                    </div>
                                )}
                            </div>
                            {/* Right Half */}
                            <div className="right-half">
                                {isEven ? (
                                    <div className="product-detail-content bg-white">
                                        <h2 className="product-detail-title">{product.title}</h2>
                                        <p className="product-detail-description">{product.description}</p>
                                        <button 
                                            onClick={() => handleSeeMore(product)} 
                                            className="see-more-link"
                                        >
                                            - see more -
                                        </button>
                                    </div>
                                    ) : (
                                    <div className={`product-detail-image-container ${isEven ? 'bg-burgundy' : 'bg-pink'}`}>
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="product-detail-image"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
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
};

export default Home; 