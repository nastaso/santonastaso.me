import React from 'react';
import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me" titleDelay="animate-fade-in-up-delay-100" contentDelay="animate-fade-in-up-delay-200">
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400 mb-4">{about}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500 dark:text-gray-500 font-display">
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>
            MSc Big Data Science (Distinction), Queen Mary University of London
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>
            BSc Computer Science (First Class Honours), University of Westminster
          </span>
        </div>
      </div>
    </Section>
  );
};

export default SectionAbout;