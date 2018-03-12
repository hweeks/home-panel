import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Hue from '../../Components/Hue';
import Weather from '../../Components/Weather';
import * as actions from '../../actions';
import baseStyles, { AppContainer } from './styles';

class App extends PureComponent {
  componentDidMount() {
    const { getLights, getWeather, getGroups } = this.props;
    getLights();
    getWeather();
    getGroups();
  }
  render() {
    const { lightData, groupData, weatherData } = this.props;
    baseStyles();
    return (
      <AppContainer>
        <Hue lightData={lightData} groupData={groupData} />
        <Weather weatherData={weatherData} />
      </AppContainer>
    );
  }
}

// TODO Custom types
App.propTypes = {
  lightData: PropTypes.object,
  groupData: PropTypes.object,
  weatherData: PropTypes.object,
  getLights: PropTypes.func.isRequired,
  getGroups: PropTypes.func.isRequired,
  getWeather: PropTypes.func.isRequired,
};

App.defaultProps = {
  lightData: null,
  groupData: null,
  weatherData: null,
};

const mapStateToProps = (state) => {
  const { hue, weather } = state;
  return Object.assign({}, hue, weather);
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getLights: actions.getLightStatus,
  getGroups: actions.getGroupsStatus,
  getWeather: actions.getForecast,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
