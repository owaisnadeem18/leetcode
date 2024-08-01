
// Above mentioned was my approach , now I have to follow the solution provided by chat gpt

let details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];

function countSeniors(details) {
  let countSeniorCitizens = 0;

  details.forEach((i) => {
    let age = Number(i.slice(11, 13));

    if (age > 60) {
      countSeniorCitizens++;
    }
  });

  return countSeniorCitizens;
}

console.log(
  `Number of seniors i.e above 60 ages are : `,
  countSeniors(details)
);
