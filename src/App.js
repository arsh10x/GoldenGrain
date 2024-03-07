import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoute from './components/Routes/AppRoute';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoute/>
      <Footer/>
    </div>
  );
}

export default App;
