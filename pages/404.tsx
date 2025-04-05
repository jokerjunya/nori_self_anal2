import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ページが見つかりません - 自己分析アプリ</title>
        <meta name="description" content="お探しのページは見つかりませんでした。" />
      </Head>

      <div className="container" style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h1>404</h1>
        <h2>ページが見つかりませんでした</h2>
        <p>お探しのページは存在しないか、移動した可能性があります。</p>
        <Link 
          href="/" 
          className="button" 
          style={{ display: 'inline-block', marginTop: '30px' }}
        >
          トップページに戻る
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 