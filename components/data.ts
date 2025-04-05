import { MBTIQuestion, BigFiveQuestion, MBTIType, MBTIDescription, BigFiveComments, JobSuggestion, BigFiveFactors } from './types';

export const mbtiQuestions: MBTIQuestion[] = [
  {
    text: 'カラオケでマイクを持つのは？',
    dimension: 'EI',
    options: [
      { text: '率先して歌いたい', score: 3 },
      { text: '友達と一緒なら歌う', score: 2 },
      { text: '誘われたら少し歌う', score: 1 },
      { text: 'できれば歌いたくない', score: 0 }
    ]
  },
  {
    text: 'グループワークでの役割は？',
    dimension: 'EI',
    options: [
      { text: 'リーダーになることが多い', score: 3 },
      { text: '積極的に意見を出す', score: 2 },
      { text: 'サポート役に回る', score: 1 },
      { text: '静かに自分の担当を進める', score: 0 }
    ]
  },
  {
    text: '新しい情報を理解するとき重視するのは？',
    dimension: 'SN',
    options: [
      { text: '具体的な事実や詳細', score: 0 },
      { text: '実用的な使い道', score: 1 },
      { text: '背景にある概念や理論', score: 2 },
      { text: '将来の可能性や展望', score: 3 }
    ]
  },
  {
    text: '本を選ぶなら？',
    dimension: 'SN',
    options: [
      { text: '実用書や歴史書', score: 0 },
      { text: 'ノンフィクションや伝記', score: 1 },
      { text: 'ファンタジーやSF', score: 2 },
      { text: '哲学書や抽象的な内容', score: 3 }
    ]
  },
  {
    text: '意見の対立があったとき？',
    dimension: 'TF',
    options: [
      { text: '論理的に正しい方を選ぶ', score: 0 },
      { text: '事実に基づいて判断する', score: 1 },
      { text: '全員が納得できる妥協点を探す', score: 2 },
      { text: '人間関係を優先して調整する', score: 3 }
    ]
  },
  {
    text: '友人が悩みを相談してきたら？',
    dimension: 'TF',
    options: [
      { text: '問題解決のためのアドバイスをする', score: 0 },
      { text: '原因を分析して対策を考える', score: 1 },
      { text: '共感して気持ちに寄り添う', score: 2 },
      { text: '何も言わずにただ話を聞く', score: 3 }
    ]
  },
  {
    text: '旅行の計画は？',
    dimension: 'JP',
    options: [
      { text: '事前に細かく計画を立てる', score: 0 },
      { text: '主要な予定だけ決めておく', score: 1 },
      { text: '大まかな方向性だけ決める', score: 2 },
      { text: 'その場の流れで決める', score: 3 }
    ]
  },
  {
    text: '部屋の整理整頓は？',
    dimension: 'JP',
    options: [
      { text: '常に整理整頓されている', score: 0 },
      { text: '定期的に片付ける', score: 1 },
      { text: '気が向いたときに片付ける', score: 2 },
      { text: 'あまり気にしない', score: 3 }
    ]
  }
];

export const bigFiveQuestions: BigFiveQuestion[] = [
  {
    text: '新しいアイデアを考えるのが好きだ',
    factor: 'openness',
    isReversed: false
  },
  {
    text: '芸術や美術に興味がある',
    factor: 'openness',
    isReversed: false
  },
  {
    text: '計画を立ててから行動するほうだ',
    factor: 'conscientiousness',
    isReversed: false
  },
  {
    text: '物事を最後までやり遂げるタイプだ',
    factor: 'conscientiousness',
    isReversed: false
  },
  {
    text: '人と話すのが好きだ',
    factor: 'extraversion',
    isReversed: false
  },
  {
    text: '活発で行動的なほうだ',
    factor: 'extraversion',
    isReversed: false
  },
  {
    text: '人の気持ちを考えて行動する',
    factor: 'agreeableness',
    isReversed: false
  },
  {
    text: '人を信頼するほうだ',
    factor: 'agreeableness',
    isReversed: false
  },
  {
    text: 'ストレスを感じやすい',
    factor: 'neuroticism',
    isReversed: false
  },
  {
    text: '心配事が多いほうだ',
    factor: 'neuroticism',
    isReversed: false
  }
];

