type SettingListType = {
  name: string
  content: { name: string; iconLabel?: string; badge?: string }[]
}[]

const SettingList: SettingListType = [
  {
    name: '전체 서비스',
    content: [
      { name: 'HOME' },
      { name: 'SHOP' },
      { name: 'SCHEDULE' },
      { name: 'PASSPORT' },
      { name: 'LIGHT STICK' },
      { name: 'AR VIEWER' },
    ],
  },

  {
    name: '설정',
    content: [
      { name: '알림 설정' },
      {
        name: '언어 설정',
        iconLabel: '한국어',
      },
      {
        name: '앱 버전정보',
        iconLabel: '1.0.2',
        badge: '최신',
      },
    ],
  },

  {
    name: '고객지원',
    content: [
      { name: '공지사항' },
      { name: '고객센터' },
      { name: '이용약관' },
      { name: '오픈소스 라이선스' },
    ],
  },
]

export default SettingList
