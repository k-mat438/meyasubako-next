import { Departments, PostData, UserData } from "@/types/type";

export const departments: Departments = {
  全体: ["事業A", "事業C"],
  開発: ["事業A", "事業B"],
  総務: ["事業D"],
  広告: ["A広告", "B広告", "C広告"],
  営業: ["D事業"],
  マーケティング: ["E事業", "F事業"]
};

// サンプルのユーザーデータ
export const users: UserData[] = [
  { id: 1, name: "山田太郎" },
  { id: 2, name: "佐藤花子" },
  { id: 3, name: "鈴木一郎" },
  { id: 4, name: "田中美咲" },
  { id: 5, name: "伊藤健太" },
  { id: 6, name: "加藤優子" }
];

// サンプルの投稿データ
export const samplePosts: PostData[] = [
  {
    id: 1,
    userId: 1,
    department: "広告",
    business: "A広告",
    category: "改善点・提案",
    content: "A広告の進捗が遅れています。対策を考える必要があります。",
    timestamp: "2023-05-21 10:00"
  },
  {
    id: 2,
    userId: 2,
    department: "開発",
    business: "D事業",
    category: "良い点",
    content: "D事業の売上が好調です。チームの努力が実を結んでいます。",
    timestamp: "2023-05-21 11:30"
  },
  {
    id: 3,
    userId: 3,
    department: "総務",
    business: "E事業",
    category: "改善点・提案",
    content:
      "E事業の新しいマーケティング戦略を提案します。顧客層を拡大できる可能性があります。",
    timestamp: "2023-05-21 14:15"
  },
  {
    id: 4,
    userId: 4,
    department: "広告",
    business: "B広告",
    category: "質問",
    content: "B広告の予算について質問があります。増額の可能性はありますか？",
    timestamp: "2023-05-21 16:45"
  },
  {
    id: 5,
    userId: 5,
    department: "開発",
    business: "F事業",
    category: "改善点・提案",
    content:
      "F事業のターゲット設定に疑問を感じています。再考の余地があるのではないでしょうか。",
    timestamp: "2023-05-22 09:20"
  },
  {
    id: 6,
    userId: 6,
    department: "営業",
    business: "D事業",
    category: "改善点・提案",
    content:
      "D事業の新規顧客開拓について提案があります。アプローチ方法を検討したいと思います。",
    timestamp: "2023-05-22 11:45"
  },
  {
    id: 7,
    userId: 7,
    department: "マーケティング",
    business: "E事業",
    category: "良い点",
    content:
      "E事業の新しい広告施策が功を奏しているようです。今後の展開に期待が持てます。",
    timestamp: "2023-05-22 14:00"
  },
  {
    id: 8,
    userId: 8,
    department: "広告",
    business: "C広告",
    category: "質問",
    content:
      "C広告の効果測定方法について詳しく知りたいです。指標の選択に迷っています。",
    timestamp: "2023-05-22 16:30"
  },
  {
    id: 9,
    userId: 9,
    department: "全体",
    business: "事業C",
    category: "改善点・提案",
    content:
      "事業C全体の進捗が思わしくありません。上層部に改善策を提案したいと考えています。",
    timestamp: "2023-05-23 09:10"
  },
  {
    id: 10,
    userId: 10,
    department: "開発",
    business: "事業B",
    category: "改善点・提案",
    content:
      "事業Bの新機能開発について提案があります。顧客ニーズにより応えられると考えています。",
    timestamp: "2023-05-23 13:20"
  }
];
