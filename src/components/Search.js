import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import { getGistForUser, getPublicGists } from '../services/gistService'
import { dataService } from '../services/dataService';


const Search = () => {
  const [ username, setUsername ] = useState('');

  const getGists = () => {
    if(username !== ""){
      getGistForUser(username).then( response => {
        dataService.setData(response.data);
      }).catch( error => {
      })
    } else {
      getPublicGists().then( response => {
        dataService.setData(response.data);
      }).catch(error => {
      });
    }
  }
  useEffect(()=>{
    getGists();
  })

  const handleUsernameChange = ( e )=>{
    setUsername(e.target.value);
    getGists();
  }

  return (
    <Wrapper>
      <InputBox>
      <Octicon name="search" />
        <Input placeholder="Search Gists for the username" value={username} onChange={handleUsernameChange}/>
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search
