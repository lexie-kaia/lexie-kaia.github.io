import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PostItem from './postitem';
import { PostListStyleType, PostsType, QueryStringType } from '../../../types';
import { useQueryString } from '../../../store/querystring';

type Props = {
  postList: PostsType;
  listStyle: PostListStyleType;
};

const PostListContainer = styled.ul``;

const NUMBER_OF_ITEMS_PER_PAGE = 10;

function PostList({ postList, listStyle }: Props) {
  const { queryString, setQueryString } = useQueryString();
  const containerRef = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [queryString, listStyle]);

  useEffect(() => {
    if (
      containerRef.current == null ||
      containerRef.current.children.length === 0 ||
      NUMBER_OF_ITEMS_PER_PAGE * page > postList.length
    )
      return;

    const observer = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;
      setPage(value => value + 1);
    });

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1]
    );

    return () => {
      observer.disconnect();
    };
  }, [page, queryString, listStyle]);

  return (
    <PostListContainer ref={containerRef}>
      {postList
        .slice(0, page * NUMBER_OF_ITEMS_PER_PAGE)
        .map(({ id, slug, frontmatter: { ...props } }) => {
          return (
            <PostItem key={id} slug={slug} {...props} listStyle={listStyle} />
          );
        })}
    </PostListContainer>
  );
}

export default PostList;
