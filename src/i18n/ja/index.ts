import type {BaseTranslation} from 'typesafe-i18n';

const ja: BaseTranslation = {
  ServiceName: 'TimeraaS',

  Loading: 'ロード中',
  Signin: 'ログイン',
  Signout: 'ログアウト',

  IgniteAt: '発火時刻',
  CreatedAt: '作成日時',
  UpdatedAt: '更新日時',

  Head: {},

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
      },
      Submit: '追加する',
    },
  },
};

export default ja;
