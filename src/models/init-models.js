var DataTypes = require("sequelize").DataTypes;
var _pos_order = require("./pos_order");

function initModels(sequelize) {
  var pos_order = _pos_order(sequelize, DataTypes);

  pos_order.belongsTo(account_fiscal_position, { as: "fiscal_position", foreignKey: "fiscal_position_id"});
  account_fiscal_position.hasMany(pos_order, { as: "pos_orders", foreignKey: "fiscal_position_id"});
  pos_order.belongsTo(account_invoice, { as: "invoice", foreignKey: "invoice_id"});
  account_invoice.hasMany(pos_order, { as: "pos_orders", foreignKey: "invoice_id"});
  pos_order.belongsTo(account_journal, { as: "sale_journal_account_journal", foreignKey: "sale_journal"});
  account_journal.hasMany(pos_order, { as: "pos_orders", foreignKey: "sale_journal"});
  pos_order.belongsTo(account_move, { as: "account_move_account_move", foreignKey: "account_move"});
  account_move.hasMany(pos_order, { as: "pos_orders", foreignKey: "account_move"});
  pos_order.belongsTo(pos_order, { as: "return_order", foreignKey: "return_order_id"});
  pos_order.hasMany(pos_order, { as: "pos_orders", foreignKey: "return_order_id"});
  pos_order.belongsTo(pos_session, { as: "session", foreignKey: "session_id"});
  pos_session.hasMany(pos_order, { as: "pos_orders", foreignKey: "session_id"});
  pos_order.belongsTo(product_pricelist, { as: "pricelist", foreignKey: "pricelist_id"});
  product_pricelist.hasMany(pos_order, { as: "pos_orders", foreignKey: "pricelist_id"});
  pos_order.belongsTo(res_company, { as: "company", foreignKey: "company_id"});
  res_company.hasMany(pos_order, { as: "pos_orders", foreignKey: "company_id"});
  pos_order.belongsTo(res_partner, { as: "partner", foreignKey: "partner_id"});
  res_partner.hasMany(pos_order, { as: "pos_orders", foreignKey: "partner_id"});
  pos_order.belongsTo(res_users, { as: "create_u", foreignKey: "create_uid"});
  res_users.hasMany(pos_order, { as: "pos_orders", foreignKey: "create_uid"});
  pos_order.belongsTo(res_users, { as: "user", foreignKey: "user_id"});
  res_users.hasMany(pos_order, { as: "user_pos_orders", foreignKey: "user_id"});
  pos_order.belongsTo(res_users, { as: "write_u", foreignKey: "write_uid"});
  res_users.hasMany(pos_order, { as: "write_u_pos_orders", foreignKey: "write_uid"});
  pos_order.belongsTo(stock_location, { as: "location", foreignKey: "location_id"});
  stock_location.hasMany(pos_order, { as: "pos_orders", foreignKey: "location_id"});
  pos_order.belongsTo(stock_picking, { as: "picking", foreignKey: "picking_id"});
  stock_picking.hasMany(pos_order, { as: "pos_orders", foreignKey: "picking_id"});

  return {
    pos_order,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
