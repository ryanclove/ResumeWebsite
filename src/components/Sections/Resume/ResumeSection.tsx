import {FC, memo, PropsWithChildren} from 'react';

interface ResumeSectionProps {
  title: string;
  className?: string; // optional extra classes
}

const ResumeSection: FC<PropsWithChildren<ResumeSectionProps>> = memo(({title, children, className}) => {
  return (
    <div className={`grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4 ${className}`}>
      {/* Title column */}
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-gray-900 dark:text-white">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>

      {/* Content column */}
      <div className="col-span-1 flex flex-col md:col-span-3">
        <div className="bg-gray-100 dark:bg-gray-700/80 p-6 rounded-lg shadow-lg">{children}</div>
      </div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
