import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#FF202B]/20 border border-[#FF202B] flex items-center justify-center text-[#FF202B] mb-4">
            !
          </div>
          <h1 className="font-display text-2xl font-bold mb-2">VAYRO Studio</h1>
          <p className="text-[#D9DDE2]/70 text-sm max-w-md mb-6">
            An unexpected visual rendering state occurred. Please refresh the page to reload the cinematic experience.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-lg bg-[#FF202B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#ff3b44] transition-colors"
          >
            Reload Website
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
