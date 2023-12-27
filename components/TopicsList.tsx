import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';
import { BASE_API_URL } from '@/constants';

const getTopics = async () => {
  if (!BASE_API_URL) {
    return null;
  }
  try {
    const rest = await fetch(`${BASE_API_URL}/api/topics`, {
      cache: 'no-store',
    });
    if (!rest.ok) {
      throw new Error('Failed to fetch topics');
    }
    return rest.json();
  } catch (error) {}
};

const TopicsList = async () => {
  const infoData = await getTopics();

  return (
    <>
      {infoData?.topics.map(
        ({
          _id,
          description,
          title,
        }: {
          _id: string;
          title: string;
          description: string;
        }) => (
          <div
            key={_id}
            className="p-4 border ring-slate-400 my-3 flex justify-between gap-5 items-start"
          >
            <div className="">
              <h2 className="font-bold text-2xl">{title}</h2>
              <div className="">{description}</div>
            </div>
            <div className="flex items-center gap-2">
              <RemoveBtn id={_id} />
              <Link href={`/editTopic/${_id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default TopicsList;
