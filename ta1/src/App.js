import './App.css';
import Card from './components/Card';

function App() {
  const cardsData = [
    {
      title: 'Proyecto Alpha',
      description: 'Desarrollo del sistema de gestión de inventarios.',
      person: 'Juan Pérez',
      startDate: '2024-09-10',
      endDate: '2024-10-15'
    },
    {
      title: 'Proyecto Beta',
      description: 'Implementación de la nueva página web.',
      person: 'María González',
      startDate: '2024-09-12',
      endDate: '2024-11-01'
    },
    {
      title: 'Proyecto Gamma',
      description: 'Optimización de la base de datos.',
      person: 'Carlos Fernández',
      startDate: '2024-09-20',
      endDate: '2024-12-05'
    }
  ];

  return (
    <div className="App">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          person={card.person}
          startDate={card.startDate}
          endDate={card.endDate}
        />
      ))}
    </div>
  );
}

export default App;
