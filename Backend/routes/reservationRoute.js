import express from "express";
import {getData, sendReservation, updateReservation} from '../controller/reservation.js';
 
const router =express.Router();
router.post("/create", sendReservation);
router.get('/', getData);
router.post('/update', updateReservation);

export default router;
