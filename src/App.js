import './App.css';
import Banner from './components/Banner/Banner';
import Currency from './components/Currency/Currency';
import Date from './components/Date/Date';
import InfoBlock from './components/InfoBlock/InfoBlock';
import Link from './components/Link/Link';
import Logo from './components/Logo/Logo';
import NewsList from './components/NewsList/NewsList';
import Promo from './components/Promo/Promo';
import Search from './components/Search/Search';
import Tabs from './components/Tabs/Tabs';

function App() {
  return (
    <div>
      <div className="d-flex align-items-center ml">
        <div>
          <div className="d-flex">
            <Tabs/>
            <Date/>
          </div>

          <NewsList/>
          <Currency/>
        </div>

        <Promo/>
      </div>

      <div className="d-flex align-items-start">
        <Logo/>

        <div>
          <div className="d-flex align-items-center">
            <Link/>
            <Link/>
            <Link/>
            <Link/>
            <Link/>
          </div>

          <Search/>
          <Banner/>
          
          <div className="d-flex align-items-start">
            <div>
              <InfoBlock/>
              <InfoBlock/>
            </div>

            <div>
              <InfoBlock/>
              <InfoBlock/>
            </div>

            <div>
              <InfoBlock/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
