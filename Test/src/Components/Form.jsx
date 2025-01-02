import React from 'react'
import { useState } from 'react';

export default function Form() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [age,setAge]=useState('');

  function forName(e){
    setName(e.target.value)
    console.log(`Name: ${name}`);
  }

  function forEmail(e){
    setEmail(e.target.value)
    console.log(`Email: ${email}`);
  }

  function forAge(e){
    if(e.target.value>0){
      setAge(e.target.value)
      console.log(`Age: ${age}`);
    } else{
      console.log("Age must be positive")
    }
  }

  function onSubmit(){
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Age: ${age}`);

    console.log("Form is submitted");
  }

  return <>
  <div id="main">
    <form action="">
      
      <div id="name" placeholder="enter name">
        <label>Name: </label>
        <input type="text" onChange={forName}/>
      </div>

      <div id="email" placeholder="enter email">
        <label>Email: </label>
        <input type="text" onChange={forEmail}/>
      </div>

      <div id="age" placeholder="enter age">
        <label>Age: </label>
        <input type="text" onChange={forAge}/>
      </div>

    </form>
    <div id="submit">
      <button onClick={onSubmit}>Submit</button>
    </div>
  </div>
  </>
}