import Transaksi from "../models/Transaksi.js";


// Mendapatkan seluruh data history / riwayat order
export const getTransaksi = async (req,res) => {
    try {
        const transaksi = await Transaksi.find(); //Mengambil seluruh data riwayat order
        
        res.json(transaksi);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

//Menampilkan riwayat order berdasarkan order id
export const getTransaksiByID = async (req,res) => {
    try {
        const transaksi = await Transaksi.findById(req.params.id);
        res.json(transaksi);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

// Bikin riwayat order
export const createTransaksi = async (req,res) => {
    const transaksi = new Transaksi(req.body);
    try {
        const createTransaksi= await transaksi.save(); // create riwayat order
        res.status(201).json(createTransaksi);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateTransaksi = async (req,res) => {
    const cekId = await Transaksi.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data Tidak Ditemukan"});
    try {
        const updateTransaksi= await Transaksi.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateTransaksi);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteTransaksi = async (req,res) => {
    const cekId = await Transaksi.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data Tidak Ditemukan"});
    try {
        const deletedTransaksi = await Transaksi.deleteOne({_id: req.params.id});
        res.status(200).json(deletedTransaksi);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
