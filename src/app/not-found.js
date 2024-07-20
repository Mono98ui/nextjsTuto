import Link from "next/link";

const NotFound = () => {
    return ( <div>
        <h2>Page Not Found</h2>
        <p>Sorry</p>
        <Link href="./">Go Back to Home</Link>
    </div> );
}
 
export default NotFound;