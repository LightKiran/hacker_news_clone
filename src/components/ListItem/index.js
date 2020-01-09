import React from 'react';
import moment from 'moment';
import getSiteHostname from 'utils/getSiteHostname';
import getArticleLink, { HN_USER, HN_ITEM } from 'utils/getArticleLink';

import { Item, Title, Host, ExernalLink, Description, CommentLink } from './styles';

const LINK_REL = 'nofollow noreferrer noopener';

const ListItem = ({ by, kids = [], score, url, title, id, type, time }) => {
  const site = getSiteHostname(url) || 'news.ycombinator.com';
  const link = getArticleLink({ url, id });
  const commentUrl = `${HN_ITEM}${id}`;
  const userUrl = `${HN_USER}${by}`;

  return (
    <Item>
      <ExernalLink href={link} rel={LINK_REL} target="_blank">
        <Title>
          {title} <Host>({site})</Host>
        </Title>
      </ExernalLink>
      <Description>
        {score} points by{' '}
        <CommentLink href={userUrl} rel={LINK_REL} target="_blank">
          {by}
        </CommentLink>{' [ '}
        {moment(time * 1000).fromNow()} {' ] '}
        <CommentLink href={commentUrl} rel={LINK_REL} target="_blank">
          {kids.length} Comments
        </CommentLink>
      </Description>
    </Item>
  );
};

export default ListItem;