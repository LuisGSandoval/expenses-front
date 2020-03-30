/**
 * This function recieves an array of dates and returns an array with only year and month
 */
const turnDayDateToZero = arr => {
  let newArr = arr.map(item => {
    item.date = item.date.split("T")[0].replace(/\d{2}$/, "01");
    return item;
  });
  return newArr;
};

const groupExpenses = arr => {
  let expensesArr = arr.map(ele => {
    let filteredIncome = ele.filter(its => its.income === "1");
    let income = filteredIncome.reduce(
      (pre, curr) => parseInt(pre) + parseInt(curr.qty),
      0
    );

    let filteredExpense = ele.filter(its => its.income === "0");

    let expense = filteredExpense.reduce(
      (pre, curr) => parseInt(pre) + parseInt(curr.qty),

      0
    );

    return {
      income: income,
      expense: expense,
      date: ele[0].date || ""
    };
  });

  return expensesArr;
};

export { turnDayDateToZero, groupExpenses };
