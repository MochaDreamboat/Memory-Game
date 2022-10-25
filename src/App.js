function App() {
  return (
    <main>
      <header>
        <h1>MEMORY GAME</h1>
        <p>Don't click a card more than once!</p>
      </header>
      <div class="card">
        <img src={require('./images/ashe.png')} alt="ashe" />
        <h3>ASHE</h3>
      </div>
    </main>
  );
}

export default App;
