import {Router} from "express";

import * as PlayerController from "./controllers/players-controoler";
import * as ClubsController from "./controllers/clubs-controller";

const router =  Router();
router.get("/players", PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer) 

router.delete("/players/:id", PlayerController.deletePlayer)


router.get("/players/:id", PlayerController.getPlayerById)

router.patch("/players/:id", PlayerController.updatePlayer);

router.get("/clubs", ClubsController.getClubs);



export default router;
