import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MainRoutes } from './routes/Routes';
import CustomPropsRoute from './components/route-path/RenderPath';
import './App.scss';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Switch>
        {MainRoutes.map((route, key) => <CustomPropsRoute {...route} key={key} />)}
      </Switch>
    </div>
  );
}
const mapStateToProps = state => ({

});
export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(App),
);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



