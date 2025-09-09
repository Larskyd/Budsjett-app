import { formatKr } from '../../../utils/formatters';
import './IntektSeksjon.css';

const IntektSeksjon = ({ 
  totalLoan, 
  ekstraLoan, 
  jobb, 
  harEkstraLoan, 
  setJobb, 
  setHarEkstraLoan 
}) => {
  return (
    <div className="income-section">
      <div className="input-grid">
        <div className="input-group">
          <h2>Inntekter</h2>
          <label className="input-label">MÅNDLIG STØTTE FRA LÅNEKASSEN</label>
          <div className="input-wrapper fixed-input">
            <span className="fixed-value">{formatKr(totalLoan)}</span>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="jobb-input" className="input-label">EKSTRA INNTEKT</label>
          <div className="input-wrapper">
            <input
              id="jobb-input"
              type="number"
              placeholder="0"
              value={jobb || ''}
              onChange={(e) => setJobb(Number(e.target.value) || 0)}
              className="styled-input"
            />
            <span className="input-suffix">Kr</span>
          </div>
        </div>

        <div className="input-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={harEkstraLoan}
              onChange={(e) => setHarEkstraLoan(e.target.checked)}
              className="styled-checkbox"
            />
            <span className="checkbox-text">
              EKSTRA LÅN / STØTTE ({formatKr(ekstraLoan)})
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default IntektSeksjon;