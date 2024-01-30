export const trending = (req, res) => {
  const videos = [
    {
      title: "title1",
      desc: "description of title1",
      rating: 5,
      comments: 2,
      id: 1,
    },
    {
      title: "title2",
      desc: "description of title2",
      rating: 4,
      comments: 2,
      id: 2,
    },
    {
      title: "title3",
      desc: "description of title3",
      rating: 2.5,
      comments: 2,
      id: 3,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};

export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("search", { pageTitle: "Search" });
export const upload = (req, res) => res.send("upload", { pageTitle: "Upload" });
export const deleteVideo = (req, res) =>
  res.send("delete", { pageTitle: "Delete" });
