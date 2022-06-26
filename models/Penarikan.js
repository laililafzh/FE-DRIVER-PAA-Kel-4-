import mongoose from "mongoose";

const Penarikan = mongoose.Schema({
    jumlahSaldo:{
        type: Number,
        required: true
    },
});

export default mongoose.model('Penarikan', Penarikan);