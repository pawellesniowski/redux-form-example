import React from 'react';
import ContactForm from './components/ContactForm';

function handleSubmit (values) {
  console.log('values: ', values);
}

function App() {
  return (
    <div>
      <h1>Redux Form Examples:</h1>
      <ContactForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
