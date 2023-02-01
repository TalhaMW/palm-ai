import { SideBar, Main } from './layouts';
import { Data } from './pages';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

import HamburgerContextProvider from './context/hamburgerMenuContext';
const App = () => {
  return (
    <HamburgerContextProvider>
      <ThemeProvider theme={theme}>
        <div className='grid-cont'>
          <SideBar />
          <div className='main'>
            <Main>
              <Data />
            </Main>
          </div>
        </div>
      </ThemeProvider>
    </HamburgerContextProvider>
  );
};

export default App;
