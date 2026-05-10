const CATEGORIES = ["Women", "Men", "Designer", "Kids", "Home", "Electronics", "Entertainment", "Hobbies & collectables", "Sports"];

export default function CategoryBar() {
  return (
    <div aria-label="Browse categories" className="fixed top-16 left-0 right-0 z-40 hidden lg:block bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-center gap-1">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <a
                href="#"
                className="inline-block whitespace-nowrap px-3.5 py-2.5 text-sm font-medium text-gray-600
                           hover:text-[#005d4b] hover:bg-[#005d4b]/5 rounded-md
                           transition-colors duration-150 focus-visible:outline-none
                           focus-visible:ring-2 focus-visible:ring-[#005d4b] focus-visible:ring-offset-1"
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
