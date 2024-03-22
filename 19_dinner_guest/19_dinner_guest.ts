
let Guest_List: string[] = ['Imran', 'Ali','Asif'] ;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest :string ='Imran' ;
let new_Guest :string = 'kamran';
Guest_List[0] = new_Guest ;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good news! We find Big Table so we are inviting 3 more guest.');

//array me 3 guest add keye hain.
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Sir Daniyal');
Guest_List.push('Rizwan');

//yahan per men 6 guest ke arrayko print kraya ha.
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

//yahan per mene guest remove kiye hain.
// console.log('\nSorry we can not arrange big table, only two peoples will be invited.');

//yahan per mene guest remove kiye hain.
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    // console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}

//hamare bachy howe 2 invited guest.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.' + Guest_List[i] +',\n\nYou are still invited.\n\nThank You!\n\n')
// }

//mene sare guest array se remove kar diye.
Guest_List.splice(0, 2);
console.log(Guest_List);

//Exercise 19

//print a meesage indicating the number of the people you are inviting to dinner.

console.log(`Total number of guest are: ${Guest_List.length}`);