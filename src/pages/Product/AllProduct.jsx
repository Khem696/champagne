import { useState, useEffect } from 'react';
import './AllProduct.css';

const productDetails = [
    {
        id: 1,
        title: "CHAMPAGNE FLUTE",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.",
        image: "/champagne/images/product-image.png",
    },
    {
        id: 2,
        title: "CHAMPAGE FAT",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.",
        image: "/champagne/images/product-image.png",
    }
];

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
            image: "/champagne/images/champagne-flute.png"
        },
        {
            id: 2,
            title: "CHAMPAGE FAT",
            description: [
                "Lorem ipsum",
                "Lorem ipsum",
                "Lorem ipsum"
            ],
            image: "/champagne/images/champagne-fat.png"
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

            {/* Product Details Section */}
            <section className="product-details-section">
                {productDetails.map((product, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div key={product.id} className="product-detail-row split-row">
                            {/* Left Half */}
                            <div className={`left-half ${isEven ? 'bg-burgundy' : 'bg-pink'}`}>
                                {isEven ? (
                                    <div className="product-detail-image-container">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="product-detail-image"
                                        />
                                    </div>
                                ) : (
                                    <div className="product-detail-content">
                                        <h2 className="product-detail-title">{product.title}</h2>
                                        <p className="product-detail-description">{product.description}</p>
                                        <a href="#" className="see-more-link">see more!</a>
                                    </div>
                                )}
                            </div>
                            {/* Right Half */}
                            <div className="right-half bg-white">
                                {isEven ? (
                                    <div className="product-detail-content">
                                        <h2 className="product-detail-title">{product.title}</h2>
                                        <p className="product-detail-description">{product.description}</p>
                                        <a href="#" className="see-more-link">see more!</a>
                                    </div>
                                ) : (
                                    <div className="product-detail-image-container">
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