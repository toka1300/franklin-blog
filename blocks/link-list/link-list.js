export default function decorate(block) {
  const links = block.querySelectorAll('p');

  block.innerHTML = '';
  links.forEach((link) => {
    block.append(link);
  });
}
