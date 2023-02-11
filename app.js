//PACKAGES
const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
// const bodyParser = require('body-parser');


//IMPORTS
const {RoomTypes,Room} =  require('./rooms');
// const myMy = require('./routes')
const database = require('./database');
// const mongoose = require('mongoose');
const Controller =require("./controller")


const app = express();
app.use(cors());
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;


app.post("/api/v1/rooms-types", async (req, res) => {
    try {
        const data = await Controller.createRoomType(req.body);
        res.status(201)
            .send({ message: MESSAGES.CREATED, success: true, data });
    } catch (err) {
        res.status(500)
            .send({ message: err.message || MESSAGES.ERROR, success: false });
    }
});


app.listen(PORT, ()=>{
    database()
    console.log(`server started on port: ${PORT}`);
})














// app.get('/', async function(req, res){
//     roomtype = [{name:'single'}, {name:'couples'}]
//     room = [{name:'king', price: 9500}, {name:'master', price: 4300}]

//     const newroomtype = await roomTypes.create(roomtype)
//     const newrooms = await Room.create(room)

//     res.json({newroomtype, newrooms})
// })


//   let roomObj = {
//         name: req.body.name,
//         price: req.body.price
//     }
//     let newRoom = new Room(roomObj)

//     newRoom.save((err, room)=>{
//         if(!err){
//         console.log('adding rooms');
//         res.status(200).send(room)
//         }
//         else{
//             res.status(400).send('An error occured adding room')
//         }

//     })






// app.get('/', async (req, res) => {

//     //     const roomies = new Room (
//     //     {name: "master", price: 23234}
//     //         // [name: "Nighty", price: 23234],
//     //         // [ name: "suite", price: 127032],
        
//     // )

//     // roomies.save()
//     // console.log(roomies);
//     // res.send(roomies)
// })