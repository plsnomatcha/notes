var notes=[
 {t:"don't automatically consider your own perspective the absolute truth",d:"December 27, 2025",h:1,ms:[
  "i think i have a different way of understanding myself compared to how other people understand me. i tend to observe my own thoughts and actions, and i always try to understand the reasons behind them. ganahan ko mag-analyze sa akong kaugalingon, especially sa akong reactions, decisions, and the way i handle certain situations. i pay attention to my own patterns, even the ones i don't particularly like. dili man ko perfect, and i'm fully aware that my judgment can also be wrong, especially when personal feelings get involved. i prefer to look at things logically before making conclusions, and i don't easily accept an idea without understanding how it makes sense.",
  "i also find human behavior interesting, especially how people think, react, and make decisions based on their own experiences. i pay attention to how they communicate, how they treat others, and how their actions sometimes contradict their words. i often try to understand the reasons behind someone's behavior rather than judging them based only on what i see. dili lang ko basta mo-react sa akong makita. i usually observe first and think about the possible reasons behind it. people might see me as quiet, distant, or someone who doesn't care much, but there's actually a lot going on in my head.",
  "i don't always express what i'm thinking because i prefer processing things privately. i also don't feel obligated to explain every decision i make just to make it understandable to everyone. kabalo ko nga lahi-lahi tag perspective, and i don't expect everyone to understand the way i think."
 ]},
 {t:"i hate everything",d:"November 10, 2026",h:1,ms:[
  "i dont know why but everything really drains me.................................. wtf", 
  "my body hurts lately, my bones inside me feel so dull, everything feels so dull",
 ]},
 {t:"being tired of living the way things are is not necessarily the same as being tired of life itself",d:"November 19, 2025",ms:[
  "why some people can see death as the best way to end everything? there are others who are fighting every day just to stay alive. people with serious illnesses go through pain, treatments, and so much uncertainty, yet many of them still wish to have more time.",
  "different people see life depending on what they are going through. some people spend their days hoping for another chance, while others begin to believe that having another day is no longer worth it. i understand that emotional pain can be difficult to deal with, even when it cannot be seen by others. but i don't think death should be treated as the answer to every problem. wanting the pain to stop does not always mean wanting life to end.",
  "people become so tired of what they are facing that they can no longer see another way forward. i just find it sad how something that one person is desperately trying to hold on to can become something another person feels like giving up. it may not always be easy to appreciate, especially during hard times, but i think there is a difference between being tired of living the way things are and no longer wanting to live at all."
 ]},
 {t:"experience shapes perception and perception shapes judgment",d:"August 17, 2024",ms:[
  "i think the way we see things depends a lot on what we have experienced and how we understand them. sometimes, i look at something and realize that my opinion about it is no longer the same as before. things i once found difficult to understand now make sense, while things i used to be certain about are now open to question.",
  "i find it interesting how our minds can change without us noticing, especially when we are exposed to different people, situations, and ways of thinking. we often believe that our way of seeing things is the most reasonable because it is the only perspective we have fully understood. but there is always another side that we may have never considered. even when two people see the same thing, their understanding can be completely different. i also think that the way we judge others says a lot about how we understand the world ourselves. we tend to use our own experiences as a way to measure other people's actions, even when their circumstances are nothing like ours.",
  "what we consider strange is simply something we have never experienced, and what we consider wrong may only be something we have never tried to understand. it's quite easy to form an opinion when we only see what is in front of us, but understanding something beyond its appearance is still a different matter."
 ]},
 {t:"mindset compatibility",d:"July 31, 2026",h:1,ms:[
  "i try so hard to actually care when people come to me, but i'm totally numb inside. everyone dumps their problems or story on me, and even though i sit there, listen, get what they’re going through, and give solid advice, i still feel nothing.",
  "it's so annoying because i'm good with words and know how to help them ease it, but i feel like i'm  just reading a script. what pisses me off most is when it's my turn to talk. i give them an actual-real advice, but when i am the one who need the support, they hit me with the most basic, useless, low-effort and especially obvious responses.",
"i hate how thoughtless their words are, they shouldn't speak if that's all they can spit out. i'm tired of being their personal therapist when they don't give a single care about helping me back. that's why most of my friends don't know my struggles, they didn't even care to ask. being friend with people around my age always unmotivated me, drain me, doesn't help anything in my life at all.",
"i wish i could find one better but they didn't help me at all. older friends around my age is much more better because they're completely have more senses especially how they used their words.",
"being friends with people around my age doesn't feel right for me because i struggle to match their senses, i hate when they talk without thinking about their words, i also don't like their mindset."
 ]},
  {t:"does being kind always required as being available to everyone?",d:"March 14, 2026",ms:[
"i find it quite ridiculous how some people think that being kind means agreeing with everyone and never having the courage to say no. they keep accepting things even when they know they don't want to, just because they are afraid of making someone feel bad or being seen as a bad person. but isn't that just people pleasing? i don't really understand why saying no has to be such a difficult thing. a person should be able to make their own decisions without constantly worrying about whether other people will approve of them. having your own principles means nothing if you cannot even stand by them when someone disagrees. and i think people should understand that being independent is not just about doing things on your own, but also having the ability to think for yourself and not let other people's expectations decide everything for you. you can be respectful without always agreeing, you can be kind without always accepting, and you can have a good heart without making yourself available to everyone."
]},

];


