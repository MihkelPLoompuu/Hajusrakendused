const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());        // Avoid CORS errors in browsers
app.use(express.json()) // Populate req.body

const widgets = [
    { id: 1, name: "Cizzbor", price: 29.99 },
    { id: 2, name: "Woowo", price: 26.99 },
    { id: 3, name: "Crazlinger", price: 59.99 },
    { id: 55, name: "gh", price: 88.99 },
]
app.get('/widgets', (req, res) => {
    res.send(widgets)
})

app.get('/', (req, res) => {
    let result = "<doctype html5><html><head><title>Widgets API</title></head><body>";
    result += "<h1>Widgets</h1>";
    result += "<a href='widgets'>All widgets</a>"
    result += "<ul>";
    for (const item of widgets) {
        result += `<li><a href='widgets/${item.id}'>${item.name}</a></li>`;
    }
    result += "</ul>";
    result += "</body></html>";
    res.send(result)
})

app.get('/widgets/:id', (req, res) => {
    const widget = getById(req.params.id);
    if (typeof widget === 'undefined') {
        return res.status(404).send({ error: "Widget not found" })
    }
    res.send(widget)
})


app.post('/widgets', (req, res) => {
    if (!req.body) {return res.status(400).send({error: "Missing required parameters: name, price"})}
    if (!req.body.name) {return res.status(400).send({ error: 'Missing required parameters: name' })}
    if (!req.body.price) { return res.status(400).send({ error: 'Missing required parameters: price' })}
    const newId = getNewId();
    let newWidget = {
        id: newId,
        price: req.body.price,
        name: req.body.name
    }
    widgets.push(newWidget)
    res.status(201).location('localhost:8080/widgets/' + (newId)).send(
        newWidget
    )
})

//DELETE
app.delete('/widgets/:id',(req,res)=>{
    const widget = getById(req.params.id);
    if (typeof widget === 'undefined') {
        return res.status(404).send({ error: "Widget not found" })
    }
    const index = widgets.findIndex((value)=>value.id == req.params.id);
    widgets.splice(index, 1);
    res.status(204).send();
})

app.listen(8080, () => {
    console.log(`API up at: http://localhost:8080`)
})

function getById(widgetId){
    return widgets.find((value)=>value.id == widgetId);
}

function getNewId(){
    return Math.max(...widgets.map((value) => value.id)) + 1;
}