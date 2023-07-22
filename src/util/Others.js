function calculateTax(amount) {
  return {
    value: amount, 
    transformation: Math.floor(amount * 0.7), 
    tax: Math.round(amount / 0.7)
  } 
}

module.exports = {
  calculateTax
};