import React from 'react';
// import store from '../store';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {

        const { id } = useParams();
        console.log(id);
        console.log(props);

        return (
            <div style={{ display: "inline-block", border: "1px solid black", margin: "10px", padding: "5px" }}>
                <h3>{props.location.obj.title}</h3>
                <img src={props.location.obj.imageUrl} alt={props.location.obj.title}
                    style={{ width: "230px", height: "330px" }}></img>
                <h3>{`Price: ${props.location.obj.price}`}</h3>
                <h3>{`Size: ${props.location.obj.size}`}</h3>

                <Link to={`/products`}>Back to products</Link>
            </div>
        );
    
}

export default ProductDetail;

//option 1//

// class ProductDetail extends React.Component {

//     state = {productFound: false, currentProduct: {}}

//     componentDidMount() {
//         const found = store.find(obj => obj.id === Number(this.props.match.params.id));
//         if(found) {
//             console.log(found);
//             this.setState({productFound: true, currentProduct: found});
//         }  
//     }

//     render() {
//         console.log(store);
//         console.log(this.props);
//         if(!this.state.productFound) {
//             return (
//                 <div>Product not found</div>
//             )
//         }
//         return (
//             <div style={{display: "inline-block", border: "1px solid black", margin:"10px", padding:"5px"}}>
//                 <h3>{this.state.currentProduct.title}</h3>
//                 <img src={this.state.currentProduct.imageUrl} alt={this.state.currentProduct.title} 
//                 style={{width:"230px", height:"330px"}}></img>
//                 <h3>{`Price: ${this.state.currentProduct.price}`}</h3>
//                 <h3>{`Size: ${this.state.currentProduct.size}`}</h3>

//                 <Link to={`/products`}>Back to products</Link>
//             </div>
//         );
//     }
// }
// export default ProductDetail;
