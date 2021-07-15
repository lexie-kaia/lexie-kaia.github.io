import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Plus } from 'react-bootstrap-icons';

type Props = {
  heading: string;
  posts: { title: string; link: string }[];
};

const Wrapper = styled.li`
  padding: 1rem 0;
  border-bottom: ${props => `1px solid ${props.theme.color.line}`};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h4``;

const ButtonText = styled.button`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: ${props => props.theme.color.highlight};
  }
`;

const ButtonPlus = styled.button<{ isClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.textSub};
  transform: ${props => (props.isClicked ? 'rotate(45deg)' : 'rotate(0)')};

  @media screen and (min-width: 769px) {
    transition: transform 200ms ease-in-out;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.color.highlight};
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;

const Posts = styled.ul<{ isClicked: boolean }>`
  display: ${props => (props.isClicked ? 'block' : 'none')};
  margin-top: 1rem;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.color.textSub};
`;

const Post = styled.li`
  margin-bottom: 0.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const PostLink = styled(Link)`
  &:hover,
  &:focus {
    outline: none;
    color: ${props => props.theme.color.highlight};
    text-decoration: underline;
  }
`;

function CategoryItem({ heading, posts }: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onMoreClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };

  return (
    <Wrapper>
      <Header>
        <Title>
          <ButtonText onClick={onMoreClick}>
            {heading} ({posts.length})
          </ButtonText>
        </Title>
        <ButtonPlus onClick={onMoreClick} isClicked={isClicked}>
          <Plus />
        </ButtonPlus>
      </Header>
      <Posts isClicked={isClicked}>
        {posts.map(post => (
          <Post key={post.title}>
            <PostLink to={post.link}>{post.title}</PostLink>
          </Post>
        ))}
      </Posts>
    </Wrapper>
  );
}

export default CategoryItem;