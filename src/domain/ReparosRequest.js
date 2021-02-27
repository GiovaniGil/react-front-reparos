import CrudRequest from '../arch/crud/CrudRequest';

class ReparosRequest extends CrudRequest {
  static baseUrl() {
    return '/reparos';
  }
}
export default ReparosRequest;
