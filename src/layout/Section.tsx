import type { ReactNode } from 'react';
import React from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  id?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    id={props.id}
    // This says max-w-full so that navbar is stretched across website
    className={`mx-auto max-w-full px-0 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-golden-100">{props.title}</h2>
        )}
        {props.description && (
          <div className="text-x1 mt-4 md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
