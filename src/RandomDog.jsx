import { ForDevice } from "media-query-react";
import { useState, useEffect } from "react";

function RandomDog({ dogUrl, setDogUrl }) {
  const [loading, setLoading] = useState(false);
  const generateRandomDog = () => {
    const randomDogUrl = `https://dog.ceo/api/breeds/image/random`;
    setLoading(true);
    setDogUrl("");
    fetch(randomDogUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        setDogUrl(responseJson.message);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };
  useEffect(() => {
    if (!dogUrl) {
      generateRandomDog();
    }
  }, []);

  return (
    <div>
      {dogUrl && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ForDevice deviceName={["tablet", "desktop"]}>
            <img
              src={dogUrl}
              alt="dog"
              className="dog-img"
              style={{
                width: "100%",
              }}
            />
          </ForDevice>
          <ForDevice deviceName="mobile">
            <img
              src={dogUrl}
              alt="dog"
              className="dog-img"
              style={{
                width: "80%",
              }}
            />
          </ForDevice>
        </div>
      )}
      {!loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="next-doggo-btn" onClick={generateRandomDog}>
            Generate new picture
          </button>
        </div>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default RandomDog;
