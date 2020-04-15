import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/action';
import AComponent from '../components/AComponent';
import { CSSTransitionGroup } from 'react-transition-group' 

const mapStateToProps = (state) => ({
  //toggles for rendering
  display: state.generic.display,
  modalDisplay: state.generic.modalDisplay,
});

const mapDispatchToProps = (dispatch) => ({
  showMap: () => dispatch(actions.showMap()),
  showModal: () => dispatch(actions.showModal()),
});

class MainContainer extends Component {
  render(props) {
    return(
      <main>
        <button onClick = {() => this.props.showMap()}>Map Redux</button>
        <CSSTransitionGroup className = "testingSpan"
          transitionName="mapTransition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.props.display && <div className = {"map"}>
         <AComponent 
         modalDisplay={this.props.modalDisplay}
         showModal={this.props.showModal}
         />
         </div>}
        </CSSTransitionGroup>
      </main>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);