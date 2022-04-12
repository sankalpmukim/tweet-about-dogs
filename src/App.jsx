import RandomDog from "./RandomDog";
import Tweet from "../Tweet";
import { useState } from "react";
import { ForDevice } from "media-query-react";

function App() {
  const [dogUrl, setDogUrl] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="main-title-wrapper"
      >
        <ForDevice deviceName={["tablet", "desktop"]}>
          <h1 className="main-title">{`Bow Bow Tweet Tweet`}</h1>
        </ForDevice>
        <ForDevice deviceName="mobile">
          <h1
            style={{
              fontSize: "2rem",
            }}
            className="main-title"
          >
            {`Bow Bow Tweet Tweet`}
          </h1>
        </ForDevice>
      </div>
      <ForDevice deviceName={["tablet", "desktop"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <RandomDog dogUrl={dogUrl} setDogUrl={setDogUrl} />
          <Tweet dogUrl={dogUrl} />
        </div>
      </ForDevice>
      <ForDevice deviceName="mobile">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.25rem",
            flexDirection: "column",
          }}
        >
          <RandomDog dogUrl={dogUrl} setDogUrl={setDogUrl} />
          <Tweet dogUrl={dogUrl} />
        </div>
      </ForDevice>
    </div>
  );
}

export default App;
