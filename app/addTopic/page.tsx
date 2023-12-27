'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const AddTopic = () => {
  const [form, setForm] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.title || !form.description) {
      alert('Title and description is required');
    }
    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.refresh();
        router.push('/');
      } else {
        throw new Error('Failed to create Topic');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        onChange={(e) =>
          setForm((prev) => ({ ...prev, title: e.target.value }))
        }
        className="border ring-offset-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic title"
        name="title"
        value={form?.title}
      />
      <input
        onChange={(e) =>
          setForm((prev) => ({ ...prev, description: e.target.value }))
        }
        className="border ring-offset-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
        name="description"
        value={form?.description}
      />
      <button
        type="submit"
        className="font-bold bg-green-600 py-3 text-white px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
