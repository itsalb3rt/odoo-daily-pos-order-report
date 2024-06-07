import { sequelize } from '../database/database';
import { DataTypes } from 'sequelize';
import ResPartner from './res_partner';
import accountInvoicePaymentRel from './account_invoice_payment_rel';

const accountInvoice = sequelize.define('account_invoice', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Reference/Description'
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Source Document'
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Type'
  },
  refund_invoice_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Invoice for which this invoice is the credit note',
    references: {
      model: {
        tableName: 'account_invoice',
      },
      key: 'id'
    }
  },
  number: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Number',
    unique: true
  },
  move_name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Journal Entry Name'
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Payment Ref.'
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Additional Information'
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Status'
  },
  sent: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    comment: 'Sent'
  },
  date_invoice: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    comment: 'Invoice Date'
  },
  date_due: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    comment: 'Due Date'
  },
  partner_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Partner',
    references: {
      model: {
        tableName: 'res_partner',
      },
      key: 'id'
    }
  },
  vendor_bill_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Vendor Bill',
    references: {
      model: {
        tableName: 'account_invoice',
      },
      key: 'id'
    }
  },
  payment_term_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Payment Terms',
    references: {
      model: {
        tableName: 'account_payment_term',
      },
      key: 'id'
    }
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    comment: 'Accounting Date'
  },
  account_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Account',
    references: {
      model: {
        tableName: 'account_account',
      },
      key: 'id'
    }
  },
  move_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Journal Entry',
    references: {
      model: {
        tableName: 'account_move',
      },
      key: 'id'
    }
  },
  amount_untaxed: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    comment: 'Untaxed Amount'
  },
  amount_untaxed_signed: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    comment: 'Untaxed Amount in Company Currency'
  },
  amount_tax: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    comment: 'Tax'
  },
  amount_total: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    comment: 'Total'
  },
  amount_total_signed: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    comment: 'Total in Invoice Currency'
  },
  amount_total_company_signed: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    comment: 'Total in Company Currency'
  },
  currency_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Currency',
    references: {
      model: {
        tableName: 'res_currency',
      },
      key: 'id'
    }
  },
  journal_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Journal',
    references: {
      model: {
        tableName: 'account_journal',
      },
      key: 'id'
    }
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Company',
    references: {
      model: {
        tableName: 'res_company',
      },
      key: 'id'
    }
  },
  reconciled: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    comment: 'Paid/Reconciled'
  },
  partner_bank_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Bank Account',
    references: {
      model: {
        tableName: 'res_partner_bank',
      },
      key: 'id'
    }
  },
  residual: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    comment: 'Amount Due'
  },
  residual_signed: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    comment: 'Amount Due in Invoice Currency'
  },
  residual_company_signed: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    comment: 'Amount Due in Company Currency'
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Salesperson',
    references: {
      model: {
        tableName: 'res_users',
      },
      key: 'id'
    }
  },
  fiscal_position_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Fiscal Position',
    references: {
      model: {
        tableName: 'account_fiscal_position',
      },
      key: 'id'
    }
  },
  commercial_partner_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Commercial Entity',
    references: {
      model: {
        tableName: 'res_partner',
      },
      key: 'id'
    }
  },
  cash_rounding_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Cash Rounding Method',
    references: {
      model: {
        tableName: 'account_cash_rounding',
      },
      key: 'id'
    }
  },
  incoterm_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Incoterm',
    references: {
      model: {
        tableName: 'account_incoterms',
      },
      key: 'id'
    }
  },
  source_email: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Source Email'
  },
  vendor_display_name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Vendor Display Name'
  },
  access_token: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Security Token'
  },
  message_main_attachment_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Main Attachment',
    references: {
      model: {
        tableName: 'ir_attachment',
      },
      key: 'id'
    }
  },
  create_uid: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Created by',
    references: {
      model: {
        tableName: 'res_users',
      },
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
      model: {
        tableName: 'res_users',
      },
      key: 'id'
    }
  },
  write_date: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: 'Last Updated on'
  },
  team_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Sales Team',
    references: {
      model: {
        tableName: 'crm_team',
      },
      key: 'id'
    }
  },
  partner_shipping_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Delivery Address',
    references: {
      model: {
        tableName: 'res_partner',
      },
      key: 'id'
    }
  },
  incoterms_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Incoterms',
    references: {
      model: {
        tableName: 'account_incoterms',
      },
      key: 'id'
    }
  },
  sale_fiscal_type: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'NCF para'
  },
  income_type: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Tipo de Ingreso'
  },
  expense_type: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Tipo de Costos y Gastos'
  },
  anulation_type: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Tipo de anulación'
  },
  is_nd: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    comment: 'Es Nota de Débito'
  },
  origin_out: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Afecta a'
  },
  ncf_expiration_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    comment: 'Válido hasta'
  },
  purchase_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Add Purchase Order',
    references: {
      model: {
        tableName: 'purchase_order',
      },
      key: 'id'
    }
  },
  vendor_bill_purchase_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Auto-Complete'
  }
}, {
  sequelize,
  tableName: 'account_invoice',
  schema: 'public',
  timestamps: false,
});

accountInvoice.hasOne(ResPartner, {
  sourceKey: 'partner_id',
  foreignKey: 'id'
});

accountInvoice.hasMany(accountInvoicePaymentRel, {
  sourceKey: 'id',
  foreignKey: 'invoice_id'
});

export default accountInvoice;
