export default function Layout({ children }) {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <div className="pt-6">
          <img src="/main-logo.png" width={120} alt="" />
        </div>
        { children }
      </div>
    </main>
  );
}