import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

import { Image, GridRow, GridColumn, Grid } from 'semantic-ui-react'
import React from 'react'
import 'semantic-ui-css/semantic.min.css'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <Grid columns={2} padded={false}>
      <GridRow>
        <Grid.Column width={8} floated={'left'}>
        <a href="/">
          <div>
            <img src="/src/assets/images/bookstore-icon.png" alt="Bookstore Icon" />
          </div>
        </a>
        </Grid.Column>
        {Auth.loggedIn() ? (
          <>
            <GridColumn width={8} textAlign={'right'}>
              <div className="aligh-content-right">
              <div className="ui breadcrumb"><a className="cart" href="/cart">cart</a><div className="divider">|</div><a className="logout" onClick={logout} href="/">log out</a></div>
              </div>
            </GridColumn>
          </>
        ) : (
          <>
            <GridColumn width={8} textAlign={'right'}>
              <div className="aligh-content-right">
                <div className="ui breadcrumb"><a className="login" href="/login">login</a><div className="divider">|</div><a className="signup" href="/signup">sign up</a></div>
              </div>
            </GridColumn>
          </>
        )}
      </GridRow>
    </Grid>
  );
};





export default Header;
