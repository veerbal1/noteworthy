import * as z from 'zod';

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string(),
});

export type FormSchemaType = z.infer<typeof formSchema>;
export default formSchema;
