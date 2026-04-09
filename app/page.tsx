export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0f021b',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        {/* 画像パスをVercelの標準的な形式に調整 */}
        <img src="/app_concept.png" style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }} alt="concept" />
        
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>二人の波動は、変化の途中にあります</h2>
        
        <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '30px', lineHeight: '1.6' }}>
          あなたの入力情報から導かれたこの数値は、お相手との今の関係性・感情の温度・未来の流れを総合したものです。
        </p>

        {/* PayPalリンク */}
        <a href="https://www.paypal.com/ncp/payment/PPGD76J8JB8ZQ" target="_blank" rel="noreferrer">
          <img src="/image_7.png" style={{ width: '90%', maxWidth: '380px', cursor: 'pointer' }} alt="button" />
        </a>

        <p style={{ fontWeight: 'bold', fontSize: '24px', color: '#ff4da6', margin: '20px 0' }}>
          使い放題 780円
        </p>

        {/* カード一覧 */}
        <div style={{ background: 'white', padding: '15px', borderRadius: '12px', marginTop: '20px' }}>
          <p style={{ color: '#333', fontSize: '12px', marginBottom: '10px', fontWeight: 'bold' }}>安心のPayPal決済対応</p>
          <img src="/cards.png" style={{ width: '100%', maxWidth: '300px' }} alt="cards" />
        </div>
      </div>
    </div>
  );
}
