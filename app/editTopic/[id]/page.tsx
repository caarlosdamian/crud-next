import EditTopicForm from '@/components/EditTopicForm';
import { useState } from 'react';

const getTopicById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Having error');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditTopic = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const {
    topic: { title, description },
  } = await getTopicById(id);
  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
