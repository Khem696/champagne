import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../../utils/imageUtils';
import { ICONS } from '../../utils/iconUtils';
import champagneFluteData from '../../data/product/champagne_flute.json';
import champagneCoupeData from '../../data/product/champagne_coupe.json';
import './AllProduct.css';

// Load product data from JSON files
const productDetails = [champagneFluteData, champagneCoupeData];

const AllProduct = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    // Sample slider data - replace with your actual content
    const sliderContent = [
        {
            id: 1,
            title: "CHAMPAGNE FLUTE",
            description: [
                "Lorem ipsum",
                "Lorem ipsum",
                "Lorem ipsum"
            ],
            image: IMAGES.CHAMPAGNE_FLUTE
        },
        {
            id: 2,
            title: "CHAMPAGNE COUPE",
            description: [
                "Lorem ipsum",
                "Lorem ipsum",
                "Lorem ipsum"
            ],
            image: IMAGES.CHAMPAGNE_COUPE
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === sliderContent.length - 1 ? 0 : prev + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? sliderContent.length - 1 : prev - 1
        );
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) =>
            prev === sliderContent.length - 1 ? 0 : prev + 1
        );
    };

    const handleSeeMore = (product) => {
        // Navigate to SubProduct page with product data
        navigate(`/products/${product.id}`, { 
            state: { productData: product } 
        });
    };

    return (
        <div className="product-page">
            {/* Hero Section with Split Background */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="new-available">NEW AVAILABLE!</h1>

                    <div className="split-content">
                        <div className="left-content">
                            <h2>{sliderContent[currentSlide].title}</h2>
                            <ul>
                                {sliderContent[currentSlide].description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="center-content">
                            <div className="product-image-container">
                                <img
                                    src={sliderContent[currentSlide].image}
                                    alt={sliderContent[currentSlide].title}
                                    className="product-image"
                                />
                            </div>
                        </div>

                        <div className="right-content">
                            <h2>{sliderContent[currentSlide].title}</h2>
                            <ul>
                                {sliderContent[currentSlide].description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
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
                </div>
            </section>

            {/* Products Section */}
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
            <section className="product-details-section">
                {productDetails.map((product, idx) => {
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
                                            see more!
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
                                            see more!
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
        </div>
    );
};

export default AllProduct; 