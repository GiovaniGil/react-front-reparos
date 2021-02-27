import CrudRequest from '../arch/crud/CrudRequest';

class UsuarioRequest extends CrudRequest {
  static baseUrl() {
    return '/usuarios';
  }
}
export default UsuarioRequest;
