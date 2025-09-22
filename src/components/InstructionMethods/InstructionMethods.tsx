import React from 'react';
import { Trophy } from 'lucide-react';
import { TbMoodHappyFilled } from 'react-icons/tb';
import { IoDocumentText } from 'react-icons/io5';
import { RiVideoFill } from 'react-icons/ri';
import { BiSolidMessageRounded } from 'react-icons/bi';

interface MethodCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
}

const MethodCard: React.FC<MethodCardProps> = ({ icon, title, description, iconColor }) => (
  <div className="flex items-start gap-4 p-4">
    <div className={`w-[115px] h-[115px] rounded-full border-4 ${iconColor} flex items-center justify-center flex-shrink-0`}>
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const InstructionMethods: React.FC = () => {
  const methods = [
    {
      icon: <TbMoodHappyFilled  className="w-[41px] h-[41px] text-primary4" />,
      title: "Shadowing",
      description: "Practice speaking out what you hear without looking at the text.",
      iconColor: "border-primary4"
    },
    {
      icon: <IoDocumentText size={20} className="w-[41px] h-[41px] text-primary2" />,
      title: "Use of question list",
      description: "Create and memorize a list of questions to help you have a conversation.",
      iconColor: "border-primary2"
    },
    {
      icon: <RiVideoFill size={20} className="w-[41px] h-[41px] text-primary4" />,
      title: "Video viewing method",
      description: "Learn pronunciation and conversation while watching dramas and movies.",
      iconColor: "border-primary4"
    },
    {
      icon: <BiSolidMessageRounded size={20} className="w-[41px] h-[41px] text-primary2" />,
      title: "Two roles per person",
      description: "Carrying on a conversation while playing two roles. Practice conversations.",
      iconColor: "border-primary2"
    },
    {
      icon: <Trophy size={20} className="w-[41px] h-[41px] text-primary4" />,
      title: "Native method",
      description: "Increase opportunities to converse with native speakers.",
      iconColor: "border-primary4"
    }
  ];

  return (
    <div className=" bg-gray-100 py-12 px-4 md:px-6 lg:px-8">
      {/* Header with decorative elements */}
      <div className="relative mb-8">
        
        <div className="text-center relative z-10">
          <h1 className="text-2xl font-bold text-primary1 mb-3">INSTRUCTION CONTENT</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Simple, practical methods to build real Japanese communication skills.
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-0.5 bg-primary4 w-10"></div>
            <div className="w-4 h-4 rounded-full border-2 border-primary4 bg-white"></div>
            <div className="h-0.5 bg-primary4 w-10"></div>
          </div>
        </div>
      </div>

      {/* Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {methods.map((method, index) => (
          <MethodCard
            key={index}
            icon={method.icon}
            title={method.title}
            description={method.description}
            iconColor={method.iconColor}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructionMethods;