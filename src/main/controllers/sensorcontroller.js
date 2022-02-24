const SensorUseCase = require('../../domain/usecases/sensorusecase')

class SensorController {
  async handle(request, response) {
    const { id } = request.params;
    const sensorUseCase = new SensorUseCase()
    const temperature = await sensorUseCase.execute({
      id: id,
    });    
    return response.json(temperature)
  }
}

module.exports = SensorController