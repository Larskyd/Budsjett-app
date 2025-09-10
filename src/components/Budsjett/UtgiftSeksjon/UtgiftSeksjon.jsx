import { useState } from 'react';
import './UtgiftSeksjon.css';

const UtgiftSeksjon = ({ utgifter, handleExpenseChange, addExpense }) => {
  const [nyUtgift, setNyUtgift] = useState('');

return (
  <div className="expense-section">
    <h3 className="section-title">Utgifter</h3>
    <div className="input-grid">
      <div className="fixed-expenses">
        {utgifter.slice(0, 4).map((exp, i) => (
          <div key={exp.name} className="input-group">
            <label className="input-label">{exp.name.toUpperCase()}</label>
            <div className="input-wrapper">
              <input
                type="number"
                placeholder=""
                value={exp.value || ''}
                onChange={(e) => handleExpenseChange(i, e.target.value)}
                className="styled-input"
              />
              <span className="input-suffix">Kr</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};
export default UtgiftSeksjon;
