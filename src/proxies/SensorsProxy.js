import Proxy from './Proxy';

class SensorsProxy extends Proxy {
  /**
   * The constructor for the ArtistProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('v1/sensors', parameters);
  }

  

}

export default SensorsProxy;