import Link from "next/link";

// Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10 p-4 bg-white text-black rounded-lg shadow-lg">
          <h3 className="font-bold text-lg">Get Notified!</h3>
          <p className="mt-2">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <button className="mt-2 w-full bg-black text-white rounded-lg p-2 hover:bg-gray-800">
              Subscribe
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Section 1</h2>
            <ul>
              <li>
                <Link href="#" className="hover:underline">
                  Link 1
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Link 2
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Link 3
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Section 2</h2>
            <ul>
              <li>
                <Link href="#" className="hover:underline">
                  Link 1
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Link 2
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Link 3
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Section 3</h2>
            <ul>
              <li>
                <Link href="#" className="hover:underline">
                  Link 1
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Link 2
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Link 3
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Section 4</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
