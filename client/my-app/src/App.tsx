import React, {FC, useContext, useEffect} from 'react';
import { Context } from '.';
import './App.css';
import LoginForm from './components/LoginForm';
import DataForm from './components/DataForm';
import { observer } from 'mobx-react-lite';

const App: FC = () => {

    const {store} = useContext(Context);
    
    useEffect(() => {
      if (localStorage.getItem('token')) {
          store.checkAuth()
      }
  }, [])

  if (!store.isAuth) {
    return (
        <div>
          <h1>Доступ заборонено</h1>
            <LoginForm/>
        </div>
    );
}
    return (
      <div>
        <button onClick={() => store.logout()} className='exit'>Exit</button>
        <DataForm/>
      </div>
 
    );
};

export default observer(App);
