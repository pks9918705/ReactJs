import './App.css';
import Cart from './components/Cart';

import Items from './components/Items';
import Navbar from './components/Navbar';
import CustomItemContext  from './itemContext';
 

function App() {

  return (
    <div className='App'>
      <h2>Shopping Cart</h2>
      <CustomItemContext>

        <Navbar />

        <Items />

        <Cart/>

      </CustomItemContext>
      

 
    </div>
  );
}
export default App;
