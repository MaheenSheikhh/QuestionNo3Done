//QUESTION # 3--- Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.

let personname = "maheen sheikh"
console.log (personname.toUpperCase());
console.log(personname.toLowerCase());
console.log(personname.replace(/\b\w/g,(xyz) => xyz.toUpperCase()));