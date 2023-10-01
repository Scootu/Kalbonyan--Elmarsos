import Link from "next/link";
import { Fragment } from "react";

// ourdomain.com/next
function NextPage() {
  return (
    <Fragment>
      <h1>Next page</h1>;
      <ul>
        <li>
          <Link href={"/next/news-nextjs-features"}>
            The news nextjs features
          </Link>
        </li>
        <li>
          <Link href={"/next/more-in-reactjs"}>More in reactjs</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NextPage;
