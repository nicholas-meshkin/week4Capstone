/**
 * 
 */
var prices = [ 2.56, 3.66, 4.50, 0.85 ];
var items = [ 'item1', 'item2', 'item3', 'item4' ];
var total = 0;
var itemsPurchased = [];
var quantity = [];

for (var i = 0; i < items.length; i++) {
	myDiv.insertAdjacentHTML("beforeend", "<p>" + items[i] + " $"
			+ prices[i].toFixed(2) + " " + "<button onclick=\"addToCart('"
			+ items[i] + "');\"> Add to Cart </button></p>");
}

function addToCart(itemID) {
	total += prices[(items.indexOf(itemID))];

	if (!itemsPurchased.includes(itemID)) {
		itemsPurchased.push(itemID);
		quantity.push(1);
		myCart.insertAdjacentHTML("beforeend", "<p id=thing"
				+ itemsPurchased.indexOf(itemID) + ">1 "
				+ itemsPurchased[itemsPurchased.indexOf(itemID)] + "</p>");

	} else {
		quantity[(itemsPurchased.indexOf(itemID))]++;
		var el = document.getElementById("thing"
				+ itemsPurchased.indexOf(itemID));
		el.innerText = quantity[itemsPurchased.indexOf(itemID)] + " "
				+ itemsPurchased[itemsPurchased.indexOf(itemID)];
	}

	console.log(itemsPurchased);
	console.log(quantity);
	console.log(total);
}
function checkout() {
	myTotal.insertAdjacentHTML("beforeend", "<p>Total: $" + total.toFixed(2)
			+ "</p>");
}
