const heading=React.createElement
(
'h1',
{id: "heading", xyz: "abc"},
"Hello world from React"
);
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);


//Part -04

/*
Design This following with help of react 

<div id='parent'>
    <div id= 'child'>
        <h1>I am H1 Tag</h1>
    </div>
</div>

*/


/*
const parent=React.createElement('div',{id: "parent"},
            React.createElement('div',{id:'child'},
            React.createElement('h1',{},"I am h1 tag")
            ));
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
*/

/*
challenge 02-> Design This following with help of react 

<div id='parent'>
    <div id= 'child_01'>
        <h1>I am H1 Tag</h1>
        <h2>I am H2 Tag</h2>
    </div>
    <div id= 'child_02'>
        <h1>I am H1 Tag</h1>
        <h2>I am H2 Tag</h2>
    </div>
</div>

*/

const parent=React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child_01'},[
        React.createElement('h1',{},'I am child 01_H1 Tag'),
        React.createElement('h2',{},'I am child 01_H2 Tag'),
    ]),
    React.createElement('div',{id:'child_02'},[
        React.createElement('h1',{},'I am hild_02_H1 Tag'),
        React.createElement('h2',{},'I am hild_02_H2 Tag'),
    ]),
])
// const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)