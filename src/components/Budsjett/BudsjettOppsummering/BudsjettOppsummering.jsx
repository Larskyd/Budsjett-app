import { formatKr } from '../../../utils/formatters';
import './BudsjettOppsummering.css';

const BudsjettOppsummering = ({ totalInntekt, totalUtgifter, overskudd }) => {
  return (
    <div className="summary-container">
      <div className="summary-box">
        <h2 className="summary-title">Oppsummering</h2>
        <div className="summary-grid">
          <div className="summary-item income-summary">
            <div className="summary-label">Total inntekt</div>
            <div className="summary-value positive">{formatKr(totalInntekt)}</div>
          </div>
          
          <div className="summary-item expense-summary">
            <div className="summary-label">Total utgifter</div>
            <div className="summary-value negative">{formatKr(totalUtgifter)}</div>
          </div>
          
          <div className="summary-item balance-summary">
            <div className="summary-label">Overskudd</div>
            <div className={`summary-value ${overskudd >= 0 ? 'positive' : 'negative'}`}>
              {formatKr(overskudd)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudsjettOppsummering;