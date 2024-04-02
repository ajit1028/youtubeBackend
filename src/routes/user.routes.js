import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload}  from "../middlewares/multer.middleware.js "


const router = Router();

router.route("/register").post(
    //this fields accept an array
    //we use here uplaod from multer as middleware
    upload.fields([
        //two object [avatar, coverimage]
     {
        name: "avatar",
        maxCount: 1
     },
     {
        name: "coverImage",
        maxCount: 1
     }
    ]),
    registerUser
     )



export default router;