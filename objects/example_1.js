function getBill(item) {
  return {
    name: item.name,
    due: twoWeeksFromNow(),
    total: calculateTotal(item.price),
  };
}
const bill = getBill({ name: "Room Cleaning", price: 30 });

function displayBill(bill) {
  return `Your total ${bill.total} for ${bill.name} is due on ${bill.due}`;
}
