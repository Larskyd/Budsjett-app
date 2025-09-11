import { formatKr } from '../../../utils/formatters';
import { CHART_COLORS } from '../../../utils/Constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './BudsjettGraf.css';

const BudsjettGraf = ({ data }) => {
  return (
    <div className="chart-container">
      <div className="chart-box">
        {data.length > 0 && (
          <>
            <h2 className="chart-title">Utgiftsfordeling</h2>
            
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
                    label={({ name, value }) => `${name}: ${formatKr(value)}`}
                    labelLine={true}
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
          </>
        )}
        {data.length === 0 && (
          <div className="no-data-message">
            <p>Legg til utgifter for å se diagrammet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudsjettGraf;