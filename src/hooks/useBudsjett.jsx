import { useState } from 'react';

export const useBudsjett = () => {
  // Faste inntekter
  const totalLoan = 15169;
  const ekstraLoan = 4572;
  
  // Kan endres under bruk
  const [jobb, setJobb] = useState(0);
  const [harEkstraLoan, setHarEkstraLoan] = useState(false);
  const [utgifter, setUtgifter] = useState([
    {name: 'Leie', value: ''},
    {name: 'Mat', value: ''},
    {name: 'Fritid', value: ''},
    {name: 'Transport', value: ''}

  ]);
  
  // Utregninger
  const totalInntekt = totalLoan + jobb + (harEkstraLoan ? ekstraLoan : 0);
  const totalUtgifter = utgifter.reduce((sum, e) => sum + e.value, 0);
  const overskudd = totalInntekt - totalUtgifter;
  
  // data til overskudd
  const data = [
    ...utgifter.filter(item => item.value > 0),
    ...(overskudd > 0 ? [{name: 'Overskudd', value: overskudd}] : [])
  ];

  // Endre eksisterende utgifter
  const handleExpenseChange = (index, newValue) => {
    const numValue = Number(newValue) || 0;
    const updated = utgifter.map((item, i) => 
      i === index 
        ? { name: item.name, value: numValue }
        : item
    );
    setUtgifter(updated);
  };

  /* Legg til ny utgift
  const addExpense = (name) => {
    if (!name.trim()) return;
    setUtgifter([...utgifter, { name, value: 0 }]);
  }; */
  
  return {
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
  };
};