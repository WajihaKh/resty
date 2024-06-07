import './History.scss';

const History = ({ history, onHistoryClick }) => {
  return (
    <section className="history-container">
      <h3 className="history-header">History</h3>
      <ul className="history-list">
        {history.map((item, index) => (
          <li key={index} onClick={() => onHistoryClick(item)}>
            <strong>{item.method}</strong> - {item.url}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default History;
