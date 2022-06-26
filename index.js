
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { createHistory, deleteHistory, getHistory, getHistoryByID, updateHistory } from "./controller/historyController.js";
import { createPenarikan, getPenarikan } from "./controller/penarikanController.js";
import { getSaldo, createSaldo, deleteSaldo } from "./controller/saldoController.js";
import { createPendapatan, deletePendapatan, getPendapatan, getPendapatanByID, updatePendapatan } from "./controller/pendapatanController.js";
import { createTransaksi, deleteTransaksi, getTransaksi, getTransaksiByID, updateTransaksi } from "./controller/transaksiController.js";

// const path = require("path");
const app = express();
const __dirname = path.resolve();


// Mengkonekan MongoDB ke dalam program
mongoose.connect('mongodb+srv://ngubers:17lDPtpeAwmjjVPV@ngubers.qysz6.mongodb.net/ngubers?retryWrites=true&w=majority',{});

const db = mongoose.connection;
db.on('error',(error)=>console.error(error));
db.once('open',()=> console.log("Database Connected"));

app.use(cors());
app.use(express.json());

app.get('/api/history', getHistory);

app.get('/api/history/:id', getHistoryByID);

app.post('/api/history/', createHistory);

app.put('/api/history/:id', updateHistory);

app.delete('/api/history/:id', deleteHistory);

app.post('/api/penarikan', createPenarikan);
app.get('/api/penarikan', getPenarikan);

app.get('/api/saldo', getSaldo);
app.post('/api/saldo', createSaldo);
app.delete('/api/saldo/:id', deleteSaldo);


app.get('/api/pendapatan', getPendapatan);

app.get('/api/pendapatan/:id', getPendapatanByID);

app.post('/api/pendapatan/', createPendapatan);

app.put('/api/pendapatan/:id', updatePendapatan);

app.delete('/api/pendapatan/:id', deletePendapatan);





app.get('/api/transaksi', getTransaksi);

app.get('/api/transaksi/:id', getTransaksiByID);

app.post('/api/transaksi', createTransaksi);

app.put('/api/transaksi/:id', updateTransaksi);

app.delete('/api/transaksi/:id', deleteTransaksi);

// Menjalankan aplikasi pada port 3000
app.listen('3001',()=> console.log('server Running at port: 3001'));

