'use client';
import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const RemoveBtn = ({ id }: { id: string }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm('Are you sure to confirm');
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics/?id=${id}`, {
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
