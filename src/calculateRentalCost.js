/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDay = 40;

  if (days >= 7) {
    return oneDay * days - 50;
  } else if (days >= 3) {
    return oneDay * days - 20;
  } else {
    return oneDay * days;
  }
}
module.exports = calculateRentalCost;
