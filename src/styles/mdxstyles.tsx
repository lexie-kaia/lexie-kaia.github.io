import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
};

export const typo = {
  h1: {
    fontSize: '32px',
    lineHeight: '40px',
  },

  h2: {
    fontSize: '28px',
    lineHeight: '36px',
  },

  h3: {
    fontSize: '22px',
    lineHeight: '32px',
  },

  h4: {
    fontSize: '18px',
    lineHeight: '28px',
  },

  body: {
    fontSize: '18px',
    lineHeight: '32px',
  },

  code: {
    fontSize: '16px',
    lineHeight: '24px',
  },
};

const MdxBody = styled.div`
  font-size: ${typo.body.fontSize};
  line-height: ${typo.body.lineHeight};
  font-weight: 400;
  word-break: break-all;

  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
  }

  h1 {
    font-size: ${typo.h1.fontSize};
    line-height: ${typo.h1.lineHeight};
    margin-bottom: 1rem;
  }

  h2 {
    font-size: ${typo.h2.fontSize};
    line-height: ${typo.h2.lineHeight};
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: ${typo.h3.fontSize};
    line-height: ${typo.h3.lineHeight};
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: ${typo.h4.fontSize};
    line-height: ${typo.h4.lineHeight};
    margin-bottom: 0.25rem;
  }

  * + h1 {
    margin-top: 4.5rem;
  }

  * + h2 {
    margin-top: 4rem;
  }

  * + h3 {
    margin-top: 2.5rem;
  }

  * + h4 {
    margin-top: 2rem;
  }

  hr {
    border: 0;
    border-top: 1px solid var(--line);
  }

  p {
    padding: 0.25rem 0;
    color: var(--text-prime);
  }

  hr + p {
    margin-top: 0.25rem;
  }

  ul {
    list-style: disc;
  }

  ol,
  ul {
    margin-left: 1.5rem;
    padding: 0.5rem 0;
  }

  li > ul,
  li > ol {
    padding: 0;
    padding-top: 0.25rem;
  }

  li {
    &:not(:last-child) {
      padding-bottom: 0.25rem;
    }

    p {
      padding: 0;
    }
  }

  a {
    color: var(--text-second);
    text-decoration: underline;

    &:focus,
    &:hover {
      outline: none;
      color: var(--highlight);
    }
  }

  blockquote {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    border-left: 4px solid var(--line);
    background: var(--back-sub);
  }

  table {
    margin: 1rem 0;
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid var(--line);
  }

  th {
    font-weight: 500;
    background: var(--back-sub);
  }

  th,
  td {
    border-bottom: 1px solid var(--line);
    padding: 0.375rem 1rem;
  }

  details {
    margin-left: 0.5rem;
    padding: 0.5rem 0 0.5rem 1rem;
  }

  details + details {
    margin-top: -0.5rem;
  }

  summary {
    margin-left: -1em;
    cursor: pointer;

    &:focus,
    &:hover {
      outline: none;
      text-decoration: underline;
      color: var(--highlight);
    }
  }

  // gatsby-image
  span[class*='gatsby-resp-image-wrapper'] {
    margin: 0.5rem 0;
  }

  // gatsby-primsjs
  div[class*='gatsby-highlight'] {
    margin: 1rem 0;
  }

  p > code {
    word-break: break-all;
  }

  // gatsby-autolink-header
  h1,
  h2,
  h3,
  h4 {
    &:hover {
      a.anchor {
        opacity: 1;
      }
    }
  }

  a.anchor {
    position: absolute;
    left: -2.5rem;
    display: flex;
    align-items: center;
    height: 100%;
    opacity: 0;

    .svg-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      width: 2rem;
      height: 2rem;
      color: var(--text-second);
    }

    svg {
      width: 18px;
      height: 18px;
    }

    &:hover,
    &:focus,
    &:active {
      opacity: 1;
      .svg-wrapper {
        background: var(--back-sub);
        color: var(--highlight);
      }
    }

    &:focus-visible {
      .svg-wrapper {
        box-shadow: 0 0 0 2px var(--highlight);
      }
    }
  }
`;

export default function MdxStyles({ children }: Props) {
  return <MdxBody>{children}</MdxBody>;
}
