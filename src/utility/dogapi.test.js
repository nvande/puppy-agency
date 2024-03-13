import { getDogs } from "./dogapi";

const mockPosts = [
  {
    title: "Lookey lookey cute dogey",
    imageUrl: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg",
  },
  {
    title: "Shibas <3",
    imageUrl: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
  },
  {
    title: "Look at my cute black pug!",
    imageUrl: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg",
  },
  {
    title: "A walk in the park",
    imageUrl: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg",
  },
];

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: {
            children: mockPosts.map((post) => ({
              data: {
                title: post.title,
                preview: {
                  images: [{ resolutions: [{}, {}, { url: post.imageUrl }] }],
                },
              },
            })),
          },
        }),
    })
  );
});

describe("getDogs", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should fetch and return dog data", async () => {
    const posts = await getDogs();
    expect(posts.length).toBe(mockPosts.length);

    mockPosts.forEach((mockPost, i) => {
      expect(mockPost.title).toBe(posts[i].title);
      expect(mockPost.imageUrl).toBe(posts[i].imageUrl);
    });
  });

  it("should limit the number of dogs based on the length argument", async () => {
    const length = 1;
    const dogs = await getDogs(length);
    expect(dogs.length).toBe(length);
  });
});

describe("utility/dogapi", () => {
  it("returns post objects", async () => {
    const dogs = await getDogs();
    expect(dogs).toEqual(mockPosts);
  });
});
