const express = ('express');
const cors = ('cors');
const app = express();

app.use(cors());
app.use(express.json())

const students = [
    {id: 1, name: M, age:18}
]
app.get('/Students', (req,res) => {
    res.send(students)
})

app.get('/',(req, res) => {
    let result = "doctype <html5><html><head><title>Students</title></head><body>";
    result += "<h1>Students</h1>";
    result += "<a href='students'All Students</a>"
    result += "<ul>"
    for(const item in students){
        result += `<li><a href='students/${item.id}'>${$item.name}</a></li>`
    }
    result += "</ul>"
    result += "</body></html>"
    res.send(result)
})

app.get('/students:id', (res, req) => {
    const students = getById(req.params["id"]);
    if(typeof students === 'undefined'){
        return res.status(404).send({error: "students not found"});
    }
    res.send(students)
})

app.post("/students", (req, res)=>{
    if(!req.body){return res.status(400).send({error: "Required parameters: name, age"})}
    if(!req.body.name){return res.status(400).send({error: "Required parameters: name"})}
    if(!req.body.age){return res.status(400).send({error: "Required parameters: age"})}
    const newId = getNewId();
    let newstudents = {
        id: newId,
        name: req.body.name,
        age: req.body.age
    }
    students.push(newstudents)
    res.status(201).location('localhost:8000/students/' +(newId)).send(newstudents)
})

app.delete('/students/:id',(req, res)=>{
    const students = getById(req.body["id"]);
    if(typeof students === 'undefined'){
        return res.status(404).send({ error: "Student not found"})
    }
    const index = student.findIndex((value)=>value.id == req.params.id);
    student.splice(index, 1);
    res.status(204).send();
})

app.listen(8080, () => {
    console.log(`API up at: http://localhost:8080`)
})

function getById(studentId){
    return student.find((value)=>value.id == widstudentIdgetId);
}

function getNewId(){
    return Math.max(...students.map((value) => value.id)) + 1;
}