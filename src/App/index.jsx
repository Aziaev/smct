import React from 'react';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';
import { initialValue } from './constants';

function App() {
  return (
    <div className="container">
      <Header
        name="SM Code task"
        description="Category and keyword manager"
      />
      <Table
        initialValue={initialValue}
      />
      <Footer
        title="Github link"
        link="https://github.com/Aziaev/smct"
      />
    </div>
  );
}

export default App;
