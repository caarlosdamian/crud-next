import React from 'react';

const AddTopic = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border ring-offset-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic title"
      />
      <input
        className="border ring-offset-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
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
