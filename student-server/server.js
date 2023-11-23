const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

// Parse URL-encoded bodies (as sent by the HTML form)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

const port = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'students'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Insert the form data into MySQL
    db.query('INSERT INTO student_test SET ?', formData, (error, results) => {
        if (error) {
            console.error('Error inserting data into database:', error);
            res.status(500).json({ success: false, message: 'Failed to submit form data' });
            return;
        }
        res.status(200).json({ success: true, message: 'Form data submitted successfully' });
       
    });
});


// read--------------
app.get('/students', (req, res) => {
    const SELECT_ALL_STUDENTS_QUERY = 'SELECT * FROM student_test';
    db.query(SELECT_ALL_STUDENTS_QUERY, (error, results) => {
      if (error) {
        res.status(500).send('Error fetching data from database');
        throw error;
      }
      res.json(results);
    });
  });


  // Update a student by ID
app.put('/students/:id', (req, res) => {
  const studentId = req.params.id;
  const { name, gender, image /* add other fields here for update */ } = req.body;

  db.query(
    'UPDATE student_test SET name = ?, gender = ?, image = ? WHERE id = ?',
    [name, gender, image, studentId],
    (error, results) => {
      if (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ success: false, message: 'Failed to update student' });
      } else {
        res.status(200).json({ success: true, message: 'Student updated successfully' });
      }
    }
  );
});

// Delete a student by ID
app.delete('/students/:id', (req, res) => {
  const studentId = req.params.id;

  db.query('DELETE FROM student_test WHERE id = ?', [studentId], (error, results) => {
    if (error) {
      console.error('Error deleting student:', error);
      res.status(500).json({ success: false, message: 'Failed to delete student' });
    } else {
      res.status(200).json({ success: true, message: 'Student deleted successfully' });
    }
  });
});


app.listen(port, () => {
    console.log('listening on port', port);
});
