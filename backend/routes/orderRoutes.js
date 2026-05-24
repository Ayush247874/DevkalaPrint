import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

/* TRACK ORDER */
router.get("/track/:orderId", async (req, res) => {

  try {

    const order = await Order.findOne({
      orderId: req.params.orderId,
    });

    if (!order) {

      return res.status(404).json({
        success: false,
        message: "Order not found",
      });

    }

    res.json({
      success: true,
      order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

export default router;