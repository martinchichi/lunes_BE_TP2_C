import { Router } from "express";
import PalabrasController from "../controllers/PalabrasController.js";

const routes = Router();

const palabrasController = new PalabrasController();

routes.post("/", palabrasController.createPalabra);
routes.get("/", palabrasController.getPalabras);
routes.delete("/:palabra", palabrasController.deletePalabra);
routes.get("/:cantidad", palabrasController.getCatidadPalabras);

export default routes;
