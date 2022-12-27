import React, {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { Location, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getContent } from '^/api/getContent';
import { Content, ContentType } from '^/types';

const Root = styled.div`
  & > * {
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: calc(8px + 3vmin);
  }
`;

const Paragraph = styled.p`
  text-align: left;
`;

const YoutubeFrame = styled.iframe`
  border: 0;
`;

const Anchor = styled.a`
  all: unset;
  color: #48b2f0;
  cursor: pointer;
`;

const convertToContent: (
  content: Content,
) => ReactNode = (content) => {
  switch (content.type) {
    case ContentType.H1:
      return (
        <h1 key={content.id}>
          { content.content }
        </h1>
      );
    case ContentType.H2:
      return (
        <h2 key={content.id}>
          { content.content }
        </h2>
      );
    case ContentType.PARAGRAPH:
      return (
        <Paragraph key={content.id}>
          { content.content }
        </Paragraph>
      );
    case ContentType.IMAGE:
      return (
        <img key={content.id} src={content.content} alt={content.alt} />
      );
    case ContentType.ANCHOR:
      return (
        <Anchor
          key={content.id}
          href={content.content}
          target="_blank"
          rel="noreferrer"
        >
          { content.alt }
        </Anchor>
      );
    case ContentType.YOUTUBE:
      return (
        <YoutubeFrame
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${content.content}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    default:
      throw Error(`Content type ${content.type} is not allowed.`);
  }
};

const ContentArticle: FC<{}> = () => {
  const location: Location = useLocation();
  const locationPathNameSplit: string[] = location.pathname.split('/');
  const contentName: string = (locationPathNameSplit.length === 2)
    ? locationPathNameSplit[1]
    : 'wrong-content-name';

  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getContent(contentName);
      setContents(data.contents);
    })();
  }, [contentName]);

  const finalElements = contents.map(convertToContent);

  return (
    <Root>
      { finalElements }
    </Root>
  );
};

export default ContentArticle;
