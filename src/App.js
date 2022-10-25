function App() {
  return (
    <main>
      <header>
        <h1>MEMORY GAME</h1>
        <p>Don't click a card more than once!</p>
      </header>
      {/* TO-DO: Split draft into respective components */}
      <section id="cards">
        <div class="card">
          <img src={require('./images/ashe.png')} alt="ashe" />
          <h3>ASHE</h3>
        </div>
        <div class="card">
          <img src={require('./images/ana.png')} alt="ana" />
          <h3>ANA</h3>
        </div>
        <div class="card">
          <img src={require('./images/baptiste.png')} alt="ana" />
          <h3>BAPTISTE</h3>
        </div>
        <div class="card">
          <img src={require('./images/baptiste.png')} alt="ana" />
          <h3>BAPTISTE</h3>
        </div>
        <div class="card">
          <img src={require('./images/baptiste.png')} alt="ana" />
          <h3>BAPTISTE</h3>
        </div>
        <div class="card">
          <img src={require('./images/baptiste.png')} alt="ana" />
          <h3>BAPTISTE</h3>
        </div>
      </section>
    </main>
  );
}

export default App;
