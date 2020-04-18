import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/action';
import AComponent from '../components/AComponent';
import { CSSTransitionGroup } from 'react-transition-group'
import ModalPortal from '../components/ModalPortal';

const mapStateToProps = (state) => ({
  //toggles for rendering
  display: state.generic.display,
  modalDisplay: state.generic.modalDisplay,
  contentURL: state.generic.contentURL,
  modalText: state.generic.modalText,
  modalNumber: state.generic.modalNumber
});

const mapDispatchToProps = (dispatch) => ({
  showMap: () => dispatch(actions.showMap()),
  showModal: (numberData) => dispatch(actions.showModal(numberData)),
});

class MainContainer extends Component {
  render(props) {
    let personalTiles = []

    for (let i = 1; i < this.props.contentURL.length; i++) {
      personalTiles.push(<AComponent
        key={`${i}PersonalTile`}
        id={this.props.contentURL[i].slice(8, -4)}
        contentURL={this.props.contentURL[i]}
        modalDisplay={this.props.modalDisplay}
        showModal={this.props.showModal}
        modalNumber = {i}
      />)
    }

    return (
      <main>
        <button onClick={() => this.props.showMap()}>Personal Things and Hobbies</button>
        <CSSTransitionGroup className="testingSpan"
          transitionName="mapTransition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.props.display && <div className={"displayStories"}>
            {personalTiles}
            <ModalPortal
              id={this.props.contentURL[this.props.modalNumber].slice(8, -4)}
              
              source = {this.props.contentURL[this.props.modalNumber].slice(0, -4) + "Collage" + this.props.contentURL[this.props.modalNumber].slice(-4)}
              modalText={this.props.modalText[this.props.modalNumber]}
              modalDisplay={this.props.modalDisplay}
              onClose={this.props.showModal}
              modalNumber={this.props.modalNumber}
            />
          </div>}
        </CSSTransitionGroup>

      </main>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);