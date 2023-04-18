const paths = [
  "penguin_party.jpg",
  "double_diamond.jpg",
  "glass_vase.JPG",
  "hawaii_hearts.jpg",
  "moose_applique.jpg",
  "ocean_vase.jpg",
  "mosaic_plate.JPG",
  "wood_bowl.jpg",
  "reign_glass.jpg",
  "nine_patch.png",
  "quilt_platter.jpg",
];

const columnHeights = [0, 0, 0];
const columns = document.querySelectorAll(".hobbies .column");
for (const path of paths) {
  const img = document.createElement("img");

  img.onload = () => {
    const index = columnHeights.indexOf(Math.min.apply(null, columnHeights));
    columns[index].appendChild(img);
    columnHeights[index] += img.height;
  };
  img.src = `images/hobbies/${path}`;
}
