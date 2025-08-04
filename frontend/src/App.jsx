import RoutesComponent from './routes';
import './styles/App.css'
import { createGlobalStyle } from 'styled-components';
import TestBackendAPI from './components/TestBackendAPI'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #111827;
    color: white;
  }
`;


function App() {

  return (
    <>
     <div className="App">
      <GlobalStyle />
      {/* <TestBackendAPI /> */}
      <RoutesComponent />
    </div>
    </>
  )
}

export default App
