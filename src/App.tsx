import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetail from './components/Content/CardItem/ItemDetail/ItemDetail';
import store from './store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app-wrapper">
          <Header />
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/product/:item_id' element={<ItemDetail />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
