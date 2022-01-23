const profit = function (bp, sp) {
  /*
        This function calculates the net profit and loss
        Params: bp,sp
        returns:profit or loss on the console
    
    */
  if (sp > bp) {
    return console.log(`Net Profit : ${sp - bp}`);
  } else {
    return console.log(`You have made a loss of ${bp - sp}`);
  }
};

let buying_price = Number(prompt("Enter the buying price"));
let selling_price = Number(prompt("Enter the selling_price"));
profit(buying_price, selling_price);
