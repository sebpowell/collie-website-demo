const images = {
  stamp: "/stamp.png",
  scroll: "/scroll.png",
};

const getImage = (image: keyof typeof images) => {
  return images[image];
};

export { images, getImage };
