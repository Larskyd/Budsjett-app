import './UtgiftSeksjon.css';

const UtgiftSeksjon = ({ utgifter, handleExpenseChange }) => {
  return (
    <div className="expense-section">
      <h3 className="section-title">Utgifter</h3>
      
      <div className="input-grid">
        {utgifter.map((exp, i) => (
          <div key={exp.name} className="input-group">
            <label className="input-label">{exp.name}</label>
            <div className="input-wrapper">
              <input
                type="number"
                placeholder="0"
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
  );
};

export default UtgiftSeksjon;