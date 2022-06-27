import { HipsterButton } from './components/Buttons';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <HipsterButton>click me</HipsterButton>
      <HipsterButton as='a' href='https://www.johnsmilga.com/'>
        click me
      </HipsterButton>
      <HipsterButton>click me</HipsterButton>
    </div>
  );
}

export default App;
