import { createOptimizedPicture } from '../../scripts/aem.js';

const createAnchorElement = (link) => {
  const aTag = document.createElement('a');
  aTag.href = link;
  return aTag;
};

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const aTag = row.querySelector('a');
    const link = aTag?.href;
    aTag?.remove();
    const newATag = link ? createAnchorElement(link) : '';
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    if (newATag) {
      newATag.append(li);
      ul.append(newATag);
    } else {
      ul.append(li);
    }
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
