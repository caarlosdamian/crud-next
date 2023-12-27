'use client';
import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { BASE_API_URL } from '@/constants';

const RemoveBtn = ({ id }: { id: string }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm('Are you sure to confirm');
    if (confirmed) {
      const res = await fetch(`${BASE_API_URL}/api/topics/?id=${id}`, {
        method: 'DELETE',
      });
      if (res) {
        router.refresh();
      }
    }
  };
  return (
    <button className="text-red-400" onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
