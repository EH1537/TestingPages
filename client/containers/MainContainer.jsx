import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/action';
import AComponent from '../components/AComponent';

const mapStateToProps = (state) => ({
  //toggles for rendering
  display: state.generic.display,
});

const mapDispatchToProps = (dispatch) => ({
  anAction: () => dispatch(actions.anAction),
});

class MainContainer extends Component {
  render(props) {
    return(
      <main>
       <div>
         <AComponent 
         display={this.props.display}   
         />
       </div>

      </main>
    )
  }
}

export default MainContainer;