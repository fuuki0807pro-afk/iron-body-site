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
  imageAlt?: string;
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
  image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&auto=format&fit=crop",
  imageAlt: "ジムのダンベルを使ったウェイトトレーニングの様子",
  featured: true,
  readTime: "8分",
  tags: ["初心者", "プログラム設計", "フォーム"],
  contentHtml: `
    <h2>はじめに</h2>
    <p>筋トレを始めた多くの人が、最初の3ヶ月で挫折します。その原因の多くは「正しい方向性を知らないまま頑張りすぎること」です。このガイドでは、初心者が最短で成果を出すために必要な3つの柱を解説します。</p>

    <h2>1. プログラム設計：週3回の全身トレーニングが最適</h2>
    <p>初心者にとって最も効果的なのは、<strong>週3回の全身トレーニング（フルボディプログラム）</strong>です。部位分割（分割法）は中〜上級者向けであり、筋肉の回復能力と神経適応がまだ十分でない初心者には向きません。</p>
    <p>Schoenfeld et al.（2016）のメタアナリシスでは、同じ週間トレーニング量であれば<strong>週2〜3回の高頻度トレーニングが週1回よりも筋肥大に優れる</strong>ことが示されています<sup>[1]</sup>。</p>
    <p>日本トレーニング指導者協会（JATI）の指針でも、運動経験の少ない初心者には週2〜3回・主要筋群を網羅するフルボディプログラムを推奨しています<sup>[2]</sup>。</p>
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
    <p>厚生労働省「健康づくりのための身体活動・運動ガイド2023」でも、筋力トレーニングの開始時は<strong>正しいフォームの習得を優先し、強度は段階的に増加させること</strong>を基本方針としています<sup>[3]</sup>。</p>
    <blockquote>「あなたが今持ち上げられる重量は、あなたが今後持ち上げられる重量の足かせになる」― グレッグ・ナックルス</blockquote>
    <p>最初の4〜6週間は、自重またはバーのみで動きを習得することを優先してください。</p>

    <h2>3. 回復：筋肉はジムではなく、睡眠中に育つ</h2>
    <p>筋肉の合成は、トレーニング後の<strong>回復期間</strong>に起こります。特に重要なのが以下の3点です：</p>
    <ul>
      <li>睡眠7〜9時間の確保</li>
      <li>体重×1.6g以上のタンパク質摂取（Morton et al., 2018）<sup>[4]</sup></li>
      <li>トレーニング翌日の適切な休養</li>
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
      authors: "日本トレーニング指導者協会（JATI）",
      year: 2023,
      title: "JATI認定トレーニング指導者テキスト",
      journal: "日本トレーニング指導者協会",
      url: "https://www.jati.jp/",
    },
    {
      id: 3,
      authors: "厚生労働省",
      year: 2023,
      title: "健康づくりのための身体活動・運動ガイド2023",
      journal: "厚生労働省",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/undou/index.html",
    },
    {
      id: 4,
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
  image: "https://images.unsplash.com/photo-1567598508481-65985588e295?w=1200&auto=format&fit=crop",
  imageAlt: "ダンベルを持ちながらスクワットをしている女性のトレーニング風景",
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
    <p>「膝がつま先より前に出てはいけない」という俗説がありますが、これは誤りです。Fry et al.（2003）の研究で、<strong>膝がつま先より前に出ること自体は問題なく、むしろ股関節への負荷が増える</strong>ことが示されています<sup>[2]</sup>。内側への膝の崩れ（ニーイン）の方がはるかに危険です。</p>

    <h2>腰を守るための注意点</h2>
    <p>腰痛の最大原因は<em>骨盤後傾（バットウィンク）</em>です。深くしゃがんだ際に骨盤が後ろに丸まる現象で、腰椎椎間板に過度な圧力をかけます。股関節モビリティの改善と適切なウォームアップで予防できます<sup>[3]</sup>。</p>
    <p>日本整形外科学会でも、腰痛予防の観点からスクワット時の正しい姿勢保持と柔軟性向上の重要性を指摘しています<sup>[4]</sup>。</p>

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
    {
      id: 4,
      authors: "日本整形外科学会",
      year: 2019,
      title: "腰痛診療ガイドライン2019",
      journal: "日本整形外科学会／日本腰痛学会",
      url: "https://www.joa.or.jp/",
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
  image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&auto=format&fit=crop",
  imageAlt: "バーベルにウェイトプレートを追加して重量を増やしているシーン",
  readTime: "7分",
  tags: ["プログレッシブオーバーロード", "筋肥大", "プログラム設計"],
  contentHtml: `
    <h2>プログレッシブオーバーロードとは</h2>
    <p>プログレッシブオーバーロード（漸進性過負荷の原則）とは、<strong>身体に継続的な成長刺激を与え続けるために、時間とともにトレーニングの負荷を段階的に増加させていく考え方</strong>です。NSCA（全米ストレングス＆コンディショニング協会）が定義するトレーニングの7大原則のうちの一つであり、日本トレーニング指導者協会（JATI）の認定カリキュラムでも基本原則として教えられています<sup>[1]</sup>。</p>

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

    <h2>日本人初心者・中級者・上級者別の推奨アプローチ</h2>
    <p>厚生労働省「健康づくりのための身体活動・運動ガイド2023」では、筋力トレーニングについて<strong>週2〜3回を目安に、強度は徐々に上げる</strong>ことが推奨されています<sup>[3]</sup>。Israetel et al.（2019）の理論と組み合わせると：</p>
    <ul>
      <li><strong>初心者（0〜1年）</strong>：毎セッションごとに重量増加（リニアプログレッション）が可能</li>
      <li><strong>中級者（1〜3年）</strong>：週単位での増加（ウェーブローディング）が現実的</li>
      <li><strong>上級者（3年以上）</strong>：月〜3ヶ月単位でのメゾサイクル設計が必要</li>
    </ul>
  `,
  references: [
    {
      id: 1,
      authors: "日本トレーニング指導者協会（JATI）",
      year: 2023,
      title: "JATI認定トレーニング指導者テキスト",
      journal: "日本トレーニング指導者協会",
      url: "https://www.jati.jp/",
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
      authors: "厚生労働省",
      year: 2023,
      title: "健康づくりのための身体活動・運動ガイド2023",
      journal: "厚生労働省",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/undou/index.html",
    },
    {
      id: 4,
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
  image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop",
  imageAlt: "ジムでダンベルを使って筋肥大トレーニングをしている様子",
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
    <p>Schoenfeld et al.（2017）のランダム化比較試験では、<strong>6〜12レップ（中重量）も、20〜25レップ（軽重量）も、適切な強度（RPE 8以上）で行えばほぼ同等の筋肥大をもたらす</strong>ことが示されました<sup>[2]</sup>。</p>

    <h2>週間セット数の目安</h2>
    <p>Krieger（2010）のメタアナリシスから、部位ごとの週間有効セット数の目安は以下のとおりです<sup>[3]</sup>：</p>
    <ul>
      <li><strong>MEV（最小有効ボリューム）</strong>：週4〜10セット</li>
      <li><strong>MAV（最大適応ボリューム）</strong>：週12〜20セット（中級〜上級者）</li>
      <li><strong>MRV（最大回復ボリューム）</strong>：週20〜22セット以上は過剰になりやすい</li>
    </ul>
    <p>なお、国立健康・栄養研究所のデータでは、日本人成人の多くが運動量不足であることが示されており<sup>[4]</sup>、競技者は一般的な推奨量より高いボリュームが有効です。</p>

    <h2>フィジーク・ボディビル競技者向けの推奨</h2>
    <p>競技者の場合、オフシーズンは週16〜20セット（部位別）のハイボリュームトレーニングを行い、ピーク期（コンテスト前3〜4週）にはボリュームを40〜60%削減しながら強度を維持するデローディング戦略が効果的です。</p>
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
      authors: "国立健康・栄養研究所",
      year: 2023,
      title: "国民健康・栄養調査（令和4年）",
      journal: "国立健康・栄養研究所",
      url: "https://www.nibiohn.go.jp/eiken/",
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
  image: "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?w=1200&auto=format&fit=crop",
  imageAlt: "ジムのシェイカーボトルとトレーニング後のプロテイン摂取シーン",
  readTime: "8分",
  tags: ["プロテイン", "タイミング", "筋肥大"],
  contentHtml: `
    <h2>「アナボリックウィンドウ」の真実</h2>
    <p>長年「トレーニング後30分以内にプロテインを摂取すべき」という「アナボリックウィンドウ（同化の窓）」説が信じられてきました。しかしSchoenfeld & Aragon（2013）のメタアナリシスは、<strong>プロテインのタイミングよりも1日の総タンパク質摂取量の方が筋肥大に対する影響が大きい</strong>ことを示しています<sup>[1]</sup>。</p>

    <h2>日本人のタンパク質摂取状況</h2>
    <p>厚生労働省「日本人の食事摂取基準（2020年版）」では、18〜64歳成人のタンパク質推奨量は男性65g/日・女性50g/日とされています<sup>[2]</sup>。ただし、これはあくまで一般成人の最低基準であり、<strong>筋力トレーニングを行う競技者には体重×1.6〜2.2g/日が必要</strong>とされる研究が多く、一般推奨量をはるかに上回ります。</p>

    <h2>タイミング別の科学的エビデンス</h2>
    <h3>トレーニング直後（30分〜2時間以内）</h3>
    <p>筋タンパク合成（MPS）はトレーニング後24〜48時間にわたって上昇しますが、直後の摂取は特に効果的です。Tipton et al.（2001）は、<em>運動直後のタンパク質摂取が安静時の2倍近い筋タンパク合成を促す</em>ことを示しました<sup>[3]</sup>。</p>

    <h3>就寝前（カゼインプロテイン推奨）</h3>
    <p>Res et al.（2012）の研究では、就寝前に40gのカゼインプロテインを摂取することで、<strong>翌朝の筋タンパク合成が22%増加</strong>することが確認されました<sup>[4]</sup>。日本の食材ではギリシャヨーグルト・カッテージチーズ・納豆などがカゼイン様のゆっくり吸収されるタンパク源として有用です。</p>

    <h2>結論：1日の総摂取量を優先せよ</h2>
    <p>ISSNガイドラインでは、筋肥大を目的とする場合、<strong>体重1kgあたり1.4〜2.0gのタンパク質を1日4〜6食に分けて摂取すること</strong>を推奨しています。タイミングは二次的な要因です。</p>
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
      authors: "厚生労働省",
      year: 2020,
      title: "日本人の食事摂取基準（2020年版）",
      journal: "厚生労働省",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/eiyou/syokuji_kijyun.html",
    },
    {
      id: 3,
      authors: "Tipton KD, Rasmussen BB, Miller SL, et al.",
      year: 2001,
      title: "Timing of amino acid-carbohydrate ingestion alters anabolic response of muscle to resistance exercise",
      journal: "American Journal of Physiology, 281(2): E197-206",
      url: "https://pubmed.ncbi.nlm.nih.gov/11440894/",
    },
    {
      id: 4,
      authors: "Res PT, Groen B, Pennings B, et al.",
      year: 2012,
      title: "Protein ingestion before sleep improves postexercise overnight recovery",
      journal: "Medicine & Science in Sports & Exercise, 44(8): 1560-1569",
      url: "https://pubmed.ncbi.nlm.nih.gov/22330017/",
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
  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&auto=format&fit=crop",
  imageAlt: "高タンパクな減量食として鶏むね肉とブロッコリーを盛り付けたヘルシーな食事",
  readTime: "9分",
  tags: ["減量", "カロリー制限", "筋肉維持", "食事設計"],
  contentHtml: `
    <h2>減量中になぜ筋肉が落ちるのか</h2>
    <p>カロリー制限下では、身体はエネルギー不足を補うために筋タンパク質を分解します。この「筋肉の異化（カタボリズム）」を最小化しながら脂肪を落とすことが競技者の課題です。</p>

    <h2>カロリー赤字の適切な幅</h2>
    <p>Hall & Guo（2017）のメタアナリシスによると、<strong>1日あたり300〜500kcalの赤字が、筋肉量を保ちながら脂肪を減らす最適なゾーン</strong>とされています<sup>[1]</sup>。急激な制限（1000kcal以上/日）は筋肉喪失リスクを大幅に高めます。</p>
    <p>日本スポーツ栄養学会（JSNA）のガイドラインでも、競技者の減量期は体重の0.5〜1.0%/週程度のペースが筋肉量維持に適切と示されています<sup>[2]</sup>。体重70kgであれば週350〜700gの減量ペースが目安です。</p>

    <h2>減量中のタンパク質摂取量</h2>
    <p>通常期より<strong>多い</strong>タンパク質が必要です。Helms et al.（2014）の研究では、<em>減量中の筋肉保持には体重1kgあたり2.3〜3.1gのタンパク質が必要</em>になる場合があることが示されています<sup>[3]</sup>。</p>
    <p>厚生労働省「日本人の食事摂取基準（2020年版）」の一般推奨量（男性65g/日）は筋力トレーニングを行う競技者の減量期には不十分であることが多く、体重×2.0〜2.5gを目標にすることを推奨します<sup>[4]</sup>。</p>

    <h2>日本人競技者向けの食事例（体重70kg・減量期）</h2>
    <ul>
      <li><strong>朝食</strong>：卵3個＋納豆1パック＋玄米100g＋野菜みそ汁</li>
      <li><strong>昼食</strong>：鶏むね肉150g＋ブロッコリー＋玄米150g</li>
      <li><strong>トレーニング後</strong>：ホエイプロテイン25g＋バナナ</li>
      <li><strong>夕食</strong>：白身魚150g＋豆腐＋サラダ＋玄米100g</li>
      <li><strong>就寝前</strong>：ギリシャヨーグルト200g</li>
    </ul>
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
      authors: "日本スポーツ栄養学会（JSNA）",
      year: 2022,
      title: "スポーツ栄養ガイドライン",
      journal: "日本スポーツ栄養学会",
      url: "https://sndj-web.jp/",
    },
    {
      id: 3,
      authors: "Helms ER, Zinn C, Rowlands DS, Brown SR",
      year: 2014,
      title: "A systematic review of dietary protein during caloric restriction in resistance trained lean athletes",
      journal: "International Journal of Sport Nutrition and Exercise Metabolism, 24(2): 127-138",
      url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
    },
    {
      id: 4,
      authors: "厚生労働省",
      year: 2020,
      title: "日本人の食事摂取基準（2020年版）",
      journal: "厚生労働省",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/eiyou/syokuji_kijyun.html",
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
  image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&auto=format&fit=crop",
  imageAlt: "PFCバランスを考えたタンパク質・炭水化物・脂質を含むバランスの良い食事",
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

    <h2>日本の食事基準との比較</h2>
    <p>厚生労働省「日本人の食事摂取基準（2020年版）」では、一般成人のPFCエネルギー比率の目標量として<strong>タンパク質13〜20%・脂質20〜30%・炭水化物50〜65%</strong>が示されています<sup>[1]</sup>。しかし競技者の場合、特にタンパク質比率を高める必要があります。</p>

    <h2>ISSNの推奨値（競技者向け）</h2>
    <p>Thomas et al.（2016）によるISSN立場声明では、以下の摂取量が推奨されています<sup>[2]</sup>：</p>
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
    <p>日本の食材で達成しやすい食品：鶏むね肉・卵・ツナ缶・豆腐・納豆（タンパク質）、白米・うどん・オートミール（炭水化物）、アボカド・オリーブオイル・くるみ（脂質）。</p>

    <h2>脂質を削りすぎてはいけない理由</h2>
    <p>Hamalainen et al.（1984）の研究では、食事の脂質比率が総カロリーの20%を下回ると<strong>テストステロン値が有意に低下する</strong>ことが示されています<sup>[3]</sup>。ホルモンバランスのためにも脂質は適切に摂取してください。</p>
  `,
  references: [
    {
      id: 1,
      authors: "厚生労働省",
      year: 2020,
      title: "日本人の食事摂取基準（2020年版）",
      journal: "厚生労働省",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/eiyou/syokuji_kijyun.html",
    },
    {
      id: 2,
      authors: "Thomas DT, Erdman KA, Burke LM",
      year: 2016,
      title: "American College of Sports Medicine Joint Position Statement: Nutrition and Athletic Performance",
      journal: "Medicine & Science in Sports & Exercise, 48(3): 543-568",
      url: "https://pubmed.ncbi.nlm.nih.gov/26891166/",
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
  image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=1200&auto=format&fit=crop",
  imageAlt: "クレアチンのボトルとスプーン、サプリメントパウダー",
  readTime: "10分",
  tags: ["クレアチン", "サプリメント", "パフォーマンス向上"],
  contentHtml: `
    <h2>クレアチンとは何か</h2>
    <p>クレアチンは体内でも合成される含窒素化合物で、主にATP（アデノシン三リン酸）の再合成に関与します。筋肉内のクレアチンリン酸がADP（アデノシン二リン酸）を素早くATPに変換する「PCr系」を支えることで、<strong>高強度・短時間運動のパフォーマンスを向上させます</strong>。</p>
    <p>日本では食品扱いのため医薬品規制の対象外ですが、国立健康・栄養研究所の「健康食品の素材情報データベース」でも安全性・有効性が比較的高く評価されているサプリメントです<sup>[1]</sup>。</p>

    <h2>科学的に証明されている効果</h2>
    <p>ISSNの立場声明（Kreider et al., 2017）では、<em>クレアチンモノハイドレートは最も研究され、安全性と有効性が確立されたスポーツサプリメントの一つ</em>と結論づけられています<sup>[2]</sup>：</p>
    <ul>
      <li>最大筋力・爆発力の向上（平均5〜15%）</li>
      <li>筋肥大の促進（プラセボ比で筋力増加が2倍以上）</li>
      <li>高強度インターバル運動時のパフォーマンス持続</li>
    </ul>

    <h2>推奨される摂取プロトコル</h2>
    <ul>
      <li><strong>ローディング法</strong>：最初の5〜7日間に20g/日（5g×4回）→ その後3〜5g/日の維持量へ</li>
      <li><strong>維持摂取法</strong>：最初から3〜5g/日を摂取（4週間でローディングと同等の結果）</li>
    </ul>
    <blockquote>タイミングはトレーニング直後（糖質・タンパク質と一緒）が最も吸収効率が良いとされています（Antonio & Ciccone, 2013）<sup>[3]</sup></blockquote>

    <h2>副作用と安全性</h2>
    <ul>
      <li><strong>腎臓への影響</strong>：腎機能が正常な場合、長期摂取でも腎機能への悪影響は確認されていない（Gualano et al., 2008）<sup>[4]</sup></li>
      <li><strong>体重増加</strong>：筋肉内の水分保持により1〜2kg増加することがある（脂肪増加ではない）</li>
      <li><strong>胃腸障害</strong>：空腹時の大量摂取で起こることがあるため食事と一緒に摂るのがベスト</li>
    </ul>
  `,
  references: [
    {
      id: 1,
      authors: "国立健康・栄養研究所",
      year: 2024,
      title: "健康食品の素材情報データベース：クレアチン",
      journal: "国立健康・栄養研究所",
      url: "https://hfnet.nibiohn.go.jp/",
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
  image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=1200&auto=format&fit=crop",
  imageAlt: "プロテインパウダーの袋とスクープ、ホエイ・植物性サプリメント比較",
  readTime: "8分",
  tags: ["プロテイン", "ホエイ", "カゼイン", "植物性", "サプリ選び"],
  contentHtml: `
    <h2>プロテインパウダーの種類と特徴</h2>
    <ul>
      <li><strong>ホエイプロテイン</strong>（牛乳由来）：消化・吸収が速い（2〜3時間）</li>
      <li><strong>カゼインプロテイン</strong>（牛乳由来）：消化が遅い（5〜7時間）</li>
      <li><strong>ソイプロテイン</strong>（大豆由来）：植物性・PDCAAS 1.0。日本食との相性が良い</li>
      <li><strong>エンドウタンパク（ピープロテイン）</strong>：アレルゲンが少ない植物性</li>
    </ul>

    <h2>日本人に馴染みやすい選択肢</h2>
    <p>日本スポーツ栄養学会（JSNA）のガイドラインでも、大豆タンパク（ソイプロテイン）は日本の伝統的な食文化に根差したタンパク源として評価されています<sup>[1]</sup>。乳製品が苦手な方、乳糖不耐症の方にも適しています。国立健康・栄養研究所のデータでは、大豆タンパクのイソフラボンによる追加的な健康効果も報告されています<sup>[2]</sup>。</p>

    <h2>アミノ酸スコアと消化率</h2>
    <p>Gorissen et al.（2018）の比較研究では<sup>[3]</sup>：</p>
    <ul>
      <li><strong>ホエイ</strong>：DIAAS 1.09（最高クラス）、BCAA含有量が豊富</li>
      <li><strong>カゼイン</strong>：DIAAS 1.08、特にロイシン含有量が高い</li>
      <li><strong>ソイ</strong>：DIAAS 0.91、必須アミノ酸バランスが良好な植物性</li>
    </ul>

    <h2>用途別の最適選択</h2>
    <ul>
      <li><strong>トレーニング直後</strong>：ホエイ（急速な筋タンパク合成を促す）</li>
      <li><strong>就寝前</strong>：カゼイン（夜間の持続的なアミノ酸供給）</li>
      <li><strong>乳製品アレルギー・乳糖不耐症</strong>：ソイまたはエンドウタンパク</li>
    </ul>

    <h2>コスパの目安（日本市場）</h2>
    <ul>
      <li>ホエイコンセントレート（WPC）：約4〜6円/g protein</li>
      <li>ホエイアイソレート（WPI）：約6〜10円/g protein</li>
      <li>ソイプロテイン：約5〜9円/g protein</li>
    </ul>
  `,
  references: [
    {
      id: 1,
      authors: "日本スポーツ栄養学会（JSNA）",
      year: 2022,
      title: "スポーツ栄養ガイドライン",
      journal: "日本スポーツ栄養学会",
      url: "https://sndj-web.jp/",
    },
    {
      id: 2,
      authors: "国立健康・栄養研究所",
      year: 2024,
      title: "健康食品の素材情報データベース：大豆タンパク質",
      journal: "国立健康・栄養研究所",
      url: "https://hfnet.nibiohn.go.jp/",
    },
    {
      id: 3,
      authors: "Gorissen SHM, Crombag JJR, Senden JMG, et al.",
      year: 2018,
      title: "Protein content and amino acid composition of commercially available plant-based protein isolates",
      journal: "Amino Acids, 50(12): 1685-1695",
      url: "https://pubmed.ncbi.nlm.nih.gov/30167963/",
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
  image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&auto=format&fit=crop",
  imageAlt: "質の良い睡眠でトレーニングからの回復を促している様子",
  readTime: "8分",
  tags: ["睡眠", "回復", "成長ホルモン", "テストステロン"],
  contentHtml: `
    <h2>筋肉成長と睡眠の関係</h2>
    <p>筋肉の成長（筋タンパク合成）はトレーニング後の休養中、特に<strong>睡眠中に最大化されます</strong>。Van Cauter et al.（2000）の研究では、成長ホルモン（GH）の70〜80%が睡眠中（特に深睡眠フェーズ）に分泌されることが確認されています<sup>[1]</sup>。</p>

    <h2>日本人の睡眠状況</h2>
    <p>厚生労働省の調査（2019年）では、<strong>日本人成人の約40%が睡眠に関する何らかの問題を抱えている</strong>ことが示されており、特に働きながらトレーニングをするアスリートにとって睡眠不足は深刻な課題です<sup>[2]</sup>。</p>
    <p>厚生労働省「健康づくりのための睡眠ガイド2023」では、成人に対して<strong>毎日6時間以上の睡眠を推奨</strong>しており、可能であれば7〜9時間が理想とされています<sup>[3]</sup>。</p>

    <h2>睡眠不足がホルモンに与える影響</h2>
    <p>Leproult & Van Cauter（2011）の研究では、1週間の睡眠制限（8時間→5時間）によって<strong>テストステロン値が10〜15%低下</strong>することが示されました<sup>[4]</sup>。この低下幅は10〜15歳の加齢に相当します。睡眠不足はトレーニングへの投資対効果を著しく下げます。</p>

    <h2>今夜から実践できる睡眠改善法</h2>
    <ol>
      <li><strong>就寝1〜2時間前のブルーライト遮断</strong>：スマートフォン・PCの使用を控え、メラトニン分泌を守る</li>
      <li><strong>寝室温度を18〜20℃に保つ</strong>：深部体温の低下が入眠を促進。日本の夏はエアコン活用</li>
      <li><strong>カフェインは就寝6時間前まで</strong>：半減期6時間のため、18時以降のコーヒーは睡眠を妨げる</li>
      <li><strong>一定の就寝・起床時刻を維持</strong>：週末の寝だめは概日リズムを乱す</li>
      <li><strong>就寝前のカゼイン系食品</strong>：ギリシャヨーグルト・カッテージチーズ・納豆が睡眠中の筋タンパク合成を促進</li>
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
      authors: "厚生労働省",
      year: 2019,
      title: "国民健康・栄養調査（令和元年）睡眠関連データ",
      journal: "厚生労働省",
      url: "https://www.mhlw.go.jp/bunya/kenkou/kenkou_eiyou_chousa.html",
    },
    {
      id: 3,
      authors: "厚生労働省",
      year: 2023,
      title: "健康づくりのための睡眠ガイド2023",
      journal: "厚生労働省",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/suimin/index.html",
    },
    {
      id: 4,
      authors: "Leproult R, Van Cauter E",
      year: 2011,
      title: "Effect of 1 week of sleep restriction on testosterone levels in young healthy men",
      journal: "JAMA, 305(21): 2173-2174",
      url: "https://pubmed.ncbi.nlm.nih.gov/21632481/",
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
  image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=1200&auto=format&fit=crop",
  imageAlt: "ジムの床に疲弊して座り込んでいるアスリート、オーバートレーニングのイメージ",
  readTime: "9分",
  tags: ["オーバートレーニング", "回復", "ライフスタイル", "競技者"],
  contentHtml: `
    <h2>オーバートレーニング症候群（OTS）とは</h2>
    <p>オーバートレーニング症候群（Overtraining Syndrome：OTS）は、<strong>トレーニング負荷が回復能力を超え続けた結果として起こる、慢性的な疲労・パフォーマンス低下・心理的不調の複合状態</strong>です。Kreher & Schwartz（2012）によると、症状が進行するほど回復に必要な期間が指数関数的に延びます<sup>[1]</sup>。</p>
    <p>日本でも仕事をしながらトレーニングする競技者は特にリスクが高く、厚生労働省「健康づくりのための身体活動・運動ガイド2023」では過剰な運動負荷のリスク管理も言及されています<sup>[2]</sup>。</p>

    <h2>オーバーリーチングとOTSの違い</h2>
    <p>Meeusen et al.（2013）のECSS/ACSM合同声明では、以下の段階的な区別が提唱されています<sup>[3]</sup>：</p>
    <ul>
      <li><strong>機能的オーバーリーチング（FOR）</strong>：数日〜2週間の回復で解消する一時的な疲労蓄積</li>
      <li><strong>非機能的オーバーリーチング（NFOR）</strong>：数週間〜数ヶ月の回復が必要</li>
      <li><strong>オーバートレーニング症候群（OTS）</strong>：数ヶ月以上の完全回復が必要</li>
    </ul>

    <h2>早期警告サイン（チェックリスト）</h2>
    <ul>
      <li>以前より軽い重量で限界を感じる</li>
      <li>安静時心拍数が通常より5〜10bpm高い</li>
      <li>十分な睡眠をとっても疲れが取れない</li>
      <li>気分の落ち込み・イライラ・無気力感</li>
      <li>食欲不振</li>
      <li>頻繁な風邪・感染症（免疫機能低下のサイン）</li>
      <li>筋肉・関節の慢性的な痛みやだるさ</li>
    </ul>

    <h2>回復プロトコル</h2>
    <ol>
      <li><strong>フェーズ1（1〜2週間）</strong>：完全休養またはウォーキング等の低強度活動のみ</li>
      <li><strong>フェーズ2（2〜4週間）</strong>：通常の50%の強度・ボリュームに制限したトレーニング再開</li>
      <li><strong>フェーズ3（4〜8週間）</strong>：80%まで徐々に戻し、主観的体調を毎日評価</li>
    </ol>
    <p>回復中は特に<strong>睡眠・タンパク質摂取・ビタミンD・鉄分の確認</strong>が重要です。厚生労働省の食事摂取基準に準拠した栄養管理を徹底してください<sup>[4]</sup>。</p>
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
      authors: "厚生労働省",
      year: 2023,
      title: "健康づくりのための身体活動・運動ガイド2023",
      journal: "厚生労働省",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/undou/index.html",
    },
    {
      id: 3,
      authors: "Meeusen R, Duclos M, Foster C, et al.",
      year: 2013,
      title: "Prevention, Diagnosis and Treatment of the Overtraining Syndrome: Joint Consensus Statement of the ECSS and ACSM",
      journal: "European Journal of Sport Science, 13(1): 1-24",
      url: "https://pubmed.ncbi.nlm.nih.gov/23751106/",
    },
    {
      id: 4,
      authors: "厚生労働省",
      year: 2020,
      title: "日本人の食事摂取基準（2020年版）",
      journal: "厚生労働省",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/eiyou/syokuji_kijyun.html",
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
