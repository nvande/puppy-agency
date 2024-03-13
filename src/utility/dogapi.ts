import { Post, PostData, ApiResponse } from "../types/types";

/**
 * Get cute dog pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, imageUrl: string }>>}
 */
export const getDogs = async (length = 10): Promise<Post[]> => {
  const response = await fetch(
    `https://img.cdn4dd.com/s/managed/interview/tps-dogs/api.json`
  );
  const jsonResponse: ApiResponse = await response.json();
  const dogs: Post[] = [];

  jsonResponse.data.children.forEach((c: PostData) => {
    const title = c.data.title;
    const url = c.data.preview?.images[0]?.resolutions[2]?.url;
    if (url) {
      dogs.push({ title: title, imageUrl: url.replaceAll("&amp;", "&") });
    }
  });

  return dogs.slice(0, length);
};
