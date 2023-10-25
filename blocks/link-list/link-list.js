export default function decorate(block) {
  const links = block.querySelectorAll('.button-container');

  block.innerHTML = '';
  links.forEach((link) => {
    block.append(link);
  });
}
