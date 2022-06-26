import History from "../models/History.js";

// Mendapatkan seluruh data history / riwayat order
export const getHistory = async (req,res) => {
    try {
        const history = await History.find(); //Mengambil seluruh data riwayat order
        
        res.json(history);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

//Menampilkan riwayat order berdasarkan order id
export const getHistoryByID = async (req,res) => {
    try {
        const history = await History.findById(req.params.id);
        res.json(history);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

// Bikin riwayat order
export const createHistory = async (req,res) => {
    const history = new History(req.body);
    try {
        const createHistory = await history.save(); // create riwayat order
        res.status(201).json(createHistory);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateHistory = async (req,res) => {
    const cekId = await History.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data Tidak Ditemukan"});
    try {
        const updatedHistory = await History.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedHistory);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteHistory = async (req,res) => {
    const cekId = await History.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data Tidak Ditemukan"});
    try {
        const deletedHistory = await History.deleteOne({_id: req.params.id});
        res.status(200).json(deletedHistory);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
