import { UserItem } from '../../../../test/helpers/gitHubNock';

/* eslint-disable @typescript-eslint/camelcase */
export const getIssuesResponse = [
  {
    url: 'https://api.github.com/repos/octocat/Hello-World/issues/513',
    repository_url: 'https://api.github.com/repos/octocat/Hello-World',
    labels_url: 'https://api.github.com/repos/octocat/Hello-World/issues/513/labels{/name}',
    comments_url: 'https://api.github.com/repos/octocat/Hello-World/issues/513/comments',
    events_url: 'https://api.github.com/repos/octocat/Hello-World/issues/513/events',
    html_url: 'https://github.com/octocat/Hello-World/pull/513',
    id: 461030590,
    node_id: 'MDExOlB1bGxSZXF1ZXN0MjkyMDM3MTY4',
    number: 513,
    title: 'a',
    user: new UserItem('33818943', 'nowaygod'),
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2019-06-26T15:11:43Z',
    updated_at: '2019-06-26T15:11:43Z',
    closed_at: null,
    author_association: 'NONE',
    pull_request: {
      url: 'https://api.github.com/repos/octocat/Hello-World/pulls/513',
      html_url: 'https://github.com/octocat/Hello-World/pull/513',
      diff_url: 'https://github.com/octocat/Hello-World/pull/513.diff',
      patch_url: 'https://github.com/octocat/Hello-World/pull/513.patch',
    },
    body: 'a',
  },
  {
    headers: {
      link:
        '<https://api.github.com/repositories/1296269/issues?page=2>; rel="next", <https://api.github.com/repositories/1296269/issues?page=12>; rel="last"',
    },
    url: 'https://api.github.com/repos/octocat/Hello-World/issues/512',
    repository_url: 'https://api.github.com/repos/octocat/Hello-World',
    labels_url: 'https://api.github.com/repos/octocat/Hello-World/issues/512/labels{/name}',
    comments_url: 'https://api.github.com/repos/octocat/Hello-World/issues/512/comments',
    events_url: 'https://api.github.com/repos/octocat/Hello-World/issues/512/events',
    html_url: 'https://github.com/octocat/Hello-World/pull/512',
    id: 460062740,
    node_id: 'MDExOlB1bGxSZXF1ZXN0MjkxMjY5ODMy',
    number: 512,
    title: 'Update README',
    user: new UserItem('50170747', 'nmonmontmon'),
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2019-06-24T19:43:52Z',
    updated_at: '2019-06-24T19:43:52Z',
    closed_at: null,
    author_association: 'NONE',
    pull_request: {
      url: 'https://api.github.com/repos/octocat/Hello-World/pulls/512',
      html_url: 'https://github.com/octocat/Hello-World/pull/512',
      diff_url: 'https://github.com/octocat/Hello-World/pull/512.diff',
      patch_url: 'https://github.com/octocat/Hello-World/pull/512.patch',
    },
    body: '',
  },
];
