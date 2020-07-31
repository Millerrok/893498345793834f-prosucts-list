import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {withStyles} from '@material-ui/core';
import {compose} from '../../utils';
import PropTypes from 'prop-types';

const ListPagination = ({pagination, classes, minimumPageCount}) => {
    const onPageChanged = (event, value) => {
        pagination.updateCurrentPage(value);
    };

    if (pagination.pagesCount < minimumPageCount) {
        return null;
    }

    return (
        <Pagination
            className={classes.pagination}
            count={pagination.pagesCount}
            page={pagination.current}
            defaultPage={6}
            siblingCount={0}
            boundaryCount={2}
            onChange={onPageChanged}/>
    );
};

ListPagination.protoType = {
    minimumPageCount: PropTypes.number.isRequired,
    classes: PropTypes.shape({
        pagination: PropTypes.object.isRequired,
    }),
    pagination: PropTypes.shape({
        updateCurrent: PropTypes.func.isRequired,
        totalPages: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired,
    }),
};

ListPagination.defaultProps = {
    minimumPageCount: 2,
};

const styles = {
    pagination: {
        margin: '15px 0',
        '& > ul': {
            justifyContent: 'center',
        }
    }
};

export default compose(
    withStyles(styles),
)(ListPagination);
