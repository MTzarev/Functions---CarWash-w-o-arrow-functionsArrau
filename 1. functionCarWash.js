function carWash(array) {
    let totalValue = 0;
    let startValue = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "soap") {
            totalValue += startValue + 10;
        } else if (array[i] === "water") {
            totalValue += totalValue * 0.2;
        } else if (array[i] === "vacuum cleaner") {
            totalValue += totalValue * 0.25;
        } else if (array[i] === "mud") {
            totalValue -= totalValue * 0.1;
        }
    }

    console.log(`The car is ${totalValue.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
//carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
