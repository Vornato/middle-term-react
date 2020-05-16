import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width:500px){
        width:450px;
    }
`

const person = (props) => {

const Bill = axios({
    url: 'https://reqres.in/',
   
})
.then(response => {
   console.log(response);
})
  

    return (
        <StyledDiv>
            <p onClick={props.click}>I'm a {props.name} {props.lastname} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <input type="text" onChange={props.key} key={props.lastname} />
            <button onClick={this.Bill}>Log In</button>
            </StyledDiv>
    
    )
};

export default person;