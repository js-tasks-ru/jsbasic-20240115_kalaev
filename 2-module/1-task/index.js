

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};
function sumSalary(salaries) {
  let result = 0;
  for (let i in salaries) {
    isFinite(salaries[i]) ? result += salaries[i] : result;
  }
  return result;
}
sumSalary(salaries)
