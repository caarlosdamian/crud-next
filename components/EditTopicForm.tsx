'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const EditTopicForm = ({
  description,
  id,
  title,
}: {
  id: string;
  description: string;
  title: string;
}) => {
  const [form, setForm] = useState({
    title,
    description,
  });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error('No possible to update');
      }
      router.refresh()
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        className="border ring-offset-slate-500 px-8 py-2"
        type="text"
        onChange={(e) =>
          setForm((prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Topic title"
        value={form.title}
      />
      <input
        className="border ring-offset-slate-500 px-8 py-2"
        type="text"
        onChange={(e) =>
          setForm((prev) => ({ ...prev, description: e.target.value }))
        }
        placeholder="Topic Description"
        value={form.description}
      />
      <button
        type="submit"
        className="font-bold bg-green-600 py-3 text-white px-6 w-fit"
      >
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
