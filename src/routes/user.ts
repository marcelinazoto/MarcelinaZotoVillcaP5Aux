import { Router } from "express";
import { userControlllers } from "../controllers/user";
import { postControlllers } from "../controllers/post";

const router = Router();

router.get("/", userControlllers.readUsers);
router.post("/add", userControlllers.addUser);
router.put("/update/:id", userControlllers.updateUser);
router.delete("/delete/:id", userControlllers.deleteUser);

export default router;
