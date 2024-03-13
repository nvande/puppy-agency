import { getDogs } from "../../utility/dogapi";
import useDebounce from "../../utility/useDebounce";

import React, { useState, useEffect } from "react";
import Slide from "../Slides/Slide";
import SlideshowControls from "./Controls/SlideshowControls";
import SpinnerBit from "../../bits/Spinner";
import ErrorBit from "../../bits/Error";

import NumberInput from "./Controls/NumberInput";

import { Post } from "../../types/types.js";

const Slideshow: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [posts, setPosts] = useState<null | Post[]>(null);

  const [postsToFetch, setPostsToFetch] = useState("10");
  const debouncedNumber = useDebounce(postsToFetch, 1000);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (debouncedNumber) {
      fetchPosts(parseInt(debouncedNumber));
    }
  }, [debouncedNumber]);

  const fetchPosts = async (num = 10) => {
    setLoading(true);
    try {
      const posts = await getDogs(num);

      // if we truncate the current page we need to go to last page
      if (posts.length < index + 1) {
        setIndex(posts.length - 1);
      }
      setPosts(posts);
    } catch (error) {
      setError("Something went wrong fetching the data.");
    }
    setLoading(false);
  };

  const changeSlide = (step: number) => {
    if (posts) {
      setIndex((prevIndex) => (prevIndex + step + posts.length) % posts.length);
    }
  };

  const changeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (
      (/^\d+$/.test(newValue) &&
        parseInt(newValue) >= 1 &&
        parseInt(newValue) <= 10) ||
      newValue === ""
    ) {
      setPostsToFetch(newValue);
    }
  };

  return (
    <>
      {error && (
        <div style={{ margin: "10px 20px" }}>
          <ErrorBit message={error} />
        </div>
      )}
      <NumberInput
        value={postsToFetch}
        handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          changeNumber(event)
        }
      />
      {posts && (
        <>
          <Slide title={posts[index].title} imageUrl={posts[index].imageUrl} />
          <SlideshowControls
            changeSlide={(step: number) => changeSlide(step)}
            leftDisabled={index === 0}
            rightDisabled={index === posts.length - 1}
          />
          <div style={{ padding: "10px", textAlign: "center" }}>
            <span>
              Post {index + 1} of {posts.length}
            </span>
          </div>
        </>
      )}
      {loading && <SpinnerBit />}
    </>
  );
};

export default Slideshow;
