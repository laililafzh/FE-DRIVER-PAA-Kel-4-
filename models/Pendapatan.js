import mongoose from "mongoose";
const Pendapatan = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    Tanggal:{
        type: Date,
        required: true,
        default: Date.now
    },
    trip:{
        type: Number,
        required: true
    },
    bonus:{
        type: Number,
        required: true
        
    },
    tipCustomer:{
        type: Number,
        required: true
    },
    totalPendapatan:{
        type: Number,
        required: true
    },

    
});

export default mongoose.model('Pendapatan', Pendapatan);