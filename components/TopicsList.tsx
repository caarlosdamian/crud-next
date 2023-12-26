import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';

const TopicsList = () => {
  return (
    <>
      <div className="p-4 border ring-slate-400 my-3 flex justify-between gap-5 items-start">
        <div className="">
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div className="">Topic Description</div>
        </div>
        <div className="flex items-center gap-2">
          <RemoveBtn />
          <Link href="/editTopic/123">
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopicsList;
