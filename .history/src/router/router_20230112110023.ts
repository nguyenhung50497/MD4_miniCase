import { Router } from "express";
import homeController from "../controller/HomeController";
import { productRouter } from './product-router';
import { userRouter } from "./user-router";

export const router = Router();
router.get('/home', homeController.showHome);
router.get('/home-logined', homeController.showHomeLogined);
router.get('/home-customer', homeController.showHomeCustomer);
router.use('/products', productRouter);
router.use('/users', userRouter);
router.get