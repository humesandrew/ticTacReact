import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import ParticlesBg from 'particles-bg';
import Table from './components/table/Table';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<ParticlesBg type="cobweb" color="#ff0000" bg={true} />
 <Header />
 
<Table />

</>
);

