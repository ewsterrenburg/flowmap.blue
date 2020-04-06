import * as React from 'react';
import ErrorFallback from './ErrorFallback';

class ErrorBoundary extends React.Component<{}, {}> {
  state = {hasError: false, error: null};

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback error={this.state.error}/>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
