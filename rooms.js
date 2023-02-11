const mongoose = require('mongoose');
// const {DATABASES} =require('./constants')
const Schema = mongoose.Schema


const roomTypeSchema =  new Schema({

        name: {type: String, required: true}
})

const roomSchema =  new Schema({
            name:{
                type:String,
                required: true
            },  
            prices: {
                type:Number,
                required: true
            },
            types:{
                type: mongoose.Types.ObjectId,
                ref: 'roomTypes',
                required: true
            },
        }
);

const RoomTypes = mongoose.model('myroomtype',  roomTypeSchema);
const Room = mongoose.model('room',  roomSchema);
module.exports = {RoomTypes,Room};