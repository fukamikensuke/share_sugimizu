export const filterData = {
  data: [
    {
      id: "evaluation",
      data: [
        { id: 1, text: "1(とても不満足)" },
        { id: 2, text: "2(少し不満足)" },
        { id: 3, text: "3(普通)" },
        { id: 4, text: "4(良かった)" },
        { id: 5, text: "5(とても良かった)" },
      ],
    },
    {
      id: "jobType",
      data: [
        { id: 1, text: "SE" },
        { id: 2, text: "Web エンジニア" },
        { id: 3, text: "ネイティブアプリエンジニア" },
        { id: 4, text: "フロントエンドエンジニア" },
        { id: 5, text: "バックエンドエンジニア" },
        { id: 6, text: "インフラエンジニア" },
        { id: 7, text: "フルスタックエンジニア" },
        { id: 8, text: "組み込みソフトウェアエンジニア" },
        { id: 9, text: "機械学習エンジニア" },
        { id: 10, text: "データサイエンティスト" },
        { id: 11, text: "その他" },
      ],
    },
    {
      id: "internType",
      data: [
        { id: 1, text: "サマーインターン" },
        { id: 2, text: "ウィンターインターン" },
        { id: 3, text: "通年インターン" },
        { id: 4, text: "その他" },
      ],
    },
    {
      id: "period",
      data: [
        { id: 1, text: "1日" },
        { id: 2, text: "2日" },
        { id: 3, text: "3日" },
        { id: 4, text: "4日" },
        { id: 5, text: "5日" },
        { id: 6, text: "1週間" },
        { id: 7, text: "2週間" },
        { id: 8, text: "3週間" },
        { id: 9, text: "4週間" },
        { id: 10, text: "それ以上" },
      ],
    },
    {
      id: "salary",
      data: [], // 選択としないため null で良い}
    },
  ],
};

export const inputFormData = {
  evaluation: [
    { id: 1, text: "1(とても不満足)" },
    { id: 2, text: "2(少し不満足)" },
    { id: 3, text: "3(普通)" },
    { id: 4, text: "4(良かった)" },
    { id: 5, text: "5(とても良かった)" },
  ],
  year: [
    { id: 1, text: "2020年" },
    { id: 2, text: "2021年" },
    { id: 3, text: "2022年" },
  ],
  internType: [
    { id: 1, text: "サマーインターン" },
    { id: 2, text: "ウィンターインターン" },
    { id: 3, text: "通年インターン" },
    { id: 4, text: "その他" },
  ],
  period: [
    { id: 1, text: "1日" },
    { id: 2, text: "2日" },
    { id: 3, text: "3日" },
    { id: 4, text: "4日" },
    { id: 5, text: "5日" },
    { id: 6, text: "1週間" },
    { id: 7, text: "2週間" },
    { id: 8, text: "3週間" },
    { id: 9, text: "4週間" },
    { id: 10, text: "それ以上" },
  ],
  jobType: [
    { id: 1, text: "SE" },
    { id: 2, text: "Web エンジニア" },
    { id: 3, text: "ネイティブアプリエンジニア" },
    { id: 4, text: "フロントエンドエンジニア" },
    { id: 5, text: "バックエンドエンジニア" },
    { id: 6, text: "インフラエンジニア" },
    { id: 7, text: "フルスタックエンジニア" },
    { id: 8, text: "組み込みソフトウェアエンジニア" },
    { id: 9, text: "機械学習エンジニア" },
    { id: 10, text: "データサイエンティスト" },
    { id: 11, text: "その他" },
  ],
  developEx: [
    { id: 1, text: "0回" },
    { id: 2, text: "1回" },
    { id: 3, text: "2回" },
    { id: 4, text: "3回" },
    { id: 5, text: "4回以上" },
  ],
  internEx: [
    { id: 1, text: "0回" },
    { id: 2, text: "1回" },
    { id: 3, text: "2回" },
    { id: 4, text: "3回" },
    { id: 5, text: "4回以上" },
  ],
};

export const displayInternInfo = {
  company: "株式会社#####",
  year: "2022年",
  internType: "サマーインターン",
  period: "5日間",
  jobType: "Web エンジニア",
  salary: "1500円",
  internContents: "インターンの内容",
  evaluation: "4(良かった)",
  developEx: "1回",
  internEx: "",
  internTestPreparation: "",
  isSelectionExemption: "あり",
  selectionExemptionContents: "こんな免除があったよ",
  impressions: "総じて満足！",
};

export const tableDataList = [
  {
    id: 1,
    company: "ONE CAREER",
    evaluation: "4(良かった)",
    year: "2022年",
    internType: "サマーインターン",
    period: "2日間",
    jobType: "Web エンジニア",
    salary: "なし",
  },
  ,
  {
    id: 2,
    company: "BrainPad",
    evaluation: "4(良かった)",
    year: "2022年",
    internType: "サマーインターン",
    period: "5日間",
    jobType: "Web エンジニア",
    salary: "1500円",
  },
  ,
  {
    id: 3,
    company: "DWANGO",
    evaluation: "4(良かった)",
    year: "2022年",
    internType: "通年インターン",
    period: "1ヶ月以上",
    jobType: "フロントエンドエンジニア",
    salary: "1000円",
  },
];
