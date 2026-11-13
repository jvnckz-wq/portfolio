import { site } from "@/data/site";

export default async function Footer() {
  "use cache";

  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-4xl px-4 py-6 text-sm text-foreground/70">
        <p>
          &copy; {site.shortName}{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
