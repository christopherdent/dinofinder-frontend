import React from 'react';
import {connect} from 'react-redux'
import {fetchEras} from './actions/fetchEras'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchEras()
  }

  render() {
    return (
      <div className="App">
        Dino App Here
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

export default connect(null, {fetchEras})(App);
