// src/pages/contact.tsx
import Layout from '../components/Layout';
import '../app/globals.css';

const Contact = () => {
  return (
    <Layout>
      <section className="my-20">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <form
          action="https://formspree.io/f/yourFormID"
          method="POST"
          className="mt-8 flex flex-col space-y-4"
        >
          <input type="text" name="name" placeholder="Your Name" required className="p-2 border rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="p-2 border rounded" />
          <textarea name="message" placeholder="Your Message" required className="p-2 border rounded h-32"></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send Message</button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
