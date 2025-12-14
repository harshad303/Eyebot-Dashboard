import { ChevronDown } from 'lucide-react';

const ArrowConnector = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
        <div className="p-2 bg-white rounded-full shadow-md border border-gray-200">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-gray-300"></div>
      </div>
    </div>
  );
};

export default ArrowConnector;

