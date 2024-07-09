//import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react';

import Auth from '../components/utils/auth';

import BookList from '../components/BookList';
import CategoryList from '../components/CategoryList';
import Cart from '../components/Cart';

import { QUERY_BOOKS } from '../components/utils/queries';
import { QUERY_USER } from '../components/utils/queries';

console.log("LOGGED IN: " + Auth.loggedIn());

const username = Auth.loggedIn() ? Auth.getProfile().data.username : ''; 
console.log("HERE WITH USERNAME:" + username);

const Home = () => {
  const { loading, data } = useQuery(QUERY_BOOKS);
  
  const books = data?.books || []; 
  
  return (
    <main>
      <Grid celled='internally'>
        <GridRow>
          <GridColumn width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            <CategoryList />
          </GridColumn>
          <GridColumn width={10}>
            <BookList 
              books={books}
            />

          </GridColumn>
          <GridColumn width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            <Cart />
          </GridColumn>
        </GridRow>
     </Grid>
    </main>
  );
};

export default Home;
