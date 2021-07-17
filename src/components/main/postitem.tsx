import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

export type PostType = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  thumbnail: ImageDataLike;
};

type Props = PostType & { slug: string };

const Wrapper = styled.li`
  padding: 1.5rem 0;
  border-bottom: ${props => `1px solid ${props.theme.color.line}`};
  transition: background 300ms ease-in-out;
`;

const Info = styled.div``;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 22px;
  line-height: 28px;

  a {
    &:hover,
    &:focus {
      outline: none;
      color: ${props => props.theme.color.highlight};
      text-decoration: underline;
    }
  }
`;

const Date = styled.p`
  margin-bottom: 0.75rem;
  color: ${props => props.theme.color.textSub};
  font-size: 14px;
  line-height: 20px;
`;

const Summary = styled.p`
  margin-bottom: 0.75rem;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.color.textSub};

  a {
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -0.25rem;
`;

const TagItem = styled.li`
  margin: 0 0.25rem 0.25rem 0;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;

  a {
    &:before {
      content: '#';
    }

    color: ${props => props.theme.color.highlight};

    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

const Thumbnail = styled.div`
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 40%;
  background: whitesmoke;
  margin-top: 1.25rem;
`;

const ImageLink = styled(Link)``;

function PostItem({ title, date, summary, tags, thumbnail, slug }: Props) {
  const thumbnailData = getImage(thumbnail);

  return (
    <Wrapper>
      <Info>
        <Title>
          <Link to={`/${slug}`}>{title}</Link>
        </Title>
        <Date>{date}</Date>
        <Summary>
          <Link to={`/${slug}`}>{summary}</Link>
        </Summary>
        <TagList>
          {tags.map(tag => (
            <TagItem key={tag}>
              <Link to={`/?tag=${tag}`}>{tag}</Link>
            </TagItem>
          ))}
        </TagList>
      </Info>
      {thumbnailData && (
        <Thumbnail>
          <Link to={`/${slug}`}>
            <GatsbyImage image={thumbnailData} alt=""></GatsbyImage>
          </Link>
        </Thumbnail>
      )}
    </Wrapper>
  );
}

export default PostItem;
