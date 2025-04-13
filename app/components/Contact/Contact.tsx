import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <section className="py-32 bg-slate-100/30 min-h-screen flex flex-col justify-center items-center mx-auto w-full">
      <div className="font-medium text-3xl flex flex-col items-center justify-center">
        <p className="text-sm text-muted-foreground">Got any issues?</p>
        <h1 className="font-Accent text-4xl md:text-5xl lg:text-7xl">
          Let&apos;s Have a Chat
        </h1>
      </div>
      <form className="w-full max-w-5xl mx-auto flex flex-col gap-4 pt-16 pb-2 xl:px-14 lg:px-10 md:px-8 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-3">
            <Label htmlFor="firstName">First name</Label>
            <Input type="text" placeholder="Jonathan" />
          </div>
          <div className="flex-1 space-y-3">
            <Label htmlFor="firstName">Last name</Label>
            <Input type="text" placeholder="James" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-6">
          <div className="flex-1 space-y-3">
            <Label htmlFor="firstName">Email</Label>
            <Input type="email" placeholder="example@example.com" />
          </div>
          <div className="flex-1 space-y-3">
            <Label htmlFor="firstName">Subject</Label>
            <Input type="text" placeholder="Query regarding Devcation" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-6">
          <div className="flex-1 space-y-3">
            <Label htmlFor="firstName">Message</Label>
            <Textarea
              className="resize-none"
              placeholder="Write your message here..."
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#9d4edd] cursor-pointer text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
