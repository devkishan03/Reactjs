import React from 'react';
import ReactDom from 'react-dom';
const fname="kishan";
const lname="singh";
const webpage=document.getElementById('root');
const dateobj=new Date();
const date=dateobj.toLocaleDateString("en-GB");
const time=dateobj.toLocaleTimeString();
const imglink1='https://picsum.photos/100/100';
const imglink2='https://picsum.photos/120/100';
const imglink3='https://picsum.photos/130/100';
const imglink4='https://picsum.photos/140/100';
const weblink='https://www.netflix.com/in';
ReactDom.render(
    <>
        <h1>{`My name is ${fname} ${lname}`}</h1>
        <p>{`Todays date will be ${date}`}</p>
        <p>{`Todays current time is ${time}`}</p>
        <a href='https://www.Google.com' target='_blank'>This is link for Google.com</a><br></br>
        <img src={imglink1} alt='random images' height={100} width={100}/>
        <img src={imglink2} alt='random images'/>
        <img src={imglink3} alt='random images'/>
        <a href={weblink} target='_blank'>
        <img src={imglink4} alt='random images'/>
        </a>
        
    </>,
      webpage
);