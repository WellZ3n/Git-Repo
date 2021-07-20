import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666
    }

    svg {
      margin-right: 4px;
    }
  }
  `;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 36px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Title = styled.h1`
  color: #ff0800;
  max-width: 1000px;
  font: 50px Pokemon;
  text-align: center;

  margin: 15px auto;
`;

export const Issues = styled.div`
margin-top: 50px;
max-width: 700px;

a {
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 7px;
  display block;
  text-decoration: none;

  display: flex;
  align-items: center;

  transition: transform 0.3s;

  &:hover {
    transform: translate(10px);
    background: ${shade(0.08, '#fff')};
  }

  & + a {
    margin-top: 16px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 35%;
  }

  div {
    margin: 0 16px;
    margin-top: 7.5px;

    strong {
      font: 20px;
      text-transform: uppercase;
      color: #3d3d4d;
    }
    p {
      font-size: 15px;
      color: #a8a8b3;
      margin-top: 4px;

      span{
        margin-left: 1px;
      }
    }
  }
  b {
    width: 50px;
    height: 97px;
    margin-left: 305px;
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
}
`;
