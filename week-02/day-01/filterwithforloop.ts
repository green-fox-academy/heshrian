'use strict'

let originalNames: string[] = ["Captain Marvel", "Winter soldier", "Black Panther", "Viktor"]

function filterNamesLongerThanSix(names: string[]): string[] {
    let filteredNames: string[] = [];
    for (let index: number = 0; index < names.length; index++)      
        if(names[index].length > 7) {
            filteredNames.push (names[index]);
        }


        return filteredNames;
} 

console.log(filterNamesLongerThanSix(originalNames));
