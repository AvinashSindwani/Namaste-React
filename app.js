
const ele= React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1",{},"Nested Elements using React h1!"),
         React.createElement("h2",{},"Nested Elements using React h2!")
        ]), React.createElement(
        "div",
        {id: "child2"},
        [React.createElement("h1",{},"Nested Elements using React h1!"),
         React.createElement("h2",{},"Nested Elements using React h2!")
        ]
    )]

);

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(ele);