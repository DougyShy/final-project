//import { Link } from 'react-router-dom';
//import Auth from '../../utils/auth';

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

  return (
    <Container>
    <Grid>
      <GridRow>
        <GridColumn width={8}>
          <div>HELLO WORLD</div>
        </GridColumn>
        <GridColumn width={8} textAlign={'right'}>
          <div className="aligh-content-right">
          <div className="ui breadcrumb"><a className="section" href="/login">Home</a><div className="divider">/</div><a className="section">Store</a><div className="divider">/</div><div className="active section">T-Shirt</div></div>
          </div>
        </GridColumn>
      </GridRow>
    </Grid>
    </Container>

  );
};





export default Header;
