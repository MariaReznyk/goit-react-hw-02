import style from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th className={style.th}>Type</th>
            <th className={style.th}>Amount</th>
            <th className={style.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <tr className={style.tr} key={item.id}>
                <td className={style.td}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </td>
                <td className={style.td}>{item.amount}</td>
                <td className={style.td}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TransactionHistory;
