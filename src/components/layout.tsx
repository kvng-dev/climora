import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur-sm py-12 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p>Made by 🔥 Kvng-Dev 🔥 </p>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
