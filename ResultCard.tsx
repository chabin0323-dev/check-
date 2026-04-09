import React from 'react';

const ResultCard = () => {
  return (
    <div style={{
      backgroundColor: '#0f021b', // 三宅様のアプリに合わせた深い紫の背景
      color: '#ffffff',
      padding: '20px',
      borderRadius: '24px',
      textAlign: 'center',
      fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      
      {/* 1. スマホイメージ画像 (app_concept.png) */}
      <div style={{ marginBottom: '24px', borderRadius: '16px', overflow: 'hidden' }}>
        <img 
          src="/app_concept.png" 
          alt="サービスイメージ" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </div>

      <h2 style={{ fontSize: '22px', marginBottom: '16px', fontWeight: 'bold' }}>
        二人の波動は、変化の途中にあります
      </h2>
      
      <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.9, marginBottom: '32px' }}>
        あなたの入力情報から導かれたこの数値は、お相手との今の関係性・感情の温度・未来の流れを総合したものです。
      </p>

      {/* 2. 決済ボタン (image_7.png) + PayPalリンク */}
      <div style={{ marginBottom: '16px' }}>
        <a 
          href="https://www.paypal.com/ncp/payment/PPGD76J8JB8ZQ" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', transition: 'transform 0.2s' }}
        >
          <img 
            src="/image_7.png" 
            alt="すべての鑑定を無制限に解放する" 
            style={{ width: '100%', maxWidth: '380px', cursor: 'pointer' }}
          />
        </a>
      </div>

      {/* 価格の強調テキスト */}
      <p style={{ fontWeight: 'bold', fontSize: '20px', color: '#ff4da6', margin: '20px 0' }}>
        誰とでも何度でも！使い放題 780円
      </p>

      {/* 3. カードブランド画像 (cards.png) */}
      <div style={{ 
        marginTop: '30px', 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        borderRadius: '12px', 
        padding: '15px' 
      }}>
        <p style={{ color: '#333', fontSize: '12px', marginBottom: '10px', fontWeight: 'bold' }}>
          安心・安全なPayPal決済に対応
        </p>
        <img 
          src="/cards.png" 
          alt="対応クレジットカード一覧" 
          style={{ width: '100%', maxWidth: '320px', height: 'auto' }} 
        />
      </div>

    </div>
  );
};

export default ResultCard;
