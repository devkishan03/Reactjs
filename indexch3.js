import React from 'react';
import ReactDom from 'react-dom';
import css from './index.css';
const webpage=document.getElementById('root');
const heading={
    Display:'flex',
    textAlign:'center',
    justifyContent:'center',
    marginTop:'10rem',
    padding:'20px',
    borderRadious:'20px',
    backgroundColor:'antiquewhite',
    fontSize:'5rem',
    
};
const time=new Date().getHours();
let massage='';
if(time>=1&&time<=7){
    massage='Good Morning';
    heading.color='green';
}else if(time>7&& time<=12){
    massage='Good Afternoon'
    heading.color='orange';
}else if(time>12 && time<=19){
    massage='Good Evining';
    heading.color='blue';
}else{
    massage='Good Night';
    heading.color='black';
}

const greet="Hello sir";
ReactDom.render(
    <>
        <div>
            <h1 style={heading} ><span style={{color:'burlywood'}}>{greet}</span><span> {massage}</span></h1>
        </div>
    </>



    ,webpage
);