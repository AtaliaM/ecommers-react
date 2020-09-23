import React from 'react';
import store from '../store';
import { Link } from 'react-router-dom';
import './Products.css';

class Products extends React.Component {

    state = { products: [] }

    componentDidMount() {
        console.log(store);
        this.setState({ products: store })
    }

    render() {
        return (
            <div className="products-container">
                <h2>Product List</h2>
                {this.state.products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link to={{pathname: `/product/${product.id}`, obj: product}}>{product.title}</Link>
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default Products;


