import MyButton from '../components/MyButton.js';
import Footer from '../components/Footer.js';
import Footer2 from '../components/Footer2.js';
import Products from '../components/Products.js';
import { useState } from 'react';
import ButtonSharedState from '../components/ButtonSharedState.js';
import NestedComponent from '../components/NestedComponent.js';
import ButtonWithRef from '../components/ButtonWithRef.js';
import StateObject from '../components/StateObject.js';
import Stopwatch from '../components/Stopwatch.js';
export default function Home() {
    const user = {
        name: 'Mohammed',
        isLoggedIn: true
      }
      const colors = {
        main: 'gray'
      }
      
      let footer;
      
      if(user.name === 'Mohammed') {
        footer = <Footer/>;
      } else {
        footer = <Footer2/>;
      }

    const [count, setCount] = useState(0);
    function handleClick() {
      setCount(count + 1);
    }

    return (
        <>
            <p>Home Page</p>
            <Products />
            <div>Created By: <span style={{ color: colors.main, fontSize: '1em' }}>{user.name}</span></div>
            <div>
                <MyButton />
                <MyButton />
            </div>
            <div>
                <ButtonSharedState count={count} onClick={handleClick} />
                <ButtonSharedState count={count} onClick={handleClick} />
            </div>
            <div>
                <ButtonWithRef></ButtonWithRef>
            </div>
            <NestedComponent>
                <MyButton />
                <MyButton />
                <MyButton />
            </NestedComponent>

            <StateObject />

            <Stopwatch />

            {user.isLoggedIn ? <Footer /> : <Footer2 />}
        </>
    )
}