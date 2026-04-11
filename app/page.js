export default function Home() {
  return (
    <div style={{ backgroundColor: '#0f021b', color: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <img src="/app_concept.png" style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }} alt="concept" />
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', lineHeight: '1.4' }}>
          二人の未来が具体的に見える！<br />
          今だけ開かれる特別価格の扉！
        </h2>
        <a href="https://www.paypal.com/ncp/payment/PPGD76J8JB8ZQ" target="_blank" rel="noreferrer">
          <img src="/image_7.png" style={{ width: '90%', maxWidth: '380px' }} alt="button" />
        </a>
        <p style={{ fontWeight: 'bold', fontSize: '26px', color: '#ff4da6', margin: '20px 0' }}>使い放題 780円</p>
        <div style={{ background: 'white', padding: '15px', borderRadius: '12px', marginTop: '20px' }}>
          <p style={{ color: '#333', fontSize: '10px', marginBottom: '10px' }}>安心のPayPal決済に対応</p>
          <img src="/cards.png" style={{ width: '100%', maxWidth: '300px' }} alt="cards" />
        </div>
      </div>
    </div>
  );
}
