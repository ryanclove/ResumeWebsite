import {FC, memo, PropsWithChildren} from 'react';

interface ResumeSectionProps {
  title: string;
  className?: string; // optional extra classes
  pt?: string; // optional padding top override
  pb?: string; // optional padding bottom override
}

const ResumeSection: FC<PropsWithChildren<ResumeSectionProps>> = memo(
  ({title, children, className, pt = 'py-16', pb = 'pb-16'}) => {
    return (
      <div className={`w-full bg-gray-800 dark:bg-gray-900 ${className}`}>
        {/* Inner container for content and padding */}
        <div
          className={`max-w-screen-lg mx-auto px-4 ${pt} ${pb} md:px-8 md:pt-12 md:pb-24 grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-y-8`}>
          {/* Title column */}
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-max">
              <h2 className="text-xl font-bold uppercase text-white dark:text-white">{title}</h2>
              <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
            </div>
          </div>

          {/* Content column */}
          <div className="col-span-1 flex flex-col md:col-span-3 text-white dark:text-white space-y-4">{children}</div>
        </div>
      </div>
    );
  },
);

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
