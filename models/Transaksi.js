import mongoose from "mongoose";
const Transaksi = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    Tanggal:{
        type: Date,
        required: true,
        default: Date.now
    },
    tipeTransaksi:{
        type: String,
        required: true
    },
    noTransaksi:{
        type: Number,
        required: true
        
    },
    saldoKeluar:{
        type: Number,
        required: true
    },
    saldoMasuk:{
        type: Number,
        required: true
    },
    saldoSekarang:{
        type: Number,
        required: true
    },

    
});

export default mongoose.model('Transaksi',Transaksi);