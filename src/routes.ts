// init imports
import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUser.controler";
import { CreateTagController } from './controllers/CreateTag.controller'
import { AdminMiddleware } from "./middlewares/tags/Admin.middleware";
import { AuthContoller } from "./controllers/AuthUser.controller";
import { ComplimentController } from "./controllers/CreateCompliment.controller";
import { AuthMiddle } from "./middlewares/AuthUser.middleware";
// end imports

// init route instance
const route = Router()
// end route instance

//init middlewares intance

const isAdmin = new AdminMiddleware()
const authMiddle = new AuthMiddle()
//end middlewares intance

// init controllers instance
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authContoller = new AuthContoller()
const complimentController = new ComplimentController()
// end controllers instance

//init routes
route.post('/users', createUserController.handle)
route.post('/tags',authMiddle.handle,isAdmin.handle, createTagController.handle)
route.post('/login', authContoller.handle)
route.post('/compliments',authMiddle.handle, complimentController.handle)
//end routes

// exporting routes
export {route} 
// exported routes