import { sequelize } from '../database/database';
import { DataTypes } from 'sequelize';

const resPartner = sequelize.define('res_partner', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'res_company',
        key: 'id'
      }
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Display Name'
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: 'Date'
    },
    title: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Title',
      references: {
        model: 'res_partner_title',
        key: 'id'
      }
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Related Company',
      references: {
        model: 'res_partner',
        key: 'id'
      }
    },
    ref: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Internal Reference'
    },
    lang: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Language'
    },
    tz: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Timezone'
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
    vat: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Tax ID'
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Website'
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Notes'
    },
    credit_limit: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: 'Credit Limit'
    },
    barcode: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Barcode'
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: 'Active'
    },
    customer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: 'Is a Customer'
    },
    supplier: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: 'Is a Vendor'
    },
    employee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: 'Employee'
    },
    function: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Job Position'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Address Type'
    },
    street: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Street'
    },
    street2: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Street2'
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Zip'
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'City'
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'State',
      references: {
        model: 'res_country_state',
        key: 'id'
      }
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Country',
      references: {
        model: 'res_country',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Email'
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Phone'
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Mobile'
    },
    is_company: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: 'Is a Company'
    },
    industry_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Industry',
      references: {
        model: 'res_partner_industry',
        key: 'id'
      }
    },
    color: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Color Index'
    },
    partner_share: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: 'Share Partner'
    },
    commercial_partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Commercial Entity',
      references: {
        model: 'res_partner',
        key: 'id'
      }
    },
    commercial_company_name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Company Name Entity'
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Company Name'
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
    message_main_attachment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Main Attachment',
      references: {
        model: 'ir_attachment',
        key: 'id'
      }
    },
    message_bounce: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Bounce'
    },
    signup_token: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Signup Token'
    },
    signup_type: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Signup Token Type'
    },
    signup_expiration: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'Signup Expiration'
    },
    partner_gid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Company database ID'
    },
    additional_info: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Additional info'
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Sales Team',
      references: {
        model: 'crm_team',
        key: 'id'
      }
    },
    debit_limit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: 'Payable Limit'
    },
    last_time_entries_checked: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'Latest Invoices & Payments Matching Date'
    },
    invoice_warn: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Invoice'
    },
    invoice_warn_msg: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Message for Invoice'
    },
    sale_warn: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Sales Warnings'
    },
    sale_warn_msg: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Message for Sales Order'
    },
    picking_warn: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Stock Picking'
    },
    picking_warn_msg: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Message for Stock Picking'
    },
    sale_fiscal_type: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Tipo de comprobante'
    },
    expense_type: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Tipo de gasto'
    },
    website_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Registration Website',
      references: {
        model: 'website',
        key: 'id'
      }
    },
    purchase_warn: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Purchase Order'
    },
    purchase_warn_msg: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Message for Purchase Order'
    }
  }, {
    sequelize,
    tableName: 'res_partner',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'res_partner_commercial_partner_id_index',
        fields: [
          { name: 'commercial_partner_id' },
        ]
      },
      {
        name: 'res_partner_company_id_index',
        fields: [
          { name: 'company_id' },
        ]
      },
      {
        name: 'res_partner_date_index',
        fields: [
          { name: 'date' },
        ]
      },
      {
        name: 'res_partner_display_name_index',
        fields: [
          { name: 'display_name' },
        ]
      },
      {
        name: 'res_partner_message_main_attachment_id_index',
        fields: [
          { name: 'message_main_attachment_id' },
        ]
      },
      {
        name: 'res_partner_name_index',
        fields: [
          { name: 'name' },
        ]
      },
      {
        name: 'res_partner_parent_id_index',
        fields: [
          { name: 'parent_id' },
        ]
      },
      {
        name: 'res_partner_pkey',
        unique: true,
        fields: [
          { name: 'id' },
        ]
      },
      {
        name: 'res_partner_ref_index',
        fields: [
          { name: 'ref' },
        ]
      },
      {
        name: 'res_partner_sale_fiscal_type_index',
        fields: [
          { name: 'sale_fiscal_type' },
        ]
      },
      {
        name: 'res_partner_vat_index',
        fields: [
          { name: 'vat' },
        ]
      },
    ]
  });

export default resPartner;
