export const Footer = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.innerHTML = `
    <div class="container__footer">
      <div class="social-icons__container">
        <a href="https://linkedin.com" class="social-icons__link" target="_blank">
          <i class="fab fa-linkedin footer__icon"></i>
        </a>
        <a href="https://github.com" class="social-icons__link" target="_blank">
          <i class="fab fa-github footer__icon"></i>
        </a>
      </div>
      <p class="footer__text">dataverseChat© 2024 Desenvolvido por Elizabete e Lourdilene</p>
    </div>
  `;
  return footer;
};
