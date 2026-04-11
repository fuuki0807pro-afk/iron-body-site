// src/data/articles.ts
// 全記事データ（サンプル）
// 本番環境では lib/articles.ts + content/articles/*.md に移行する

export type Reference = {
  id: number;
  authors: string;
  year: number;
  title: string;
  journal: string;
  url?: string;
};

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  featured?: boolean;
  readTime: string;
  tags?: string[];
  contentHtml: string;
  references: Reference[];
};

// ─────────────────────────────────────────────────────────────
// トレーニング
// ─────────────────────────────────────────────────────────────
const beginnerStrengthTraining: Article = {
  slug: "beginner-strength-training",
  title: "筋トレ初心者が最初の3ヶ月でやるべきこと【完全ガイド】",
  date: "2026-03-28",
  category: "トレーニング",
  excerpt:
    "筋トレを始めたばかりの方へ。最初の3ヶ月で土台を作るためのプログラム設計・フォーム・休養のポイントを科学的根拠とともに解説します。",
  image: "",
  featured: true,
  readTime: "8分",
  tags: ["初心者", "プログラム設計", "フォーム"],
  contentHtml: `
    <h2>はじめに</h2>
    <p>筋トレを始めた多くの人が、最初の3ヶ月で挫折します。その原因の多くは「正しい方向性を知らないまま頑張りすぎること」です。このガイドでは、初心者が最短で成果を出すために必要な3つの柱を解説します。</p>

    <h2>1. プログラム設計：週3回の全身トレーニングが最適</h2>
    <p>初心者にとって最も効果的なのは、<strong>週3回の全身トレーニング（フルボディプログラム）</strong>です。部位分割（分割法）は中〜上級者向けであり、筋肉の回復能力と神経適応がまだ十分でない初心者には向きません。</p>
    <p>Schoenfeld et al.（2016）のメタアナリシスでは、同じ週間トレーニング量であれば<strong>週2〜3回の高頻度トレーニングが週1回よりも筋肥大に優れる</strong>ことが示されています<sup>[1]</sup>。</p>
    <p>具体的には以下の5種目を軸に組み立てましょう：</p>
    <ul>
      <li><strong>スクワット</strong> ― 下半身・体幹全体</li>
      <li><strong>ベンチプレス</strong> ― 胸・肩・三頭筋</li>
      <li><strong>デッドリフト</strong> ― 背中・ハムストリング</li>
      <li><strong>懸垂 or ラットプルダウン</strong> ― 広背筋</li>
      <li><strong>オーバーヘッドプレス</strong> ― 肩・三頭筋</li>
    </ul>
    <p>これらは「コンパウンド種目」と呼ばれ、複数の関節・筋肉を同時に動かすため、少ない種目数で全身を効率よく鍛えられます。</p>

    <h2>2. フォーム：重量より「動作パターン」を優先</h2>
    <p>初心者が犯す最大のミスは、<em>フォームが固まっていないうちに重量を増やすこと</em>です。重量よりも先に「正しい動作パターン」を神経に刷り込むことが、長期的な成長の土台となります。</p>
    <p>NSCAのガイドラインでも、初心者は最初の4〜8週間を「適応期」として位置づけ、軽い重量でフォームと神経筋協調を習得することを推奨しています<sup>[2]</sup>。</p>
    <blockquote>「あなたが今持ち上げられる重量は、あなたが今後持ち上げられる重量の足かせになる」― グレッグ・ナックルス</blockquote>

    <h2>3. 回復：筋肉はジムではなく、睡眠中に育つ</h2>
    <p>筋肉の合成は、トレーニング後の<strong>回復期間</strong>に起こります。特に重要なのが以下の3点です：</p>
    <ul>
      <li>睡眠7〜9時間の確保（成長ホルモン分泌の最大化）</li>
      <li>体重×1.6〜2.2g のタンパク質摂取（Morton et al., 2018）<sup>[3]</sup></li>
      <li>トレーニング翌日の適切な休養（アクティブリカバリー推奨）</li>
    </ul>

    <h2>まとめ</h2>
    <p>最初の3ヶ月のゴールは「大きな筋肉をつけること」ではなく、<strong>「正しい習慣と動作パターンを身体に覚えさせること」</strong>です。この土台があってこそ、4ヶ月目以降の本格的な成長が始まります。焦らず、継続することが最大の近道です。</p>
  `,
  references: [
    {
      id: 1,
      authors: "Schoenfeld BJ, Ogborn D, Krieger JW",
      year: 2016,
      title: "Effects of Resistance Training Frequency on Measures of Muscle Hypertrophy: A Systematic Review and Meta-Analysis",
      journal: "Sports Medicine, 46(11): 1689-1697",
      url: "https://pubmed.ncbi.nlm.nih.gov/27102172/",
    },
    {
      id: 2,
      authors: "Haff GG, Triplett NT (Eds.)",
      year: 2016,
      title: "Essentials of Strength Training and Conditioning (4th ed.)",
      journal: "NSCA（全米ストレングス＆コンディショニング協会）",
    },
    {
      id: 3,
      authors: "Morton RW, Murphy KT, McKellar SR, et al.",
      year: 2018,
      title: "A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength",
      journal: "British Journal of Sports Medicine, 52(6): 376-384",
      url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
    },
  ],
};

