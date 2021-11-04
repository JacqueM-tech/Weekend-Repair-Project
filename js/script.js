// create a variable called button to select the “What needs
// attention” button. Create another variable called repairList
// to select the unordered list with a class of “need-repair”.
const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

// Create a factory function called createVehicle. Add three
// parameters: type, numWheels, and color. nside the factory
// function, declare an object called vehicle with three
// properties: type, numWheels, and color. Use the
// createVehicle parameters as values.
const createVehicle = function (type, numWheels, color) {
  const vehicle = {
    type: type,
    numWheels: numWheels,
    color: color
  };
  return vehicle;
};
// Create three new objects using the factory function: car,
// bike, and skateboard. Add three arguments to each object to
// match the name, numWheels, and color.
const car = createVehicle("car", 4, "white");

const bike = createVehicle("bike", 2, "red");

const skateboard = createVehicle("skateboard", 4, "blue");

// Add the three objects to an array called myVehicles.
const myVehicles = [car, bike, skateboard];

// Loop over the array of objects, and then loop over the
// properties and values of each object, logging them out to
// the console.
for (let vehicle of myVehicles) {
  // console.log(vehicle);
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

// Below the for loops, add a property called needsRepair to
// your bike and skateboard objects. Set the values to true.
car.needsRepair = true;
skateboard.needsRepair = true;

// Create a click event for the “What needs attention?” button.
// Inside the callback function, set the innerHTML value of
// repairList to an empty string so that the text is cleared
// each time the button is clicked.
button.addEventListener("click", function () {
  repairList.innerHTML = "";
  // Then, create a new array called vehicleRepairList. The new
  // array will only contain the vehicle objects from the
  // myVehicles array that have a needsRepair property of true.
  const vehicleRepairList = myVehicles.filter(function (vehicle) {
    return vehicle.needsRepair === true;
  });

  // Still in the callback function, loop over the
  // vehicleRepairList array to access each object.
  // The result of the loop should create a list item with the
  // innerHTML of My <span>vehicle type</span> needs some 💜.
  for (let vehicle of vehicleRepairList) {
    let li = document.createElement("li");
    li.innerHTML = `My <span>${vehicle.type}</span> needs some 💜!`;
    repairList.append(li);
  }
});
