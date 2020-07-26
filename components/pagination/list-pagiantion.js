import React from "react";
import {inject, observer} from "mobx-react";

import Pagination from "@material-ui/lab/Pagination";
import {withStyles} from "@material-ui/core";
import {compose} from "../../utils";

const MINIMAL_PAGES_COUNT_TO_SHOW = 2;

const ListPagination = ({shop, classes}) => {
    const {currentPage, totalPages, updateCurrent} = shop.products.collection.pagination;
    const onPageChanged = (event, value) => {
        updateCurrent(value);
    };

    if (totalPages < MINIMAL_PAGES_COUNT_TO_SHOW) {
        return null;
    }

    return (
        <Pagination
            className={classes.pagination}
            count={totalPages}
            page={currentPage}
            defaultPage={6}
            siblingCount={0}
            boundaryCount={2}
            onChange={onPageChanged}/>
    );
};

const styles = {
    pagination: {
        margin: '15px 0',
        '& > ul': {
            justifyContent: 'center'
        }
    }
};

export default compose(
    withStyles(styles),
    inject('shop'),
    observer,
)(ListPagination);
