const teaOrder = {
	variety: "oolong",
	teaName: "winter sprout",
	origin: "taiwan",
	price: 12.99,
	hasCaffeine: true,
	quantity: 3,
	brewTemp: 180,
};

const { price, quantity, teaName, ...others } = teaOrder;
const { origin } = teaOrder;
const { brewTemp: temp = 175 } = teaOrder;
const { teaName: tea } = teaOrder;

function checkOut(tea) {
	const { quantity = 1, price } = tea;
	return quantity * price;
}

const students = [
	{
		name: "Drake",
		GPA: 4.6,
	},
	{
		name: "Henrietta",
		GPA: 4.4,
	},
	{
		name: "Tung",
		GPA: 4.0,
	},
	{
		name: "Harry",
		GPA: 3.8,
	},
	{
		name: "Ant",
		GPA: 3.2,
	},
];

//const [topStudent, secondBest, , fourth, lastBest] = students;
const [first, ...losers] = students;

function getTotal({ quantity, price }) {
	return quantity * price;
}

const longJump = ["Tammy", "Jessica", "Violet"];

function awardMetals([gold, silver, bronze]) {
	return {
		gold,
		silver,
		bronze,
	};
}

let delicious = "Mayonnise";
let disgusting = "whipped Cream";

// let both = [disgusting, delicious];
// [delicious, disgusting] = both;

[disgusting, delicious] = [delicious, disgusting];
