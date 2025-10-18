export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="lg:w-[85%] lg:px-0 px-5 mx-auto py-4">
        <div className="text-center text-white/80 text-sm">
          © 2025 CoverageTrackr   |   Powered by{" "}
          <a 
            href="https://sydani.org/service/sydani-tech/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors underline"
          >
            Sydani Technologies
          </a>
        </div>
      </div>
    </footer>
  );
}