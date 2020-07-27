import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types'

@inject('shop') @observer
class ErrorBoundary extends Component {
    componentDidCatch(error, {componentStack}) {
        this.props.shop.error.make(error.message);

        console.error(`ErrorBoundary componentStack: ${componentStack}`);
    }

    render() {
        const {shop, children} = this.props;
        const {exist, message} = shop.error;

        if (!exist) {
            return children;
        }

        return (
            <ErrorIndicator message={message}/>
        );
    }

    static get propTypes() {
        return {
            shop: PropTypes.shape({
                error: PropTypes.object.isRequired,
            })
        }
    }
}

export default ErrorBoundary;
