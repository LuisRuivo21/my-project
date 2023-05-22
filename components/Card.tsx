import { FaSpaceShuttle } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  link: string;
  title: string;
  description: string;
  item: string;
}

const Card = ({ link, title, description, item }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 rounded-lg bg-myYellow p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaSpaceShuttle className="text-4xl text-[#008080]" />
          <RxOpenInNewWindow className="text-4xl hover:text-[#008080]" />
        </div>
        <div>
          <h2 className="text-xl font-playfairDisplay font-semibold tracking-wide hover:text-[#008080]">
            {title}
          </h2>
          <p className="text-sm mt-3">{description}</p>
        </div>
        <div>{item}</div>
      </div>
    </a>
  );
};

export default Card;
