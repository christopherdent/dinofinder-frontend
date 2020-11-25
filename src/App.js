import React from 'react';
import {connect} from 'react-redux'
import {fetchEras} from './actions/fetchEras'
import ErasContainer from './containers/ErasContainer'


class App extends React.Component {



  render() {
    return (
      <div className="App">

        <ErasContainer />

      </div>
    );

  }
}
//way of accessing values in our store as props!
// const mapStateToProps = () => {
//   return {
//     eras: state.eras
//   }
// }

//gives us ability to dispatch new actions to our store directly from this component
const mapDispatchToProps = () => {

}

export default connect(null)(App);
