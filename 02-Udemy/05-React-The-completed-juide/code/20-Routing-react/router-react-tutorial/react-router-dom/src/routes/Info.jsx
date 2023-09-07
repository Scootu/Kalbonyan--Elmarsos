import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
function Info() {
  const { data } = useLoaderData();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(20,1fr)" }}>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={data}>
          {(loadedData) => {
            return loadedData.map((item, i) => {
              return (
                <p
                  style={{
                    textAlign: "center",
                  }}
                  key={i}
                >
                  {item}
                </p>
              );
            });
          }}
        </Await>
      </Suspense>
    </div>
  );
}

export async function loader() {
  let data = [];
  for (let i = 0; i < 1000; i++) {
    data.push(i);
  }
  return defer({
    data: data,
  });
}
export default Info;
