'use client';

import { useEffect, useRef, useState } from 'react';

export default function PaidPage() {
  const paypalRef = useRef(null);
  const rendered = useRef(false);
  const [isLine, setIsLine] = useState(false);

  useEffect(() => {
    // LINE内ブラウザ判定
    setIsLine(navigator.userAgent.toLowerCase().includes('line'));

    if (rendered.current) return;

    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AfUn22zK4UsNWfThHlT_1sqvEi8gmtXHZ4jWMYafWPrX4bBorPFvMY8ZTuZAqTfVXygpK95YmdkZsj-N&currency=JPY&locale=ja_JP';
    script.async = true;
    script.onload = () => {
      if (rendered.current) return;
      rendered.current = true;

      window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'gold',
          shape: 'pill',
          label: 'pay',
          height: 50
        },
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '780',
                currency_code: 'JPY'
              },
              description: 'NEXA LoveLab 使い放題プラン'
            }]
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            window.location.href = '/thanks';
          });
        },
        onError: function (err) {
          console.error('PayPal Error:', err);
          alert('決済中にエラーが発生しました。\nしばらくしてから再度お試しください。');
        }
      }).render(paypalRef.current);
    };
    document.body.appendChild(script);
  }, []);

  function copyUrl() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('URLをコピーしました！\nSafariまたはChromeで開いてください。');
    }).catch(() => {
      prompt('このURLをコピーしてください:', url);
    });
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=Zen+Kaku+Gothic+New:wght@400;700;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          background: #0d0816;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          min-height: 100vh;
        }
        .page-bg {
          min-height: 100vh;
          background: #0d0816;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
        }
        .page-bg::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 20%, rgba(180,80,220,0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 80%, rgba(255,80,150,0.10) 0%, transparent 60%);
          pointer-events: none;
        }
        .card {
          position: relative;
          z-index: 1;
          max-width: 440px;
          width: 100%;
          background: #1a1030;
          border: 1px solid rgba(200,100,230,0.25);
          border-radius: 20px;
          padding: 32px 24px;
          box-shadow: 0 0 60px rgba(180,80,220,0.15);
          text-align: center;
          color: #f0e6ff;
        }
        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #c96fd8, #ff6eb0);
          color: white;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 16px;
          border-radius: 100px;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
        }
        h1 {
          font-family: 'Noto Serif JP', serif;
          font-size: 20px;
          line-height: 1.6;
          margin-bottom: 8px;
          color: #f0e6ff;
        }
        .highlight { color: #f0c060; font-weight: 700; }
        .price {
          font-size: 32px;
          font-weight: 900;
          color: #ff6eb0;
          margin: 8px 0 4px;
        }
        .price-sub { font-size: 13px; color: #9980bb; margin-bottom: 24px; }
        .divider {
          border: none;
          border-top: 1px solid rgba(200,100,230,0.15);
          margin: 24px 0;
        }
        .line-warning {
          background: rgba(255,200,0,0.08);
          border: 1px solid rgba(255,200,0,0.3);
          border-radius: 12px;
          padding: 16px;
          margin-top: 20px;
          font-size: 13px;
          color: #ffd060;
        }
        .line-warning p { margin-bottom: 10px; }
        .copy-btn {
          background: linear-gradient(135deg, #c96fd8, #ff6eb0);
          color: white;
          border: none;
          border-radius: 100px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
          font-family: inherit;
        }
        .card-logos {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(200,100,230,0.1);
        }
        .card-logos p { font-size: 12px; color: #9980bb; margin-bottom: 10px; }
        .logos-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .logo-badge {
          background: white;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 11px;
          font-weight: 700;
          color: #333;
        }
        .secure-note {
          font-size: 11px;
          color: #9980bb;
          margin-top: 16px;
        }
      `}</style>

      <div className="page-bg">
        <div className="card">
          <div className="badge">✨ 期間限定特別価格</div>
          <h1>
            二人の未来が具体的に見える！<br />
            <span className="highlight">今だけ開かれる特別価格の扉！</span>
          </h1>

          <div className="price">使い放題 780円</div>
          <div className="price-sub">誰とでも何度でも・買い切り</div>

          <hr className="divider" />

          <div ref={paypalRef} id="paypal-button-container">
            <p style={{color:'#9980bb', fontSize:'14px', padding:'20px'}}>決済ボタンを読み込み中...</p>
          </div>

          {isLine && (
            <div className="line-warning">
              <p>⚠️「ブラウザで開いてください」と表示された方へ</p>
              <p>下のボタンをタップすると決済URLが自動でコピーされます</p>
              <button className="copy-btn" onClick={copyUrl}>📋 決済URLをコピーする</button>
            </div>
          )}

          <div className="card-logos">
            <p>安心のPayPal決済に対応</p>
            <div className="logos-row">
              {['VISA','Mastercard','JCB','AMEX','Diners','Discover'].map(b => (
                <div key={b} className="logo-badge">{b}</div>
              ))}
            </div>
            <p className="secure-note">🔒 SSL暗号化通信で安全に決済</p>
          </div>
        </div>
      </div>
    </>
  );
}
