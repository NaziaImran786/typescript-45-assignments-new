

let Guest_List: string[] = ['Imran', 'Ali','Asif'] ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

let absent_Guest :string ='Imran' ;

let new_Guest :string = 'kamran';

Guest_List[0] = new_Guest ;

let guest_List :string[] = ['Imran', 'Ali','Asif'] ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)