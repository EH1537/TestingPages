import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/action';
import MainContainer from './containers/MainContainer.jsx';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  showProjects: () => dispatch(actions.showProjects()),
  showPersonal: () => dispatch(actions.showPersonal()),
  showModal: (numberData) => dispatch(actions.showModal(numberData)),
  showBio: () => dispatch(actions.showBio())
});


class App extends Component {

  render(props) {

    return (
      <div id="app">
        <div id="header">
          <div id="headerLeft"><a className="headerLinks" href="https://github.com/eh1537" target="_blank">EH1537</a>
            <a className="headerLinks" href="mailto:ehilton1537@gmail.com" target="_blank">aka</a>
            <a className="headerLinks" href="https://www.linkedin.com/in/ehilton1537/" target="_blank">Evan Hilton</a>
          </div>
          <div id="headerRight">
            <button onClick={() => this.props.showProjects()}>Projects and Code</button>
            <button onClick={() => this.props.showPersonal()}>Personal Things and Hobbies</button>
            <button onClick={() => this.props.showBio()}>Biography</button>
          </div>
        </div>
        <MainContainer />

      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);