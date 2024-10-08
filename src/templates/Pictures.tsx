import React from 'react';

import { Section } from '@/layout/Section';

import { Background } from '../background/Background';
import Carousel from '../components/Carousel';

const Pictures = () => (
  <Background color="bg-primary-100">
    <Section title="About us" description="Music is a gift">
      <div>
        <Carousel />
      </div>
    </Section>
  </Background>
);

export { Pictures };
