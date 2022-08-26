import styles from './style'
import Navbar from './components/NavBar';
import Home from './components/Home'

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Home/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
