import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"
import "./global.css"

export const metadata = {
  title: {
    default:"Next.js 14 Homepage",
    template:"%s | Next.js 14"
  },
  description: "Next.js starter app description",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <ClientSideProviderTest> */}
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  )
}
