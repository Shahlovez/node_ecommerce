import express from 'express'
import { get } from 'https'
const router = express.Router()
import {
  addOrderItems,
  getOrderById
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderById)
router.route('/:id').post(get, get)

export default router 