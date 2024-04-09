/*
<div>
    <h1>this is h1</h1>
</div>

*/



const heading=React.createElement('div',{id:'parent'},
    [
    React.createElement('h1',{id:'heading'},'this is heading h1'),
    React.createElement('h2',{id:'heading'},'this is heading h2')


    ]
)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)