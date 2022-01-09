import React, {useState} from 'react';
import {AddMovie} from './src/components/AddMovie';
import {Movies} from './src/components/Movies';
import {Users} from './src/components/Users';

export const App = (): React.ReactElement => {
  const [type] = useState('AddMovie');

  const switchViews = () => {
    switch (type) {
      default:
      case 'Users':
        return <Users />;
      case 'Movie':
        return <Movies />;
      case 'AddMovie':
        return <AddMovie />;
    }
  };

  return switchViews();
};
