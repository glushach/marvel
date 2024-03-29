import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {MainPage, ComicsPage} from '../pages';

const App = () => {

  return (
    <Router>
      <div className="app">
        <AppHeader/>
        <main>
          <Routes>
            <Route path={'/comics'} element={<MainPage/>}/>
            <Route path={'/'} element={<ComicsPage/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}


export default App;
