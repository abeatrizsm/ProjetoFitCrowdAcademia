import express from "express";
import { listarExercicios } from "../controller/exerciciosController.js";

const router = express.Router();

router.get("/instrutor/exercicios", listarExercicios);

export default router;
