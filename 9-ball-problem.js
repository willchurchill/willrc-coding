// start the output string
var script_output = "The heavy ball is ";

// create the balls and put them into groups
group_one = [5,5,5];
group_two = [5,5,5];
group_three = [6,5,5];

// build our scales function
function balance_scales( one, two ){

    let sum_one = 0;
    for (const value of one){
        sum_one += value;
    }

    let sum_two = 0;
    for (const value of two){
        sum_two += value;
    }

    if( sum_one == sum_two ){
        return 0;
    }else if( sum_one > sum_two ){
        return 1;
    }else if( sum_one < sum_two ){
        return 2;
    }else{
        return 999;
    }

}

// build the first weigh function
function first_weigh(){

    let scales_result = balance_scales( group_one, group_two );

    if( scales_result == 0 ){
        script_output += "Group 3 ";
        second_weigh( group_three );
    }else if( scales_result == 1 ){
        script_output += "Group 1 ";
        second_weigh( group_one );
    }else if( scales_result == 2 ){
        script_output += "Group 2 ";
        second_weigh( group_two );
    }else{
        console.log("something went wrong with the first weigh");
    }

}

// build the second weigh function
function second_weigh( chosen_array ){

    if( chosen_array[0] == chosen_array[1] ){
        script_output += "Ball 3 ";
    }else if( chosen_array[0] > chosen_array[1] ){
        script_output += "Ball 1 ";
    }else if( chosen_array[0] < chosen_array[1] ){
        script_output += "Ball 2 ";
    }else{
        console.log("something went wrong with the second weigh");
    }

}

// finally, call the first weighing function, and then display the output on the page
first_weigh( group_one, group_two );
document.write( script_output );