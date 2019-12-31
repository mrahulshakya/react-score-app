import React, { useState } from 'react';
import axios from 'axios';

export const PlayAgain = props =>{
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const addUser = (event) => {
    const  scoreObj = { userId: email,userName : name , score :  0 }
    console.log('user', name , email);
     axios.post(`http://localhost:5000/scores`, { score :  scoreObj })
     .then(x => {
         console.log(x);
     }).catch(e => console.log(e));

    
     props.onClick(event, scoreObj);
 }

 return (
        <div className="game-done">
          <div className="message" style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}>
            {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
          </div>
          <form onSubmit= { addUser }>
            <div className="input-group">
            <label for="name">
            </label>
            <input id="name" name="name" className="form-control" placeholder="name" type="text" required value = {name} onChange={event=> setName(event.target.value)}></input>
            </div>
            <div className="input-group">
            <label for="email">
            </label>
            <input id="email" name="email" className="form-control" placeholder="email" type="email" onChange={event => setEmail(event.target.value)} value= {email}  required></input>
            </div>
            <button  type="submit" className="btn btn-primary btn-submit">Start Play</button>
          </form>
        </div>)
};
