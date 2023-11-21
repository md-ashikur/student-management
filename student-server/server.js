const  express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'students'
});


app.post('/add_students', (req, res) => {
    sql = "INSERT INTO student_details (firstname, lastname, birthdate, gender, image, roll, bloodgroup, religion, student_id, batch, dept, address, city, state, postcode, country, email, phone) VALUES (?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.birthdate,
        req.body.gender,
        req.body.image,
        req.body.roll,
        req.body.bloodgroup,
        req.body.student_id,
        req.body.batch,
        req.body.dept,
        req.body.address,
        req.body.city,
        req.body.state,
        req.body.postcode,
        req.body.country,
        req.body.email,
        req.body.phone

    ]
    db.query(sql, values, (err, result)=>{
        if(err) return res.json({message:'Something went wrong' + err})
        return res.json({success: "Student add successfully"})
    } )
})

 
// read data----------

app.get('/', (req, res)=>{
    const sql = 'SELECT * FROM student_details';
    db.query(sql, (err, result)=>{
        if(err) return res.json({message:'Something went wrong' + err})
        return res.json(result);
    })
})

app.listen(port, ()=>{
    console.log('listing');
});