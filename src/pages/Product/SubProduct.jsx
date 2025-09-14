import { useLocation, useNavigate } from 'react-router-dom';
import './SubProduct.css';

const SubProduct = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const productData = location.state?.productData;

    // If no product data, redirect back to products page
    if (!productData) {
        navigate('/products');
        return null;
    }

    const handleBackToProducts = () => {
        navigate('/products');
    };

    return (
        <div className="sub-product-container">
            <div className="sub-product">
                {/* Main product title */}
                <h1>{productData.title}</h1>
                
                {/* Product image */}
                <div className="sub-product-image">
                    <img src={productData.image} alt={productData.title} />
                </div>
                
                {/* Description columns */}
                <div className="sub-product-content">
                    <div className="sub-product-description-left">
                        <p>{productData.description}</p>
                    </div>
                    
                    <div className="sub-product-description-right">
                        <p>{productData.description}</p>
                    </div>
                </div>
                
                {/* Back button at center bottom */}
                <div className="back-button-container">
                    <button 
                        onClick={handleBackToProducts}
                        className="back-button"
                    >
                        Return
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubProduct;