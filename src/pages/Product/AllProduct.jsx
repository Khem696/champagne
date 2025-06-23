import { useState, useEffect } from 'react';
import './AllProduct.css';

const AllProduct = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample slider data - replace with your actual content
    const sliderContent = [
        {
            id: 1,
            title: "CHAMPAGE FLUTE",
            description: [
                "Lorem ipsum",
                "Lorem ipsum",
                "Lorem ipsum"
            ],
            image: "/images/champagne-flute.png" // Replace with actual image path
        },
        {
            id: 2,
            title: "CHAMPAGE FAT",
            description: [
                "Lorem ipsum",
                "Lorem ipsum",
                "Lorem ipsum"
            ],
            image: "/images/champagne-fat.png" // Replace with actual image path
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

    const handleDotClick = (index) => {
        setCurrentSlide(index);
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
                        <span className="slide-text">(slide)</span>
                        <div className="slider-dots">
                            {sliderContent.map((_, index) => (
                                <button
                                    key={index}
                                    className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                                    onClick={() => handleDotClick(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="products-section">
                <h2 className="section-title">CHAMPAGNE PRODUCTS</h2>
                <div className="products-grid">
                    {sliderContent.map((product) => (
                        <div key={product.id} className="product-display">
                            <div className="product-image-stand">
                                <img 
                                    src={product.image} 
                                    alt={product.title}
                                    className="product-image"
                                />
                            </div>
                            <h3 className="product-title">{product.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AllProduct; 