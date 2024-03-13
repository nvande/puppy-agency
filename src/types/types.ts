export type Post = {
  title: string;
  imageUrl: string;
};

export type ImageResolution = {
  url?: string;
};

export type Image = {
  resolutions: ImageResolution[];
};

export type Preview = {
  images: Image[];
};

export type PostData = {
  data: {
    title: string;
    preview: Preview;
  };
};

export type ApiResponse = {
  data: {
    children: PostData[];
  };
};
