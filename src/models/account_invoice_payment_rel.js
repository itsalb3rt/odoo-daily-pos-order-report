import { sequelize } from '../database/database';
import { DataTypes } from 'sequelize';
import accountPayment from './account_payment';

const accountInvoicePaymentRel = sequelize.define('account_invoice_payment_rel', {
  payment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  invoice_id: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize,
  tableName: 'account_invoice_payment_rel',
  timestamps: false,
});

accountInvoicePaymentRel.belongsTo(accountPayment, { foreignKey: 'payment_id' });
accountPayment.hasMany(accountInvoicePaymentRel, { foreignKey: 'payment_id' });

export default accountInvoicePaymentRel;
