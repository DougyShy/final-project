import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react';

import BookList from '../components/BookList';

const Home = () => {
   
  return (
    <main>
      <Grid celled='internally'>
        <GridRow>
          <GridColumn width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </GridColumn>
          <GridColumn width={10}>
            <BookList />
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
