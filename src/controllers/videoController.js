export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
  console.log(req.params.id);
  return res.send("Watch Video ID : " + req.params.id);
};
export const edit = (req, res) => {
  console.log(req.params.id);
  return res.send("Edit");
};
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => {
  console.log(req.params.id);
  return res.send("Delete Video");
};
