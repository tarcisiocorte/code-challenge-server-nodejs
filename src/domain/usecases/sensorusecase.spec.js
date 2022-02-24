const SensorUseCase = require('./sensorusecase')

describe('Temperature', () => {
  beforeEach(() => {
    sensorUseCase = new SensorUseCase();
});

  it('should be able to get the temperature when sensor id is equal 1', async () => {
    const temperature = await sensorUseCase.execute({
      id: 1
    });

    expect(temperature).toHaveProperty('id');
  })
})
