/// Javascript code for callbacks

// prepare food function
var prepareFood = function(tableNo , items , cbDone){
    console.log('Preparing Food for items :' + items + ' for table no :' + tableNo);
    cbDone(tableNo,items);
}

//serve food function
var serveFood = function(tableNo , items){
    console.log('Serving Food for items :' + items + ' for table no :' + tableNo);
}

// call function
console.log(prepareFood(10 , ['Burger','pasta', 'coke'],serveFood));