export const mbtiDescriptions: Record<MBTIType, MBTIDescription> = {
  INTP: { label: '論理派アイデアマン', strength: '複雑な仕組みを考えるのが得意' },
  INTJ: { label: '戦略家', strength: '長期的な計画を立てるのが得意' },
  ENTJ: { label: '指揮官', strength: 'チームを率いて目標達成するのが得意' },
  ENTP: { label: 'ひらめきの突破力タイプ', strength: '新しいことを思いついてすぐ動ける' },
  INFJ: { label: '提唱者', strength: '人の気持ちを読み取り深く理解するのが得意' },
  INFP: { label: '仲介者', strength: '創造的で独自の価値観を持つのが特徴' },
  ENFJ: { label: '主人公', strength: '人々の可能性を引き出すのが得意' },
  ENFP: { label: '冒険家', strength: '情熱的にアイデアを生み出し人を巻き込むのが得意' },
  ISTJ: { label: '管理者', strength: '確実に責任を果たすことが得意' },
  ISFJ: { label: '擁護者', strength: '周囲の人を守り支えるのが得意' },
  ESTJ: { label: '幹部', strength: '組織を効率的に運営するのが得意' },
  ESFJ: { label: 'チームを支える安心タイプ', strength: '人の気持ちを読むのが得意' },
  ISTP: { label: '巨匠', strength: '実践的な問題解決が得意' },
  ISFP: { label: '冒険家', strength: '感覚的に美しいものを生み出すのが得意' },
  ESTP: { label: '起業家', strength: '機転が利いて行動力がある' },
  ESFP: { label: 'エンターテイナー', strength: '場を明るくし楽しませるのが得意' }
};

export const bigFiveComments: BigFiveComments = {
  openness: {
    high: '新しい発想や表現が得意で、型にハマらない働き方を好む傾向があります。',
    low: '安定や実績のある方法を重視する傾向があります。'
  },
  conscientiousness: {
    high: '計画的に物事を進めるのが得意で、コツコツ型の努力が強みです。',
    low: 'ルールに縛られすぎると力を発揮しづらいかもしれません。'
  },
  extraversion: {
    high: '人と関わるのが好きで、チームでの活動に向いています。',
    low: '一人で集中する作業や落ち着いた環境で力を発揮できます。'
  },
  agreeableness: {
    high: '思いやりがあり、周囲と協力して働くのが得意です。',
    low: '自分の考えを貫きたいタイプで、交渉や意思決定に強みがあります。'
  },
  neuroticism: {
    high: '感情の起伏がやや大きめで、共感力が高い一方で疲れやすい傾向も。',
    low: '冷静で安定した判断ができ、ストレスに強い傾向があります。'
  }
};

export const jobSuggestions: JobSuggestion[] = [
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti === 'INTP' && big.openness > 1 && big.agreeableness < 2,
    jobs: ['研究職', '戦略系コンサル', 'ITエンジニア（一人作業型）']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti === 'ESFJ' && big.extraversion > 1 && big.agreeableness > 1,
    jobs: ['人事', '営業', 'サービス業（チームリーダー型）']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti === 'INTJ' && big.conscientiousness > 1,
    jobs: ['経営コンサルタント', 'システムアーキテクト', '研究開発マネージャー']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti === 'ENFP' && big.extraversion > 1 && big.openness > 1,
    jobs: ['マーケティング', 'クリエイティブディレクター', '起業家']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti === 'ISTJ' && big.conscientiousness > 1,
    jobs: ['財務アナリスト', '会計士', 'プロジェクトマネージャー']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti === 'ENTP' && big.openness > 1,
    jobs: ['コンサルタント', '起業家', '商品開発']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti === 'INFJ' && big.agreeableness > 1,
    jobs: ['カウンセラー', '教師', 'ライター']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti === 'ESTP' && big.extraversion > 1 && big.neuroticism < 1,
    jobs: ['営業', 'トレーダー', 'スポーツコーチ']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti === 'ISFP' && big.openness > 1,
    jobs: ['グラフィックデザイナー', '写真家', 'インテリアデザイナー']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti === 'ENTJ' && big.extraversion > 1 && big.conscientiousness > 1,
    jobs: ['経営者', '政治家', '経営コンサルタント']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      (mbti.includes('NT') || mbti.includes('ST')) && big.conscientiousness > 1 && big.extraversion < 1,
    jobs: ['プログラマー', 'エンジニア', 'データアナリスト']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      (mbti.includes('NF') || mbti.includes('SF')) && big.agreeableness > 1,
    jobs: ['カウンセラー', '教師', '医療従事者']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti.startsWith('E') && big.extraversion > 1 && big.agreeableness > 1,
    jobs: ['営業', 'イベントプランナー', 'マーケティング']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      mbti.startsWith('I') && big.openness > 1 && big.conscientiousness > 1,
    jobs: ['作家', 'プログラマー', '研究者']
  },
  {
    condition: (mbti: MBTIType, big: BigFiveFactors) => 
      true, // デフォルト
    jobs: ['コンサルタント', 'マーケティング', '教育関連']
  }
]; 