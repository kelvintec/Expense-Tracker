import React from 'react'

const Transaction = () => {
  return (
    <div className='Lists'>
        <h3>History</h3>
        <ul class='list'>
            <li className='income'>
              <span>Cash</span>
               <span>+400</span>
            </li>
            <li className='minus'>
              <span>Book</span>
               <span>-40</span>
            </li>
            <li className='minus'>
              <span>Camera</span>
               <span>-200</span>
            </li>
        </ul>
    </div>
  )
}

export default Transaction