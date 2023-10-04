import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "",
    database: "customer_sign_up"
})
app.post('/register', (req, res)=>{
    const sql ="INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json({Error: "Inserting data Error in server"});
        return res.json({Status: "Success"});
    })
    
    // bcrypt.hash(req.body.password.toString(),salt,(err, hash) => {
    //     if(err) return res.json({Error: "Error for hashing password"});
        
    // })
})

//make login route by verifying email, password etc. if email, password mathes send user to home page if doesnot match send an error message saying email, password doesnt match...

    // app.post('/login', (req, res)=>{
    //     const sql ="INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    //     const values = [
    //         req.body.name,
    //         req.body.email,
    //         req.body.password
    //     ]
    //     db.query(sql, [values], (err, result) => {
    //         if(err) return res.json({Error: "Inserting data Error in server"});
    //         return res.json({Status: "Success"});
    //     })
    

app.listen(3000, () => {
    console.log("Running...");
}) 
