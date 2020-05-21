import React from 'react';
import './App.css';
import  SearchForm  from './Components/SearchForm';
import {store} from './Store/store';
import {Provider} from 'react-redux'
import  CountryContainer  from './Components/CountryContainer';

function App() {
  return (
    <Provider store={store}>
      <SearchForm />
      <CountryContainer />
    </Provider>
  );
}

export default App;
