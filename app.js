'use strict';
// All form state lives only in memory. No storage, fetch, analytics, payments or messaging.
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function validatePhone(input){const digits=input.value.replace(/\D/g,'');input.setCustomValidity(/^[+\d().\s-]+$/.test(input.value)&&digits.length>=7&&digits.length<=15?'':'Enter a sample phone number with 7–15 digits.');return input.checkValidity()}
const photo = (id, width = 700) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
const services = [
 {id:'signature',category:'Cut',name:'Signature cut',price:58,duration:60,description:'A thoughtful shape, wash, and styled finish.',popular:true},
 {id:'express',category:'Cut',name:'Express cut',price:38,duration:30,description:'A tidy-up for a shape you already love.'},
 {id:'curly',category:'Cut',name:'Curly cut',price:78,duration:75,description:'Curl-by-curl shaping, hydration, and diffusing.'},
 {id:'roots',category:'Color',name:'Root refresh',price:85,duration:90,description:'Even coverage at the roots, with a styled finish.'},
 {id:'fullcolor',category:'Color',name:'Full color',price:120,duration:120,description:'One all-over color, consultation, and finish.'},
 {id:'balayage',category:'Color',name:'Lived-in balayage',price:185,duration:180,description:'Hand-painted dimension, gloss, and styled finish.',popular:true},
 {id:'blowout',category:'Styling',name:'Signature blowout',price:42,duration:45,description:'A wash, a proper blow-dry, and a little lift.'},
 {id:'occasion',category:'Styling',name:'Occasion styling',price:85,duration:75,description:'An updo or polished waves for your plans.'},
 {id:'gloss',category:'Treatments',name:'Shine gloss',price:55,duration:45,description:'A tonal refresh and finish, with a healthy shine.'},
 {id:'repair',category:'Treatments',name:'Repair ritual',price:35,duration:30,description:'A deep-conditioning treatment and simple finish.'},
 {id:'consultation',category:'Treatments',name:'Hair consultation',price:0,duration:15,description:'Talk through the possibilities before committing.'}
];
const stylists = [
 {id:'wren',name:'Wren',role:'The lived-in color person',bio:'Soft dimension, a careful consultation, and color that grows out as nicely as it grows on you.',specialties:'Balayage · Gloss · Natural dimension',image:'photo-1580489944761-15a19d654956'},
 {id:'june',name:'June',role:'The shape-and-texture person',bio:'Curls with room to move. Cuts that feel like you. June’s fictional chair is all about your everyday routine.',specialties:'Curly cuts · Bobs · Easy maintenance',image:'photo-1524250502761-1ac6f2e30d43'},
 {id:'ellis',name:'Ellis',role:'The finishing-touch person',bio:'From a just-because blowout to the big-day updo, Ellis brings the calm and the finishing touches.',specialties:'Blowouts · Occasion styling · Precision cuts',image:'photo-1506794778202-cad84cf45f1d'}
];
const looks = [
 {title:'The soft, lived-in blonde',category:'Color',image:'photo-1522337360788-8b13dee7a37e',alt:'Long blonde hair with soft dimensional color'},
 {title:'Texture with a little movement',category:'Cuts',image:'photo-1519699047748-de8e457a634e',alt:'Portrait showing a full, naturally curly hairstyle'},
 {title:'A fresh shape',category:'Cuts',image:'photo-1605497788044-5a32c7078486',alt:'Stylist using professional tools to shape a haircut'},
 {title:'A little everyday polish',category:'Styling',image:'photo-1524504388940-b1c1722653e1',alt:'Portrait inspiration with loose, softly styled hair'},
 {title:'A warmer kind of copper',category:'Color',image:'photo-1526510747491-58f928ec870f',alt:'Portrait inspiration showing long copper-red hair'},
 {title:'Ready for your plans',category:'Styling',image:'photo-1562322140-8baeececf3df',alt:'A stylist creating a polished finish with a blow-dryer'}
];
let category = 'Cut';
function renderServices(next = category) {
 category = next;
 $('#service-tabs').innerHTML = ['Cut','Color','Styling','Treatments'].map(c => `<button id="tab-${c}" role="tab" aria-selected="${c===category}" aria-controls="service-list" tabindex="${c===category?0:-1}" data-category="${c}">${c}</button>`).join('');
 $('#service-list').setAttribute('aria-labelledby', `tab-${category}`);
 $('#service-list').innerHTML = services.filter(s=>s.category===category).map(s=>`<article class="service-row"><div><h3>${s.name}</h3><p>${s.description}</p><div class="service-meta"><span>${s.duration} minutes</span>${s.popular?'<span class="popular">Most booked · Demo pick</span>':''}</div></div><div class="service-price"><strong>$${s.price}</strong><button class="text-button" data-book="${s.id}" aria-label="Book ${s.name}">Book this</button></div></article>`).join('');
}
$('#service-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b)renderServices(b.dataset.category)});
$('#service-tabs').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const names=['Cut','Color','Styling','Treatments'];let i=names.indexOf(category);i=e.key==='Home'?0:e.key==='End'?3:(i+(e.key==='ArrowRight'?1:3))%4;renderServices(names[i]);$(`#tab-${category}`).focus()});
renderServices();
$('#stylist-cards').innerHTML=stylists.map(s=>`<article class="stylist-card" data-reveal><div class="photo-frame"><img src="${photo(s.image)}" alt="Stock portrait illustrating fictional stylist ${s.name}" loading="lazy" width="600" height="750"></div><div><h3>${s.name}</h3><p>${s.role}</p><p>${s.bio}</p><p class="specialties">${s.specialties}</p><button class="text-button" data-stylist="${s.id}">Book with ${s.name} ↗</button></div></article>`).join('');
let galleryFilter='All',lightIndex=0;
function renderGallery(filter='All'){
 galleryFilter=filter;
 $('#gallery-filters').innerHTML=['All','Cuts','Color','Styling'].map(c=>`<button aria-pressed="${c===filter}" data-filter="${c}">${c}</button>`).join('');
 $('#gallery-grid').innerHTML=looks.map((l,i)=>filter==='All'||l.category===filter?`<button class="gallery-item" data-look="${i}" aria-label="Enlarge ${l.title}"><div class="photo-frame"><img src="${photo(l.image)}" alt="${l.alt}" loading="lazy" width="700" height="840"></div><span class="gallery-label"><span>${l.title}</span><small>${l.category} ↗</small></span></button>`:'').join('');
}
renderGallery();
$('#gallery-filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b){renderGallery(b.dataset.filter);$(`[data-filter="${galleryFilter}"]`).focus()}});
$('#compare-range').addEventListener('input',e=>$('.compare').style.setProperty('--split',`${e.target.value}%`));
let previousFocus=null;
function openDialog(d){previousFocus=document.activeElement;d.showModal();const target=d.querySelector('h2');if(target){target.tabIndex=-1;target.focus({preventScroll:true})}}
$$('dialog').forEach(d=>{
 d.addEventListener('click',e=>{if(e.target.closest('[data-close]'))d.close();if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}});
 d.addEventListener('close',()=>{if(d.id==='booking-dialog'){$('#booking-content').innerHTML='';booking=null}if(d.id==='gift-dialog')$('#gift-content').innerHTML='';if(d.id==='waitlist-dialog')$('#waitlist-content').innerHTML='';previousFocus?.focus({preventScroll:true})});
});
function showLook(i){lightIndex=i;const l=looks[i];$('#lightbox-image').src=photo(l.image,1300);$('#lightbox-image').alt=l.alt;$('#lightbox-caption').textContent=`${l.title} · ${l.category} · Stock inspiration`}
$('#gallery-grid').addEventListener('click',e=>{const b=e.target.closest('[data-look]');if(b){showLook(Number(b.dataset.look));openDialog($('#lightbox'))}});
function nextLook(delta){const allowed=looks.map((l,i)=>galleryFilter==='All'||l.category===galleryFilter?i:null).filter(x=>x!==null);showLook(allowed[(allowed.indexOf(lightIndex)+delta+allowed.length)%allowed.length])}
$('#photo-prev').addEventListener('click',()=>nextLook(-1));$('#photo-next').addEventListener('click',()=>nextLook(1));
$('#lightbox').addEventListener('keydown',e=>{if(e.key==='ArrowLeft')nextLook(-1);if(e.key==='ArrowRight')nextLook(1)});
// Dates use the salon's time zone, even when the visitor lives elsewhere.
const easternToday=new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const easternParts=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',year:'numeric',month:'numeric',day:'numeric'}).formatToParts(new Date());
const part=t=>Number(easternParts.find(p=>p.type===t).value);
const today=new Date(part('year'),part('month')-1,part('day'));
const dateKey=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const dateLabel=d=>new Intl.DateTimeFormat('en-US',{weekday:'long',month:'long',day:'numeric'}).format(d);
function addDays(d,n){const x=new Date(d);x.setDate(x.getDate()+n);return x}
function availableDays(){const ds=[];for(let i=1;ds.length<5;i++){let d=addDays(today,i);if(d.getDay()>1)ds.push(d)}return ds}
const openingDays=availableDays();
const openings=[{date:openingDays[0],service:'signature',stylist:'june',time:'10:30 AM'},{date:openingDays[1],service:'blowout',stylist:'ellis',time:'12:00 PM'},{date:openingDays[2],service:'roots',stylist:'wren',time:'1:30 PM'}];
const fullDay=dateKey(openingDays[3]);
$('#opening-board').innerHTML=openings.map((o,i)=>{const s=services.find(s=>s.id===o.service);return `<div class="opening-row"><div class="opening-day">${new Intl.DateTimeFormat('en-US',{weekday:'short'}).format(o.date)}<small>${new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric'}).format(o.date)}</small></div><div class="opening-service">${s.name}<small>${stylists.find(s=>s.id===o.stylist).name} · $${s.price} · ${s.duration} min</small></div><div class="opening-time">${o.time} Eastern</div><button class="button compact" data-opening="${i}">Claim this chair</button></div>`}).join('')+`<div class="opening-row"><div class="opening-day">${new Intl.DateTimeFormat('en-US',{weekday:'short'}).format(openingDays[3])}<small>${new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric'}).format(openingDays[3])}</small></div><div class="opening-service">Fully booked<small>Sample day · All stylists</small></div><div class="opening-time">Join the demo waitlist</div><button class="button outline compact" data-waitlist>Join waitlist</button></div>`;
let booking=null;
function startBooking({service=null,stylist=null,opening=null}={}){
 booking={step:0,service,stylist,date:null,time:null,month:today.getMonth(),year:today.getFullYear(),name:'',phone:'',reminder:false,policy:false};
 if(opening){Object.assign(booking,{service:opening.service,stylist:opening.stylist,date:dateKey(opening.date),time:opening.time,month:opening.date.getMonth(),year:opening.date.getFullYear(),step:3})}
 renderBooking();openDialog($('#booking-dialog'));
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-book],[data-stylist],[data-opening],[data-waitlist]');if(!b)return;if(b.hasAttribute('data-opening'))startBooking({opening:openings[Number(b.dataset.opening)]});else if(b.hasAttribute('data-waitlist'))openWaitlist();else startBooking({service:b.dataset.book||null,stylist:b.dataset.stylist||null})});
const currentService=()=>services.find(s=>s.id===booking?.service);
const currentStylist=()=>booking?.stylist==='any'?'First available':stylists.find(s=>s.id===booking?.stylist)?.name;
function setBookReady(ready){$('#book-next').disabled=!ready}
function renderBooking(){
 const b=booking;if(!b)return;const s=currentService();
 $('#booking-dialog .booking-progress').hidden=false;$('#booking-dialog .booking-controls').hidden=false;
 $$('#progress-labels li').forEach((li,i)=>{if(i===b.step)li.setAttribute('aria-current','step');else li.removeAttribute('aria-current')});
 $('#progress-fill').style.transform=`scaleX(${(b.step+1)/4})`;
 $('#book-back').hidden=b.step===0;$('#book-next').textContent=b.step===3?'Confirm demo booking':'Continue';
 $('#booking-total').textContent=s?`${s.name} · $${s.price} · ${s.duration} min`:'';
 let content='';
 if(b.step===0){content=`<h2 id="book-title">What are we doing?</h2><p>Choose your service. All prices are the full demo service total.</p><div class="choice-list">${services.map(s=>`<button class="choice" data-service="${s.id}" aria-pressed="${s.id===b.service}"><strong>${s.name}</strong><small>${s.category} · $${s.price} · ${s.duration} minutes</small></button>`).join('')}</div>`;setBookReady(Boolean(s))}
 if(b.step===1){content=`<h2 id="book-title">Find your person.</h2><p>These are fictional stylists and stock portraits. Every demo stylist can be selected for any service.</p><div class="choice-list"><button class="choice" data-person="any" aria-pressed="${b.stylist==='any'}"><strong>First available</strong><small>A good fit, a little sooner.</small></button>${stylists.map(p=>`<button class="choice stylist-choice" data-person="${p.id}" aria-pressed="${b.stylist===p.id}"><img src="${photo(p.image,150)}" alt="Stock portrait for fictional stylist ${p.name}" width="65" height="80"><span><strong>${p.name}</strong><small>${p.specialties}</small></span></button>`).join('')}</div>`;setBookReady(Boolean(b.stylist))}
 if(b.step===2){content=`<h2 id="book-title">Make a little time.</h2><p>Sample times in Eastern Time. Sundays and Mondays are closed. Book up to 60 days ahead.</p><div class="calendar-top"><strong id="calendar-month"></strong><div class="calendar-nav"><button id="month-prev" aria-label="Previous month">←</button><button id="month-next" aria-label="Next month">→</button></div></div><div id="calendar-grid" class="calendar" role="group" aria-label="Choose an appointment date"></div><div id="time-options" class="time-grid" role="group" aria-label="Available appointment times"></div>`;setBookReady(Boolean(b.date&&b.time))}
 if(b.step===3){content=`<h2 id="book-title">Make yourself at home.</h2><p>Use fictional details. Nothing is saved or sent.</p><div class="summary-box"><strong>${s.name} · $${s.price} · ${s.duration} minutes</strong>${esc(currentStylist())} · ${esc(dateLabel(new Date(b.date+'T12:00:00')))}<br>${esc(b.time)} Eastern<br>${s.price?`Mock deposit: $25 · Remaining service balance: $${s.price-25}`:'Free consultation · No deposit'}</div><form id="booking-form"><div class="form-grid"><label>Your name<input id="booking-name" name="demo-name" autocomplete="off" maxlength="70" required placeholder="e.g. Taylor Demo" value="${esc(b.name)}"></label><label>Phone number<input id="booking-phone" name="demo-phone" type="tel" inputmode="tel" autocomplete="off" maxlength="30" required minlength="7" placeholder="e.g. 202-555-0148" value="${esc(b.phone)}"></label></div><label class="check-label"><input id="reminder-check" type="checkbox" ${b.reminder?'checked':''}> <span>Text me a reminder <span class="small">(on-screen preview only)</span></span></label><div id="reminder-preview" ${b.reminder?'':'hidden'}></div><div class="policy"><strong>Before you confirm</strong><p>${s.price?'$25 demo deposit goes toward your service total. Cancel or reschedule at least 24 hours ahead; late cancellations and no-shows would forfeit the deposit.':'This consultation is free with no deposit. Please give 24 hours’ notice if your plans change.'} No payment is collected in this demo.</p></div><label class="check-label"><input id="policy-check" type="checkbox" required ${b.policy?'checked':''}><span>I understand the example cancellation policy and that this makes no real appointment.</span></label></form>`;setBookReady(true)}
 $('#booking-content').innerHTML=`<div class="booking-content-view">${content}</div>`;
 if(b.step===2)renderCalendar();if(b.step===3)renderReminder();
}
function renderCalendar(){const b=booking;const monthDate=new Date(b.year,b.month,1);$('#calendar-month').textContent=new Intl.DateTimeFormat('en-US',{month:'long',year:'numeric'}).format(monthDate);let cells=['S','M','T','W','T','F','S'].map(d=>`<span class="weekday" aria-hidden="true">${d}</span>`).join('');for(let i=0;i<monthDate.getDay();i++)cells+='<span></span>';const limit=addDays(today,60);const days=new Date(b.year,b.month+1,0).getDate();for(let i=1;i<=days;i++){const d=new Date(b.year,b.month,i);const key=dateKey(d);const closed=d<=today||d>limit||d.getDay()<2;cells+=`<button data-date="${key}" aria-label="${dateLabel(d)}${closed?', unavailable':''}" aria-pressed="${key===b.date}" ${closed?'disabled':''}>${i}</button>`}$('#calendar-grid').innerHTML=cells;$('#month-prev').disabled=monthDate<=new Date(today.getFullYear(),today.getMonth(),1);$('#month-next').disabled=new Date(b.year,b.month+1,1)>limit;renderTimes()}
function renderTimes(){const b=booking;if(!b.date){$('#time-options').innerHTML='<p>Choose a day to see sample times.</p>';return}if(b.date===fullDay){$('#time-options').innerHTML='<p>This sample day is fully booked.</p><button class="button outline compact" data-waitlist>Try the waitlist</button>';return}const date=new Date(b.date+'T12:00:00');const close=date.getDay()===6?900:1080;const slots=[{label:'9:00 AM',m:540},{label:'10:30 AM',m:630},{label:'12:00 PM',m:720},{label:'1:30 PM',m:810},{label:'3:00 PM',m:900},{label:'4:30 PM',m:990}].filter(t=>t.m+currentService().duration<=close);$('#time-options').innerHTML=slots.map(t=>`<button class="time-choice" data-time="${t.label}" aria-pressed="${t.label===b.time}">${t.label}</button>`).join('')}
function renderReminder(){if(!booking||booking.step!==3)return;$('#reminder-preview').innerHTML=`<div class="phone-preview"><div class="phone-screen"><span>Sunday House · Mock SMS</span><div class="message">Hi ${esc(booking.name||'Taylor')}! Your ${currentService().name.toLowerCase()} at Sunday House is ${esc(dateLabel(new Date(booking.date+'T12:00:00')))} at ${esc(booking.time)} Eastern. Need to change plans? Give us at least 24 hours’ notice.</div><small>Preview only. No text will be sent.</small></div></div>`}
$('#booking-content').addEventListener('click',e=>{
 if(!booking)return;const b=booking;const target=e.target.closest('button');if(!target)return;
 if(target.dataset.service){b.service=target.dataset.service;b.date=null;b.time=null;renderBooking();$(`[data-service="${b.service}"]`).focus()}
 if(target.dataset.person){b.stylist=target.dataset.person;renderBooking();$(`[data-person="${b.stylist}"]`).focus()}
 if(target.dataset.date){b.date=target.dataset.date;b.time=null;renderCalendar();setBookReady(false);$(`[data-date="${b.date}"]`).focus()}
 if(target.dataset.time){b.time=target.dataset.time;renderTimes();setBookReady(true);$(`[data-time="${b.time}"]`).focus()}
 if(target.id==='month-prev'||target.id==='month-next'){const d=new Date(b.year,b.month+(target.id==='month-next'?1:-1),1);b.year=d.getFullYear();b.month=d.getMonth();renderCalendar()}
});
$('#booking-content').addEventListener('input',e=>{if(!booking)return;if(e.target.id==='booking-name'){booking.name=e.target.value;renderReminder()}if(e.target.id==='booking-phone')booking.phone=e.target.value;if(e.target.id==='reminder-check'){booking.reminder=e.target.checked;$('#reminder-preview').hidden=!booking.reminder;renderReminder()}if(e.target.id==='policy-check')booking.policy=e.target.checked});
$('#booking-content').addEventListener('submit',e=>{e.preventDefault();confirmBooking()});
function focusBookHeading(){const h=$('#book-title');h.tabIndex=-1;h.focus({preventScroll:true});$('#booking-dialog').scrollTop=0}
$('#book-next').addEventListener('click',()=>{if(booking.step===3){confirmBooking();return}booking.step++;renderBooking();focusBookHeading()});
$('#book-back').addEventListener('click',()=>{booking.step--;renderBooking();focusBookHeading()});
function confirmBooking(){const form=$('#booking-form');if(!form)return;validatePhone($('#booking-phone'));if(!form.reportValidity())return;const b=booking,s=currentService();$('#booking-dialog .booking-progress').hidden=true;$('#booking-dialog .booking-controls').hidden=true;$('#booking-content').innerHTML=`<div class="success-box"><div class="success-mark" aria-hidden="true">&check;</div><h2 id="book-title">That’s the feeling.</h2><p><strong>Demo booking complete. No real appointment was made.</strong></p><div class="summary-box"><strong>${esc(b.name)}, here’s your sample plan.</strong>${s.name} · $${s.price} · ${s.duration} minutes<br>${esc(currentStylist())}<br>${esc(dateLabel(new Date(b.date+'T12:00:00')))} · ${esc(b.time)} Eastern</div><p>No deposit was charged. No confirmation or reminder was sent. Your details are not saved and are cleared when you close this window.</p><button class="button" data-close>Back to Sunday House</button></div>`;focusBookHeading()}
function openWaitlist(){
 if($('#booking-dialog').open)$('#booking-dialog').close();
 $('#waitlist-content').innerHTML=`<h2 id="waitlist-title">First in line.</h2><p>A sample waitlist for ${esc(dateLabel(openingDays[3]))}. Use fictional details; nothing is stored or sent.</p><form id="waitlist-form"><div class="form-grid"><label>Your name<input name="name" required maxlength="70" autocomplete="off" placeholder="Taylor Demo"></label><label>Phone number<input name="phone" type="tel" required maxlength="30" minlength="7" autocomplete="off" placeholder="202-555-0148"></label></div><label class="field-spaced">Preferred service<select name="service">${services.map(s=>`<option>${s.name} · $${s.price}</option>`).join('')}</select></label><label class="field-spaced">Best time<select name="time"><option>Any available time</option><option>Morning</option><option>Afternoon</option></select></label><button class="button full-button" type="submit">Join demo waitlist</button></form>`;
 openDialog($('#waitlist-dialog'));
 $('#waitlist-form').addEventListener('submit',e=>{e.preventDefault();validatePhone(e.currentTarget.elements.phone);if(!e.currentTarget.reportValidity())return;$('#waitlist-content').innerHTML='<div class="success-box"><div class="success-mark" aria-hidden="true">&check;</div><h2 id="waitlist-title">You’ve tried the list.</h2><p><strong>This is a demo. You have not joined a real waitlist.</strong></p><p>No contact information was saved and no notification will be sent.</p><button class="button" data-close>Back to the studio</button></div>';const h=$('#waitlist-title');h.tabIndex=-1;h.focus()});
}
$('#waitlist-open').addEventListener('click',openWaitlist);
let giftAmount=100;
$('#gift-open').addEventListener('click',()=>{
 giftAmount=100;$('#gift-content').innerHTML=`<h2 id="gift-title">Good hair, with love.</h2><p>Build a sample gift card. No payment details required.</p><div class="gift-mini"><span>Sunday House</span><strong id="gift-amount-display">$100</strong></div><div class="amounts" role="group" aria-label="Gift card amount">${[50,75,100,150,200].map(n=>`<button data-amount="${n}" aria-pressed="${n===100}">$${n}</button>`).join('')}</div><form id="gift-form"><label class="check-label"><input id="gift-friend" type="checkbox"><span>Send to a friend <span class="small">(preview only)</span></span></label><div id="gift-recipient" hidden><div class="form-grid"><label>Friend’s name<input id="friend-name" maxlength="70" autocomplete="off" placeholder="Morgan Demo"></label><label>Friend’s email<input id="friend-email" type="email" maxlength="120" autocomplete="off" placeholder="morgan@example.com"></label></div><label class="field-spaced">Your note<textarea id="gift-note" maxlength="250" placeholder="A little time for yourself."></textarea></label></div><p class="small">Use fictional details. Mock checkout only: no money is taken and no gift card or email is issued.</p><button type="submit" class="button full-button" id="gift-submit">Complete $100 demo checkout</button></form>`;
 openDialog($('#gift-dialog'));
 $('#gift-friend').addEventListener('change',e=>{const on=e.target.checked;$('#gift-recipient').hidden=!on;$('#friend-name').required=on;$('#friend-email').required=on;$('#friend-name').disabled=!on;$('#friend-email').disabled=!on});
 $('#gift-form').addEventListener('submit',e=>{e.preventDefault();if(!e.currentTarget.reportValidity())return;const friend=$('#gift-friend').checked;const name=friend?$('#friend-name').value:'';$('#gift-content').innerHTML=`<div class="success-box"><div class="success-mark" aria-hidden="true">&check;</div><h2 id="gift-title">A lovely thought.</h2><p><strong>Demo checkout complete. No payment was taken.</strong></p><div class="gift-mini"><span>Sunday House</span><strong>$${giftAmount}</strong></div><p>${friend?`Your sample gift was prepared for ${esc(name)}.`:'Your sample gift card is ready to preview.'} It has no monetary value. No card was issued, no email was sent, and no details were saved.</p><button class="button" data-close>Back to Sunday House</button></div>`;const h=$('#gift-title');h.tabIndex=-1;h.focus()});
});
$('#gift-content').addEventListener('click',e=>{const b=e.target.closest('[data-amount]');if(!b)return;giftAmount=Number(b.dataset.amount);$$('[data-amount]').forEach(el=>el.setAttribute('aria-pressed',el===b));$('#gift-amount-display').textContent=`$${giftAmount}`;$('#gift-submit').textContent=`Complete $${giftAmount} demo checkout`});
// The document remains fully visible if JavaScript, IntersectionObserver or motion is unavailable.
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let observer;
if('IntersectionObserver' in window&&!reduced.matches){observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.08});$$('[data-reveal]').forEach((el,i)=>{el.classList.add('reveal-ready');el.style.transitionDelay=`${i%3*70}ms`;observer.observe(el)})}
function revealAll(){observer?.disconnect();$$('.reveal-ready').forEach(el=>el.classList.add('is-visible'))}
reduced.addEventListener('change',()=>{if(reduced.matches)revealAll()});
$$('.motion-switch').forEach(control=>control.addEventListener('click',e=>{const paused=document.body.classList.toggle('motion-paused');e.currentTarget.setAttribute('aria-pressed',String(paused));e.currentTarget.setAttribute('aria-label',paused?'Resume decorative motion':'Pause decorative motion');e.currentTarget.textContent=paused?'Resume motion':'Pause motion';if(paused)revealAll();$$('.motion-switch').forEach(button=>{button.setAttribute('aria-pressed',String(paused));button.setAttribute('aria-label',paused?'Resume decorative motion':'Pause decorative motion');button.textContent=paused?'Resume motion':'Pause motion'})}));



document.addEventListener('input',e=>{if(e.target.matches('input[type=tel]'))e.target.setCustomValidity('')});
