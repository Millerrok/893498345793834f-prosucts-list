import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import Box from "@material-ui/core/Box";
import {inject, observer} from "mobx-react";

const MINIMAL_PAGES_COUNT_TO_SHOW = 2;

const ListPagination = ({shop}) => {
    const {currentPage, totalPages, updateCurrent} = shop.products.collection.pagination;
    if (totalPages < MINIMAL_PAGES_COUNT_TO_SHOW) {
        return null;
    }

    const onPageChanged = (event, value) => {
        updateCurrent(value);
    };

    return (
        <Box>
            <Pagination count={totalPages} page={currentPage} onChange={onPageChanged}/>
        </Box>
    );
};

export default inject('shop')(observer(ListPagination));
