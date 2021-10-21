import { sequelize } from '../database/database';
import { DataTypes } from 'sequelize';
import ResPartner from './res_partner';

const posOrder = sequelize.define('pos_order', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Order Ref'
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Company',
    references: {
      model: 'res_company',
      key: 'id'
    }
  },
  date_order: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: 'Order Date'
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Salesperson',
    references: {
      model: 'res_users',
      key: 'id'
    }
  },
  amount_tax: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    comment: 'Taxes'
  },
  amount_total: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    comment: 'Total'
  },
  amount_paid: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    comment: 'Paid'
  },
  amount_return: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    comment: 'Returned'
  },
  pricelist_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Pricelist',
    references: {
      model: 'product_pricelist',
      key: 'id'
    }
  },
  partner_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Customer',
    references: {
      model: 'res_partner',
      key: 'id'
    }
  },
  sequence_number: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Sequence Number'
  },
  session_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Session',
    references: {
      model: 'pos_session',
      key: 'id'
    }
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Status'
  },
  invoice_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Invoice',
    references: {
      model: 'account_invoice',
      key: 'id'
    }
  },
  account_move: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Journal Entry',
    references: {
      model: 'account_move',
      key: 'id'
    }
  },
  picking_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Picking',
    references: {
      model: 'stock_picking',
      key: 'id'
    }
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Location',
    references: {
      model: 'stock_location',
      key: 'id'
    }
  },
  note: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Internal Notes'
  },
  nb_print: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Number of Print'
  },
  pos_reference: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Receipt Ref'
  },
  sale_journal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Sales Journal',
    references: {
      model: 'account_journal',
      key: 'id'
    }
  },
  fiscal_position_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Fiscal Position',
    references: {
      model: 'account_fiscal_position',
      key: 'id'
    }
  },
  create_uid: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Created by',
    references: {
      model: 'res_users',
      key: 'id'
    }
  },
  create_date: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: 'Created on'
  },
  write_uid: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Last Updated by',
    references: {
      model: 'res_users',
      key: 'id'
    }
  },
  write_date: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: 'Last Updated on'
  },
  currency_rate: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    comment: 'Currency Rate'
  },
  is_return_order: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    comment: 'Devolver Orden'
  },
  return_order_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Afecta',
    references: {
      model: 'pos_order',
      key: 'id'
    }
  },
  return_status: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Estatus de Devolución'
  },
  ncf: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'NCF'
  },
  payment_reference: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Authorization Number'
  }
}, {
  sequelize,
  tableName: 'pos_order',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: 'pos_order_date_order_index',
      fields: [
        { name: 'date_order' },
      ]
    },
    {
      name: 'pos_order_partner_id_index',
      fields: [
        { name: 'partner_id' },
      ]
    },
    {
      name: 'pos_order_pkey',
      unique: true,
      fields: [
        { name: 'id' },
      ]
    },
    {
      name: 'pos_order_session_id_index',
      fields: [
        { name: 'session_id' },
      ]
    },
  ]
});


posOrder.hasOne(ResPartner, {
  sourceKey: 'partner_id',
  foreignKey: 'id'
});

export default posOrder;
