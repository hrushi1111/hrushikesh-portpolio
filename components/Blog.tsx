import React from 'react';
import Section from './Section';

const Blog: React.FC = () => {
  return (
    <Section id="blog" title="Insights & Articles">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* This component is no longer rendered in App.tsx, content can be ignored or removed later. */}
      </div>
    </Section>
  );
};

export default Blog;
