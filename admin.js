import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      {/* Other nav links */}
      <Link href="/admin/login">
        Admin Login
      </Link>
    </nav>
  );
}