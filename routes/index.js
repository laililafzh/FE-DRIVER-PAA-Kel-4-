import express from "express";
import path from "path";
import { 
    getGosend, 
    saveGosend, 
    updateGosend, 
    getGosendByID, 
    deleteGosend, 
    } 
    from "../controller/gosendController.js";
    
    import { getOrder, 
        getOrderByID, 
        saveOrder } from "../controller/orderController.js";
        
        import { getRiwayatOrder, getRiwayatOrderByID, saveRiwayatOrder } from "../controller/riwayatOrderController.js";
        

const router = express.Router();
const __dirname = path.resolve();





//Gosend
// Get All Data


// // Get Data By ID
// router.get('/gosend/:id', getGosendByID);

// //create data
// // router.post('/gosend', saveGosend);

// //update data
// router.patch('/gosend/:id', updateGosend);

// //delete data
// router.delete('/gosend/:id', deleteGosend);


//Order
//Get All Data



//Get Data By ID


// Create data


//Riwayat Order
//Get All Data


//Get Data By ID


// Create data


export default router;