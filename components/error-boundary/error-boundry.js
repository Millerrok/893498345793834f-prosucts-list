import React, {Component} from "react";
import ErrorIndicator from "../error-indicator";
import {inject, observer} from "mobx-react";

@inject('shop') @observer
class ErrorBoundary extends Component {
    componentDidCatch(error, {componentStack}) {
        this.props.shop.error.make(error.message);

        console.error(`ErrorBoundary componentStack: ${componentStack}`);
    }

    render() {
        if (!this.props.shop.error.exist) {
            return this.props.children;
        }

        return (
            <ErrorIndicator/>
        );
    }
}

export default ErrorBoundary;
