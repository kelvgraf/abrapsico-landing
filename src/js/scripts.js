function handleText(item) {
  const text = document.getElementById('texto');
  function init () {
    switch (item) {
      case 'first-text':
        return 'Se você perceber que seus pensamentos o impedem de viver a vida normalmete. Por exemplo, você pensa constantemente sobre situações catastróficas, fica obcecado com uma ideia ou expectativa ruim. A terapia psicológica emprega técnicas muito úteis para resolver estes problemas.';
      case 'second-text':
        return '222222222222';
      case 'third-text':
        return '33333333333';
      case 'fourth-text':
        return '44444444444';
      case 'fifth-text':
        return '555555555555';
    }
  }

  text.innerHTML = init();
}