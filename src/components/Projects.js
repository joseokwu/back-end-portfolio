import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { large_projects, regular_projects } from '../assets/mock';
const Projects = () => {
  return (
    <Wrapper>
      <div className='title'>
        <h2>Large Scale Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='section-center'>
        {large_projects.map((item, index) => {
          return <Project key={index} {...item} />;
        })}
      </div>
      <div className='title'>
        <h2>Regular Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='section-center'>
        {regular_projects.map((item, index) => {
          return <Project key={index} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background: var(--grey-200);
  .title {
    text-align: center;
    margin-bottom: 3rem;
  }

  .title-underline {
    height: 0.2rem;
    width: 7rem;
    background: var(--primary-design);
    margin: 0 auto;
    margin-top: -1rem;
  }
  .section-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto 2rem auto;
    display: grid;
    gap: 3rem 2rem;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }
  @media (min-width: 992px) {
    .center {
      width: 95vw;
    }
  }
`;
export default Projects;
