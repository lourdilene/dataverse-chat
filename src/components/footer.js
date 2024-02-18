export const renderFooter = () => {
  // const footer = document.createElement('footer');
  // footer.classList.add('container');
  const footer = document.createElement("div");
  footer.classList.add("container__footer");

  footer.innerHTML = `
  <div class="socialIcons">
    <a href="https://github.com" target="_blank">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com" target="_blank">
      <i class="fab fa-github"></i>
    </a>
  </div>
  <p>dataverseChat© 2024 Desenvolvido por Elizabete e Lourdilene</p>
  `;
  return footer;
};
