# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Premium landing page for **TakaseMayu MUSIC PROJECT** featuring "MAYU Piano Sessions - Love Ballade". This is a world-class static website showcasing the unique integration of AI×音楽×視覚芸術 (AI × Music × Visual Arts) with sophisticated dark elegance and musical typography.

## Architecture
- **Static website structure**: Traditional HTML/CSS/JS without build tools or frameworks
- **Single page application**: Complete content in `index.html` with smooth scrolling navigation
- **Asset organization**: 
  - `css/style.css` - Complete dark theme styling with gold accents and elegant typography
  - `js/script.js` - Interactive animations, smooth scrolling, and Creative Services effects
  - `assets/fonts/` - Custom fonts
  - `assets/images/` - Images and graphics (placeholder for artist photos and service samples)

## Development
- **No build process**: Direct file editing, no compilation required
- **No package manager**: Pure HTML/CSS/JS without dependencies
- **No testing framework**: Manual testing in browser
- **Preview**: Open `index.html` directly in browser
- **Fonts**: Uses Playfair Display, Crimson Text, and EB Garamond from Google Fonts

## Design System
- **Color Palette**: 
  - Primary background: #0a0a0a (deep black)
  - Secondary background: #111 (dark gray) 
  - Primary text: #FFD700 (gold)
  - Secondary text: #B8860B (dark gold)
  - Accent text: #ccc, #ddd (light gray)
- **Typography**: 
  - Playfair Display: Main headings, elegant and musical
  - Crimson Text: Subtitles and italics, flowing style
  - EB Garamond: Body text, classical readability
  - Font weights: 300 (light) to 500 (medium) for musical elegance
  - Letter spacing: Enhanced for premium feel
- **Theme**: Dark luxury with premium gold accents
- **Responsive**: Mobile-first design with breakpoints at 768px and 480px

## Content Structure
1. **Hero Section**: "TakaseMayu MUSIC PROJECT" title with "Love in Melody, Soul in Harmony" subtitle
2. **About Artist - アーティストについて**: Profile with 三位一体コンセプト (AI×音楽×視覚芸術)
3. **Piano Sessions - ピアノセッション**: 8-track album listing with elegant hover effects
4. **Music Style - 音楽スタイル**: Four style categories (バラード, R&B, ソウル, ピアノバラード)
5. **Creative Services - クリエイティブサービス**: 🆕 AI Art Creation & Music Video Creation services
6. **Experience - 経歴**: Music-focused background and artistic journey
7. **Contact - お問い合わせ**: Form and streaming platform links

## Creative Services Section (New)
### AI Art Creation - 音楽から生まれる視覚芸術
- 楽曲イメージのAIアート変換
- アルバムカバー・ジャケット制作
- 音楽PV用ビジュアル素材生成
- アーティスト写真の芸術的加工
- コンサートポスター・フライヤー制作

### Music Video Creation - 旋律が紡ぐ映像美
- オリジナルミュージックビデオ制作
- ライブ演奏動画の芸術的編集
- プロモーション動画制作
- 楽曲解説・メイキング映像
- SNS用ショート動画制作

## Interactive Features
- Smooth scrolling navigation with fixed navbar
- Scroll progress bar at top
- Fade-in animations on scroll with Intersection Observer
- Elegant hover effects on all interactive elements
- Service preview placeholders with click effects
- Form submission with loading states
- Parallax background effects with particle animation
- Sequential animations for service items
- Enhanced typography with letter-spacing and font variations

## Key Files
- `index.html` - Complete page structure with 7 main sections (including Creative Services)
- `css/style.css` - Dark theme with gold accents, elegant typography, Creative Services styling
- `js/script.js` - Smooth scrolling, animations, Creative Services interactions, form handling

## Brand Identity
- **Main Title**: "TakaseMayu MUSIC PROJECT"
- **Tagline**: "Love in Melody, Soul in Harmony"
- **Concept**: 三位一体 (AI × 音楽 × 視覚芸術) - "聴覚から視覚へ、感動の架け橋"
- **Target**: International music artist × AI creator
- **Style**: World-class elegant, sophisticated, musical flow