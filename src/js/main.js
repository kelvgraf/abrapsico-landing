// ---------------- Funções do menu responsivo --------------------

 var menuMobile = document.querySelector(".menu-mobile");
  var menuItem = document.querySelectorAll('.menu-item');
  var menuList = document.querySelector('.menu-list');
  
  document.getElementById("menu-mobile").addEventListener("click", myFunction);
  document.getElementById("menu-item").addEventListener("click", myFunction2);
  document.getElementById("menu-item2").addEventListener("click", myFunction2);
  document.getElementById("menu-item3").addEventListener("click", myFunction2);
  document.getElementById("menu-item4").addEventListener("click", myFunction2);
 
  function myFunction() {
    menuMobile.classList.toggle("--menuMobile");;
    menuList.classList.toggle('--drop-menu')
    socialIcon.classList.toggle('--drop-social')
    menuItem.forEach((element) => {
      element.classList.add('--drop-item')
    });
  }

  function myFunction2() {
    menuList.classList.remove('--drop-menu')
  };

// ---------------- Funções do menu descktop --------------------
let underlineItemIdentity = document.getElementById('li--underlineItemIdentity')
let underlineIdentity = document.getElementById('underlineIdentity')

let underlineItemServises = document.getElementById('li--underlineItemServises')
let underlineServises = document.getElementById('underlineServises');

let underlineItemSchedule = document.getElementById('li--underlineItemSchedule')
let underlineSchedule = document.getElementById('underlineSchedule');

let underlineItemContact = document.getElementById('li--underlineItemContact')
let underlineContact = document.getElementById('underlineContact');

underlineItemIdentity.addEventListener('mouseover', function(){
    underlineIdentity.setAttribute('class', 'box--list_iten--listUnderline')
})
underlineItemIdentity.addEventListener('mouseout', function(){
    underlineIdentity.setAttribute('class', 'box--list_iten--listUnderlineNone')
})
// ---------------- --------------------
underlineItemServises.addEventListener('mouseover', function(){
    underlineServises.setAttribute('class', 'box--list_iten--listUnderline')
})
underlineItemServises.addEventListener('mouseout', function(){
    underlineServises.setAttribute('class', 'box--list_iten--listUnderlineNone')
})
// ----------------- --------------------
underlineItemSchedule.addEventListener('mouseover', function(){
    underlineSchedule.setAttribute('class', 'box--list_iten--listUnderline')
})
underlineItemSchedule.addEventListener('mouseout', function(){
    underlineSchedule.setAttribute('class', 'box--list_iten--listUnderlineNone')
})
// ----------------- --------------------
underlineItemContact.addEventListener('mouseover', function(){
    underlineContact.setAttribute('class', 'box--list_iten--listUnderline')
})
underlineItemContact.addEventListener('mouseout', function(){
    underlineContact.setAttribute('class', 'box--list_iten--listUnderlineNone')
})

// ----------------- Funções da seção sintomas --------------------
function handleText(item) {
    const text = document.getElementById('texto');
    function init () {
        switch (item) {
        case 'first-text':
            return 'Todo mundo tem algum tipo de pensamento pessimista durante o dia. É extremamente normal.  Mas quando se torna recorrente e obsessivo -  como a idealização de situações catastróficas ou ideias ruins -  é de extrema importância buscar ajuda. A terapia psicológica oferece técnicas direcionadas para resolver esse tipo de problema e melhorar a qualidade de vida do indivíduo.';
        case 'second-text':
            return 'Sentir raiva é algo natural, mas impulsos agressivos, descontrolados e constantes sinalizam problema mental grave. Chamado de Transtorno Explosivo Intermitente, o comportamento é incapacitante, afetando não só o indivíduo, mas a família, amigos e colegas de trabalho. Além disso, a doença pode desencadear manias e até depressão. E, em alguns casos, o paciente pode trazer riscos para a integridade física de pessoas de seu convívio.';
        case 'third-text':
            return 'Lidar com as diferenças do outro é o nosso principal desafio como seres humanos, pois é uma oportunidade de crescimento e evolução. No entanto, para algumas pessoas, o relacionamento, de qualquer espécie, torna-se um caminho insuportável.  A primeira coisa é compreender a natureza do sofrimento: educação rígida;  dificuldades trazidas da infância e até traumas.  O tratamento adequado irá ajudar o paciente a encontrar a causa e irá oferecer alternativas para que ele seja capaz de construir relações.';
        case 'fourth-text':
            return 'O Transtorno do Estresse Pós-Traumático (TEPT) é um distúrbio de ansiedade desenvolvido em decorrência de episódios de extremo perigo, violência e abusos,  os quais representaram ameaça à vida do paciente ou a de terceiros. Ao redor do episódio, a pessoa desencadeia sinais neurofisiológicas, ou seja, as mesmas sensações de dor e sofrimento vividos no dia do incidente. O transtorno tem tratamento, aliviando os sintomas e promovendo uma vida mais equilibrada para a pessoa.';
        case 'fifth-text':
            return 'Muitas vezes o paciente passa meses ou até mesmo anos fazendo uma via sacra entre consultórios e hospitais, sofrendo dores e sintomas de uma doença desconhecida. Nestes casos, o psicólogo pode ajudar o paciente a lidar com a ansiedade e os demais sentimentos, causados pela incerteza, evitando a piora do quadro, como o desenvolvimento de outros transtornos e até depressão, por exemplo.';
        }
    }

    text.innerHTML = init();
}

