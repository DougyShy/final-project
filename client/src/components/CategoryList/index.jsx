import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MenuItem, Menu } from 'semantic-ui-react'

const CategoryList = (props) => {
  const [state, setState] = useState({ activeItem: 'all' });
  const { activeItem } = state;

  const handleItemClick = (e, { name }) => setState({ activeItem: name });
  
  return (
  
    <Menu pointing vertical>
      <MenuItem
        name='all'
        active={activeItem === 'all'}
        onClick={handleItemClick}
      />
      <MenuItem
        name='classics'
        active={activeItem === 'classics'}
        onClick={handleItemClick}
      />
      <MenuItem
        name='sci-fi'
        active={activeItem === 'sci-fi'}
        onClick={handleItemClick}
      />
    </Menu>
  )
};

export default CategoryList;