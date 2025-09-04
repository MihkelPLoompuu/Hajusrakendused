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
    for()
    result += "</ul>"
    result += "</body></html>"
})