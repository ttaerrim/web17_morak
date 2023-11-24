// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

import { Member } from '@/types';

const memberList: Member[] = [
  {
    providerId: '1',
    email: '.',
    nickname: '지승',
    profilePicture: 'https://avatars.githubusercontent.com/u/50646827?v=4',
  },
  {
    providerId: '2',
    email: '.',
    nickname: '지원',
    profilePicture: 'https://avatars.githubusercontent.com/u/110762136?v=4',
  },
  {
    providerId: '3',
    email: '.',
    nickname: '태림',
    profilePicture: 'https://avatars.githubusercontent.com/u/43867711?v=4',
  },
];

export const memberAPIHandlers = [
  http.get(
    '/member/me',
    // () => HttpResponse.error(),
    () => HttpResponse.json(memberList[0], { status: 401 }),
  ),
  http.get(
    '/member/:id',
    // () => HttpResponse.error(),
    ({ params: { id } }) => HttpResponse.json(memberList[Number(id) - 1]),
  ),
];

export { memberList };
