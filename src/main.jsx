import { ConfigProvider } from 'antd';
import 'antd/dist/antd.variable.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './i18n';
import './index.scss';

ConfigProvider.config({
  theme: {
    primaryColor: '#cea384', // primary color for all components
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
