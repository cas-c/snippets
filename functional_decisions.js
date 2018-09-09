const greaterThanOrEq = left => right => left >= right;
const explainDecision = decision => successMessage => failureMessage =>
    (decision && successMessage) || failureMessage;
const canDrinkAlcohol = age => greaterThanOrEq(age)(21);
const isOld = age => greaterThanOrEq(age)(40);
const canIDrink = age =>
    explainDecision(canDrinkAlcohol(age))("yes u can drink")("no u cant drink");
const amIOld = age => explainDecision(isOld(age))("ur old!")("ur not old");
console.log(canIDrink(22));
console.log(canIDrink(19));
console.log(amIOld(45));
console.log(amIOld(39));