notes.sort(function(a,b){return Date.parse(b.d)-Date.parse(a.d)});
var items=document.getElementById('items'),q=document.getElementById('q');
function render(){
  var s=q.value.trim().toLowerCase(),h='';
  notes.forEach(function(n,i){
    if(!n.h===!!unlocked)return;if(s&&(n.t+n.ms.join(' ')).toLowerCase().indexOf(s)<0)return;
    h+='<button class="glass note" data-i="'+i+'"><div class="t">'+n.t+'</div><div class="d">'+n.d+'</div></button>';
  });
  items.innerHTML=h||'<div class="empty">No notes found</div>';
}
items.addEventListener('click',function(e){
  var b=e.target.closest('.note');if(!b)return;if(lp){lp=false;return}
  var n=notes[b.dataset.i];openN=n;
  document.getElementById('dt').textContent=n.t;
  document.getElementById('dd').textContent=n.d;
  buildPager(n);
  document.body.classList.add('open');
  document.getElementById('detail').scrollTop=0;
});
document.getElementById('back').onclick=function(){document.body.classList.remove('open')};
function buildPager(n){
  var pg=document.getElementById('pg'),dots=document.getElementById('dots');
  pg.innerHTML=n.ms.map(function(m){return '<div class="slide"><p class="msg">'+m+'</p></div>'}).join('');
  dots.innerHTML=n.ms.map(function(_,i){return '<i'+(i?'':' class="on"')+'></i>'}).join('');
  pg.scrollLeft=0;applyHl();
}
document.getElementById('pg').addEventListener('scroll',function(){
  var pg=this,i=Math.round(pg.scrollLeft/pg.clientWidth);
  Array.prototype.forEach.call(document.getElementById('dots').children,function(d,k){d.className=k===i?'on':''});
});
q.addEventListener('input',render);
render();
var lp=false,lpT=null,cur=null,ov=document.getElementById('ov');
function noteText(n){return n.t+'\n'+n.d+'\n\n'+n.ms.join('\n\n')}
function showPv(n){
  cur=n;
  document.getElementById('pv').innerHTML='<div class="pt">'+n.t+'</div><div class="pd">'+n.d+'</div>'+n.ms.map(function(m){return '<p>'+m+'</p>'}).join('');
  document.getElementById('cpt').textContent='Copy notes';
  ov.classList.add('on');
}
items.addEventListener('pointerdown',function(e){
  var b=e.target.closest('.note');if(!b)return;
  clearTimeout(lpT);
  lpT=setTimeout(function(){lp=true;showPv(notes[b.dataset.i])},450);
});
['pointerup','pointercancel','pointermove','pointerleave'].forEach(function(t){items.addEventListener(t,function(){clearTimeout(lpT)})});
items.addEventListener('contextmenu',function(e){e.preventDefault()});
ov.addEventListener('click',function(e){if(!e.target.closest('.pv')&&!e.target.closest('.mn')){ov.classList.remove('on');setTimeout(function(){lp=false},50)}});
var openN=null,dT=null,dx=0,dy=0,dtl=document.getElementById('detail');
dtl.addEventListener('pointerdown',function(e){
  if(e.target.closest('.back,.hlbar')||!openN||document.body.classList.contains('hlon'))return;
  dx=e.clientX;dy=e.clientY;dlp=false;clearTimeout(dT);
  dT=setTimeout(function(){dlp=true;showPv(openN)},450);
});
dtl.addEventListener('pointermove',function(e){if(Math.abs(e.clientX-dx)>8||Math.abs(e.clientY-dy)>8)clearTimeout(dT)});
['pointerup','pointercancel','pointerleave'].forEach(function(t){dtl.addEventListener(t,function(){clearTimeout(dT)})});
dtl.addEventListener('contextmenu',function(e){if(!document.body.classList.contains('hlon'))e.preventDefault()});
var unlocked=false,pin='',lkb=document.getElementById('lk'),lko=document.getElementById('lko');
var IC='fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"';
function setLockIcon(){document.getElementById('list').classList.toggle('priv',unlocked);lkb.innerHTML=unlocked?'<svg width="20" height="20" viewBox="0 0 24 24" '+IC+'><rect x="5" y="11" width="14" height="10" rx="3"/><path d="M8 11V8a4 4 0 0 1 7.5-2"/></svg>':'<svg width="20" height="20" viewBox="0 0 24 24" '+IC+'><rect x="5" y="11" width="14" height="10" rx="3"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>'}
setLockIcon();
document.getElementById('bp').addEventListener('click',function(){unlocked=false;setLockIcon();render()});
lkb.addEventListener('click',function(){
  if(unlocked){unlocked=false;setLockIcon();render();return}
  pin='';updDots();lko.classList.add('on');
});
var dotsEl=document.getElementById('pd');
function updDots(){Array.prototype.forEach.call(dotsEl.children,function(d,i){d.className=i<pin.length?'on':''})}
function pressKey(k){
  if(k==='x'){pin=pin.slice(0,-1);updDots();return}
  if(pin.length>=4)return;
  pin+=k;updDots();
  if(pin.length===4){
    if(pin==='1221'){setTimeout(function(){unlocked=true;lko.classList.remove('on');setLockIcon();render();pin='';updDots()},180)}
    else{setTimeout(function(){dotsEl.classList.remove('shake');void dotsEl.offsetWidth;dotsEl.classList.add('shake');pin='';updDots()},120)}
  }
}
document.getElementById('kp').addEventListener('click',function(e){var b=e.target.closest('button');if(b)pressKey(b.dataset.k)});
document.addEventListener('keydown',function(e){
  if(!lko.classList.contains('on'))return;
  if(/^[0-9]$/.test(e.key))pressKey(e.key);
  else if(e.key==='Backspace')pressKey('x');
  else if(e.key==='Escape')lko.classList.remove('on');
});
lko.addEventListener('click',function(e){if(!e.target.closest('.lc'))lko.classList.remove('on')});
var HC=['rgba(255,214,10,.5)','rgba(52,199,89,.38)','rgba(10,132,255,.3)','rgba(255,45,85,.3)','rgba(175,82,222,.3)','rgba(142,142,147,.38)'],hlOn=false,hlC=0,hl={},snap=null,dlp=false;
try{hl=JSON.parse(localStorage.getItem('nh2')||'{}')||{}}catch(e){hl={}}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function msgHtml(m,runs){
  var h='',p=0;
  (runs||[]).forEach(function(r){h+=esc(m.slice(p,r[0]))+'<mark style="--hc:'+HC[r[2]]+'">'+esc(m.slice(r[0],r[1]))+'</mark>';p=r[1]});
  return h+esc(m.slice(p));
}
function applyHl(){
  if(!openN)return;
  Array.prototype.forEach.call(document.querySelectorAll('#pg .msg'),function(p,i){p.innerHTML=msgHtml(openN.ms[i],hl[openN.t+'|'+i])});
}
function saveHl(){try{localStorage.setItem('nh2',JSON.stringify(hl))}catch(x){}}
var pen=document.getElementById('pen'),sws=document.querySelectorAll('.sw'),hb=document.getElementById('hlb');
function syncBar(){
  document.body.classList.toggle('hlon',hlOn);pen.classList.toggle('on',hlOn);
  Array.prototype.forEach.call(sws,function(s){s.classList.toggle('sel',s.dataset.c===String(hlC))});
}
function grab(){
  var s=window.getSelection();snap=null;
  if(s&&s.rangeCount&&!s.isCollapsed){var r=s.getRangeAt(0);if(document.getElementById('pg').contains(r.commonAncestorContainer))snap=r.cloneRange()}
}
function paintSel(c){
  if(!snap||!openN)return;
  var any=false;
  Array.prototype.forEach.call(document.querySelectorAll('#pg .msg'),function(p,i){
    if(!snap.intersectsNode(p))return;
    var r=document.createRange();r.selectNodeContents(p);
    if(snap.compareBoundaryPoints(Range.START_TO_START,r)>0)r.setStart(snap.startContainer,snap.startOffset);
    if(snap.compareBoundaryPoints(Range.END_TO_END,r)<0)r.setEnd(snap.endContainer,snap.endOffset);
    var pre=document.createRange();pre.selectNodeContents(p);pre.setEnd(r.startContainer,r.startOffset);
    var s=pre.toString().length,e=s+r.toString().length,t=openN.ms[i],k=openN.t+'|'+i,col=[],x,st=-1,cc,runs=[];
    if(e<=s)return;
    (hl[k]||[]).forEach(function(q){for(x=q[0];x<q[1];x++)col[x]=q[2]});
    for(x=s;x<e;x++)col[x]=c<0?undefined:c;
    for(x=0;x<=t.length;x++){var v=col[x];
      if(st>=0&&v!==cc){runs.push([st,x,cc]);st=-1}
      if(st<0&&v!=null){st=x;cc=v}}
    if(runs.length)hl[k]=runs;else delete hl[k];
    any=true;
  });
  snap=null;
  if(any){saveHl();applyHl();var g=window.getSelection();if(g)g.removeAllRanges()}
}
hb.addEventListener('pointerdown',grab);
hb.addEventListener('mousedown',function(e){e.preventDefault()});
pen.addEventListener('click',function(){
  hlOn=!hlOn;
  if(!hlOn){snap=null;var g=window.getSelection();if(g)g.removeAllRanges()}
  syncBar();
});
Array.prototype.forEach.call(sws,function(s){s.addEventListener('click',function(){
  var c=s.dataset.c==='e'?-1:+s.dataset.c;
  if(c>=0)hlC=c;
  paintSel(c);syncBar();
})});
syncBar();
document.getElementById('cp').addEventListener('click',function(){
  var t=noteText(cur),done=function(){document.getElementById('cpt').textContent='Copied';setTimeout(function(){ov.classList.remove('on');lp=false},700)};
  function fb(){var a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(x){}document.body.removeChild(a);done()}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done,fb)}else fb();
});
