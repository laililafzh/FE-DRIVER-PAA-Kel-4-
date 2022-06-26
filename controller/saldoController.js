import Saldo from "../models/Saldo.js";

export const getSaldo= async (req,res) => {
    try {
        const saldo = await Saldo.find(); //Mengambil seluruh data riwayat order
        
        res.json(saldo);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

// Bikin riwayat order
export const createSaldo= async (req,res) => {
    const saldo = new Saldo(req.body);
    try {
        const createSaldo = await saldo.save(); // create riwayat order
        res.status(201).json(createSaldo);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


export const deleteSaldo = async (req,res) => {
    const cekId = await Saldo.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data Tidak Ditemukan"});
    try {
        const deletedSaldo = await Saldo.deleteOne({_id: req.params.id});
        res.status(200).json(deletedSaldo);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

