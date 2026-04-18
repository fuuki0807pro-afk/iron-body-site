import { allArticles } from './articles';

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Lesson = {
  lessonNumber: number;
  articleSlug: string;
  quizzes: QuizQuestion[];
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  level: string;
  estimatedTime: string;
  badgeLabel: string;
  lessons: Lesson[];
};

export const courses: Course[] = [
  {
    slug: 'beginner-hypertrophy',
    title: '筋肥大の科学・入門編',
    description:
      'トレーニングを始めたばかりの方へ。筋肉が成長する仕組みから、フォーム・栄養・回復まで、科学的根拠をもとに体系的に学びます。',
    level: '入門',
    estimatedTime: '約40分',
    badgeLabel: '白帯',
    lessons: [
      {
        lessonNumber: 1,
        articleSlug: 'beginner-strength-training',
        quizzes: [
          {
            id: 1,
            question: '初心者にとって最も効果的なトレーニング頻度はどれですか？',
            options: [
              '週1回・部位別分割法',
              '週3回・全身トレーニング（フルボディ）',
              '毎日・短時間トレーニング',
              '週5回・部位別分割法',
            ],
            correctIndex: 1,
            explanation:
              'Schoenfeld et al.（2016）のメタアナリシスにより、同じ週間ボリュームなら週2〜3回の高頻度トレーニングが週1回より筋肥大に優れることが示されています。初心者には全身の筋肉を網羅するフルボディプログラムが最適です。',
          },
          {
            id: 2,
            question: '最初の4〜6週間で最優先すべきことは何ですか？',
            options: [
              'できるだけ重い重量を扱うこと',
              '毎日トレーニングして筋肉痛を出すこと',
              '正しいフォーム（動作パターン）の習得',
              'サプリメントの最適化',
            ],
            correctIndex: 2,
            explanation:
              '重量よりも先に「正しい動作パターン」を神経に刷り込むことが、長期的な成長の土台となります。フォームが固まっていないうちに重量を増やすことが怪我の最大原因です。',
          },
          {
            id: 3,
            question: '筋タンパク合成（筋肉の成長）が最も促進されるのはいつですか？',
            options: [
              'トレーニング中',
              'トレーニング直後の30分',
              '食事直後',
              '睡眠中（回復期間）',
            ],
            correctIndex: 3,
            explanation:
              '筋肉の合成はトレーニング後の回復期間、特に睡眠中に最大化されます。睡眠7〜9時間の確保が成長の鍵です。',
          },
        ],
      },
      {
        lessonNumber: 2,
        articleSlug: 'squat-form-guide',
        quizzes: [
          {
            id: 1,
            question:
              '「スクワットで膝をつま先より前に出してはいけない」という説は正しいですか？',
            options: [
              '正しい。膝への負担が増えるため絶対にNG',
              '誤り。膝がつま先より前に出ること自体は問題なく、むしろ股関節への負荷が増える',
              '正しい。腰痛の原因になる',
              '誤り。むしろ膝を前に出した方が筋肥大に効果的',
            ],
            correctIndex: 1,
            explanation:
              'Fry et al.（2003）の研究により、膝がつま先より前に出ること自体は問題ないことが示されています。危険なのは膝の内側への崩れ（ニーイン）です。',
          },
          {
            id: 2,
            question: 'スクワット時の腰痛の最大原因は何ですか？',
            options: [
              '膝がつま先より前に出ること',
              '足幅が広すぎること',
              '骨盤後傾（バットウィンク）',
              'バーの位置が低すぎること',
            ],
            correctIndex: 2,
            explanation:
              '深くしゃがんだ際に骨盤が後ろに丸まる「バットウィンク」が腰痛の最大原因です。腰椎椎間板に過度な圧力をかけます。股関節モビリティの改善で予防できます。',
          },
          {
            id: 3,
            question: '初心者に推奨されるバーの担ぎ方はどれですか？',
            options: [
              'ローバー（後部三角筋上）',
              'ハイバー（僧帽筋上部）',
              'フロントスクワット（鎖骨上）',
              '担ぎ方は筋肥大に影響しない',
            ],
            correctIndex: 1,
            explanation:
              'ハイバースクワットは体幹をより直立させやすく、動作パターンの習得がしやすいため初心者に推奨されます。ローバーは中〜上級者向けです。',
          },
        ],
      },
      {
        lessonNumber: 3,
        articleSlug: 'progressive-overload',
        quizzes: [
          {
            id: 1,
            question:
              '同じトレーニング刺激を繰り返すと、何週間で適応が完了し成長が止まりやすくなりますか？',
            options: ['2〜3週間', '6〜8週間', '3〜4ヶ月', '半年以上'],
            correctIndex: 1,
            explanation:
              'Kraemer & Ratamess（2004）のレビューで、同一のトレーニング刺激が繰り返されると6〜8週間で適応が完了し、それ以上の肥大が起こりにくくなることが示されています。',
          },
          {
            id: 2,
            question: '初心者（0〜1年）に最適な負荷増加のアプローチはどれですか？',
            options: [
              '月単位でのメゾサイクル設計',
              '週単位のウェーブローディング',
              '毎セッションごとの重量増加（リニアプログレッション）',
              '半年に1回の重量更新',
            ],
            correctIndex: 2,
            explanation:
              '初心者は神経適応が急速に進むため、毎セッションごとに重量を増やすリニアプログレッションが可能です。中級者は週単位、上級者はメゾサイクル設計が現実的になります。',
          },
          {
            id: 3,
            question: '負荷を増やす方法として正しいものをすべて含むのはどれですか？',
            options: [
              '重量を増やす・レップ数を増やすの2種類のみ',
              '重量を増やすことのみ',
              '重量・レップ数・セット数・インターバル短縮・難易度アップの5種類がある',
              'レップ数を増やすことのみ',
            ],
            correctIndex: 2,
            explanation:
              'プログレッシブオーバーロードの方法は①重量を増やす②レップ数を増やす③セット数を増やす④インターバルを短縮する⑤動作の難易度を上げる、の5つがあります。',
          },
        ],
      },
      {
        lessonNumber: 4,
        articleSlug: 'protein-timing',
        quizzes: [
          {
            id: 1,
            question: '筋肥大において最も重要なタンパク質の要素はどれですか？',
            options: [
              'トレーニング直後30分以内の摂取',
              '就寝前の摂取',
              '1日の総タンパク質摂取量',
              '1回の摂取量を30g以内に抑えること',
            ],
            correctIndex: 2,
            explanation:
              'Schoenfeld & Aragon（2013）のメタアナリシスで、タンパク質のタイミングよりも1日の総摂取量の方が筋肥大への影響が大きいことが示されています。まずは総量を確保することを優先してください。',
          },
          {
            id: 2,
            question: '就寝前に推奨されるタンパク質の種類はどれですか？',
            options: [
              'ホエイプロテイン（速吸収）',
              'カゼインプロテイン（遅吸収）',
              'ソイプロテイン',
              'タイミングに関係なく種類は問わない',
            ],
            correctIndex: 1,
            explanation:
              'Res et al.（2012）の研究で、就寝前に40gのカゼインプロテインを摂取することで翌朝の筋タンパク合成が22%増加することが確認されています。ゆっくり吸収されるカゼインが夜間に適しています。',
          },
          {
            id: 3,
            question: 'トレーニングをする競技者の1日あたり推奨タンパク質摂取量はどれですか？',
            options: [
              '体重×0.8g（厚生労働省の一般推奨量）',
              '体重×1.0g',
              '体重×1.6〜2.2g',
              '体重×3.0g以上',
            ],
            correctIndex: 2,
            explanation:
              'ISSNガイドラインでは、筋肥大を目的とする場合は体重1kgあたり1.4〜2.0gのタンパク質摂取を推奨しています。一般成人向けの0.8〜1.0gでは競技者には不十分です。',
          },
        ],
      },
      {
        lessonNumber: 5,
        articleSlug: 'sleep-muscle-growth',
        quizzes: [
          {
            id: 1,
            question: '成長ホルモン（GH）の何%が睡眠中に分泌されますか？',
            options: ['約30〜40%', '約50%', '約70〜80%', '約90%以上'],
            correctIndex: 2,
            explanation:
              'Van Cauter et al.（2000）の研究で、成長ホルモンの70〜80%が睡眠中（特に深睡眠フェーズ）に分泌されることが確認されています。睡眠不足は成長ホルモンの分泌を直接妨げます。',
          },
          {
            id: 2,
            question:
              '1週間の睡眠制限（8時間→5時間）でテストステロン値はどれくらい変化しますか？',
            options: [
              '変化しない',
              '約5%低下',
              '約10〜15%低下',
              '約30%以上低下',
            ],
            correctIndex: 2,
            explanation:
              'Leproult & Van Cauter（2011）の研究で、1週間の睡眠制限によりテストステロン値が10〜15%低下することが示されました。これは10〜15歳分の加齢に相当する低下幅です。',
          },
          {
            id: 3,
            question: 'カフェインの半減期として正しいものはどれですか？',
            options: ['約2時間', '約4時間', '約6時間', '約10時間'],
            correctIndex: 2,
            explanation:
              'カフェインの半減期は約6時間です。18時以降のコーヒー摂取は就寝時にもカフェインが体内に残り、睡眠の質を妨げます。就寝6時間前を目安に摂取を控えましょう。',
          },
        ],
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getLessonData(courseSlug: string, lessonNumber: number) {
  const course = getCourseBySlug(courseSlug);
  if (!course) return undefined;
  const lesson = course.lessons.find((l) => l.lessonNumber === lessonNumber);
  if (!lesson) return undefined;
  const article = allArticles.find((a) => a.slug === lesson.articleSlug);
  return { lesson, article, course };
}