// ----------------- Slide seção sintomas mobile--------------------
let sintomas = [
    {
        title: 'Pensamentos negativos constantes',
        text: 'Todo mundo tem algum tipo de pensamento pessimista durante o dia. É extremamente normal.  Mas quando se torna recorrente e obsessivo -  como a idealização de situações catastróficas ou ideias ruins -  é de extrema importância buscar ajuda. A terapia psicológica oferece técnicas direcionadas para resolver esse tipo de problema e melhorar a qualidade de vida do indivíduo.'
    },
    {
        title: 'Excesso de raiva',
        text: 'Sentir raiva é algo natural, mas impulsos agressivos, descontrolados e constantes sinalizam problema mental grave. Chamado de Transtorno Explosivo Intermitente, o comportamento é incapacitante, afetando não só o indivíduo, mas a família, amigos e colegas de trabalho. Além disso, a doença pode desencadear manias e até depressão. E, em alguns casos, o paciente pode trazer riscos para a integridade física de pessoas de seu convívio.'
    },
    {
        title: 'Dificuldade nos relacionamentos',
        text: 'Lidar com as diferenças do outro é o nosso principal desafio como seres humanos, pois é uma oportunidade de crescimento e evolução. No entanto, para algumas pessoas, o relacionamento, de qualquer espécie, torna-se um caminho insuportável.  A primeira coisa é compreender a natureza do sofrimento: educação rígida;  dificuldades trazidas da infância e até traumas.  O tratamento adequado irá ajudar o paciente a encontrar a causa e irá oferecer alternativas para que ele seja capaz de construir relações.'
    },
    {
        title: 'Situações traumáticas',
        text: 'O Transtorno do Estresse Pós-Traumático (TEPT) é um distúrbio de ansiedade desenvolvido em decorrência de episódios de extremo perigo, violência e abusos,  os quais representaram ameaça à vida do paciente ou a de terceiros. Ao redor do episódio, a pessoa desencadeia sinais neurofisiológicas, ou seja, as mesmas sensações de dor e sofrimento vividos no dia do incidente. O transtorno tem tratamento, aliviando os sintomas e promovendo uma vida mais equilibrada para a pessoa.'
    },
    {
        title: 'Sintomas de doenças não identificadas',
        text: 'Muitas vezes o paciente passa meses ou até mesmo anos fazendo uma via sacra entre consultórios e hospitais, sofrendo dores e sintomas de uma doença desconhecida. Nestes casos, o psicólogo pode ajudar o paciente a lidar com a ansiedade e os demais sentimentos, causados pela incerteza, evitando a piora do quadro, como o desenvolvimento de outros transtornos e até depressão, por exemplo.'
    }
];
let text = document.getElementById('texto');


function handleSlide(event, type){
    document.querySelector('.selectedItem').classList.remove('selectedItem');
    event.target.classList.add('selectedItem')
    handleText(type)
    handleTitle(type)
}
function handleTitle(item) {
    let txtExit = document.getElementById('title-exit');
    function init () {
        switch (item) {
        case 'first-text':
            return 'Pensamentos negativos constantes';
        case 'second-text':
            return 'Excesso de raiva';
        case 'third-text':
            return 'Dificuldade nos relacionamentos';
        case 'fourth-text':
            return 'Situações traumáticas';
        case 'fifth-text':
            return 'Sintomas de doenças não identificadas';
        }
    }
    txtExit.innerHTML = init();
}
   