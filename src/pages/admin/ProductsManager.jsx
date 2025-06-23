import { useState } from 'react';
import AddProduct from '../../components/Product/Addproduct';
import '../../styles/admin.css';

const ProductsManager = () => {
    const [isAddProductOpen, setIsAddProductOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddProduct = (newProduct) => {
        // Here you would typically make an API call to save the product
        // For now, we'll just add it to the local state
        setProducts([...products, { ...newProduct, id: Date.now() }]);
    };

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        // TODO: Implement product editing logic
        console.log('Edit product:', product);
    };

    const handleDeleteProduct = (productId) => {
        // TODO: Implement product deletion logic
        console.log('Delete product:', productId);
    };

    return (
        <div className="products-manager">
            <div className="page-header">
                <h1>Products Manager</h1>
                <button 
                    className="add-product-btn"
                    onClick={() => setIsAddProductOpen(true)}
                >
                    Add New Product
                </button>
            </div>

            <div className="products-list">
                {products.length === 0 ? (
                    <p>No products found. Create your first product!</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.status}</td>
                                    <td>
                                        <button onClick={() => handleEditProduct(product)}>Edit</button>
                                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {selectedProduct && (
                <div className="product-editor">
                    {/* Product editing form will go here */}
                </div>
            )}

            <AddProduct
                isOpen={isAddProductOpen}
                onClose={() => setIsAddProductOpen(false)}
                onSubmit={handleAddProduct}
            />
        </div>
    );
};

export default ProductsManager; 