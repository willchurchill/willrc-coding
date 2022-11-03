// create arrays with the coin weights
P1 = [10,10,10,10,10,10,10,10,10,10];
P2 = [10,10,10,10,10,10,10,10,10,10];
P3 = [10,10,10,10,10,10,10,10,10,10];
P4 = [10,10,10,10,10,10,10,10,10,10];
P5 = [10,10,10,10,10,10,10,10,10,10];
P6 = [11,11,11,11,11,11,11,11,11,11];
P7 = [10,10,10,10,10,10,10,10,10,10];
P8 = [10,10,10,10,10,10,10,10,10,10];
P9 = [10,10,10,10,10,10,10,10,10,10];
P10 = [10,10,10,10,10,10,10,10,10,10];

// create a new pile that takes one coin from the first pile, two from the second...
new_pile = [
    P1[0],
    P2[0],P2[1],
    P3[0],P3[1],P3[2],
    P4[0],P4[1],P4[2],P4[3],
    P5[0],P5[1],P5[2],P5[3],P5[4],
    P6[0],P6[1],P6[2],P6[3],P6[4],P6[5],
    P7[0],P7[1],P7[2],P7[3],P7[4],P7[5],P7[6],
    P8[0],P8[1],P8[2],P8[3],P8[4],P8[5],P8[6],P8[7],
    P9[0],P9[1],P9[2],P9[3],P9[4],P9[5],P9[6],P9[7],P9[8],
    P10[0],P10[1],P10[2],P10[3],P10[4],P10[5],P10[6],P10[7],P10[8],P10[9]
];

// build our scales to weigh the piles
function weigh_pile( pile ){
    let sum = 0;
    for( const value of pile ){
        sum += value;
    }
    return sum;
}

// calculate the expected weight of the new pile, assuming all coins weigh 10 units
legit_coins_weight = new_pile.length * 10;

// calculate the actual weight of the new pile
new_pile_weight = weigh_coins(new_pile);

// calculate the difference
// fake coins weigh 1 unit more than real ones, so the difference will tell us how many of the fake coins are in the pile, and therefore what pile they are in
weight_difference = new_pile_weight - legit_coins_weight;

real_coin_weight = 10;
fake_coin_weight = 11;

difference_in_coin_weight = fake_coin_weight - real_coin_weight;

pile_number = weight_difference / difference_in_coin_weight;

document.write( "Coins are in pile P" + pile_number );