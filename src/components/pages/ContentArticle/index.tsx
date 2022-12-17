import React, {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { Location, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getContent } from '^/api/getContent';
import { Content, ContentType } from '^/types';

const YoutubeFrameBorder = styled.iframe`
  border: 0;
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
        <p key={content.id}>
          { content.content }
        </p>
      );
    case ContentType.IMAGE:
      return (
        <img key={content.id} src={content.content} alt={content.alt} />
      );
    case ContentType.YOUTUBE:
      return (
        <YoutubeFrameBorder
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${content.content}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    default:
      return (
        <>?</>
      );
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
    <div>
      { finalElements }
    </div>
  );
};

export default ContentArticle;
