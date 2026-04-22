export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Страница не найдена</p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg gradient-primary shadow-glow-primary font-semibold hover:opacity-90 transition-opacity"
        >
          На главную
        </a>
      </div>
    </div>
  );
}
