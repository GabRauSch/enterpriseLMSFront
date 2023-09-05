import {GetServerSidePropsContext } from 'next';
import { isAuthenticated } from './Auth';

async function checkAuthentication(context: GetServerSidePropsContext) {
  const userIsAuthenticated = isAuthenticated(); 

  return userIsAuthenticated;
}

export default checkAuthentication;