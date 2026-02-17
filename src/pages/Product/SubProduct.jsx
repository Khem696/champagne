import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductById } from '../../data/product';
import './SubProduct.css';

const SubProduct = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const productData = location.state?.productData || getProductById(id);

    useEffect(() => {
        if (!productData) {
            navigate('/products');
        }
    }, [productData, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackToProducts = () => {
        if (location.state?.fromProducts) {
            navigate('/products');
        } else if (location.state?.fromHome) {
            navigate('/');
        } else {
            const referrer = document.referrer;
            if (referrer.includes('/products')) {
                navigate('/products');
            } else {
                navigate('/');
            }
        }
    };

    if (!productData) {
        return null;
    }

    const keyDetails = productData.keyDetails || [];

    return (
        <div className="sub-product-wrapper">
            <section className="sub-product-hero">
                <h1 className="sub-product-hero-title">{productData.title}</h1>
            </section>

            <section className="sub-product-content">
                <div className="sub-product-image-frame">
                    <img src={productData.image} alt={productData.title} />
                </div>

                <div className="sub-product-details">
                    <div className="sub-product-description-card">
                        <h3 className="sub-product-section-label">ABOUT THIS PRODUCT</h3>
                        <p>{productData.description}</p>
                    </div>

                    <div className="sub-product-features-card">
                        {keyDetails.length > 0 ? (
                            <>
                                <h3 className="sub-product-section-label">KEY DETAILS</h3>
                                <ul className="sub-product-features">
                                    {keyDetails.map((detail, index) => (
                                        <li key={index}>
                                            <span className="sub-product-feature-sparkle">✦</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <div className="sub-product-description-card">
                                <h3 className="sub-product-section-label">ABOUT THIS PRODUCT</h3>
                                <p>{productData.description}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="sub-product-back-container">
                    <button
                        onClick={handleBackToProducts}
                        className="sub-product-back-button"
                    >
                        Return
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SubProduct;
