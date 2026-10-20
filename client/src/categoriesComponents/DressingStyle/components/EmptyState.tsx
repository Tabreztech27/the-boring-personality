import React from 'react';
import { FaInbox } from 'react-icons/fa';

interface EmptyStateProps {
  title: string;
  message: string;
  actionText?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  actionText,
  onAction,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-[#1f2937] bg-[#0B1120]/60 backdrop-blur-md my-6">
      <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#A78BFA] text-2xl mb-4 shadow-lg shadow-[#8B5CF6]/5">
        {icon || <FaInbox />}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm max-w-md mb-6 leading-relaxed">
        {message}
      </p>
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="px-5 py-2.5 rounded-xl bg-linear-to-r from-[#8B5CF6] to-[#6366f1] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#8B5CF6]/25 hover:scale-105 transition-all duration-300"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;

