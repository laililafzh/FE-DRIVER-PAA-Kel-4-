import mongoose from "mongoose";

const Saldo = mongoose.Schema({
    jumSaldo:{
        type: Number,
        required: true
    },
});

export default mongoose.model('Saldo', Saldo);