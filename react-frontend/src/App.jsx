// import RoutesComponent from './routes';
import './styles/App.css'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #111827;
    color: white;
  }
`;


function App() {

  return (
    <>
     <div className="App">
      <GlobalStyle />
      {/* <RoutesComponent /> */}
    </div>
    </>
  )
}

export default App
