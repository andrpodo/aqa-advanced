function checkOrder(available,ordered) {
    if (ordered === 0) {
        console.log("Your order is empty");
        return;
      }
    if (ordered>available) {
        console.log("our order is too large, we don’t have enough goods.");
        return;
      }
    
    console.log("Your order is accepted");
}

checkOrder(100,0);
checkOrder(50,100);
checkOrder(150,100);