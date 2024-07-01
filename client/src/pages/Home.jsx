import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react';

const Home = () => {
   
  return (
    <main>
      <Grid>
        <GridRow>
          <GridColumn width={3}>
            <div>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </div>
            <div>
              Category and other options nav can go header
            </div>
          </GridColumn>

          <GridColumn width={10}>
            <div>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </div>
            <div>
              Cards can go here
            </div>

          </GridColumn>

          <GridColumn width={3}>
            <div>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </div>
            <div>
              Cart and other random information can go here
            </div>
          </GridColumn>
        </GridRow>
  </Grid>
    </main>
  );
};

export default Home;
