import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

  orderId: {
    type: String,
    unique: true,
  },

  service: {
    type: String,
    required: true,
  },

  fullName: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },

  pincode: {
    type: String,
    required: true,
  },

  mobile: {
    type: String,
    required: true,
  },

  frontImage: {
    type: String,
    default: "",
  },

  backImage: {
    type: String,
    default: "",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  status: {
    type: String,
    default: "Pending",
  },

  invoiceNumber: {
    type: String,
    default: "",
  },

  paymentStatus: {
    type: String,
    default: "Pending",
  },

  price: {
    type: Number,
    default: 0,
  },

  gst: {
    type: Number,
    default: 5,
  },

});

/* AUTO GENERATE ORDER ID */

orderSchema.pre("save", function () {

  if (!this.orderId) {

    const random =
      Math.floor(
        100000 +
        Math.random() * 900000
      );

    this.orderId =
      `DEVKALA-${random}`;

  }

});

const Order =
  mongoose.models.Order ||
  mongoose.model("Order", orderSchema);

export default Order;

