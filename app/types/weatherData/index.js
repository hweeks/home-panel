import PropTypes from 'prop-types'

export const tempProp = {
  high: PropTypes.number,
  low: PropTypes.number,
}

export const forecastProp = {
  icon: PropTypes.string,
  summary: PropTypes.string,
  temps: PropTypes.shape(tempProp)
}

export const titleProp = {
  name: PropTypes.string,
  icon: PropTypes.string,
  summary: PropTypes.string,
  temperature: PropTypes.number,
}
