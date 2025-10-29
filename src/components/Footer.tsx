interface FooterProps {
  theme: 'dark' | 'light';
}

export default function Footer({ theme }: FooterProps) {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="text-[#FFB800] hover:text-[#FFD700] transition-colors duration-300 cursor-pointer">
            imnots studios
          </span>{' '}
          — All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">Nothing common. Everything imnots.</p>
      </div>
    </footer>
  );
}
