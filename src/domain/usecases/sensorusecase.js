const fetch = require('node-fetch');

class SensorUseCase {
  async execute({ id }) {
    try {
      const resultValue = await fetch(
        `https://temperature-sensor-service.herokuapp.com/sensor/${id}`
      )
      .then((response) => response.json())

      return resultValue
    } catch(error) {
      throw new Error('Cannot found the temperature on the sensor')
    }
    finally{}
  }
}

module.exports = SensorUseCase