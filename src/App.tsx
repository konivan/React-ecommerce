import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div className='app-wrapper'>
      <Header />
      <Content />
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
