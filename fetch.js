fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => {
    return data.json();
  })
  .then((post) => {
    console.log(post.title);
  });
