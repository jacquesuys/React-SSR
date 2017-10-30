import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
  return [
    <Header key={0} />,
    <div key={1}>{ renderRoutes(route.routes) }</div>
  ];
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}