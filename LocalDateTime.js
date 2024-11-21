import React from 'react';
import ReactDom from 'react-dom';
const fname="kishan";
const lname="singh";
const webpage=document.getElementById('root');
const dateobj=new Date();
const date=dateobj.toLocaleDateString();
const time=dateobj.toLocaleTimeString();
ReactDom.render(
    <>
        <h1>{`My name is ${fname} ${lname}`}</h1>
        <p>{`Todays date will be ${date}`}</p>
        <p>{`Todays current time is ${time}`}</p>
    </>,
      webpage
);