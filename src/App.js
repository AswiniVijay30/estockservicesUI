import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CompanyAndDateInfo from './components/CompanyAndDateInfo';
import StockTable from './components/StockTable';

function App() {
  return (
    <div className="App">
      <Header/>
      <CompanyAndDateInfo/>
      <StockTable/>
     <Footer/>
    </div>
  );
}

export default App;
