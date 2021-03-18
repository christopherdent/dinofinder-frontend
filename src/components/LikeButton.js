import React from 'react';
import Button from 'react-bootstrap/Button';

//only used for dinosaurs here but could potentially be used on components for eras or dino_types in the future if more were to be added.

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          likes: 0,

      };
this.increaseCount = this.increaseCount.bind(this);

    }

increaseCount(){
   this.setState(
    { likes: this.state.likes + 1 })
  //  console.log('a')
  // fetch("http://localhost:3000/api/v1/eras/1/dino_types/1/dinosafdsfdsfdsurs")
  //
  //  .then(function(response) {
  //    console.log(response)
  //    if (response.ok) {
  //      console.log('b')
  //      return response.json();
  //    } else {
  //      throw new Error('Error')
  //    }
  //  })
  //  )
  //  .catch(function(error) {
  //  });
}

  render(){
  return (

      <div>

        <Button variant="outline-info"onClick={this.increaseCount}>Likes: {this.state.likes}</Button>
      </div>
    )
  }
}
export default LikeButton
