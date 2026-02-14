# TakaseMayu MUSIC PROJECT - HP管理

## 概要
高瀬マユのアーティスト公式HPです。  
2025年6月にClaudeCodeで初期制作し、2026年2月にObsidian（Antigravity）環境に移行しました。

## 技術構成
- **構成**: 静的サイト（HTML/CSS/JS）。フレームワーク不使用
- **デザイン**: ダークテーマ＋ゴールドアクセント
- **フォント**: Playfair Display, Crimson Text, EB Garamond (Google Fonts)
- **レスポンシブ**: モバイル対応（768px / 480px ブレークポイント）

## ファイル構成
| ファイル | 役割 |
|---|---|
| `index.html` | HP本体（シングルページ） |
| `css/style.css` | スタイルシート |
| `js/script.js` | アニメーション・インタラクション |
| `assets/images/` | Midjourney生成画像、アーティスト写真 |
| `image1111/` | トップ画面用画像 |

## HPセクション構成
1. **Hero** - タイトル「Love in Melody, Soul in Harmony」
2. **About Artist** - プロフィール＋三位一体コンセプト（AI×音楽×視覚芸術）
3. **Piano Sessions** - SUNOリンク付き16曲トラックリスト
4. **Music Style** - Ballad / R&B・Soul / Piano Ballad
5. **Creative Services** - AIアート＆MV制作サービス
6. **Experience** - 音楽経歴
7. **Gallery** - フォトギャラリー（ライトボックス付き）
8. **Contact** - お問い合わせフォーム＋配信プラットフォームリンク

## 楽曲の追加・更新方法
### 新しい楽曲を追加する場合
`index.html` の `tracklist` セクション内に以下の形式で追加：
```html
<a href="[SUNOのURL]" class="track-item" target="_blank" rel="noopener noreferrer">
    <div class="track-info">
        <span class="track-number">[番号]</span>
        <div class="track-titles">
            <span class="track-title">[曲名]</span>
            <span class="track-subtitle">[英語タイトル]</span>
        </div>
    </div>
    <span class="track-duration">[時間]</span>
    <span class="external-link-icon">🎵</span>
</a>
```

### 画像を追加する場合
`assets/images/` に画像ファイルを配置し、`index.html` 内で参照する。

## デプロイ
- **旧環境**: Netlify（Gitベース）→ 解除予定
- **新環境**: 今後設定予定

## 更新履歴
- 2025-06 ClaudeCodeで初期制作・Netlifyデプロイ
- 2026-02-14 Obsidian Vault（Second Brain）に移行
