//import { Link } from 'react-router-dom';
import { Container, GridRow, GridColumn, Grid } from 'semantic-ui-react'
import React from 'react'
import {
  BreadcrumbSection,
  BreadcrumbDivider,
  Breadcrumb,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const BreadcrumbExample = () => (
  <Breadcrumb>
    <BreadcrumbSection link>Home</BreadcrumbSection>
    <BreadcrumbDivider />
    <BreadcrumbSection link>Cart</BreadcrumbSection>
    <BreadcrumbDivider />
    <BreadcrumbSection active>Login</BreadcrumbSection>
  </Breadcrumb>
)

const Header = () => {

  /*return (
    <div className="ui grid">
      <row>
        <div className="four wide column">1</div>
        <div className="four wide column">2</div>
        <div className="four wide column">3</div>
        <div className="four wide column">4</div>
      </row>
    </div>
  );*/

  
  return (
    <Container>
    <Grid>
      <GridRow>
        <GridColumn width={8}>
          <div>HELLO WORLD</div>
        </GridColumn>
        <GridColumn width={8} textAlign={'right'}>
          <div className="aligh-content-right">
          <div className="ui breadcrumb"><a className="section">Home</a><div className="divider">/</div><a className="section">Store</a><div className="divider">/</div><div className="active section">T-Shirt</div></div>
          </div>
        </GridColumn>
      </GridRow>
    </Grid>
    </Container>

  );
};

/*import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Tech Thoughts</h1>
          </Link>
          <p className="m-0">Get into the mind of a programmer.</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};*/

export default Header;
