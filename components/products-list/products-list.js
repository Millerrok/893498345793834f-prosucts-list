import React from "react";
import SearchField from "../search";
import CartList from "../cart-list";
import ListPagination from "../list-pagination";

class ProductsList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SearchField/>
                <CartList/>
                <ListPagination/>
            </React.Fragment>
        );
    }
}


export default ProductsList;
