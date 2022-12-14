import React, {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { getContent } from '^/api/getContent';
import { Content, ContentType } from '^/types';

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
        <>tmp (to be implemented)</>
      );
    default:
      return (
        <>?</>
      );
  }
};

const Koishi: FC<{}> = () => {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getContent('koishi');
      setContents(data.contents);
    })();
  }, []);

  const finalElements = contents.map(convertToContent);

  return (
    <div>
      { finalElements }
    </div>
  );
};

export default Koishi;
