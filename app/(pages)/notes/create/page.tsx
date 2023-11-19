import { Suspense } from 'react';
import Form from '../_component/form';

async function CreateNote() {
  return (
    <div className="flex w-full gap-2 pr-20">
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
}

const Content = async () => {
  return <Form />;
};
export default CreateNote;
