<script>

/* ==========================
   SUBMISSION TRACKER DATA
========================== */

const submissionData = [

{
grade:'Grade 1 - MAGKONO',
teacher:'Jenny Queen L. Orillaneda',
period:'summative1',
status:'Submitted',
date:'Available'
},

{
grade:'Grade 2 - NARRA',
teacher:'Maria Fatima R. Peñanueva',
period:'summative1',
status:'Submitted',
date:'Available'
},

{
grade:'Grade 3 - TOOG',
teacher:'Jessa Mae R. Flores',
period:'summative1',
status:'Submitted',
date:'Available'
},

{
grade:'Grade 4 - TUGAS',
teacher:'Alma C. Nayre',
period:'summative1',
status:'Submitted',
date:'Available'
},

{
grade:'Grade 5 - LAUAAN',
teacher:'Lendon B. Abonales',
period:'summative1',
status:'Submitted',
date:'Available'
},

{
grade:'Grade 6 - YAKAL',
teacher:'Mark Zoilo C. Tajonera',
period:'summative1',
status:'Submitted',
date:'Available'
}

];

/* ==========================
   SUBMISSION TABLE
========================== */

function renderSubmissionTable(period){

const tbody =
document.getElementById('submissionTableBody');

if(!tbody) return;

tbody.innerHTML='';

const records =
period === 'overall'
? submissionData
: submissionData.filter(
r => r.period === period
);

records.forEach(r => {

const badge =
r.status === 'Submitted'
?
'<span class="pill pill-green">Submitted</span>'
:
'<span class="pill pill-red">Pending / Overdue</span>';

tbody.innerHTML += `
<tr>
<td>${r.grade}</td>
<td>${r.teacher}</td>
<td>${r.period}</td>
<td>${badge}</td>
<td>${r.date}</td>
</tr>
`;

});

}

/* ==========================
   PERIOD TABS
========================== */

function activatePeriod(period){

document
.querySelectorAll('.period-tab')
.forEach(tab=>{

tab.classList.remove('active');

if(tab.dataset.period === period){
tab.classList.add('active');
}

});

renderSubmissionTable(period);

const filter =
document.getElementById('submissionFilter');

if(filter){
filter.value = period;
}

}

/* ==========================
   PAGE LOAD
========================== */

document.addEventListener('DOMContentLoaded',()=>{

renderSubmissionTable('overall');

const filter =
document.getElementById('submissionFilter');

if(filter){

filter.addEventListener('change',(e)=>{

renderSubmissionTable(
e.target.value
);

});

}

document
.querySelectorAll('.period-tab')
.forEach(tab=>{

tab.addEventListener('click',()=>{

activatePeriod(
tab.dataset.period
);

});

});

});

/* ==========================
   CURSOR GLOW
========================== */

const glow =
document.querySelector('.cursor-glow');

if(glow){

function updateGlowPosition(e){

const clientX =
e.touches
? e.touches[0].clientX
: e.clientX;

const clientY =
e.touches
? e.touches[0].clientY
: e.clientY;

glow.style.left =
clientX + 'px';

glow.style.top =
clientY + 'px';

glow.style.opacity =
'1';

}

document.addEventListener(
'mousemove',
updateGlowPosition
);

document.addEventListener(
'touchmove',
updateGlowPosition
);

document.addEventListener(
'touchstart',
updateGlowPosition
);

document.addEventListener(
'mouseleave',
()=>{
glow.style.opacity='0';
}
);

}

</script>
