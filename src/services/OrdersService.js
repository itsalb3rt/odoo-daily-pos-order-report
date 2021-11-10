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

      // sort by pos_reference
      rows.sort((a, b) => {
        if (a.pos_reference > b.pos_reference) {
          return 1;
        }
        if (a.pos_reference < b.pos_reference) {
          return -1;
        }
        return 0;
      });

      return { rows: rows, count: count };
      // eslint-disable-next-line no-unreachable
    } catch (error) {
      throw error;
    }
  }

}

export default OrdersService;