import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import AI from './components/ai/AI';
import Table from './components/table/Table';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
 <Header />
 <AI />
<Table />

</>
);

