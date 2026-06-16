function lenBurger(b){var l=b.parentNode.querySelector('.links');if(l)l.classList.toggle('open');}

(function(){
  if(!localStorage.getItem('len_cookie_ok')){
    var b=document.createElement('div');b.className='cookie';
    b.innerHTML='Сайт использует cookie для корректной работы. Продолжая, вы соглашаетесь с <a href="len-politika.html">Политикой обработки персональных данных</a>.<button class="btn" type="button">Принять</button>';
    document.body.appendChild(b);
    b.querySelector('button').onclick=function(){try{localStorage.setItem('len_cookie_ok','1');}catch(e){}b.remove();};
  }
})();

document.addEventListener('submit',function(e){
  var f=e.target;
  if(!f.classList||!f.classList.contains('svc'))return;
  e.preventDefault();
  var v=function(s){var el=f.querySelector(s);return el?el.value.trim():'';};
  var body=encodeURIComponent('Имя: '+v('[name=name]')+'\nТелефон: '+v('[name=phone]')+'\nСообщение: '+v('[name=msg]'));
  var subj=encodeURIComponent('Заявка с сайта ГСК «Ленинский»');
  window.location.href='mailto:mail@leningsk.ru?subject='+subj+'&body='+body;
  var btn=f.querySelector('button');if(btn)btn.textContent='Открываем письмо…';
});
