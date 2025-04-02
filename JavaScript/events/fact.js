
// Factorial 5 = 5*4*3*2*1 = 120 

let Num = 6 ; // is number ka factorial janana hai.

let Fact = 1 ;

for(let i = 0 ; i<Num ; i++) {

    Fact = Fact * (Num-i); // 1 * (6-0) = 1* 6 = 6 
                            // 6 * (6-1) = 6*5 = 30 
                            // 30 * (6-2) = 30 * 4 = 120 
                             // 120 * (6-3) = 120 * 3 = 360 
                             // 360 * (6-4) = 360 * 2 = 720 
                             // 720 * (6-5) = 720 * 1 = 720 
}

console.log(`Factorial Number:${Num} ki Factorial Value:`,Fact);

