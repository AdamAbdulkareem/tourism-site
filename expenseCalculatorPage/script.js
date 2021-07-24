// expenses name begins

var housing = document.querySelector(".housingClass");
var transport = document.querySelector(".transportClass");
var savings = document.querySelector(".savingsClass");
var clothing = document.querySelector(".clothingClass");
var insurance = document.querySelector(".insuranceClass");
var retirement = document.querySelector(".retirementClass");
var monetary = document.querySelector(".monetaryClass");
var getMonthBtn = document.querySelector(".goalBtnUpdate");
var salary = document.querySelector(".salaryClass");

// expenses name ends

// Enforce user to input salary value before begins
// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }
// Enforce user to input salary value before ends
//percentage function begins
var expenseArr = [
  "Housing",
  "Transport",
  "Savings",
  "Clothing",
  "Insurance",
  "Retirement",
];

var expenseColor = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#ffffff",
];
housing.addEventListener("change", () =>
  calcPercent(housing, salary)
);
transport.addEventListener("change", () =>
  calcPercent(transport, salary)
);
savings.addEventListener("change", () =>
  calcPercent(savings, salary)
);
clothing.addEventListener("change", () =>
  calcPercent(clothing, salary)
);
insurance.addEventListener("change", () =>
  calcPercent(insurance, salary)
);
retirement.addEventListener("change", () =>
  calcPercent(retirement, salary)
);

const tempArr = []
var expensePercentArr = [];
const calcPercent = (expense, salary) => {
  

  const expenseName = expense.name;
  const newAmount = parseInt(expense.value);
  const newSalary = parseInt(salary.value);
  if (newAmount > newSalary) {
    // console.log("expense", expense)
    alert(`${expenseName.toUpperCase()} EXPENSE IS GREATER THAN SALARY`);
  } else {
    const newObject = {}
     newObject['name'] = expense.name;
    newObject['value'] = newAmount

    const found = expensePercentArr.findIndex(obj => obj['name'] === newObject['name'])
console.log('>>>', found)
    if (found == -1) {
      expensePercentArr.push(newObject);
    } else {
      expensePercentArr[found] = newObject
    }
    console.log('new', newObject)
    console.log(expensePercentArr);
  }
};
fExpensePercentArr.splice(0,1, expensePercentArr.value);
console.log(fExpensePercentArr);
   
var fExpensePercentArr = [];
// +++++++++ Display percentage fetched in pie-chart form ++++++++
new Chart("myChart", {
  type: "pie",
  data: {
    labels: expenseArr,
    datasets: [
      {
        backgroundColor: expenseColor,
        data: expensePercentArr,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Percentage Of Expenses Base On Salary",
    },
  },
});
// +++++++++ Display percentage fetched in pie-chart form ++++++++

//percentage function ends

// Monetary goal function (numbers of month) begins
getMonthBtn.addEventListener("click", () => calcGoalMonths());
function calcGoalMonths() {
  goalMonths = monetary.value / savings.value;
  switch (monetary.value < savings.value) {
    case true:
      return alert("monetary goal less than savings");
      break;

    case false:
      switch (Number.isInteger(goalMonths)) {
        case true:
          return goalMonths;
          break;
        case false:
          return (moneyIncrement =
            (goalMonths - parseInt(goalMonths)) * savingsValue);
      }
  }
}
// Monetary goal function (numbers of month) ends

// const addFive = (value) => {
//   return value + 5
// }