const squatFormGuide: Article = {
  slug: "squat-form-guide",
  title: "スクワットの正しいフォームと膝・腰を痛めないための注意点",
  date: "2026-03-20",
  category: "トレーニング",
  excerpt:
    "下半身の王様・スクワット。正しいフォームを身につけて怪我なく鍛えるための完全ガイドです。初心者から中級者まで役立つ内容。",
  image: "",
  readTime: "10分",
  tags: ["スクワット", "フォーム", "怪我予防"],
  contentHtml: `
    <h2>スクワットが「下半身の王様」と呼ばれる理由</h2>
    <p>スクワットは大腿四頭筋・ハムストリング・大臀筋・体幹を同時に動員する多関節種目です。Escamilla et al.（2001）の研究では、バックスクワットは大腿四頭筋の筋電図（EMG）活動が最大筋力の約100%に達することが確認されています<sup>[1]</sup>。</p>

    <h2>正しいフォームの5つのチェックポイント</h2>
    <ol>
      <li><strong>足幅</strong>：肩幅〜やや広め。つま先は15〜30度外側に向ける</li>
      <li><strong>バーの位置</strong>：ハイバーは僧帽筋上部、ローバーは後部三角筋上。初心者はハイバー推奨</li>
      <li><strong>胸を張る・腰のアーチ</strong>：腰椎の自然なS字カーブを維持する（骨盤後傾を防ぐ）</li>
      <li><strong>膝のトラッキング</strong>：しゃがむ際、膝はつま先の方向と一致させる（内側に入れない）</li>
      <li><strong>深さ</strong>：太ももが床と平行以下（ハーフスクワット以上）が推奨。股関節とハムストリングの柔軟性が必要</li>
    </ol>

    <h2>膝を守るための注意点</h2>
    <p>「膝がつま先より前に出てはいけない」という俗説がありますが、これは誤りです。Ariel（1974）以降の研究で、<strong>膝がつま先より前に出ること自体は問題なく、むしろ膝への負荷は股関節に均等に分散するため内側への崩れの方が危険</strong>であることが明らかにされています<sup>[2]</sup>。</p>

    <h2>腰を守るための注意点</h2>
    <p>腰痛の最大原因は<em>骨盤後傾（ブットウィンク）</em>です。深くしゃがんだ際に骨盤が後ろに丸まる現象で、腰椎椎間板に過度な圧力をかけます。股関節モビリティの改善と適切なウォームアップで予防できます<sup>[3]</sup>。</p>

    <h2>ウォームアップルーティン（5分）</h2>
    <ul>
      <li>股関節回し × 10回（各方向）</li>
      <li>ヒップフレクサーストレッチ × 30秒（各側）</li>
      <li>ゴブレットスクワット（軽重量） × 10回</li>
      <li>バンドウォーク × 各方向10歩</li>
    </ul>
  `,
  references: [
    {
      id: 1,
      authors: "Escamilla RF",
      year: 2001,
      title: "Knee biomechanics of the dynamic squat exercise",
      journal: "Medicine & Science in Sports & Exercise, 33(1): 127-141",
      url: "https://pubmed.ncbi.nlm.nih.gov/11194098/",
    },
    {
      id: 2,
      authors: "Fry AC, Smith JC, Schilling BK",
      year: 2003,
      title: "Effect of knee position on hip and knee torques during the barbell squat",
      journal: "Journal of Strength and Conditioning Research, 17(4): 629-633",
      url: "https://pubmed.ncbi.nlm.nih.gov/14636100/",
    },
    {
      id: 3,
      authors: "Hartmann H, Wirth K, Klusemann M",
      year: 2013,
      title: "Analysis of the load on the knee joint and vertebral column with changes in squatting depth and weight load",
      journal: "Sports Medicine, 43(10): 993-1008",
      url: "https://pubmed.ncbi.nlm.nih.gov/23821469/",
    },
  ],
};

const progressiveOverload: Article = {
  slug: "progressive-overload",
  title: "プログレッシブオーバーロードとは？筋肥大に必要な負荷増加の科学",
  date: "2026-04-01",
  category: "トレーニング",
  excerpt:
    "「なぜ同じトレーニングを続けても筋肉が成長しなくなるのか」その答えが漸進性過負荷の原則にあります。科学的根拠に基づいた正しい負荷増加の方法を解説。",
  image: "",
  readTime: "7分",
  tags: ["プログレッシブオーバーロード", "筋肥大", "プログラム設計"],
  contentHtml: `
    <h2>プログレッシブオーバーロードとは</h2>
    <p>プログレッシブオーバーロード（漸進性過負荷の原則）とは、<strong>身体に継続的な成長刺激を与え続けるために、時間とともにトレーニングの負荷を段階的に増加させていく考え方</strong>です。NSCA（全米ストレングス＆コンディショニング協会）が定義するトレーニングの7大原則のうちの一つです<sup>[1]</sup>。</p>

    <h2>なぜ負荷を増やし続ける必要があるのか</h2>
    <p>筋肉は同じ刺激に慣れると成長を止めます（適応）。Kraemer & Ratamess（2004）のレビューでは、<em>同一のトレーニング刺激が繰り返されると6〜8週間で適応が完了し、それ以上の肥大が起こりにくくなる</em>ことが示されています<sup>[2]</sup>。</p>

    <h2>負荷を増やす5つの方法</h2>
    <ol>
      <li><strong>重量を増やす</strong>：最もシンプルな方法。2〜5%ずつ増加が安全</li>
      <li><strong>レップ数を増やす</strong>：同重量でより多く持ち上げる</li>
      <li><strong>セット数を増やす</strong>：週間ボリューム（セット×レップ×重量）を増やす</li>
      <li><strong>インターバルを短縮する</strong>：同じ仕事量をより短い時間で行う</li>
      <li><strong>動作の難易度を上げる</strong>：片足スクワット→バーベルスクワット等</li>
    </ol>

    <h2>初心者・中級者・上級者別の推奨アプローチ</h2>
    <p>Israetel et al.（2019）のプログラム設計理論では、トレーニング歴によって最適な負荷増加の方法が異なることが示されています<sup>[3]</sup>：</p>
    <ul>
      <li><strong>初心者（0〜1年）</strong>：毎セッションごとに重量増加（リニアプログレッション）が可能</li>
      <li><strong>中級者（1〜3年）</strong>：週単位での増加（ウェーブローディング）が現実的</li>
      <li><strong>上級者（3年以上）</strong>：月〜3ヶ月単位でのメゾサイクル設計が必要</li>
    </ul>
  `,
  references: [
    {
      id: 1,
      authors: "Haff GG, Triplett NT (Eds.)",
      year: 2016,
      title: "Essentials of Strength Training and Conditioning (4th ed.)",
      journal: "NSCA",
    },
    {
      id: 2,
      authors: "Kraemer WJ, Ratamess NA",
      year: 2004,
      title: "Fundamentals of resistance training: progression and exercise prescription",
      journal: "Medicine & Science in Sports & Exercise, 36(4): 674-688",
      url: "https://pubmed.ncbi.nlm.nih.gov/15064596/",
    },
    {
      id: 3,
      authors: "Israetel M, Hoffman J, Smith CW",
      year: 2019,
      title: "Scientific Principles of Strength Training",
      journal: "Renaissance Periodization",
    },
  ],
};

