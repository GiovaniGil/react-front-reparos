import CrudRequest from '../arch/crud/CrudRequest';

class EquipamentosRequest extends CrudRequest {
  static baseUrl() {
    return '/equipamentos';
  }
}
export default EquipamentosRequest;
