document.addEventListener('DOMContentLoaded', () => {
  const chips = document.querySelectorAll('.chip');
  const dropCards = document.querySelectorAll('.drop-card');
  const scoreDisplay = document.getElementById('score');
  const resetBtn = document.getElementById('reset-btn');
  const characterPool = document.getElementById('characters-pool');

  let score = 0;

  chips.forEach(chip => {
    chip.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', chip.id);
      chip.classList.add('dragging');
    });

    chip.addEventListener('dragend', () => {
      chip.classList.remove('dragging');
    });
  });

  dropCards.forEach(card => {
    card.addEventListener('dragover', (e) => {
      e.preventDefault();
      card.classList.add('drag-over');
    });

    card.addEventListener('dragleave', () => {
      card.classList.remove('drag-over');
    });

    card.addEventListener('drop', (e) => {
      e.preventDefault();
      card.classList.remove('drag-over');

      const chipId = e.dataTransfer.getData('text/plain');
      const chip = document.getElementById(chipId);

      if (!chip) return;

      const targetMatchId = card.dataset.id;
      const chipMatchId = chip.dataset.match;

      if (chipMatchId === targetMatchId) {
        if (card.contains(chip)) return;

        card.appendChild(chip);

        chip.classList.add('correct');
        chip.setAttribute('draggable', 'false');

        score += 10;
        scoreDisplay.textContent = score;

        if (score === 100) {
          setTimeout(() => {
            alert('Congratulations! All titles matched correctly.');
          }, 150);
        }
      } else {
        alert('Incorrect match. Try again!');
      }
    });
  });

  resetBtn.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = score;

    chips.forEach(chip => {
      chip.classList.remove('correct');
      chip.setAttribute('draggable', 'true');
      characterPool.appendChild(chip);
    });
  });
});