import React from 'react';
import './App.css';

class App extends React.Component{
  render() {
    return (
        <Header/>
    )
}
}

function Header(){
  return(
    <h1 className='text-teal-200'>Hello</h1>
  )
}

export default App;
