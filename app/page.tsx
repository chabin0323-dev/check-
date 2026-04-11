export default function Home() {
  return (
    <div style={{ backgroundColor: '#0f021b', color: '#ffffff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        {/* コンセプト画像 */}
        <img src="/app_concept.png" style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }} alt="concept" />
        
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', lineHeight: '1.4' }}>
          二人の未来が具体的に見える！<br />
          今だけ開かれる特別価格の扉！
        </h2>
        
        {/* 黄金のボタン（image_7.png） */}
        <a href="https://www.paypal.com/ncp/payment/PPGD76J8JB8ZQ" target="_blank" rel="noreferrer">
          <img src="/image_7.png" style={{ width: '90%', maxWidth: '380px', cursor: 'pointer' }} alt="黄金のボタン" />
        </a>

        <p style={{ fontWeight: 'bold', fontSize: '26px', color: '#ff4da6', margin: '25px 0' }}>
          使い放題 780円
        </p>

        {/* カードブランド画像 */}
        <div style={{ background: 'white', padding: '15px', borderRadius: '12px', marginTop: '20px' }}>
          <p style={{ color: '#333', fontSize: '12px', marginBottom: '10px', fontWeight: 'bold' }}>安心のPayPal決済に対応</p>
          <img src="/cards.png" style={{ width: '100%', maxWidth: '300px' }} alt="cards" />
        </div>
      </div>
    </div>
  )
}
