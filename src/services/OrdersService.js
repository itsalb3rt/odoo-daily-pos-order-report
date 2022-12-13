import POSOrder from '../models/pos_order';
import ResPartner from '../models/res_partner';
import accountInvoice from '../models/account_invoice';
class OrdersService {

  static async getAll(params) {
    const { criterions, includeInvoices } = params;

    try {
      const includeInvoicesBoolean = includeInvoices === 'true';

      let { rows, count } = await POSOrder.findAndCountAll({
        ...criterions,
        include: [{ model: ResPartner }]
      });
      
      if (includeInvoicesBoolean) {
        const invoiceCriterions = {
          ...criterions,
          where: {
            ...criterions.where,
            create_date: criterions.where.date_order,
          }
        };

        delete invoiceCriterions.where.date_order;
        const accountInvoiceResults = await accountInvoice.findAndCountAll({
          ...invoiceCriterions,
          include: [{ model: ResPartner }]
        });
        let accountInvoices = JSON.parse(JSON.stringify(accountInvoiceResults.rows));
        accountInvoices = accountInvoices.map(o => ({
          ...o,
          pos_reference: o.reference,
          date_order: o.create_date,
          ncf: o.reference
        }));

        rows = [...rows, ...accountInvoices];
        count += accountInvoiceResults.count;

      }
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