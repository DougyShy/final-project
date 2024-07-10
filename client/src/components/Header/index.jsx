import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { Image, GridRow, GridColumn, Grid } from 'semantic-ui-react'
import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import { QUERY_USER } from '../utils/queries';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }

  let username = '';

  if (Auth.loggedIn()) {
    username = Auth.getProfile().data.username;
  }

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username }
  });

  if (data) {
    console.log("USER DATA HERE: " + data);
  };

  return (
    <Grid columns={2} padded={false}>
      <GridRow>
        <Grid.Column width={8} floated={'left'}>
        <a href="/">
          <div>
            <img src="/images/bookstore-icon.png" alt="Bookstore Icon" />
          </div>
        </a>
        </Grid.Column>
        {Auth.loggedIn() ? (
          <>
            <GridColumn width={4} textAlign={'left'}>
              <div className="aligh-content-right">
                Welcome, {Auth.getProfile().data.username}!!
              </div>
            </GridColumn>
            <GridColumn width={4} textAlign={'right'}>
              <div className="aligh-content-right">
                <div className="ui breadcrumb">
                  <a className="cart" href="/cart">cart({data?data.user.cart.length:0})</a>
                  <div className="divider">|</div>
                  <a className="logout" onClick={logout} href="/">log out</a>
                </div>
              </div>
            </GridColumn>
          </>
        ) : (
          <>
            <Grid.Column width={8} textAlign={'right'} floated={'right'}>
              <div className="aligh-content-right">
                <div className="ui huge breadcrumb">
                <a className="login" href="/login">Login</a>
                <div className="divider">|</div>
                <a className="signup" href="/signup">Sign Up</a>
                </div>
              </div>
            </Grid.Column>
          </>
        )}
      </GridRow>
    </Grid>
  );
};





export default Header;
