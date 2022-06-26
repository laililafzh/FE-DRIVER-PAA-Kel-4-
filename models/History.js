import mongoose from "mongoose";

const History = mongoose.Schema({
    idOrder:{
        type: Number,
        required: true
    },
    namaCustomer:{
        type: String,
        required: true
    },
    jenisOrder:{
        type: String,
        required: true,
        default: "Gosend"
    },
    dari:{
        type: String,
        required: true
    },
    menuju:{
        type: String,
        required: true
    },
    tanggal:{
        type: Date,
        required: true,
        default: Date.now
    },
    
});

export default mongoose.model('Historys', History);