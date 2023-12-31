import React, {useState} from 'react'
import classes from './UserInput.module.css';

const initialUserInput = {
  'current-savings': 10000,
        'expected-return': 7,
        'yearly-contribution': 1000,
        'duration':10
};

function UserInput(props) {

const [userInput, setUserInput] =    useState(initialUserInput);

    const submitHandler = (event) =>{
      event.preventDefault();
      console.log('SUBMIT');
      props.onCalculate(userInput);
    };

    const resetHandler = () => {
      setUserInput(initialUserInput);
      console.log('RESET');
    };

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) =>{
            return {
              ...prevInput,
              [input]: value
            };
        })
    };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings (Rs)</label>
            <input 
              onChange={(event) => inputChangeHandler('current-savings', event.target.value)}  
              type="number" 
              id="current-savings"
              value={userInput['current-savings']}
              className={classes['form-input']}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings (Rs)</label>
            <input 
            onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} 
            type="number" 
            id="yearly-contribution"
            value={userInput['yearly-contribution']}
            />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input 
              onChange={(event) => inputChangeHandler('expected-return', event.target.value)} 
              type="number" 
              id="expected-return" 
              value={userInput['expected-return']}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input 
              onChange={(event) => inputChangeHandler('duration', event.target.value)} 
              type="number" 
              id="duration" 
              value={userInput['duration']}
            />
          </p>
        </div>
        <p className={classes['actions']}>
          <button onClick={resetHandler} type="reset" className={classes['buttonAlt']}>
            Reset
          </button>
          <button type="submit" className={classes['button']}>
            Calculate
          </button>
        </p>
      </form>
  )
}

export default UserInput;