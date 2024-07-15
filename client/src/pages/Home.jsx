//import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react';

import Auth from '../components/utils/auth';

import BookList from '../components/BookList';
import CategoryList from '../components/CategoryList';
import Cart from '../components/Cart';

import { QUERY_BOOKS, QUERY_USER } from '../components/utils/queries';

//console.log("LOGGED IN: " + Auth.loggedIn());

const username = Auth.loggedIn() ? Auth.getProfile().data.username : ''; 

if(!username) {
  //console.log("Username is empty");
}

const Home = () => {
  const { loading: booksLoading, data: booksData } = useQuery(QUERY_BOOKS);
  const { loading: userLoading, data: userData } = useQuery(QUERY_USER, {
    variables: { username: username }
  });
  
  const books = booksData?.books || []; 
  const userInfo = userData?.user || [];
    
  //console.log(books);
  //console.log(userInfo);
  
  //console.log("USERNAME: " + username);

  const user = userData?.user || [];
  //console.log("USER INFO: " + user.cart)

  if (user) {
    //console.log(user);
  };
 
  return (
    <main>
      <Grid celled='internally'>
        <GridRow>
          <GridColumn width={3}>
            <CategoryList />
          </GridColumn>
          <GridColumn width={10}>
            <BookList 
              books={books}
            />

          </GridColumn>
          <GridColumn width={3}>
            <Cart 
              cart={user.cart}
            />
          </GridColumn>
        </GridRow>
     </Grid>
    </main>
  );
};

export default Home;
