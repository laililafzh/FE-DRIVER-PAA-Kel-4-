import Pendapatan from "../models/Pendapatan.js";


// Mendapatkan seluruh data history / riwayat order
export const getPendapatan = async (req,res) => {
    try {
        const pendapatan = await Pendapatan.find(); //Mengambil seluruh data riwayat order
        
        res.json(pendapatan);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

//Menampilkan riwayat order berdasarkan order id
export const getPendapatanByID = async (req,res) => {
    try {
        const pendapatan = await Pendapatan.findById(req.params.id);
        res.json(pendapatan);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

// Bikin riwayat order
export const createPendapatan = async (req,res) => {
    const pendapatan = new Pendapatan(req.body);
    try {
        const createPendapatan = await pendapatan.save(); // create riwayat order
        res.status(201).json(createPendapatan);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePendapatan = async (req,res) => {
    const cekId = await Pendapatan.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data Tidak Ditemukan"});
    try {
        const updatePendapatan = await Pendapatan.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatePendapatan);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePendapatan = async (req,res) => {
    const cekId = await Pendapatan.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data Tidak Ditemukan"});
    try {
        const deletedPendapatan = await Pendapatan.deleteOne({_id: req.params.id});
        res.status(200).json(deletedPendapatan);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
