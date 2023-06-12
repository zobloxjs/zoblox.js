const Routes = require('../../util/Routes.js');

module.exports = async function({ transactionType, limit, sortOrder, cursor } = {}) {
  try {
    transactionType = transactionType || 'Sale', limit = limit || 100, sortOrder = sortOrder || 'Asc', cursor = cursor || '';
    const { data: Transactions } = await this.zoblox.session.get(Routes.economy.groupTransactions(this.id, transactionType, limit, sortOrder, cursor));
    Transactions.data.map((Transaction) => {
      Transaction.created = new Date(Transaction.created);
    });
    return Transactions;
  } catch (e) {
    if (e.response) throw new Error(`${e.response.status} ${e.response.data.errors.map(e => e.message)}`);
    if (!e.response) throw new Error(e.message);
  }
}