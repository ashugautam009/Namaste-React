import React from 'react';
import  ReactDOM  from "react-dom";

//React.createElement==>create a object and when we rendered this on DOM than it become and HTML.

//React Element
const heading=React.createElement('h1',{id:'heading'},"Namaste React");
console.log(heading);
ReactDOM.render(heading,document.getElementById('root'));

/*
It is hard to write the HTML in above way so JSX came in picture-->React & JSX is 2 diffrent thing 
we can write our React the above complex method also but to help the devolper we use JSX 
*/ 

//JSX->JSX IS NOt HTML -->It is like HTML Syntax

const jsxHeading=(
    <h1 id='heading'>
        This is Namaste React inside jsxheading...
    </h1>
    );
 console.log(jsxHeading);

const Title=()=>{
    return(
        <h2>inside the title now put in Heading</h2>
    )
}
 //React Functional  Component
const number=1000+200;
const HeadingComponent=()=>{
    return(
        <>
            {Title()}
            {jsxHeading}
            {number}
            <h1>1 st Nmaste react component</h1>
        </>
    )
}
ReactDOM.render(<HeadingComponent/>,document.getElementById('root'));
