import React, { useEffect, useContext, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    login,
    avatar_url,
    html_url,
    name,
    company,
    bio,
    blog,
    location,
    public_repos,
    public_gists,
    followers,
    following,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Home
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            style={{ width: '150px' }}
            alt='User'
          />
          <p>{name}</p>
          {location && (
            <Fragment>
              <strong>Location :</strong>
              {location}
            </Fragment>
          )}
        </div>
        <div>
          {bio && (
            <Fragment>
              <strong>Bio :</strong>
              <br /> <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Login : </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company : </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website : </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-dark'>Public Repos: {public_repos}</div>
        <div className='badge badge-light'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
