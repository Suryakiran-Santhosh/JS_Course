/*
Coding Challenge #1
By: Suryakiran Santhosh

Prompt:
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
    Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
    Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/


function BMI_Calculator(mass, height) {
    return (mass / (height ** 2));
}


(function main() {
    // mass is defined in kg and height in meters for each data set
    let massMark1 = 78;
    let heightMark1 = 1.69;
    let massJohn1 = 92;
    let heightJohn1 = 1.95;
    let massMark2 = 95;
    let heightMark2 = 1.88;
    let massJohn2 = 85;
    let heightJohn2 = 1.76;
    let markHigherBMI1 = null;
    let markHigherBMI2 = null;

    // calls to BMI calculator functions
    // const because their BMI's should not be changed 
    const markBMI1 = BMI_Calculator(massMark1, heightMark1);
    const johnBMI1 = BMI_Calculator(massJohn1, heightJohn1);

    const markBMI2 = BMI_Calculator(massMark2, heightMark2);
    const johnBMI2 = BMI_Calculator(massJohn2, heightJohn2);

    console.log("Data Set 1: Mark's BMI = " + markBMI1 + " and " + "John's BMI = " + johnBMI1);
    console.log("Data Set 2: Mark's BMI = " + markBMI2 + " and " + "John's BMI = " + johnBMI2);

    // There are more efficient ways of doing the following but to familiarize myself with the syntax I used the more tedious, less elegant, and inefficient way
    /*
    method 2: 
    const markHigherBMI1 = markBMI1 > johnBMI1;
    */
    if (markBMI1 > johnBMI1) {
        markHigherBMI1 = true;
    } else {
        markHigherBMI1 = false;
    }

    if (markBMI2 > johnBMI2) {
        markHigherBMI2 = true;
    } else {
        markHigherBMI2 = false;
    }

    if (markHigherBMI1) {
        console.log("Data 1: Mark has a higher BMI.");
    } else {
        console.log("Data 1: Mark has a lower BMI.");
    }

    if (markHigherBMI2) {
        console.log("Data 2: Mark has a higher BMI.");
    } else {
        console.log("Data 2: Mark has a lower BMI.");
    }

})()