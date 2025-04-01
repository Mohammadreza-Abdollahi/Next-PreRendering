import Link from "next/link";
import './globals.css'

export const metadata = {
  title: "Next Pre_Rendering",
  description: "Developed By Mohammadreza Abdollahi...",
};

const RootLayout = ({ children })=> {
  return (
    <html lang="en">
      <body>
        <header className="bg-slate-200 py-3 text-center">
          <ul className="flex justify-center gap-16 text-lg">
            <li className={`text-slate-800 hover:text-blue-600`}><Link href="/">Home</Link></li>
            <li className={`text-slate-800 hover:text-blue-600`}><Link href="/posts">Posts</Link></li>
            <li className={`text-slate-800 hover:text-blue-600`}><Link href="/users">Users</Link></li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
export default RootLayout;