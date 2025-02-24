import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: 'pixel-toast',
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
          border: '2px solid #4a4a4a',
          fontFamily: 'inherit',
          padding: '12px',
          fontSize: '14px',
        },
      }}
    />
  );
}
