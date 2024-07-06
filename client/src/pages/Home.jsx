//import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react';

import BookList from '../components/BookList';
//import BookCard from '../components/BookCard';

import { QUERY_BOOKS } from '../components/utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_BOOKS);
  const books = data?.books || []; 
  return (
    <main>
      <Grid celled='internally'>
        <GridRow>
          <GridColumn width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </GridColumn>
          <GridColumn width={10}>
            <BookList 
              books={books}
            />

          </GridColumn>
          <GridColumn width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </GridColumn>
        </GridRow>
     </Grid>
    </main>
  );
};

export default Home;
