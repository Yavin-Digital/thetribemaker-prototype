// F1 High: restore mobile menu stripped from the static export (orig behaviour: thetribemaker.com chunk cbaebed5c4542520.js, toggle a w-56 dropdown under the button, close on outside press / route change). Adds Escape + focus return.
document.addEventListener('DOMContentLoaded',function(){var w=document.querySelector('header .lg\\:hidden.relative'),b=w&&w.querySelector('button');if(!b)return;
var L=[['/','Home'],['https://thetribemaker.com/about','About'],['https://thetribemaker.com/services','Services'],['https://thetribemaker.com/work','Work'],['https://thetribemaker.com/monthly-plans','Monthly Plans'],['https://thetribemaker.com/blog','Blog'],['https://thetribemaker.com/contact','Contact']];
var u=document.createElement('ul');u.id='ttm-mnav';u.className='ttm-mnav';u.hidden=true;
u.innerHTML=L.map(function(l){return '<li><a href="'+l[0]+'">'+l[1]+'</a></li>'}).join('')+'<li class="cta"><a href="http://meetwithmikemontes.com" target="_blank" rel="noopener noreferrer">Book a Strategy Call</a></li>';
w.appendChild(u);b.setAttribute('aria-controls','ttm-mnav');
function set(o,f){u.hidden=!o;b.setAttribute('aria-expanded',o);if(o&&f)u.querySelector('a').focus();if(!o&&f)b.focus()}
b.addEventListener('click',function(){set(u.hidden,false)});
document.addEventListener('pointerdown',function(e){if(!u.hidden&&!w.contains(e.target))set(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!u.hidden)set(false,true)});
matchMedia('(min-width:1024px)').addEventListener('change',function(m){if(m.matches)set(false)});});
// F5 Medium: work slider arrows ship disabled and dead (SSR state, JS stripped). Re-enable with scrollBy; keep native swipe.
document.addEventListener('DOMContentLoaded',function(){var c=document.querySelector('.work-slider-card');if(!c)return;var sc=c.parentElement,pv=document.querySelector('button[aria-label=Previous]'),nx=document.querySelector('button[aria-label=Next]');if(!pv||!nx)return;
function st(){pv.disabled=sc.scrollLeft<4;nx.disabled=sc.scrollLeft+sc.clientWidth>=sc.scrollWidth-4}
function go(d){sc.scrollBy({left:d*(c.getBoundingClientRect().width+16),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}
pv.addEventListener('click',function(){go(-1)});nx.addEventListener('click',function(){go(1)});sc.addEventListener('scroll',st,{passive:true});addEventListener('resize',st);addEventListener('load',st);setTimeout(st,500);st();});
