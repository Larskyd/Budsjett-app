import { useBudsjett } from '../../../hooks/useBudsjett';
import IntektSeksjon from '../IntektSeksjon/IntektSeksjon';
import UtgiftSeksjon from '../UtgiftSeksjon/UtgiftSeksjon';
import BudsjettOppsummering from '../BudsjettOppsummering/BudsjettOppsummering';
import BudsjettGraf from '../BudsjettGraf/BudsjettGraf';
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
    handleExpenseChange,
  } = useBudsjett();

  return (
    <div className="budsjett-dashboard">
      <main className="dashboard-main">
          <div className="input-sections">
            <IntektSeksjon 
              totalLoan={totalLoan}
              ekstraLoan={ekstraLoan}
              jobb={jobb}
              harEkstraLoan={harEkstraLoan}
              setJobb={setJobb}
              setHarEkstraLoan={setHarEkstraLoan}
            />
            
            <UtgiftSeksjon 
              utgifter={utgifter}
              handleExpenseChange={handleExpenseChange}
            />
          </div>

        <BudsjettOppsummering 
          totalInntekt={totalInntekt}
          totalUtgifter={totalUtgifter}
          overskudd={overskudd}
        />

        <BudsjettGraf data={data} />
      </main>
    </div>
  );
};

export default BudsjettDashboard;