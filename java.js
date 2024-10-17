function toggleAnswer(element) {
    const answer = element.querySelector('.faq-answer');
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
  }
  