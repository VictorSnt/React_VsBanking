import { Layout } from './components/Layout';
import { LoginCard } from './components/LoginCard.style';

function App() {
  const cardInfo = [
    { id: 1, technology: 'TYPESCRIPT', use: 'frontend e backend' },
    { id: 2, technology: 'HTML', use: 'frontend' },
    { id: 3, technology: 'SQL', use: 'banco de dados' },
  ];

  return (
    <Layout>
      {/* {cardInfo.map((object) => (
        <Card 
          id={object.id}
          resume={object.technology}
          details={object.use}
        />
      ))} */}
      <LoginCard />
    </Layout>
  );
}

export default App;

