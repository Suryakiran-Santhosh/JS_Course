/*
Coding Challenge #3
By: Suryakiran Santhosh

Prompt:
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
    1. Calculate the average score for each team, using the test data below
    2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

Test data:
    Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/


function averageScore(score1, score2, score3) {
    return ((score1 + score2 + score3) / 3);
}


(function main() {
    const dolphins1 = averageScore(96, 108, 89);
    const koalas1 = averageScore(88, 91, 110);
    const min = 100;
    const dolphinsB1 = averageScore(97, 112, 101); 
    const koalasB1 = averageScore(109, 95, 123);
    const dolphinsB2 = averageScore(97, 112, 101);
    const koalasB2 = averageScore(109, 95, 106);
    
    // deciding winner from first data set
    if (dolphins1 > koalas1) {
        console.log("Dolphins Win!");
    } else if (dolphins1 < koalas1) {
        console.log("Koalas Win!");
    } else {
        console.log("Tie Game!");
    }

    // deciding winner from bonus data set
    if ((dolphinsB1 >= min) | (koalasB1 >= min)) {
        if ((dolphinsB1 > koalasB1)) {
            console.log("Dolphins Win!");
        } else if (dolphinsB1 < koalasB1) {
            console.log("Koalas Win!");
        } else {
            console.log("Tie Game!");
        }
    }

    // deciding winner from bonus data set 2 and its specific requirements
    if (((dolphinsB2 >= min) | (koalasB2 >= min)) & (dolphinsB2 === koalasB2)) {
        console.log("Dolphins and Koalas are both winner!");
    }

}())