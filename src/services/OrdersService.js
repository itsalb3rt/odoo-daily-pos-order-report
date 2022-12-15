import POSOrder from '../models/pos_order';
import ResPartner from '../models/res_partner';
import accountInvoice from '../models/account_invoice';
class OrdersService {

  static async getAll(params) {
    const { criterions, includeInvoices, includePosOrders } = params;

    try {
      let results = [];
      let generalCount = 0;

      const includeInvoicesBoolean = includeInvoices === 'true';
      const includePosOrdersBoolean = includePosOrders === 'true';

      if (includePosOrdersBoolean) {
        let { rows, count } = await POSOrder.findAndCountAll({
          ...criterions,
          include: [{ model: ResPartner }]
        });
        results = [...results, ...rows];
        generalCount += count;
      }



      if (includeInvoicesBoolean) {
        const invoiceCriterions = {
          ...criterions,
          where: {
            ...criterions.where,
            create_date: criterions.where.date_order,
          }
        };

        delete invoiceCriterions.where.date_order;
        const { rows, count } = await accountInvoice.findAndCountAll({
          ...invoiceCriterions,
          include: [{ model: ResPartner }]
        });
        let accountInvoices = JSON.parse(JSON.stringify(rows));
        accountInvoices = accountInvoices.map(o => ({
          ...o,
          pos_reference: o.reference,
          date_order: o.create_date,
          ncf: o.reference
        }));

        results = [...results, ...accountInvoices];
        generalCount += count;

      }
      // sort by pos_reference
      results.sort((a, b) => {
        if (a.pos_reference > b.pos_reference) {
          return 1;
        }
        if (a.pos_reference < b.pos_reference) {
          return -1;
        }
        return 0;
      });

      return { rows: results, count: generalCount };
      // eslint-disable-next-line no-unreachable
    } catch (error) {
      throw error;
    }
  }

}

export default OrdersService;