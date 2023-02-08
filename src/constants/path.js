export const PATH = {
  HOME: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
  BOARD: '/board',

  BOARD_LIST: '/board/list',
  BOARD_ORDER_DATE: '/boards?order=createdDate',
  BOARD_ORDER_LIKE: '/boards/order=thumb',
  BOARD_SEARCH_TITLE: '/board/list?searchKeyword=',
  BOARD_SEARCH_NICKNAME: '/board/list?writer=',
  BOARD_THUMB: '/board/thumb/{id}',
  BOARD_INSERT: '/board/insert',
  BOARD_UPDATE: '/board/:id',
  BOARD_DELETE: '/board/:id',
  BOARD_DETAIL: '/board/:id',
  COMMENT: '/comment',
  COMMENT_INSERT: '/comment/insert',
  COMMENT_DELETE: '/comment/:id',
  COMMENT_UPDATE: '/comment/:id',
  COMMENT_LIST: '/board/{boardId}/comment',
  COMMENT_INSERT: '/board/{boardId}/comment',
  COMMENT_UPDATE: '/board/{boardId}/comment/{commentId}',
  COMMENT_DELETE: '/board/{boardId}/comment/{commentId}',

  // mypage
  MYLIKE: '/mypage/favor/',
  MYREVIEW: '/mypage/review/',
  MYINFO: '/mypage/info/',
  CHANGEPW: 'mypage/changePassword/',

  // hone && search
  LIKE: '/favor/',
};
