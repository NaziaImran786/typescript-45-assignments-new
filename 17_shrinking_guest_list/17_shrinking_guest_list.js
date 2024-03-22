"use strict";
let Guest_List = ['Imran', 'Ali', 'Asif'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest = 'Imran';
let new_Guest = 'kamran';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good news! We find Big Table so we are inviting 3 more guest.');

Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Sir Daniyal');
Guest_List.push('Rizwan');

for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n');
}

console.log('\nSorry we can not arrange big table, only two peoples will be invited.');

while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}

for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}

Guest_List.splice(0, 2);
console.log(Guest_List);
