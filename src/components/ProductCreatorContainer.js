import { connect } from 'react-redux';

import { createProduct } from '../actions';
import ProductCreator from '../components/ProductCreator';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateProduct: product => {
            dispatch(createProduct(product));
        }
    };
};

const ProductCreatorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCreator);

export default ProductCreatorContainer;