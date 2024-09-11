const mongoose = require("mongoose");

const mongoose = require("mongoose");
const Joi = require("joi");

// Mongoose schema with validation
const deliverySchema = mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "order",
    required: true, // Ensure an order is always associated with delivery
  },
  deliveryBoy: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  status: {
    type: String,
    enum: ["pending", "in-transit", "delivered"], // Restrict to specific statuses
    required: true,
  },
  trackingURL: {
    type: String,
    required: true,
    match: /^https?:\/\/[^\s/$.?#].[^\s]*$/, // Validate it is a valid URL
  },
  estimatedDeliveryTime: {
    type: Number,
    required: true,
    min: 1, // Ensure delivery time is at least 1 hour or minute, as applicable
  },
});

// Mongoose Model
const Delivery = mongoose.model("Delivery", deliverySchema);

// Joi validation schema for incoming data
const validateDelivery = (delivery) => {
  const schema = Joi.object({
    order: Joi.string().required(), // Validate ObjectId for the order
    deliveryBoy: Joi.string().min(3).max(50).required(),
    status: Joi.string().valid("pending", "in-transit", "delivered").required(),
    trackingURL: Joi.string().uri().required(), // Ensure the URL is valid
    estimatedDeliveryTime: Joi.number().min(1).required(), // Must be a number greater than or equal to 1
  });

  return schema.validate(delivery);
};

module.exports = {
  Delivery, // Mongoose model
  validateDelivery, // Joi validation function
};

module.exports = mongoose.model("delivery", deliverySchema);
