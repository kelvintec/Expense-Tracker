import React from 'react'

const AddTransaction = () => {
  return (
    <div className='text'>
        <h3>Add new transaction</h3>
        <form>
            <div className='form-control'>
                <label htmlFor='text'>Text <br /></label>
                <input type="text" id='text' placeholder='Enter text..' />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'
                >Amount <br />(negative - expense, positive - income)</label>
                <input type="number" id='amount' placeholder='Enter amount...'/>
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction