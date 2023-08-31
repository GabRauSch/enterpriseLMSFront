import {GetServerSidePropsContext } from 'next';
import { isAuthenticated } from './Auth';

async function checkAuthentication(context: GetServerSidePropsContext) {
  const userIsAuthenticated = isAuthenticated(); 
  console.log('is or is not', userIsAuthenticated)

  return userIsAuthenticated;
}

export default checkAuthentication;