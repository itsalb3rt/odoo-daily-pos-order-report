import Response from '../utils/response';

class OrdersController {

  static async getAll(req, res) {
    try {
      const settings = {
        commerce: process.env.COMMERCE
      };
      return res.json(Response.get('Settings', settings, 200));
    } catch (error) {
      console.log(error);
      return res.json(Response.get('Something goes wrong', error, 500));
    }
  }
}

export default OrdersController;