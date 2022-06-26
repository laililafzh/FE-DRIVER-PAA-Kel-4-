import Penarikan from "../models/Penarikan.js";

export const getPenarikan = async (req,res) => {
    try {
        const penarikan = await Penarikan.find(); //Mengambil seluruh data riwayat order
        
        res.json(penarikan);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

// Bikin riwayat order
export const createPenarikan = async (req,res) => {
    const penarikan = new Penarikan(req.body);
    try {
        const createPenarikan = await penarikan.save(); // create riwayat order
        res.status(201).json(createPenarikan);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
