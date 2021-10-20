import POSOrder from '../models/pos_order';

class OrdersService {

  static async getAll(params) {
    const { criterions } = params;
    
    try {
      
      const { rows, count } = await POSOrder.findAndCountAll({...criterions});

      return { rows: rows, count: count };
      // eslint-disable-next-line no-unreachable
    } catch (error) {
      throw error;
    }
  }

}

export default OrdersService;