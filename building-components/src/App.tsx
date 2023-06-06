import ListGroup from './components/ListGroup';

function App() {
  const listData = ['Nepal', 'India', 'China'];

  return (
    <>
      <ListGroup title="Country List" items={listData} />
    </>
  );
}

export default App;
