import { sequelize } from '../database/database';
import { DataTypes } from 'sequelize';

const accountPayment = sequelize.define('account_payment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    multi: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: 'Multi'
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Payment Method Type',
      references: {
        model: 'account_payment_method',
        key: 'id'
      }
    },
    partner_type: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Partner Type'
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Partner',
      references: {
        model: 'res_partner',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: 'Payment Amount'
    },
    currency_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Currency',
      references: {
        model: 'res_currency',
        key: 'id'
      }
    },
    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: 'Payment Date'
    },
    communication: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Memo'
    },
    journal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Payment Journal',
      references: {
        model: 'account_journal',
        key: 'id'
      }
    },
    payment_difference_handling: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Payment Difference Handling'
    },
    writeoff_account_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Difference Account',
      references: {
        model: 'account_account',
        key: 'id'
      }
    },
    writeoff_label: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Journal Item Label'
    },
    partner_bank_account_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Recipient Bank Account',
      references: {
        model: 'res_partner_bank',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Name'
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Status'
    },
    payment_type: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Payment Type'
    },
    payment_reference: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Payment Reference'
    },
    move_name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Journal Entry Name'
    },
    destination_journal_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Transfer To',
      references: {
        model: 'account_journal',
        key: 'id'
      }
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
    payment_transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Payment Transaction',
      references: {
        model: 'payment_transaction',
        key: 'id'
      }
    },
    payment_token_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Saved payment token',
      references: {
        model: 'payment_token',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'account_payment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'account_payment_message_main_attachment_id_index',
        fields: [
          { name: 'message_main_attachment_id' },
        ]
      },
      {
        name: 'account_payment_pkey',
        unique: true,
        fields: [
          { name: 'id' },
        ]
      },
    ]
  });

export default accountPayment;
