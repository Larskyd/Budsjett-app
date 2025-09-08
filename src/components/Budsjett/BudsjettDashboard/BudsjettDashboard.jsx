
import { useBudsjett } from '../../../hooks/useBudsjett';
import { formatKr } from '../../../utils/formatters';
import { CHART_COLORS } from '../../../utils/Constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './BudsjettDashboard.css';

const BudsjettDashboard = () => {
  const {
    totalLoan,
    ekstraLoan,
    jobb,
    harEkstraLoan,
    utgifter,
    totalInntekt,
    totalUtgifter,
    overskudd,
    data,
    setJobb,
    setHarEkstraLoan,
    handleExpenseChange
  } = useBudsjett();

  return (
    <div className="budsjett-dashboard">
      <main className="dashboard-main">
        <div className="input-container">
          <div className="input-sections">
            <div className="income-section">
              
              <div className="input-grid">
                <div className="input-group">
                  <label className="input-label">Månedlig støtte fra lånekasse</label>
                  <div className="input-wrapper fixed-input">
                    <span className="fixed-value">{formatKr(totalLoan)}</span>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="jobb-input" className="input-label">Ekstra inntekt</label>
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
                      Ekstra lån/støtte ({formatKr(ekstraLoan)})
                    </span>
                  </label>
                </div>
              </div>
            </div>


            <div className="input-section expense-section">
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
          </div>
        </div>


        <div className="summary-container">
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

      <div className="chart-box">
        {data.length > 0 && (
          <div className="chart-container">
            <h2 className="chart-title"></h2>
            
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    label={(entry) => `${entry.name}: ${formatKr(entry.value)}`}
                  >
                    {data.map((_, idx) => (
                      <Cell key={idx} fill={CHART_COLORS[idx % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [formatKr(value), name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
      </main>
    </div>
  );
};

export default BudsjettDashboard;
