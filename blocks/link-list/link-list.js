export default function decorate(block) {
  console.log(block.cloneNode(true));
  const links = block.querySelectorAll('p');
  // const links = block.querySelectorAll('.button-container');

  console.log(links);
  block.innerHTML = '';
  links.forEach((link) => {
    block.append(link);
  });
}
