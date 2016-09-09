import React from 'react';
import MessagesContainer from '../containers/MessagesContainer';
import Login from './Login';

const App = (props) => {
  let visibleComponent;
  if(props.currentUser) {
    visibleComponent = <MessagesContainer />
  } else {
    visibleComponent = <Login setCurrentUser={props.setCurrentUser}/>
  }
  return(
    <div>
      {visibleComponent}
    </div>
  )
}

export default App
