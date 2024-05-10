const heading=React.createElement("h1",{class:"heading"},"Hello world from react");
const div=ReactDOM.createRoot(document.querySelector('.main'));
div.render(heading);

const parent=React.createElement("div",{class:"parent"},
React.createElement("div",{class:"child"},
React.createElement("h1",{},"i am h1 from nested"))
);

div.render(parent);
