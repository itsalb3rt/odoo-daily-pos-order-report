import POSOrder from '../models/pos_order';
import ResPartner from '../models/res_partner';
class OrdersService {

  static async getAll(params) {
    const { criterions } = params;

    try {

      const { rows, count } = await POSOrder.findAndCountAll({
        ...criterions,
        include: [{ model: ResPartner }]
      });

      return { rows: rows, count: count };
      // eslint-disable-next-line no-unreachable
    } catch (error) {
      throw error;
    }
  }

}

export default OrdersService;