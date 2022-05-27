import { GetStaticProps } from 'next/types';

// Third parties
import styled from 'styled-components';

export interface AboutProps {
  name: string;
}

const StyledAbout = styled.div`
  color: pink;
`;

export const About = ({ name }: AboutProps) => {
  return (
    <StyledAbout>
      <h1>Welcome, {name}!</h1>
    </StyledAbout>
  );
};

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'Will',
    },
  };
};

export default About;
