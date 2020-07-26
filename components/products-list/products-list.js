import React from "react";

import ListPagination from "../list-pagination";
import SearchField from "../search";
import CartList from "../cart-list";

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
