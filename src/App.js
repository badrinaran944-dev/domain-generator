"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = require("@/components/ui/button");
var navItems = ['Home', 'Collections', 'Offers', 'New Launch', 'Features'];
var animeCards = [
    { title: 'Neon Ronin', genre: 'Cyber Action', price: '$29' },
    { title: 'Moonblade Saga', genre: 'Fantasy Epic', price: '$34' },
    { title: 'Arcade Spirits', genre: 'Retro Quest', price: '$27' },
];
var features = [
    { title: 'Ultra HD Prints', text: 'Crisp anime art on premium wall vinyl.' },
    { title: 'Fast Dispatch', text: 'Ships in 24 hours with protective packaging.' },
    { title: 'COD + WhatsApp', text: 'Order instantly through WhatsApp support.' },
];
function App() {
    return (<main className="wallcool-app min-h-screen text-slate-100">
      <div className="wallcool-loader" aria-hidden="true"/>

      <header className="wallcool-header">
        <div className="container row-between">
          <h1 className="logo">Wallcool</h1>
          <nav className="nav">
            {navItems.map(function (item) { return (<a key={item} href="#">{item}</a>); })}
          </nav>
        </div>
      </header>

      <section className="announcement">🔥 Weekend Drop: Buy 2 Anime Posters & Get 1 Free + Free Shipping</section>

      <section className="hero container">
        <div>
          <p className="tag">Gaming × Anime Wall Store</p>
          <h2>Level up your room with legendary anime vibes.</h2>
          <p className="sub">Dark, neon, and made for gamers. Pick your collection and place order in seconds.</p>
          <button_1.Button className="wa-btn">Order on WhatsApp</button_1.Button>
        </div>
      </section>

      <section className="container section">
        <h3>Anime Collection</h3>
        <div className="cards">
          {animeCards.map(function (card) { return (<article key={card.title} className="anime-card">
              <div className="thumb"/>
              <h4>{card.title}</h4>
              <p>{card.genre}</p>
              <div className="row-between">
                <span>{card.price}</span>
                <button_1.Button className="wa-btn small">WhatsApp Order</button_1.Button>
              </div>
            </article>); })}
        </div>
      </section>

      <section className="container section grid-3">
        <article className="panel"><h3>Offers</h3><p>Combo packs and festival sale offers updated every week.</p></article>
        <article className="panel"><h3>New Launch</h3><p>Fresh anime arcs and gamer edition posters just dropped.</p></article>
        <article className="panel"><h3>Features</h3><ul>{features.map(function (f) { return <li key={f.title}><strong>{f.title}</strong> — {f.text}</li>; })}</ul></article>
      </section>
    </main>);
}
exports.default = App;
