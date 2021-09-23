import type {BaseTranslation} from 'typesafe-i18n';

const ja: BaseTranslation = {
  ServiceName: 'TimeraaS',

  Loading: 'ロード中',
  Signin: 'ログイン',
  Signout: 'ログアウト',

  IgniteAt: '発火時刻',
  CreatedAt: '作成日時',
  UpdatedAt: '更新日時',

  Head: {
    Title: {
      IndexPage: 'TimeraaS',
      ListPage: 'リスト - TimeraaS',
      NewPage: '新しく作成 - TimeraaS',
      CountdownPage: '{title:string} - TimeraaS',
      CountdownDetailsPage: '{title:string}の詳細 - TimeraaS',
    },
  },

  FormatDate: {
    LongDateTime: '{0:Date|longDateTime}',
    MediumDateTime: '{0:Date|mediumDateTime}',
  },

  HeaderNav: {
    CreateNew: '新しく作る',
    List: 'リスト',
  },

  ListPage: {
    LoadMore: 'もっと読み込む',
  },

  NewPage: {
    Form: {
      Label: {
        Title: 'カウントダウンの名前',
        Date: '発火する日付',
        Time: '発火する時刻',
        TimeZone: 'タイムゾーン',
      },
      PreviewIgniteAt: '次の時間に発火します。',
      NoticeTimeZone: 'タイムゾーンは{timeZone:string}です。',
      NoticeInputDateTime: '発火時刻を入力してください',
      Submit: '追加する',
      Submitting: '追加中',
      SubmitSuccess: '追加しました',
    },
  },

  CountdownPage: {
    details: '詳細を見る',
  },
};

export default ja;
