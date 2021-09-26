const articles = [
  {
    _id: 0,
    userName: "Rania Aloun",
    tags: [
      { _id: "0", name: "Article" },
      { _id: "1", name: "perspective" },
    ],
    publishDate: "Mon Sep 20 2021",
    articleTitle: "The way we look at things",
    liked: 5,
    link: "https://css-tricks.com/snippets/css/css-box-shadow/",
  },
  {
    _id: 1,
    userName: "Alaa Salem",
    tags: [
      { _id: "0", name: "Article" },
      { _id: "2", name: "animals" },
    ],
    publishDate: "Mon Oct 18 2017",
    articleTitle: "Cats",
    liked: 20,
    link: "https://css-tricks.com/snippets/css/css-box-shadow/",
  },
  {
    _id: 2,
    userName: "Alia123",
    tags: [
      { _id: "0", name: "Article" },
      { _id: "3", name: "family" },
    ],
    publishDate: "Sun May 1 2020",
    articleTitle: "Motherhood",
    liked: 7,
    link: "https://css-tricks.com/snippets/css/css-box-shadow/",
  },
  {
    _id: 3,
    userName: "randomPerson",
    tags: [
      { _id: "0", name: "Article" },
      { _id: "4", name: "random" },
      { _id: "5", name: "happy" },
    ],
    publishDate: "Sun May 1 2000",
    articleTitle: "how Random things could make us happy",
    liked: 3,
    link: "https://css-tricks.com/snippets/css/css-box-shadow/",
  },
  {
    _id: 4,
    userName: "Salem Safah",
    tags: [{ _id: "0", name: "Article" }],
    publishDate: "Sun Aug 8 2021",
    articleTitle: "the impact of having an Idol",
    liked: 400,
    link: "https://css-tricks.com/snippets/css/css-box-shadow/",
  },
  {
    _id: 5,
    userName: "SMSM",
    tags: [
      { _id: "4", name: "random" },
      { _id: "0", name: "Article" },
    ],
    publishDate: "Sun Aug 8 2021",
    articleTitle: "Gaming in our life",
    liked: 48,
    link: "https://css-tricks.com/snippets/css/css-box-shadow/",
  },
];

/**
 * returns all of the articles in the array
 * @return  {array} array of all articles
 */
export function getArticles() {
  return articles;
}

/**
 * increments/ decrements the liked number of an article in the array based on user click
 */
export function LikeArticle(id, liked) {
  let selectedArticle = articles.find((article) => article._id === id);
  if (liked) selectedArticle.liked = selectedArticle.liked + 1;
  else {
    selectedArticle.liked = selectedArticle.liked - 1;
  }
}
