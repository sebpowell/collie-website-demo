"use client";
import { Button } from "@/packages/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/packages/components/form";
import { Input } from "@/packages/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Stack } from "@/packages/components/stack";
import { client } from "@/packages/server/clients/api";
import { Paragraph } from "@/packages/components/paragraph";
import { Textarea } from "@/packages/components/textarea";
// import {
//   ContactFormSubmission,
//   IContactFormSubmission,
// } from "@/packages/server/modules/forms/forms.schema";

const ContactForm = () => {
  const form = useForm<any>({
    // IContactFormSubmission>({
    // resolver: zodResolver(ContactFormSubmission.omit({ formId: true })),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // @ts-ignore
  const { mutate, mutateAsync, isLoading } = client.forms.create.useMutation({
    onSuccess: () => {
      alert("success");
      form.reset();
    },
    onError: () => {
      console.log("error");
    },
  });

  async function onSubmit(values: any /* IContactFormSubmission*/) {
    console.log("the values", values);
    mutate({ body: { ...values, formId: "contact" } });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Stack spaceY={4}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Stack spaceX={4} className="flex">
            <Button type="submit" isLoading={isLoading}>
              Submit
            </Button>
            <Paragraph textColor="muted">
              By submitting this form you confirm you have read and accepted our
              Privacy Policy and Terms and Conditions.
            </Paragraph>
          </Stack>
        </Stack>
      </form>
    </Form>
  );
};

export { ContactForm };
