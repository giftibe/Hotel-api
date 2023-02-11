const {RoomTypes,Room} = require('./rooms')

class controller{
    async createRoomType(id){
            return await RoomTypes.create()
    }
    
    async createRoom(id){
            return await Room.create()
    }

    async editRoom(id, data){
        return await Room.findOneAndUpdate({_id: id}, {type: data});
    }

    async deleteRoom(id){
        return await Room.findOneAnddelete({_id: id})
    }

    async fetchRoom(id){
        return await Room.find({_id: id})
    }

    async fetchAllRooms(){
        // return await Room.find({}, function(err, rooms) {
            // if (!err) { 
            //     console.log(rooms);
            //     process.exit();
            // }
            // else {
            //     throw err;
            // }
        // });
        return await Room.find({}); 
    }
}

module.exports = new controller()