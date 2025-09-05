import './Body.css'
import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Body = () =>{

    //valuta
    const formatKr = (amount) => {
    return amount + ' Kr';
    };

    //Faste inntekter
    const totalLoan = 15169;
    const ekstraLoan = 4572
    
    //Ka endres under bruk
    const [jobb, setJobb] = useState(0)
    const [harEkstraLoan, setHarEkstraLoan] = useState(false);
    const [utgifter, setUtgifter] = useState([
        {name: 'Leie', value: ''},
        {name: 'Mat', value: ''},
        {name: 'Fritid', value: ''},
        {name: 'Transport', value: ''}
    ]);
    
    //Utregninger
    const totalInntekt = totalLoan + jobb + (harEkstraLoan ? ekstraLoan : 0);
    const totalUtgifter = utgifter.reduce((sum, e) => sum + e.value, 0);
    const overskudd = totalInntekt - totalUtgifter;
    
    //Data til diagram
    const data = [...utgifter]; 

    //farger til diagrammet ekstra viss det blir flere utgifter
    const COLORS = [
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
    '#AA00FF', '#FF4444', '#7CB342', '#D81B60',
    '#5C6BC0', '#26A69A'
    ];

    // utgifet
     const handleExpenseChange = (index, newValue) => {
        const numValue = Number(newValue) || 0;
        const updated = utgifter.map((item, i) => 
            i === index 
                ? { name: item.name, value: numValue }
                : { name: item.name, value: item.value }
        );
        setUtgifter(updated);
    };

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
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
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
}
  
  export default Body