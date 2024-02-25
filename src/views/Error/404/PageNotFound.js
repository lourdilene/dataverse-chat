const PageNotFound = () => {
  const viewEl = document.createElement("main");
  // viewEl.classList.add("chat");

  viewEl.innerHTML = `
  <div class="error-container">
    <h1>Error 404 - Page Not Found</h1>
    <p>Oops! The page you're looking for could not be found.</p>
    <p>Go back to <a href="/">home</a> or contact the website administrator for assistance.</p>
  </div>
  `;
  return viewEl;
};

export default PageNotFound;
