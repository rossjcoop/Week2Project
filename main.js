// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
	



  // Answer:
  let sum = 0

  for(let i = 0; i < data.length; i++){
  	sum += data[i].price
	// totalprices.push(data.price)
    //avgprice = (sum / 3)
  }

  let avg = sum / data.length
	return avg.toFixed(2)
}
console.log(question1())


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
 
  // Answer:
  let costbetween = []
  for(let i = 0; i < data.length; i++){
    if(data[i].price <= 18.00 && data[i].price >= 14.00 && data[i].currency_code === "USD")
      costbetween.push(data[i].title)
  }
  return costbetween

}
console.log(question2())

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  
  for(let i = 0; i < data.length; i++){
  	let name_price_gbp = []
    if(data[i].currency_code === "GBP"){
	return data[i].title + " " + "$" + data[i].price	
	}
  }
}
console.log(question3())

// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  woodproducts = 0
  for(i = 0; i < data.length; i++){
  	for(j = 0; j < data[i].length; j++){

  	if(data[j].materials === "wood"){
  	return data[i].title
  }
  }
}
}
console.log(question4())

// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5() {
   //Answer:

  
  //let eightormore = []

  //for(i = 0; i < data.length; i++){
	data.forEach(function(item){

  		if(item.materials.length >= 8){
 
  		return item.title + " " + "is made with" + " " + item.materials.length + " " + "materials" + " " + item.materials
  	}  
  })
}
console.log(question5())

 //6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let totalquantity = 0
  for(let i = 0; i < data.length; i++){
    totalquantity += data[i].quantity
  }
  return totalquantity
}
console.log(question6())