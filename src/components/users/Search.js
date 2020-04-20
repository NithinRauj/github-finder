import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [searchInput, setSearchInput] = useState('');

  const onChange = (event) => {
    setSearchInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchInput === '') {
      alertContext.setAlert('Please enter something...', 'light');
    } else {
      githubContext.searchUsers(searchInput);
      setSearchInput('');
    }
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Search users'
        value={searchInput}
        onChange={onChange}
      />
      <input type='submit' className='btn btn-dark btn-block' />
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={(event) => {
            event.preventDefault();
            githubContext.clearUsers();
          }}
        >
          Clear
        </button>
      )}
    </form>
  );
};

export default Search;
