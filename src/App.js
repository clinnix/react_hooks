import React from 'react';
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';
import ShoppingList from './shoppingList';
import MyButton from './MyButton';
import UseEffectExample from './UseEffectExample';
import UseClassCycleExample from './UseClassCycleExample'
import './App.css';

const user = {
  name: 'Hedy Lammr',
  imageUrl: '/images/dog.png',
  imageSize: 90
};


function App() {
  let content;
  let isLoggedIn = false;
  if(isLoggedIn){
    content = <AdminPanel/>
  }else{
    content = <LoginForm />
  }

  return (
    <div className="App">
      <h1>Welcome to my app {user.name}</h1>
      <AboutPage />
      <Image />
      <div>
        {content}
      </div>
      <div>
        <ShoppingList/>
      </div>
      <div>
        <MyButton />
      </div>
      <div>
        <UseEffectExample/>
      </div>  
      <div>
        <UseClassCycleExample/>
      </div>    
    </div>
  );
}

function Image(){
  return (
    <div>
      <img alt='tupian' src={user.imageUrl} className='avatar' style={{
        width: user.imageSize,
        height: user.imageSize
      }}/>
    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>Hello there.How do you do </p>
    </div>
  )
}

export default App;
