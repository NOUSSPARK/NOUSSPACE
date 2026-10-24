import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 py-24 px-8 text-center">
        <Image
          src="/logo.png"
          alt="Nous Space"
          width={240}
          height={240}
          priority
          className="rounded-2xl"
        />
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Nous Space
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Welcome to Nous Space. Edit{" "}
          <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-sm dark:bg-white/[.08]">
            src/app/page.tsx
          </code>{" "}
          to start building.
        </p>
      </main>
    </div>
  );
}
