const CustomError = require("../utils/customError");
const razorpayInstance = require("../config/razorpay.js");

module.exports.processPayment = async (req, res, next) => {
  try {
    const { amount, currency } = req.body;

    if (!amount || !currency)
      return next(new CustomError("Amount and currency required"));

    const options = {
      amount: Number(amount) * 100,
      currency: currency || "INR",
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1,
    };

    const order = await razorpayInstance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    next(new CustomError(error.message, 500));
  }
};

module.exports.fetchPayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const payment = await razorpayInstance.payments.fetch(id).catch((err) => {
      next(new CustomError(err.message, 500));
    });

    if (!payment) return next(new CustomError("Error fetching payment", 500));

    res.status(200).json({
      success: true,
      payment,
    });
  } catch (error) {
    next(new CustomError(error.message, 500));
  }
};
