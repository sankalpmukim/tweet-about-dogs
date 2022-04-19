import { useState } from "react";

function Tweet({ dogUrl }) {
  const [tweet, setTweet] = useState("");
  console.log(tweet);
  return (
    <div>
      <div>
        <label for="textarea">Type your tweet</label>
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          id="textarea"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              className="twitter-share-button"
              href={`https://twitter.com/intent/tweet?text=${encodeURI(
                tweet
              )}&url=${encodeURI(dogUrl)}`}
              type="submit"
            >
              Tweet
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>{280 - tweet.length - dogUrl.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
