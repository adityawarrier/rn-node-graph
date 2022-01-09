import React, {useState} from 'react';
import {Movies} from './src/components/Movies';
import {Users} from './src/components/Users';

export const App = (): React.ReactElement => {
  const [type] = useState('');

  const switchViews = () => {
    switch (type) {
      default:
      case 'Users':
        return <Users />;
      case 'Movie':
        return <Movies />;
    }
  };

  return switchViews();
};
