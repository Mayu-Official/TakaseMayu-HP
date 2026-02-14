# TakaseMayu Music Project - 写真ガイド

このフォルダには、TakaseMayuランディングページで使用する写真ファイルを配置します。

## 📸 推奨写真サイズ・仕様

### 🖼️ Hero Section - トップ背景写真
- **ファイル名**: `hero-bg.jpg`
- **推奨サイズ**: 1920x1080px (16:9)
- **用途**: フルスクリーン背景
- **効果**: ぼかし・暗度調整自動適用

### 🎹 Piano Sessions - ピアノ演奏背景
- **ファイル名**: `piano-session-bg.jpg`
- **推奨サイズ**: 1200x600px (2:1)
- **用途**: セクション背景（薄く表示）

### 🎨 Creative Services - サービス作品サンプル
#### AI Art Creation
- **ファイル名**: `ai-art-sample-1.jpg`, `ai-art-sample-2.jpg`, `ai-art-sample-3.jpg`
- **推奨サイズ**: 600x400px (3:2)
- **用途**: AI作品のサンプル展示

#### Music Video Creation
- **ファイル名**: `video-thumb-1.jpg`, `video-thumb-2.jpg`, `video-thumb-3.jpg`
- **推奨サイズ**: 600x400px (3:2)
- **用途**: 動画サムネイル

### 📷 Activity Gallery - 活動写真
- **ファイル名**: `activity-live.jpg`, `activity-studio.jpg`, `activity-collab.jpg`, `activity-behind.jpg`
- **推奨サイズ**: 400x300px (4:3)
- **用途**: 活動の様子を紹介

### 🖼️ Main Gallery - メインギャラリー
#### ポートレート写真
- **ファイル名**: `gallery-portrait-1.jpg`, `gallery-portrait-2.jpg`, `gallery-portrait-3.jpg`
- **推奨サイズ**: 300x400px (3:4) - 縦長

#### 活動写真
- **ファイル名**: `gallery-piano-1.jpg`, `gallery-concert.jpg`, `gallery-studio.jpg`, `gallery-piano-2.jpg`, `gallery-live.jpg`
- **推奨サイズ**: 400x300px (4:3) - 横長

## 🎨 写真の準備ガイド

### 写真の種類
1. **ポートレート写真** - アーティストの魅力を表現
2. **ピアノ演奏写真** - 音楽活動の中心
3. **ライブ・コンサート写真** - エネルギッシュな瞬間
4. **スタジオ・レコーディング写真** - 創作過程
5. **AI作品サンプル** - クリエイティブサービスの実例

### 写真の品質要件
- **解像度**: 高画質（推奨サイズ以上）
- **フォーマット**: JPG または PNG
- **色調**: ダークテーマに合う温かみのある色合い
- **構図**: 被写体が明確で美しい構図

## 🔄 写真の差し替え方法

1. 適切なファイル名で写真を保存
2. `assets/images/` フォルダに配置
3. CSSファイルのコメントアウト部分を有効化

### CSS設定例（Hero Section）
```css
.hero-background-image {
    background-image: url('assets/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(2px) brightness(0.4);
}
```

## 📱 レスポンシブ対応

写真は自動的に以下のデバイスに最適化されます：
- **デスクトップ**: フルサイズ表示
- **タブレット**: 中サイズ調整
- **モバイル**: 小サイズ最適化

## 🎯 写真配置の効果

- **Hero Section**: 30-40%透明度 + グラデーションオーバーレイ
- **Piano Sessions**: 10%透明度の背景表示
- **Gallery**: ホバー時の拡大・シャドウ効果
- **Creative Services**: クリック可能なサンプル展示

美しい写真でTakaseMayuの魅力を最大限に表現しましょう！