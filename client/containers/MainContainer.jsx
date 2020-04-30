import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/action';
import OtherDetailComponent from '../components/OtherDetailComponent';
import { CSSTransitionGroup } from 'react-transition-group'
import ModalPortal from '../components/ModalPortal';
import TechStackComponent from '../components/TechStackComponent';
import AboutMeComponent from '../components/AboutMeComponent';
import ProjectComponent from '../components/ProjectComponent';

const mapStateToProps = (state) => ({
  //toggles for rendering
  projectDisplay: state.generic.projectDisplay,
  personalDisplay: state.generic.personalDisplay,
  bioDisplay: state.generic.bioDisplay,
  modalDisplay: state.generic.modalDisplay,
  contentURL: state.generic.contentURL,
  modalText: state.generic.modalText,
  modalNumber: state.generic.modalNumber,
  demoLinks: state.generic.demoLinks,
});

const mapDispatchToProps = (dispatch) => ({
  showModal: (numberData) => dispatch(actions.showModal(numberData)),
});

class MainContainer extends Component {
  render(props) {
    let personalTiles = [];
    let projectTiles = [];
    let counter = 1
    while (this.props.contentURL[counter] !== "filler") {
      console.log("push" + this.props.contentURL)
      projectTiles.push(<ProjectComponent
        key={`${counter}ProjectComponent`}
        id={this.props.contentURL[counter].slice(8, -4)}
        demoLinks = {this.props.demoLinks[counter]}
        contentURL={this.props.contentURL[counter]}
        modalDisplay={this.props.modalDisplay}
        showModal={this.props.showModal}
        modalNumber={counter}
      />)
      counter++
    }
    console.log("before second while" + counter)
    counter++
    while (this.props.contentURL[counter] !== "filler") {
      console.log("push" + this.props.contentURL)
      personalTiles.push(<OtherDetailComponent
        key={`${counter}PersonalTile`}
        id={this.props.contentURL[counter].slice(8, -4)}
        contentURL={this.props.contentURL[counter]}
        modalDisplay={this.props.modalDisplay}
        showModal={this.props.showModal}
        modalNumber={counter}
      />)
      counter++
    }
    console.log("post both loops")
    console.log(counter)
    return (
      <main>
        <CSSTransitionGroup className="testingSpan"
          transitionName="mapTransition"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={100}>
          {this.props.projectDisplay && <div className={"displayStories"}>
            {projectTiles}
          </div>}
          {this.props.personalDisplay && <div className={"displayStories"}>
            {personalTiles}
          </div>}
          {this.props.bioDisplay && <div className={"displayStories"}>
            <AboutMeComponent
              key={`${counter++}PersonalTile`}
              id={this.props.contentURL[counter].slice(8, -4)}
              contentURL={this.props.contentURL[counter]}
              modalDisplay={this.props.modalDisplay}
              showModal={this.props.showModal}
              modalNumber={counter}
            />
            <TechStackComponent
              key={`${counter++}PersonalTile`}
              id={this.props.contentURL[counter].slice(8, -4)}
              contentURL={this.props.contentURL[counter]}
              modalDisplay={this.props.modalDisplay}
              showModal={this.props.showModal}
              modalNumber={counter}
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