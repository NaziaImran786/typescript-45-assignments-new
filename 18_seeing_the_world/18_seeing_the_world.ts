
// Store the locations in a array. Make sure the array is not in alphabetial order.
let places :string[] = ['Turkey', 'Madina', 'Eifel Tower', 'Time Square', 'Agra']

// print ypur array in its original order.
console.log('orignal ' + places);

// print your array in alphabetical order without modifying the actual list.
console.log('copy '+ [...places].sort());

//show that your array is still in its original order by printing it.
console.log('orignal ' + places);

//print your array in reverse alphaberical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());

//show that your array is still in its original order by printing it again.
console.log('orignal ' + places);

//reverse the order of your list. print the array to show that its order has changed.
console.log('orignal ' +places.reverse());

//reverse the order of your list again. print the list to show it's back to its original order.
console.log('orignal ' +places.reverse());

//sort your array so it's stored in alphabetical order. print the array to show that its order has been changed.
console.log('orignal ' +places.sort());

//sort to change your array so it's stored in reverse alphabetical order. print the list to show that its order has changed.
console.log('orignal ' +places.sort().reverse());