const hypertrophySetsReps: Article = {
  slug: "hypertrophy-sets-reps",
  title: "筋肥大に最適なセット数・レップ数とは？最新研究の結論",
  date: "2026-04-05",
  category: "トレーニング",
  excerpt:
    "「何セット・何レップやればいいのか」は多くの人が悩む問いです。Schoenfeld、Kriegerらの最新メタアナリシスをもとに、競技者向けの最適解を解説します。",
  image: "",
  readTime: "9分",
  tags: ["筋肥大", "セット数", "レップ数", "ボリューム"],
  contentHtml: `
    <h2>筋肥大の3大メカニズム</h2>
    <p>Brad Schoenfeld（2010）の landmark paper では、筋肥大を引き起こすメカニズムとして以下の3つが挙げられています<sup>[1]</sup>：</p>
    <ol>
      <li><strong>機械的張力（Mechanical Tension）</strong>：重い負荷をかけることによる筋繊維の変形刺激</li>
      <li><strong>代謝ストレス（Metabolic Stress）</strong>：乳酸蓄積によるポンプ感・代謝産物の蓄積</li>
      <li><strong>筋損傷（Muscle Damage）</strong>：伸張性収縮（エキセントリック）による微小損傷と修復</li>
    </ol>

    <h2>最適なレップ数の範囲</h2>
    <p>Schoenfeld et al.（2017）のランダム化比較試験では、<strong>6〜12レップ（中重量）も、20〜25レップ（軽重量）も、適切な強度（RPE 8以上）で行えばほぼ同等の筋肥大をもたらす</strong>ことが示されました<sup>[2]</sup>。ただし、強度の高いセット（1〜5RM）も神経筋力の観点から週に取り入れることが推奨されます。</p>

    <h2>週間セット数の目安</h2>
    <p>Krieger（2010）のメタアナリシスおよびSchoenfeld et al.（2019）の研究から、部位ごとの週間有効セット数は以下が目安とされています<sup>[3]</sup>：</p>
    <ul>
      <li><strong>MEV（最小有効ボリューム）</strong>：週4〜10セット</li>
      <li><strong>MAV（最大適応ボリューム）</strong>：週12〜20セット（中級〜上級者）</li>
      <li><strong>MRV（最大回復ボリューム）</strong>：週20〜22セット以上は過剰になりやすい</li>
    </ul>

    <h2>競技者（フィジーク・ボディビル）向けの推奨</h2>
    <p>競技者の場合、オフシーズンは週16〜20セット（部位別）のハイボリュームトレーニングを行い、ピーク期（コンテスト前3〜4週）にはボリュームを40〜60%削減しながら強度を維持するデローディング戦略が効果的です<sup>[4]</sup>。</p>
  `,
  references: [
    {
      id: 1,
      authors: "Schoenfeld BJ",
      year: 2010,
      title: "The mechanisms of muscle hypertrophy and their application to resistance training",
      journal: "Journal of Strength and Conditioning Research, 24(10): 2857-2872",
      url: "https://pubmed.ncbi.nlm.nih.gov/20847704/",
    },
    {
      id: 2,
      authors: "Schoenfeld BJ, Grgic J, Ogborn D, Krieger JW",
      year: 2017,
      title: "Strength and Hypertrophy Adaptations Between Low- vs. High-Load Resistance Training",
      journal: "Journal of Strength and Conditioning Research, 31(12): 3508-3523",
      url: "https://pubmed.ncbi.nlm.nih.gov/28834797/",
    },
    {
      id: 3,
      authors: "Krieger JW",
      year: 2010,
      title: "Single vs. multiple sets of resistance exercise for muscle hypertrophy: a meta-analysis",
      journal: "Journal of Strength and Conditioning Research, 24(4): 1150-1159",
      url: "https://pubmed.ncbi.nlm.nih.gov/20300012/",
    },
    {
      id: 4,
      authors: "Israetel M, Feather J, Falco A",
      year: 2020,
      title: "Scientific Principles of Hypertrophy Training",
      journal: "Renaissance Periodization",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 栄養・食事
// ─────────────────────────────────────────────────────────────
const proteinTiming: Article = {
  slug: "protein-timing",
  title: "プロテインはいつ飲む？タイミング別の効果を徹底比較",
  date: "2026-03-25",
  category: "栄養・食事",
  excerpt:
    "トレーニング前・後・就寝前、それぞれのプロテイン摂取タイミングで筋肥大への影響はどう変わるのか。最新の研究を元に解説。",
  image: "",
  readTime: "8分",
  tags: ["プロテイン", "タイミング", "筋肥大"],
  contentHtml: `
    <h2>「アナボリックウィンドウ」の真実</h2>
    <p>長年「トレーニング後30分以内にプロテインを摂取すべき」という「アナボリックウィンドウ（同化の窓）」説が信じられてきました。しかしSchoenfeld & Aragon（2013）のメタアナリシスは、<strong>プロテインのタイミングよりも1日の総タンパク質摂取量の方が筋肥大に対する影響が大きい</strong>ことを示しています<sup>[1]</sup>。</p>

    <h2>タイミング別の科学的エビデンス</h2>
    <h3>トレーニング直後（30分〜2時間以内）</h3>
    <p>筋タンパク合成（MPS）はトレーニング後24〜48時間にわたって上昇しますが、直後の摂取は特に効果的です。Tipton et al.（2001）は、<em>運動直後のタンパク質摂取が安静時の2倍近い筋タンパク合成を促す</em>ことを示しました<sup>[2]</sup>。</p>

    <h3>就寝前（カゼインプロテイン推奨）</h3>
    <p>Res et al.（2012）の研究では、就寝前に40gのカゼインプロテインを摂取することで、<strong>翌朝の筋タンパク合成が22%増加</strong>することが確認されました<sup>[3]</sup>。ホエイより吸収が遅いカゼインが就寝前に適している理由です。</p>

    <h2>結論：1日の総摂取量を優先せよ</h2>
    <p>ISSNガイドライン（Stout et al., 2018）では、筋肥大を目的とする場合、<strong>体重1kgあたり1.4〜2.0gのタンパク質を1日4〜6食に分けて摂取すること</strong>を推奨しています<sup>[4]</sup>。タイミングは二次的な要因です。</p>
  `,
  references: [
    {
      id: 1,
      authors: "Schoenfeld BJ, Aragon AA, Krieger JW",
      year: 2013,
      title: "The effect of protein timing on muscle strength and hypertrophy: a meta-analysis",
      journal: "Journal of the International Society of Sports Nutrition, 10(1): 53",
      url: "https://pubmed.ncbi.nlm.nih.gov/24299050/",
    },
    {
      id: 2,
      authors: "Tipton KD, Rasmussen BB, Miller SL, et al.",
      year: 2001,
      title: "Timing of amino acid-carbohydrate ingestion alters anabolic response of muscle to resistance exercise",
      journal: "American Journal of Physiology, 281(2): E197-206",
      url: "https://pubmed.ncbi.nlm.nih.gov/11440894/",
    },
    {
      id: 3,
      authors: "Res PT, Groen B, Pennings B, et al.",
      year: 2012,
      title: "Protein ingestion before sleep improves postexercise overnight recovery",
      journal: "Medicine & Science in Sports & Exercise, 44(8): 1560-1569",
      url: "https://pubmed.ncbi.nlm.nih.gov/22330017/",
    },
    {
      id: 4,
      authors: "Stout JR, Antonio J, Kalman DS (Eds.)",
      year: 2018,
      title: "Essentials of Creatine in Sports and Health",
      journal: "ISSN（国際スポーツ栄養学会）",
    },
  ],
};

const calorieDeficitMuscle: Article = {
  slug: "calorie-deficit-muscle",
  title: "カロリー制限中でも筋肉を守る食事設計の考え方",
  date: "2026-03-05",
  category: "栄養・食事",
  excerpt:
    "減量中に筋肉まで落ちてしまう――その悩みを解決するための、タンパク質量・食事回数・トレーニング頻度の最適解を提示します。",
  image: "",
  readTime: "9分",
  tags: ["減量", "カロリー制限", "筋肉維持", "食事設計"],
  contentHtml: `
    <h2>減量中になぜ筋肉が落ちるのか</h2>
    <p>カロリー制限下では、身体はエネルギー不足を補うために筋タンパク質を分解します。この「筋肉の異化（カタボリズム）」を最小化しながら脂肪を落とすことが競技者の課題です。</p>

    <h2>カロリー赤字の適切な幅</h2>
    <p>Hall & Guo（2017）のメタアナリシスによると、<strong>週500〜750kcalの赤字（1日あたり70〜100kcal程度の赤字）が、筋肉量を保ちながら脂肪を減らす最適なゾーン</strong>とされています<sup>[1]</sup>。急激な制限（1000kcal以上/日）は筋肉喪失リスクを大幅に高めます。</p>

    <h2>減量中のタンパク質摂取量</h2>
    <p>通常の筋肥大期（1.6〜2.0g/体重kg）より<strong>多い</strong>タンパク質が必要です。Helms et al.（2014）の研究では、<em>減量中の筋肉保持には体重1kgあたり2.3〜3.1gのタンパク質が必要</em>になる場合があることが示されています<sup>[2]</sup>。特に体脂肪率が低くなるほど（競技者の場合）この要求量は高まります。</p>

    <h2>食事回数の最適化</h2>
    <p>Moore et al.（2012）の研究では、タンパク質を3〜4食に均等に分散させることで、1食に集中させるより優れた筋タンパク合成が得られることが示されました<sup>[3]</sup>。競技者には以下の食事パターンを推奨します：</p>
    <ul>
      <li>朝食・昼食・トレ後・夕食の4食に分散</li>
      <li>各食で30〜40gのタンパク質を目標に</li>
      <li>就寝前にカゼイン系食品（ギリシャヨーグルト、カッテージチーズ等）</li>
    </ul>

    <h2>トレーニング頻度を維持する重要性</h2>
    <p>減量中にトレーニング量を大幅に落とすと、筋肉喪失が加速します。Barakat et al.（2020）は、<strong>カロリー制限中でもトレーニングの強度と頻度を維持することが筋肉保持の最重要因子</strong>であることを示しています<sup>[4]</sup>。</p>
  `,
  references: [
    {
      id: 1,
      authors: "Hall KD, Guo J",
      year: 2017,
      title: "Obesity Energetics: Body Weight Regulation and the Effects of Diet Composition",
      journal: "Gastroenterology, 152(7): 1718-1727",
      url: "https://pubmed.ncbi.nlm.nih.gov/28193517/",
    },
    {
      id: 2,
      authors: "Helms ER, Zinn C, Rowlands DS, Brown SR",
      year: 2014,
      title: "A systematic review of dietary protein during caloric restriction in resistance trained lean athletes",
      journal: "International Journal of Sport Nutrition and Exercise Metabolism, 24(2): 127-138",
      url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
    },
    {
      id: 3,
      authors: "Moore DR, Areta J, Coffey VG, et al.",
      year: 2012,
      title: "Daytime pattern of post-exercise protein intake affects whole-body protein turnover in resistance-trained males",
      journal: "Nutrition & Metabolism, 9(1): 91",
      url: "https://pubmed.ncbi.nlm.nih.gov/23075563/",
    },
    {
      id: 4,
      authors: "Barakat C, Pearson J, Escalante G, et al.",
      year: 2020,
      title: "Body Recomposition: Can Trained Individuals Build Muscle and Lose Fat at the Same Time?",
      journal: "Strength & Conditioning Journal, 42(5): 7-21",
    },
  ],
};

const pfcBalance: Article = {
  slug: "pfc-balance-guide",
  title: "PFCバランスの最適解：競技者向け栄養管理の基本",
  date: "2026-04-03",
  category: "栄養・食事",
  excerpt:
    "タンパク質・脂質・炭水化物の最適な比率は、目的（増量・減量・維持）と競技ステージによって変わります。ISSNガイドラインをもとに科学的な食事設計を解説。",
  image: "",
  readTime: "10分",
  tags: ["PFCバランス", "栄養管理", "増量", "減量", "競技者"],
  contentHtml: `
    <h2>PFCとは</h2>
    <p>PFCとは<strong>P（Protein：タンパク質）・F（Fat：脂質）・C（Carbohydrate：炭水化物）</strong>の略で、三大栄養素とも呼ばれます。それぞれが担う役割：</p>
    <ul>
      <li><strong>タンパク質（4kcal/g）</strong>：筋肉・酵素・ホルモンの材料</li>
      <li><strong>脂質（9kcal/g）</strong>：ホルモン合成・細胞膜の構成・脂溶性ビタミン吸収</li>
      <li><strong>炭水化物（4kcal/g）</strong>：高強度運動の主要エネルギー源</li>
    </ul>

    <h2>ISSNの推奨値（競技者向け）</h2>
    <p>Thomas et al.（2016）によるISSN立場声明では、以下の摂取量が推奨されています<sup>[1]</sup>：</p>
    <ul>
      <li><strong>タンパク質</strong>：1.4〜2.0g/体重kg（増量期）、2.3〜3.1g/体重kg（減量期）</li>
      <li><strong>炭水化物</strong>：5〜7g/体重kg（中強度トレーニング日）、6〜10g/体重kg（高強度・試合前）</li>
      <li><strong>脂質</strong>：総カロリーの20〜35%（最低20%未満にしない）</li>
    </ul>

    <h2>フィジーク競技者のオフシーズン食事例（体重70kg想定）</h2>
    <p>目標カロリー：3,000kcal（維持カロリー+300kcal）</p>
    <ul>
      <li><strong>タンパク質</strong>：175g（700kcal、総カロリーの23%）</li>
      <li><strong>炭水化物</strong>：380g（1,520kcal、総カロリーの51%）</li>
      <li><strong>脂質</strong>：87g（780kcal、総カロリーの26%）</li>
    </ul>

    <h2>炭水化物のタイミング（カーボタイミング）</h2>
    <p>Ivy & Portman（2004）の研究では、<em>トレーニング前後の炭水化物摂取がグリコーゲン補充とパフォーマンス維持に重要</em>であることが示されています<sup>[2]</sup>。特に競技者は：</p>
    <ul>
      <li>トレーニング1〜2時間前：中GI炭水化物（玄米・オートミール等）を30〜60g</li>
      <li>トレーニング直後30分以内：高GI炭水化物（白米・バナナ等）を体重×0.5g</li>
    </ul>

    <h2>脂質を削りすぎてはいけない理由</h2>
    <p>Hamalainen et al.（1984）の研究では、食事の脂質比率が総カロリーの20%を下回ると<strong>テストステロン値が有意に低下する</strong>ことが示されています<sup>[3]</sup>。ホルモンバランスのためにも脂質は適切に摂取してください。</p>
  `,
  references: [
    {
      id: 1,
      authors: "Thomas DT, Erdman KA, Burke LM",
      year: 2016,
      title: "American College of Sports Medicine Joint Position Statement: Nutrition and Athletic Performance",
      journal: "Medicine & Science in Sports & Exercise, 48(3): 543-568",
      url: "https://pubmed.ncbi.nlm.nih.gov/26891166/",
    },
    {
      id: 2,
      authors: "Ivy J, Portman R",
      year: 2004,
      title: "Nutrient Timing: The Future of Sports Nutrition",
      journal: "Basic Health Publications",
    },
    {
      id: 3,
      authors: "Hamalainen EK, Adlercreutz H, Puska P, Pietinen P",
      year: 1984,
      title: "Decrease of serum total and free testosterone during a low-fat high-fibre diet",
      journal: "Journal of Steroid Biochemistry, 18(3): 369-370",
      url: "https://pubmed.ncbi.nlm.nih.gov/6538617/",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// サプリメント
// ─────────────────────────────────────────────────────────────
const creatineEffects: Article = {
  slug: "creatine-effects",
  title: "クレアチンの効果・副作用・飲み方を科学的に解説",
  date: "2026-03-15",
  category: "サプリメント",
  excerpt:
    "最も研究されたサプリメントの一つ、クレアチン。本当に効くのか？副作用は？どう摂れば良いのかを論文をベースに分かりやすく解説。",
  image: "",
  readTime: "10分",
  tags: ["クレアチン", "サプリメント", "パフォーマンス向上"],
  contentHtml: `
    <h2>クレアチンとは何か</h2>
    <p>クレアチンは体内でも合成される含窒素化合物で、主にATP（アデノシン三リン酸）の再合成に関与します。筋肉内のクレアチンリン酸がADP（アデノシン二リン酸）を素早くATPに変換する「PCr系」を支えることで、<strong>高強度・短時間運動のパフォーマンスを向上させます</strong>。</p>

    <h2>科学的に証明されている効果</h2>
    <p>Rawson & Volek（2003）のレビューでは、クレアチン補給により以下の効果が確認されています<sup>[1]</sup>：</p>
    <ul>
      <li>最大筋力・爆発力の向上（平均5〜15%）</li>
      <li>筋肥大の促進（プラセボ比で筋力増加が2倍以上）</li>
      <li>高強度インターバル運動時のパフォーマンス持続</li>
    </ul>
    <p>ISSNの立場声明（Kreider et al., 2017）では、<em>クレアチンモノハイドレートは最も研究され、安全性と有効性が確立されたスポーツサプリメントの一つ</em>と結論づけられています<sup>[2]</sup>。</p>

    <h2>推奨される摂取プロトコル</h2>
    <p>2種類のプロトコルが確立されています：</p>
    <ul>
      <li><strong>ローディング法</strong>：最初の5〜7日間に20g/日（5g×4回）を摂取し、その後3〜5g/日の維持量へ移行。最速でクレアチン貯蔵を満たせる</li>
      <li><strong>維持摂取法</strong>：最初からずっと3〜5g/日を摂取。ローディングと同等の結果を4週間で達成</li>
    </ul>
    <blockquote>タイミングはトレーニング直後（糖質・タンパク質と一緒）が最も吸収効率が良いとされています（Antonio & Ciccone, 2013）<sup>[3]</sup></blockquote>

    <h2>副作用と安全性</h2>
    <p>よく懸念される副作用について：</p>
    <ul>
      <li><strong>腎臓への影響</strong>：腎機能が正常な場合、長期摂取（最大5年）でも腎機能への悪影響は確認されていない（Gualano et al., 2008）<sup>[4]</sup></li>
      <li><strong>体重増加</strong>：筋肉内の水分保持により1〜2kg増加することがある（筋肉内の水分のため脂肪増加ではない）</li>
      <li><strong>脱水・痙攣</strong>：水分摂取を増やすことで予防可能</li>
    </ul>
  `,
  references: [
    {
      id: 1,
      authors: "Rawson ES, Volek JS",
      year: 2003,
      title: "Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance",
      journal: "Journal of Strength and Conditioning Research, 17(4): 822-831",
      url: "https://pubmed.ncbi.nlm.nih.gov/14636100/",
    },
    {
      id: 2,
      authors: "Kreider RB, Kalman DS, Antonio J, et al.",
      year: 2017,
      title: "International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation",
      journal: "Journal of the International Society of Sports Nutrition, 14: 18",
      url: "https://pubmed.ncbi.nlm.nih.gov/28615996/",
    },
    {
      id: 3,
      authors: "Antonio J, Ciccone V",
      year: 2013,
      title: "The effects of pre versus post workout supplementation of creatine monohydrate on body composition and strength",
      journal: "Journal of the International Society of Sports Nutrition, 10: 36",
      url: "https://pubmed.ncbi.nlm.nih.gov/23919405/",
    },
    {
      id: 4,
      authors: "Gualano B, Ugrinowitsch C, Novaes RB, et al.",
      year: 2008,
      title: "Effects of creatine supplementation on renal function: a randomized, double-blind, placebo-controlled clinical trial",
      journal: "European Journal of Applied Physiology, 103(1): 33-40",
      url: "https://pubmed.ncbi.nlm.nih.gov/18299981/",
    },
  ],
};

const proteinPowderGuide: Article = {
  slug: "protein-powder-guide",
  title: "プロテインパウダーの選び方：ホエイ・カゼイン・植物性の徹底比較",
  date: "2026-04-07",
  category: "サプリメント",
  excerpt:
    "ホエイ・カゼイン・ソイ・エンドウタンパク……どれを選べばいいのか。吸収速度・アミノ酸スコア・コスパを科学的に比較します。",
  image: "",
  readTime: "8分",
  tags: ["プロテイン", "ホエイ", "カゼイン", "植物性", "サプリ選び"],
  contentHtml: `
    <h2>プロテインパウダーの種類と特徴</h2>
    <p>市販のプロテインパウダーは原料によって大きく以下に分類されます：</p>
    <ul>
      <li><strong>ホエイプロテイン</strong>（牛乳由来）：消化・吸収が速い（2〜3時間）</li>
      <li><strong>カゼインプロテイン</strong>（牛乳由来）：消化が遅い（5〜7時間）</li>
      <li><strong>ソイプロテイン</strong>（大豆由来）：植物性・PDCAAS 1.0</li>
      <li><strong>エンドウタンパク（ピープロテイン）</strong>：アレルゲンが少ない植物性</li>
    </ul>

    <h2>アミノ酸スコアと消化率</h2>
    <p>タンパク質の質を評価する指標としてPDCAAS（タンパク質消化率補正アミノ酸スコア）やDIAAS（消化可能不可欠アミノ酸スコア）が使われます。Gorissen et al.（2018）の比較研究では<sup>[1]</sup>：</p>
    <ul>
      <li><strong>ホエイ</strong>：DIAAS 1.09（最高クラス）、BCAA含有量が豊富</li>
      <li><strong>カゼイン</strong>：DIAAS 1.08、特にロイシン含有量が高い</li>
      <li><strong>ソイ</strong>：DIAAS 0.91、必須アミノ酸バランスが良好な植物性</li>
    </ul>

    <h2>用途別の最適選択</h2>
    <ul>
      <li><strong>トレーニング直後</strong>：ホエイ（急速な筋タンパク合成を促す）</li>
      <li><strong>就寝前</strong>：カゼイン（夜間の持続的なアミノ酸供給）</li>
      <li><strong>食間の補食</strong>：どちらでも可。コスパ重視でホエイが多い</li>
      <li><strong>乳製品アレルギー</strong>：ソイまたはエンドウタンパク</li>
    </ul>

    <h2>コスパの現実</h2>
    <p>プロテインの「コスパ」を比較する際は、価格÷タンパク質量（g）で計算しましょう。市販品の目安：</p>
    <ul>
      <li>ホエイコンセントレート（WPC）：約4〜6円/g protein</li>
      <li>ホエイアイソレート（WPI）：約6〜10円/g protein（純度が高い分高価）</li>
      <li>カゼイン：約7〜12円/g protein</li>
      <li>植物性：約6〜15円/g protein（製品差が大きい）</li>
    </ul>
  `,
  references: [
    {
      id: 1,
      authors: "Gorissen SHM, Crombag JJR, Senden JMG, et al.",
      year: 2018,
      title: "Protein content and amino acid composition of commercially available plant-based protein isolates",
      journal: "Amino Acids, 50(12): 1685-1695",
      url: "https://pubmed.ncbi.nlm.nih.gov/30167963/",
    },
    {
      id: 2,
      authors: "Tang JE, Moore DR, Kujbida GW, et al.",
      year: 2009,
      title: "Ingestion of whey hydrolysate, casein, or soy protein isolate: effects on mixed muscle protein synthesis",
      journal: "Journal of Applied Physiology, 107(3): 987-992",
      url: "https://pubmed.ncbi.nlm.nih.gov/19589961/",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// ライフスタイル
// ─────────────────────────────────────────────────────────────
const sleepMuscleGrowth: Article = {
  slug: "sleep-muscle-growth",
  title: "睡眠の質が筋肉の成長を左右する ― 最適な睡眠戦略",
  date: "2026-03-10",
  category: "ライフスタイル",
  excerpt:
    "筋肉はジムではなく、眠っている間に成長する。睡眠とテストステロン・成長ホルモンの関係と、今夜から実践できる睡眠改善法。",
  image: "",
  readTime: "8分",
  tags: ["睡眠", "回復", "成長ホルモン", "テストステロン"],
  contentHtml: `
    <h2>筋肉成長と睡眠の関係</h2>
    <p>筋肉の成長（筋タンパク合成）はトレーニング後の休養中、特に<strong>睡眠中に最大化されます</strong>。Van Cauter et al.（2000）の研究では、成長ホルモン（GH）の70〜80%が睡眠中（特に深睡眠フェーズ）に分泌されることが確認されています<sup>[1]</sup>。</p>

    <h2>睡眠不足がホルモンに与える影響</h2>
    <p>Leproult & Van Cauter（2011）の研究では、1週間の睡眠制限（8時間→5時間）によって<strong>テストステロン値が10〜15%低下</strong>することが示されました<sup>[2]</sup>。この低下幅は10〜15歳の加齢に相当します。睡眠不足はトレーニングへの投資対効果を著しく下げます。</p>

    <h2>アスリートに推奨される睡眠時間</h2>
    <p>Hirshkowitz et al.（2015）のNSF（全米睡眠財団）ガイドラインでは成人の推奨睡眠時間は7〜9時間ですが<sup>[3]</sup>、競技者にはさらに多い9〜10時間が最適とされる研究もあります（Mah et al., 2011）。</p>

    <h2>睡眠の質を高める実践策（科学的根拠あり）</h2>
    <ol>
      <li><strong>就寝1〜2時間前のブルーライト遮断</strong>：メラトニン分泌への影響を最小化（Chang et al., 2015）</li>
      <li><strong>寝室温度を18〜20℃に保つ</strong>：深部体温の低下が入眠を促進</li>
      <li><strong>カフェインは就寝6時間前まで</strong>：アデノシン受容体への拮抗作用が半減期6時間のため</li>
      <li><strong>一定の就寝・起床時刻を維持</strong>：概日リズム（サーカディアンリズム）の安定化</li>
      <li><strong>就寝前のカゼインプロテイン摂取</strong>：睡眠中の筋タンパク合成を22%増加（Res et al., 2012）</li>
    </ol>
  `,
  references: [
    {
      id: 1,
      authors: "Van Cauter E, Plat L, Copinschi G",
      year: 2000,
      title: "Interrelations between sleep and the somatotropic axis",
      journal: "Sleep, 21(6): 553-566",
      url: "https://pubmed.ncbi.nlm.nih.gov/9779516/",
    },
    {
      id: 2,
      authors: "Leproult R, Van Cauter E",
      year: 2011,
      title: "Effect of 1 week of sleep restriction on testosterone levels in young healthy men",
      journal: "JAMA, 305(21): 2173-2174",
      url: "https://pubmed.ncbi.nlm.nih.gov/21632481/",
    },
    {
      id: 3,
      authors: "Hirshkowitz M, Whiton K, Albert SM, et al.",
      year: 2015,
      title: "National Sleep Foundation's sleep time duration recommendations: methodology and results summary",
      journal: "Sleep Health, 1(1): 40-43",
      url: "https://pubmed.ncbi.nlm.nih.gov/29073412/",
    },
  ],
};

const overtrainingPrevention: Article = {
  slug: "overtraining-prevention",
  title: "オーバートレーニング症候群の見分け方と回復プロトコル",
  date: "2026-04-08",
  category: "ライフスタイル",
  excerpt:
    "「やればやるほど良い」は危険な思い込みです。オーバートレーニング症候群のサインを早期に察知し、適切に回復するための方法を解説します。",
  image: "",
  readTime: "9分",
  tags: ["オーバートレーニング", "回復", "ライフスタイル", "競技者"],
  contentHtml: `
    <h2>オーバートレーニング症候群（OTS）とは</h2>
    <p>オーバートレーニング症候群（Overtraining Syndrome：OTS）は、<strong>トレーニング負荷が回復能力を超え続けた結果として起こる、慢性的な疲労・パフォーマンス低下・心理的不調の複合状態</strong>です。Kreher & Schwartz（2012）によると、症状が進行するほど回復に必要な期間が指数関数的に延びます<sup>[1]</sup>。</p>

    <h2>オーバーリーチングとOTSの違い</h2>
    <p>Meeusen et al.（2013）のECSS/ACSM合同声明では、以下の段階的な区別が提唱されています<sup>[2]</sup>：</p>
    <ul>
      <li><strong>機能的オーバーリーチング（FOR）</strong>：数日〜2週間の回復で解消する一時的な疲労蓄積</li>
      <li><strong>非機能的オーバーリーチング（NFOR）</strong>：数週間〜数ヶ月の回復が必要。パフォーマンス低下が顕著</li>
      <li><strong>オーバートレーニング症候群（OTS）</strong>：数ヶ月以上の完全回復が必要。重篤なケースでは競技継続が困難</li>
    </ul>

    <h2>早期警告サイン（15のチェックリスト）</h2>
    <ul>
      <li>以前より軽い重量で限界を感じる</li>
      <li>安静時心拍数が通常より5〜10bpm高い</li>
      <li>睡眠時間を十分とっても疲れが取れない</li>
      <li>気分の落ち込み・イライラ・無気力感</li>
      <li>食欲不振</li>
      <li>頻繁な風邪・感染症（免疫機能低下）</li>
      <li>筋肉・関節の慢性的な痛みやだるさ</li>
    </ul>

    <h2>回復プロトコル</h2>
    <p>Israel（1976）以来、OTSの主治療は<em>「完全休養」</em>が基本ですが、最新のアプローチでは段階的な回復が推奨されています<sup>[3]</sup>：</p>
    <ol>
      <li><strong>フェーズ1（1〜2週間）</strong>：完全休養またはウォーキング等の低強度活動のみ</li>
      <li><strong>フェーズ2（2〜4週間）</strong>：通常の50%の強度・ボリュームに制限したトレーニング再開</li>
      <li><strong>フェーズ3（4〜8週間）</strong>：80%まで徐々に戻し、主観的体調を毎日評価</li>
    </ol>
    <p>回復中は特に<strong>睡眠・タンパク質摂取・ビタミンD・鉄分の確認</strong>が重要です。</p>
  `,
  references: [
    {
      id: 1,
      authors: "Kreher JB, Schwartz JB",
      year: 2012,
      title: "Overtraining Syndrome: A Practical Guide",
      journal: "Sports Health, 4(2): 128-138",
      url: "https://pubmed.ncbi.nlm.nih.gov/23016079/",
    },
    {
      id: 2,
      authors: "Meeusen R, Duclos M, Foster C, et al.",
      year: 2013,
      title: "Prevention, Diagnosis and Treatment of the Overtraining Syndrome: Joint Consensus Statement of the ECSS and ACSM",
      journal: "European Journal of Sport Science, 13(1): 1-24",
      url: "https://pubmed.ncbi.nlm.nih.gov/23751106/",
    },
    {
      id: 3,
      authors: "Cadegiani FA, Kater CE",
      year: 2017,
      title: "Adrenal fatigue does not exist: a systematic review",
      journal: "BMC Endocrine Disorders, 16(1): 48",
      url: "https://pubmed.ncbi.nlm.nih.gov/27557747/",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 全記事エクスポート
// ─────────────────────────────────────────────────────────────
export const allArticles: Article[] = [
  beginnerStrengthTraining,
  proteinTiming,
  squatFormGuide,
  creatineEffects,
  sleepMuscleGrowth,
  calorieDeficitMuscle,
  progressiveOverload,
  hypertrophySetsReps,
  pfcBalance,
  proteinPowderGuide,
  overtrainingPrevention,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return allArticles.map((a) => a.slug);
}
