import React from 'react'

const IncomeExpense = () => {
  return (
    <div className='inc-exp-container'>
        <div className='income'>
            <h4>INCOME</h4>
            <p class="money-plus">$500.00</p>
        </div>
        <div className='expense'>
            <h4>EXPENSE</h4>
            <p class="money-minus">$240.00</p>
        </div>
    </div>
  );
}

export default IncomeExpense