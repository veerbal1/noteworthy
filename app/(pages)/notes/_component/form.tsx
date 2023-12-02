'use client';

import { Textarea } from '@/components/ui/textarea';
import SubmitButton from './submit-button';
import { noteSubmissionAction } from '@/lib/actions';
import { useFormState } from 'react-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  FormMessage,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form as ShadCNForm,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import formSchema, { FormSchemaType } from './form-schema';
import Tiptap from './tiptap';

const initialState = {
  message: '',
};

function Form({
  id,
  title,
  description,
}: {
  id?: string;
  title?: string;
  description?: string;
}) {
  const dispatchWrapper = (state: any, formData: FormData) =>
    noteSubmissionAction(id, formData);
  const [state, formAction] = useFormState(dispatchWrapper, initialState);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title,
      description: description,
    },
  });

  const onSubmit = (data: FormSchemaType) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formAction(formData);
  };

  return (
    <div className="flex-1 p-4">
      <ShadCNForm {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="API Integration" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Tiptap description={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton />
        </form>
      </ShadCNForm>
    </div>
  );
}

export default Form;
