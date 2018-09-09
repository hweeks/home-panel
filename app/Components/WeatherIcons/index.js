import React from 'react';
import styled from 'styled-components';

export const wi = styled.i`
  display: inline-block;
  font-family: 'weathericons';
  font-style: normal;
  font-weight: normal;
  font-size: 44px;
  padding: 8px;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
export const Degree = wi.extend`
  font-size: 20px;
  padding: 2px;
  :before{
    content: "\f042";
  }
`;

export const ClearDay = wi.extend`
  :before{
    content: "\f00d";
  }
`;

export const ClearNight = wi.extend`
  :before{
    content: "\f02e";
  }
`;

export const Rain = wi.extend`
  :before{
    content: "\f019";
  }
`;

export const Snow = wi.extend`
  :before{
    content: "\f01b";
  }
`;

export const Sleet = wi.extend`
  :before{
    content: "\f0b5";
  }
`;

export const Wind = wi.extend`
  :before{
    content: "\f085";
  }
`;

export const Fog = wi.extend`
  :before{
    content: "\f003";
  }
`;

export const Cloudy = wi.extend`
  :before{
    content: "\f07d";
  }
`;
export const PartlyCloudyDay = wi.extend`
  :before{
    content: "\f002";
  }
`;

export const PartlyCloudyNight = wi.extend`
  :before{
    content: "\f031";
  }
`;

const GetWeatherIcon = ({ name }) => {
  switch (name) {
    case 'clear-day':
      return <ClearDay />;
    case 'clear-night':
      return <ClearNight />;
    case 'rain':
      return <Rain />;
    case 'snow':
      return <Snow />;
    case 'sleet':
      return <Sleet />;
    case 'wind':
      return <Wind />;
    case 'fog':
      return <Fog />;
    case 'cloudy':
      return <Cloudy />;
    case 'partly-cloudy-day':
      return <PartlyCloudyDay />;
    case 'partly-cloudy-night':
      return <PartlyCloudyNight />;
    default:
      return <ClearDay />;
  }
};

export default GetWeatherIcon;
