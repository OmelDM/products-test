import { connect } from "react-redux";

import { deleteProduct } from "../actions";
import ProductCatalog from "../components/ProductCatalog";

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteProduct: id => {
            dispatch(deleteProduct(id));
        }
    };
};

const ProductCatalogContainer = connect(mapStateToProps, mapDispatchToProps)(
    ProductCatalog
);

export default ProductCatalogContainer;
