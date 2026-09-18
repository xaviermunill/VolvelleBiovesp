import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 my-6 max-w-lg mx-auto bg-white rounded-3xl shadow-lg border border-red-100 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
            <AlertTriangle size={24} />
          </div>
          <h3 className="text-base font-black text-slate-800">
            {this.props.fallbackTitle || 'Se produjo un problema de visualización'}
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Se ha recuperado el estado seguro de la aplicación. Haz clic abajo para reiniciar la vista.
          </p>
          <button
            onClick={this.handleReset}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-black inline-flex items-center gap-2 shadow-sm transition-all"
          >
            <RefreshCw size={14} />
            <span>Recargar Aplicación</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
