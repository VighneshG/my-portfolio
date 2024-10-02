import Layout from "@/components/Layout";

// src/app/page.tsx
export default function HomePage() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">
          I am a software engineer with more than 3 years of experience.
        </p>
        {/* Add more content as needed */}
      </main>
    </Layout>
  );
}
