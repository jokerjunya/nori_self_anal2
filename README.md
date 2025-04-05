# 自己分析アプリ（MBTI + Big Five診断）

Next.js 13.4.12で構築された自己分析Webアプリケーション。

## 機能

- MBTI性格診断（8問・4択形式）
- Big Five診断（10問・はい/いいえ形式）
- 診断結果表示
  - MBTIタイプ名と説明
  - Big Fiveのスコアをグラフで表示
  - 特性に基づいたコメント
  - 向いている職種の提案
- localStorageによる結果保存

## 技術スタック

- Next.js: 13.4.12
- React: 18.2.0
- TypeScript: 5.2
- CSS: カスタムCSS

## ローカルでの実行方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:3000 を開いてアプリを確認できます。

## ビルド方法

```bash
# 本番用ビルド
npm run build

# 静的ファイルエクスポート
npm run export
```

ビルド後のファイルは `out` ディレクトリに生成されます。

## Netlifyへのデプロイ方法

このリポジトリは、Netlifyへのデプロイに最適化されています。

### 自動デプロイ

1. Netlifyアカウントにログイン
2. 「New site from Git」を選択
3. Gitリポジトリからこのリポジトリを選択
4. ビルド設定は自動的に検出されます：
   - ビルドコマンド: `npm run build`
   - 公開ディレクトリ: `out`
5. 「Deploy site」をクリックして完了

### カスタムドメインの設定（オプション）

1. Netlifyダッシュボードで「Domain settings」に移動
2. 「Add custom domain」をクリック
3. 指示に従ってドメインを設定

## 注意事項

- localStorageを使用しているため、ブラウザのプライバシーモードやCookieをブロックする設定では、結果が保存されません。
- 静的エクスポートのため、サーバーサイド機能は利用できません。 