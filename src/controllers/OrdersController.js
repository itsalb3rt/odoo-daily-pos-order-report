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
    const includeInvoices = query.include_invoices;
    const includePosOrders = query.include_points_of_sale;

    delete query.include_invoices;
    delete query.include_points_of_sale;

    let startHour = '';
    let endHour = '';
    
    if (query.interval) {
      const { interval } = query;

      switch (interval) {
        case 'complete-day':
          startHour = '00:00:00';
          endHour = '23:59:59';
          break;
        case 'morning':
          startHour = '00:00:00';
          endHour = '12:59:59';
          break;
        case 'afternoon':
          startHour = '13:00:00';
          endHour = '23:59:59';
          break;
        default:
          break;
    }

      delete query.interval;
    }

    query.date_order = `between:${startDate} ${startHour},${endDate} ${endHour}`;


    let { where, limit, offset, order } = querystringConverterHelper.parseQuery(query);

    try {
      const { rows, count, total } = await OrdersService.getAll({
        includeInvoices,
        includePosOrders,
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