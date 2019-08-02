export const images = [
  { id: "Amy", src: "http://i63.tinypic.com/rmpgms.jpg" },
  { id: "Bender", src: "http://i66.tinypic.com/2945bat.jpg" },
  { id: "Leela", src: "http://i65.tinypic.com/kcxn9z.jpg" },
  { id: "Professor Farnsworth", src: "http://i68.tinypic.com/1y4n5w.jpg" },
  { id: "Dr Zoidberg", src: "http://i64.tinypic.com/2vdp6v9.jpg" }
];

export function getImages() {
  return images.filter(g => g);
}
