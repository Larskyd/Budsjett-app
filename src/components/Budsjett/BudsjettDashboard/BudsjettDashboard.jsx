
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
    <div className="Body">
      <main>
        <p>Månedlig støtte fra lånekasse: {totalLoan}</p>
        
        <label>
          <p>Ekstra inntekt: {jobb} Kr</p>
          <input
            type="number"
            placeholder="Skriv inn beløp" 
            value={jobb}
            onChange={(e) => setJobb(Number(e.target.value) || 0)}
          />
        </label>

        <div>
          <label>
            <input
              type="checkbox"
              checked={harEkstraLoan}
              onChange={(e) => setHarEkstraLoan(e.target.checked)}
            />
            Esktra lån/støtte ({ekstraLoan} Kr)   
          </label>
        </div>

        <h2>Utgifter</h2>
        {utgifter.map((exp, i) => (
          <div key={exp.name} style={{ marginBottom: 8 }}>
            <label>
              {exp.name}:{' '}
              <input
                type="number"
                value={exp.value}
                onChange={(e) => handleExpenseChange(i, e.target.value)}
              />{' '}
              kr
            </label>
          </div>
        ))}
        
        <h2>Oppsummering</h2>
        <p>Total inntekt: <strong>{formatKr(totalInntekt)}</strong></p>
        <p>Total utgifter: <strong>{formatKr(totalUtgifter)}</strong></p>
        <p>Overskudd: <strong>{formatKr(overskudd)}</strong></p>

        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
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
      </main>
    </div>
  );
};

export default BudsjettDashboard;