import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/admin.css';

const AddProduct = ({ isOpen, onClose, onSubmit }) => {
    const [product, setProduct] = useState({
        name: '',
        image: '',
        price: '',
        category: '',
        status: 'active'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(product);
        setProduct({
            name: '',
            image: '',
            price: '',
            category: '',
            status: 'active'
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-header">
                    <h2>Add New Product</h2>
                    <button 
                        type="button" 
                        className="close-button"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="product-form">
                    <div className="form-group">
                        <label htmlFor="name">Product Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={product.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter product name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Image URL</label>
                        <input
                            id="image"
                            name="image"
                            type="url"
                            value={product.image}
                            onChange={handleChange}
                            required
                            placeholder="Enter image URL"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            min="0"
                            step="0.01"
                            value={product.price}
                            onChange={handleChange}
                            required
                            placeholder="Enter price"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            value={product.category}
                            onChange={handleChange}
                            required
                            placeholder="Enter category"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            value={product.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="submit-button">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

AddProduct.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default AddProduct;