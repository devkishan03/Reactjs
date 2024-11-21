import React from 'react';
import ReactDom from 'react-dom';

const name="kishan singh";

const webpage=document.getElementById('root');
ReactDom.render(<h1>My name is {name} </h1>,webpage)