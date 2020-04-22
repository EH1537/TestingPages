import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/action';
import DetailComponent from '../components/DetailComponent';
import { CSSTransitionGroup } from 'react-transition-group'
import ModalPortal from '../components/ModalPortal';
import TechStackComponent from '../components/TechStackComponent';
import AboutMeComponent from '../components/AboutMeComponent';

const mapStateToProps = (state) => ({
  //toggles for rendering
  personalDisplay: state.generic.personalDisplay,
  bioDisplay: state.generic.bioDisplay,
  modalDisplay: state.generic.modalDisplay,
  contentURL: state.generic.contentURL,
  modalText: state.generic.modalText,
  modalNumber: state.generic.modalNumber
});

const mapDispatchToProps = (dispatch) => ({
  showPersonal: () => dispatch(actions.showPersonal()),
  showModal: (numberData) => dispatch(actions.showModal(numberData)),
  showBio: () => dispatch(actions.showBio())
});

class MainContainer extends Component {
  render(props) {
    let personalTiles = [];
    let bioTiles = [];
    for (let i = 1; i < 4; i++) {
      personalTiles.push(<DetailComponent
        key={`${i}PersonalTile`}
        id={this.props.contentURL[i].slice(8, -4)}
        contentURL={this.props.contentURL[i]}
        modalDisplay={this.props.modalDisplay}
        showModal={this.props.showModal}
        modalNumber={i}
      />)
    }
    return (
      <main>
        <button onClick={() => this.props.showPersonal()}>Personal Things and Hobbies</button>
        <button onClick={() => this.props.showBio()}>Biography</button>
        <CSSTransitionGroup className="testingSpan"
          transitionName="mapTransition"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={100}>
          {this.props.personalDisplay && <div className={"displayStories"}>
            {personalTiles}
          </div>}
          {this.props.bioDisplay && <div className={"displayStories"}>
            <AboutMeComponent
              key={`${5}PersonalTile`}
              id={this.props.contentURL[5].slice(8, -4)}
              contentURL={this.props.contentURL[5]}
              modalDisplay={this.props.modalDisplay}
              showModal={this.props.showModal}
              modalNumber={5}
            />
            <TechStackComponent
              key={`${6}PersonalTile`}
              id={this.props.contentURL[6].slice(8, -4)}
              contentURL={this.props.contentURL[6]}
              modalDisplay={this.props.modalDisplay}
              showModal={this.props.showModal}
              modalNumber={6}
            />
          </div>}
          <ModalPortal
            id={this.props.contentURL[this.props.modalNumber].slice(8, -4)}

            source={this.props.contentURL[this.props.modalNumber].slice(0, -4) + "Collage" + this.props.contentURL[this.props.modalNumber].slice(-4)}
            modalText={this.props.modalText[this.props.modalNumber]}
            modalDisplay={this.props.modalDisplay}
            onClose={this.props.showModal}
            modalNumber={this.props.modalNumber}
          />
        </CSSTransitionGroup>

      </main>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);