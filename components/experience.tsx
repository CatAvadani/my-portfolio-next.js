'use client';

import { useTheme } from '@/context/theme-context';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useInView } from 'react-intersection-observer';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';

interface TimelineElementProps {
  item: {
    title: string;
    date: string;
    location: string;
    description: string;
    icon: React.ReactNode;
  };
  theme: string;
  position: 'left' | 'right';
}

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor='' animate={true}>
        {experiencesData.map((item, index) => (
          <TimelineElement
            key={index}
            item={item}
            theme={theme}
            position={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </VerticalTimeline>
    </section>
  );
}

function TimelineElement({ item, theme, position }: TimelineElementProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      <VerticalTimelineElement
        visible={inView}
        className='vertical-timeline-element--work'
        contentStyle={{
          background:
            theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          textAlign: 'left',
          padding: '1.3rem 2rem',
        }}
        contentArrowStyle={{
          borderRight:
            theme === 'light'
              ? '0.4rem solid #f3f4f6'
              : '0.4rem solid rgba(255, 255, 255, 0.5)',
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
          fontSize: '1.5rem',
        }}
        position={position}
      >
        <h3 className='font-semibold capitalize'>{item.title}</h3>
        <p className='font-normal !mt-0'>{item.location}</p>
        <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
