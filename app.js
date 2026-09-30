(() => {
  const d = window.weddingDetails || {};
  const intro = document.getElementById('intro');
  const main = document.getElementById('main');
  const openBtn = document.getElementById('openBtn');

  // Wedding background music: starts from the invitation's
  // existing "Open Our Invitation" user gesture and continues while the
  // guest scrolls through the invitation. It loops seamlessly until the
  // page is left/reloaded.
  const weddingMusic = new Audio('./asset/leberch-wedding-584474.mp3');
  weddingMusic.loop = true;
  weddingMusic.preload = 'auto';
  weddingMusic.volume = 0.28;

  function startWeddingMusic(){
    const playPromise = weddingMusic.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // Mobile browsers can still block playback in some cases. Retry on
        // the next direct user interaction without changing the invitation.
        const retry = () => {
          weddingMusic.play().catch(() => {});
          document.removeEventListener('pointerdown', retry, true);
          document.removeEventListener('touchstart', retry, true);
        };
        document.addEventListener('pointerdown', retry, true);
        document.addEventListener('touchstart', retry, true);
      });
    }
  }

  openBtn.addEventListener('click', () => {
    intro.classList.add('hide');
    main.setAttribute('aria-hidden','false');
    window.scrollTo({top:0, behavior:'smooth'});
    burstPetals();
    startWeddingMusic();
  });

  // Dense celebratory flower shower
  const petals = document.getElementById('petals');
  const flowerColors = ['#d94b68','#e98a3a','#f2bd45','#e95f83','#c94f9d','#f08b9c','#d8a52d'];
  function petal(){
    const el=document.createElement('i');
    el.className='petal';
    el.style.left=Math.random()*100+'%';
    el.style.setProperty('--drift',(Math.random()*180-90)+'px');
    el.style.setProperty('--drift2',(Math.random()*140-70)+'px');
    el.style.setProperty('--size',(0.55+Math.random()*0.9).toFixed(2));
    el.style.background=flowerColors[Math.floor(Math.random()*flowerColors.length)];
    el.style.animationDuration=(5+Math.random()*5)+'s';
    el.style.animationDelay=(Math.random()*1.2)+'s';
    petals.appendChild(el);
    setTimeout(()=>el.remove(),12000);
  }
  for(let i=0;i<24;i++) petal();
  setInterval(petal,420);
  function burstPetals(){ for(let i=0;i<75;i++) setTimeout(petal,i*28); }

  // Countdown: 7 Dec 2026, 19:30 IST
  const target = new Date('2026-12-07T19:30:00+05:30').getTime();
  function countdown(){
    let diff=Math.max(0,target-Date.now());
    const day=Math.floor(diff/86400000); diff-=day*86400000;
    const hour=Math.floor(diff/3600000); diff-=hour*3600000;
    const min=Math.floor(diff/60000); diff-=min*60000;
    const sec=Math.floor(diff/1000);
    document.getElementById('days').textContent=String(day).padStart(2,'0');
    document.getElementById('hours').textContent=String(hour).padStart(2,'0');
    document.getElementById('minutes').textContent=String(min).padStart(2,'0');
    document.getElementById('seconds').textContent=String(sec).padStart(2,'0');
  }
  countdown(); setInterval(countdown,1000);

  // Vows
  const vows = d.vows || [
    ['01','Togetherness','To walk beside each other through every season of life, with love, patience and understanding.'],
    ['02','Strength','To support one another through every challenge and celebrate every victory together.'],
    ['03','Prosperity','To build a home filled with respect, abundance, generosity and shared dreams.'],
    ['04','Happiness','To protect the joy between us and fill our days with laughter, warmth and kindness.'],
    ['05','Family','To honour our families, cherish their blessings and grow together with love and gratitude.'],
    ['06','Friendship','To remain best friends, listen to each other and choose each other every single day.'],
    ['07','Forever','To share this journey with faith and devotion, standing together through all that life brings.']
  ];
  const vowBox=document.getElementById('vows');
  (Array.isArray(vows)?vows:[]).forEach((v,i)=>{
    const item=Array.isArray(v)?{number:v[0],title:v[1],promise:v[2]}:v;
    const card=document.createElement('article');
    card.className='vow';
    card.innerHTML=`<div class="vow-num">${item.number || String(i+1).padStart(2,'0')}</div><h4>${item.title}</h4><div class="vow-reveal">TAP TO REVEAL</div><p>${item.promise}</p>`;
    card.addEventListener('click',()=>card.classList.toggle('open'));
    vowBox.appendChild(card);
  });

  // Back to top
  const topBtn=document.getElementById('topBtn');
  addEventListener('scroll',()=>topBtn.classList.toggle('show',scrollY>500));
  topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
})();
