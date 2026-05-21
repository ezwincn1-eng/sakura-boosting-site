function App() {
  const coachingServices = [
    {
      icon: '▣',
      title: 'VOD Review',
      price: 'A$25',
      badge: 'Replay review',
      text: 'Send a replay and get clear feedback on laning, macro, deaths, fights, and what to improve next.',
    },
    {
      icon: '◖',
      title: 'Live Duo Coaching',
      price: 'A$35/hr',
      badge: 'Live session',
      text: 'Play ranked while getting real-time guidance on decisions, map movement, fights, and rotations.',
    },
    {
      icon: '●',
      title: 'Solo Coaching Call',
      price: 'A$35/hr',
      badge: '1-on-1',
      text: 'A private Discord call focused on your role, champ pool, rank goals, and improvement plan.',
    },
  ]

  const boostingServices = [
    { from: 'Iron 4', to: 'Bronze 4', price: 'A$25+' },
    { from: 'Bronze 4', to: 'Silver 4', price: 'A$40+' },
    { from: 'Silver 4', to: 'Gold 4', price: 'A$60+' },
    { from: 'Gold 4', to: 'Platinum 4', oldPrice: 'A$90+', price: 'A$45+', sale: '50% OFF' },
    { from: 'Platinum 4', to: 'Emerald 4', oldPrice: 'A$110+', price: 'A$55+', sale: '50% OFF' },
    { from: 'Emerald 4', to: 'Diamond 4', price: 'A$130+' },
    { from: 'Diamond 4', to: 'Diamond 1', price: 'Quote' },
  ]

  return (
    <div style={page}>
      <div style={bgImage}></div>
      <div style={overlay}></div>

      <nav style={nav}>
        <h2 style={logo}>🌸 Sakura Climb</h2>

        <div style={navLinks}>
          <a style={navLink} href="#coaching">Coaching</a>
          <a style={navLink} href="#boosting">Boosting</a>
          <a style={navLink} href="#team">Team</a>
          <a style={navLink} href="#faq">FAQ</a>
          <a href="https://discord.gg/JJZk6Z7v" target="_blank">
            <button style={navButton}>🎮 Book on Discord</button>
          </a>
        </div>
      </nav>

      <section style={hero}>
        <div style={flowerTop}>🌸</div>

        <p style={eyebrow}>OCE LEAGUE SERVICES</p>

        <h1 style={heroTitle}>
          Climb peacefully,
          <br />
          win confidently.
        </h1>

        <p style={heroText}>
          Coaching, VOD reviews, duo sessions, and rank-to-rank services for OCE
          League players. Fast response times and multiple available coaches and boosters.
        </p>

        <div style={buttonRow}>
          <a href="https://discord.gg/JJZk6Z7v" target="_blank">
            <button style={primaryButton}>🎮 Book on Discord</button>
          </a>

          <a href="#boosting">
            <button style={secondaryButton}>View Prices ↓</button>
          </a>
        </div>

        <div style={statsGrid}>
          <div style={statCard}>
            <div style={statIcon}>👥</div>
            <h3>OCE</h3>
            <p>Server focused</p>
          </div>

          <div style={statCard}>
            <div style={statIcon}>⚡</div>
            <h3>Fast</h3>
            <p>Multiple staff available daily</p>
          </div>

          <div style={statCard}>
            <div style={statIcon}>🛡️</div>
            <h3>Flexible</h3>
            <p>Coaching or rank service</p>
          </div>
        </div>
      </section>

      <main style={mainWrap}>
        <div style={topGrid}>
          <section id="coaching" style={panel}>
            <h2 style={panelTitle}>🌸 Coaching Services</h2>

            <div style={serviceGrid}>
              {coachingServices.map((service) => (
                <div key={service.title} style={serviceCard}>
                  <div style={serviceIcon}>{service.icon}</div>
                  <span style={badge}>{service.badge}</span>
                  <h3>{service.title}</h3>
                  <p style={muted}>{service.text}</p>
                  <h4 style={price}>{service.price}</h4>
                  <a href="#order">
                    <button style={outlineButton}>Book This</button>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="boosting" style={panel}>
            <h2 style={panelTitle}>🌸 Rank-to-Rank Services</h2>

            <div style={boostGrid}>
              {boostingServices.map((boost) => (
                <div key={`${boost.from}-${boost.to}`} style={boostCard}>
                  {boost.sale && <div style={saleBadge}>{boost.sale}</div>}

                  <p style={smallText}>{boost.from} → {boost.to}</p>

                  {boost.oldPrice && <p style={oldPrice}>{boost.oldPrice}</p>}

                  <h3 style={boostPrice}>{boost.price}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section id="team" style={panel}>
          <h2 style={panelTitle}>🌸 Available Staff</h2>
          <p style={muted}>We have multiple coaches and boosters available to help you reach your goals faster.</p>

          <div style={teamGrid}>
            <div style={teamCard}>
              <div style={bigIcon}>👥</div>
              <h3>Boosting Team</h3>
              <p style={muted}>
                Multiple boosters are available daily for different ranks and schedules.
                This helps reduce waiting times and keeps orders moving fast.
              </p>
            </div>

            <div style={teamCard}>
              <div style={bigIcon}>🎓</div>
              <h3>Coaching Team</h3>
              <p style={muted}>
                Different coaches are available depending on role, champion pool,
                and your current rank. Sessions are personalised to your goals.
              </p>
            </div>

            <div style={teamCard}>
              <div style={bigIcon}>🕒</div>
              <h3>Fast Responses</h3>
              <p style={muted}>
                Staff are active throughout the day for bookings, updates,
                progress reports, and scheduling sessions.
              </p>
            </div>
          </div>
        </section>

        <div style={bottomGrid}>
          <section style={panel}>
            <h2 style={panelTitle}>🌸 How It Works</h2>

            <div style={stepsGrid}>
              <div style={stepCard}>
                <div style={circle}>1</div>
                <h3>Message Me</h3>
                <p style={muted}>Send your rank, role, champion pool, and what service you want.</p>
              </div>

              <div style={arrow}>→</div>

              <div style={stepCard}>
                <div style={circle}>2</div>
                <h3>Confirm Details</h3>
                <p style={muted}>I’ll confirm price, timing, server, and what you need to provide.</p>
              </div>

              <div style={arrow}>→</div>

              <div style={stepCard}>
                <div style={circle}>3</div>
                <h3>Start Service</h3>
                <p style={muted}>We begin the session, review, duo coaching, or rank service.</p>
              </div>
            </div>
          </section>

          <section id="order" style={orderPanel}>
            <h2 style={panelTitle}>Start an Order</h2>
            <p style={muted}>
              Orders are handled through Discord. Send the info below so we can
              give you the correct price and estimate.
            </p>

            <div style={checkList}>
              <p>☑ Rank: Current rank + LP</p>
              <p>☑ Goal: Desired rank/service</p>
              <p>☑ Role: Main role/champs</p>
              <p>☑ Queue: Solo/Duo or Flex</p>
              <p>☑ Region: OCE preferred</p>
            </div>

            <a href="https://discord.gg/JJZk6Z7v" target="_blank">
              <button style={fullButton}>🎮 Message on Discord</button>
            </a>
          </section>
        </div>

        <section id="faq" style={panel}>
          <h2 style={panelTitle}>🌸 FAQ</h2>

          <div style={faqGrid}>
            <div style={faqCard}>
              <h3>How do I book?</h3>
              <p style={muted}>Click the Discord button and send your rank, role, LP, and service.</p>
              <div style={miniIcon}>💬</div>
            </div>

            <div style={faqCard}>
              <h3>Are multiple boosters available?</h3>
              <p style={muted}>Yes. Multiple staff members are available for both coaching and boosting.</p>
              <div style={miniIcon}>👥</div>
            </div>

            <div style={faqCard}>
              <h3>Are prices fixed?</h3>
              <p style={muted}>Coaching prices are fixed. Rank service prices may change based on MMR, LP gains, role requests, and timeframe.</p>
              <div style={miniIcon}>💲</div>
            </div>

            <div style={faqCard}>
              <h3>What server do you support?</h3>
              <p style={muted}>Mainly OCE. VOD reviews can be done for other regions too.</p>
              <div style={miniIcon}>🌐</div>
            </div>
          </div>
        </section>

        <footer style={footer}>
          <h2>🌸 Sakura Climb</h2>
          <p>Discord: ezwinCN1</p>
          <p>© 2026 Sakura Climb. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

const page = {
  minHeight: '100vh',
  color: '#ffe4ef',
  fontFamily: 'Arial, sans-serif',
  position: 'relative',
  overflowX: 'hidden',
  background: '#160b12',
}

const bgImage = {
  position: 'fixed',
  inset: 0,
  zIndex: 0,
  backgroundImage:
    'url("https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1800&q=90")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.42,
}

const overlay = {
  position: 'fixed',
  inset: 0,
  zIndex: 0,
  background:
    'linear-gradient(180deg, rgba(18,7,13,0.55), rgba(28,8,18,0.82), rgba(16,6,12,0.98))',
}

const nav = {
  position: 'sticky',
  top: 0,
  zIndex: 20,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '22px 6%',
  background: 'rgba(22, 8, 15, 0.55)',
  backdropFilter: 'blur(18px)',
}

const logo = {
  margin: 0,
  color: '#fb7185',
  fontSize: '26px',
}

const navLinks = {
  display: 'flex',
  alignItems: 'center',
  gap: '26px',
}

const navLink = {
  color: '#ffe4ef',
  textDecoration: 'none',
  fontWeight: 'bold',
}

const navButton = {
  padding: '12px 22px',
  borderRadius: '10px',
  border: '1px solid rgba(251,113,133,0.7)',
  background: 'rgba(236,72,153,0.22)',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
}

const hero = {
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  padding: '75px 20px 30px',
}

const flowerTop = {
  fontSize: '34px',
  marginBottom: '14px',
}

const eyebrow = {
  color: '#f9a8d4',
  letterSpacing: '5px',
  fontWeight: 'bold',
}

const heroTitle = {
  fontSize: '68px',
  lineHeight: '1.02',
  margin: '15px auto',
  maxWidth: '900px',
  fontFamily: 'Georgia, serif',
  color: '#fff1f7',
}

const heroText = {
  maxWidth: '720px',
  margin: '28px auto',
  color: '#fbcfe8',
  fontSize: '18px',
  lineHeight: '1.7',
}

const buttonRow = {
  display: 'flex',
  justifyContent: 'center',
  gap: '18px',
  flexWrap: 'wrap',
}

const primaryButton = {
  padding: '16px 34px',
  borderRadius: '10px',
  border: '1px solid rgba(251,113,133,0.6)',
  background: 'linear-gradient(135deg, #ec4899, #fb7185)',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
}

const secondaryButton = {
  padding: '16px 34px',
  borderRadius: '10px',
  border: '1px solid rgba(251,113,133,0.55)',
  background: 'rgba(255,255,255,0.04)',
  color: '#ffe4ef',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
}

const statsGrid = {
  maxWidth: '900px',
  margin: '65px auto 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '18px',
}

const statCard = {
  padding: '24px',
  borderRadius: '12px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(251,113,133,0.25)',
  backdropFilter: 'blur(14px)',
}

const statIcon = {
  fontSize: '36px',
  color: '#fb7185',
}

const mainWrap = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '1180px',
  margin: '0 auto',
  padding: '0 20px 30px',
}

const topGrid = {
  display: 'grid',
  gridTemplateColumns: '1.05fr 0.95fr',
  gap: '0',
}

const panel = {
  border: '1px solid rgba(251,113,133,0.28)',
  background: 'rgba(20, 8, 15, 0.72)',
  borderRadius: '14px',
  padding: '28px',
  backdropFilter: 'blur(16px)',
  boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
}

const panelTitle = {
  fontFamily: 'Georgia, serif',
  fontSize: '30px',
  color: '#fff1f7',
  marginTop: 0,
}

const serviceGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '14px',
}

const serviceCard = {
  position: 'relative',
  border: '1px solid rgba(251,113,133,0.35)',
  borderRadius: '12px',
  padding: '22px 18px',
  background: 'rgba(255,255,255,0.04)',
}

const serviceIcon = {
  fontSize: '42px',
  color: '#fb7185',
}

const badge = {
  position: 'absolute',
  top: '12px',
  right: '12px',
  fontSize: '12px',
  padding: '7px 10px',
  borderRadius: '8px',
  border: '1px solid rgba(251,113,133,0.55)',
  background: 'rgba(236,72,153,0.28)',
}

const muted = {
  color: '#fbcfe8',
  lineHeight: '1.6',
}

const price = {
  color: '#fb7185',
  fontSize: '28px',
}

const outlineButton = {
  padding: '12px 24px',
  borderRadius: '7px',
  border: '1px solid #fb7185',
  background: 'transparent',
  color: '#ffe4ef',
  fontWeight: 'bold',
  cursor: 'pointer',
}

const boostGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
}

const boostCard = {
  minHeight: '105px',
  border: '1px solid rgba(251,113,133,0.35)',
  borderRadius: '12px',
  padding: '16px',
  textAlign: 'center',
  background: 'rgba(255,255,255,0.035)',
}

const saleBadge = {
  display: 'inline-block',
  padding: '6px 12px',
  borderRadius: '8px',
  background: 'rgba(236,72,153,0.45)',
  fontSize: '12px',
  marginBottom: '8px',
}

const smallText = {
  color: '#fbcfe8',
  margin: '8px 0',
  fontSize: '13px',
}

const oldPrice = {
  textDecoration: 'line-through',
  color: '#d8a4b8',
  margin: '5px 0',
}

const boostPrice = {
  color: '#fb7185',
  fontSize: '24px',
  margin: '8px 0',
}

const teamGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '16px',
}

const teamCard = {
  border: '1px solid rgba(251,113,133,0.25)',
  borderRadius: '12px',
  padding: '24px',
  background: 'rgba(255,255,255,0.045)',
}

const bigIcon = {
  fontSize: '48px',
  color: '#fb7185',
}

const bottomGrid = {
  display: 'grid',
  gridTemplateColumns: '2fr 0.9fr',
  gap: '0',
}

const stepsGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr auto 1fr',
  gap: '16px',
  alignItems: 'center',
}

const stepCard = {
  border: '1px solid rgba(251,113,133,0.25)',
  borderRadius: '10px',
  padding: '18px',
  background: 'rgba(255,255,255,0.04)',
}

const circle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  border: '1px solid #fb7185',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fb7185',
  fontSize: '24px',
  fontWeight: 'bold',
}

const arrow = {
  color: '#fb7185',
  fontSize: '30px',
}

const orderPanel = {
  border: '1px solid rgba(251,113,133,0.35)',
  background: 'rgba(20, 8, 15, 0.8)',
  borderRadius: '14px',
  padding: '28px',
  backdropFilter: 'blur(16px)',
}

const checkList = {
  color: '#fbcfe8',
  lineHeight: '1.2',
}

const fullButton = {
  width: '100%',
  padding: '15px',
  borderRadius: '8px',
  border: 'none',
  background: 'linear-gradient(135deg, #ec4899, #fb7185)',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
}

const faqGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '14px',
}

const faqCard = {
  border: '1px solid rgba(251,113,133,0.22)',
  borderRadius: '10px',
  padding: '20px',
  background: 'rgba(255,255,255,0.035)',
}

const miniIcon = {
  color: '#fb7185',
  fontSize: '26px',
  textAlign: 'center',
}

const footer = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  flexWrap: 'wrap',
  padding: '25px 14px',
  color: '#fbcfe8',
}

export default App