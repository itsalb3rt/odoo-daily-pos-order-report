import OrdersService from '../services/OrdersService';
import Response from '../utils/response';
import querystringConverterHelper from '../utils/querystringConverterHelper';

class OrdersController {

  static async getAll(req, res) {
    const { query } = req;

    const separatorIndex = query.date_order.indexOf(':');
    const dates = query.date_order.substring(separatorIndex + 1).split(',');
    const startDate = dates[0];
    const endDate = dates[1];

    query.date_order = `between:${startDate} 00:00:00,${endDate} 23:59:59`;


    let { where, limit, offset, order } = querystringConverterHelper.parseQuery(query);

    try {
      const { rows, count, total } = await OrdersService.getAll({
        criterions: {
          where,
          limit,
          offset,
          order,
        }
      });

      return res.json(Response.get('Orders', rows, 200, { count, total, offset }));
    } catch (error) {
      console.log(error);
      return res.json(Response.get('Something goes wrong', error, 500));
    }
  }
}

export default OrdersController;