const stateFinance='https://www.campaignfinanceonline.pa.gov/pages/CFReportSearch.aspx';
const ballot='https://www.pavoterservices.pa.gov/electioninfo/ElectionInfo.aspx';
const candidates=[
 {name:'Josh Shapiro',party:'Democratic',office:'Governor',type:'Executive incumbent',record:'Governors do not cast legislative roll-call votes. Review official actions and the campaign’s stated priorities directly.',history:'https://www.pa.gov/governor/',platform:'https://joshshapiro.org/'},
 {name:'Stacy Garrity',party:'Republican',office:'Governor',type:'State treasurer',record:'The state treasurer does not cast General Assembly roll-call votes. Review official Treasury work and her campaign positions.',history:'https://www.patreasury.gov/',platform:'https://stacyforpa.com/'},
 {name:'Austin Davis',party:'Democratic',office:'Lieutenant Governor',type:'Executive incumbent · former state representative',record:'Past legislative service may have roll calls. Review the General Assembly archive by member and session; the lieutenant governor does not vote in House roll calls.',history:'https://www.palegis.us/',platform:'https://www.pa.gov/ltgovernor/'},
 {name:'Jason Richey',party:'Republican',office:'Lieutenant Governor',type:'Challenger',record:'No legislative voting history is asserted here. Compare his stated platform with opponents’ official records; an opponent’s votes are not his votes.',history:null,platform:ballot}
];
const cards=document.querySelector('#cards');
function link(url,label){return url?`<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`:''}
function render(){let chosen=document.querySelector('#office').value;cards.innerHTML=candidates.filter(c=>chosen==='all'||c.office===chosen).map(c=>`<article class="card"><div class="cardtop"><span class="tag ${c.party==='Democratic'?'blue':'red'}">${c.party}</span><span>${c.office}</span></div><h3>${c.name}</h3><p class="muted">${c.type}</p><details><summary>Voting record & platform</summary><p>${c.record}</p><div class="links">${link(c.history,'Official record')}${link(c.platform,'Platform / office')}${link(stateFinance,'Finance filings')}${link(ballot,'Confirm ballot')}</div></details></article>`).join('')}
document.querySelector('#office').addEventListener('change',render);render();

// User-supplied records are kept only in this browser. The published page ships empty.
const ledgerKey='pa-civic-money-map-ledger-v1';
let ledger=[];
try { const saved=JSON.parse(localStorage.getItem(ledgerKey)||'[]'); if(Array.isArray(saved)) ledger=saved.filter(x=>x&&typeof x==='object').slice(0,500); } catch {}
const form=document.querySelector('#ledger-form');
const rows=document.querySelector('#ledger-rows');
const status=document.querySelector('#ledger-status');
const exportButton=document.querySelector('#export-ledger');
function saveLedger(){try{localStorage.setItem(ledgerKey,JSON.stringify(ledger));return true}catch{return false}}
function renderLedger(){
  rows.replaceChildren();
  ledger.forEach((entry,index)=>{
    const tr=document.createElement('tr');
    for(const value of [entry.source,entry.recipient,entry.kind,entry.date,Number(entry.amount).toLocaleString('en-US',{style:'currency',currency:'USD'})]){
      const td=document.createElement('td');td.textContent=value;tr.append(td);
    }
    const evidence=document.createElement('td');const a=document.createElement('a');a.textContent='Source ↗';a.href=entry.url;a.target='_blank';a.rel='noopener noreferrer';evidence.append(a);tr.append(evidence);
    const action=document.createElement('td');const remove=document.createElement('button');remove.type='button';remove.className='remove';remove.textContent='Remove';remove.setAttribute('aria-label',`Remove record ${index+1}`);remove.addEventListener('click',()=>{ledger.splice(index,1);saveLedger();renderLedger()});action.append(remove);tr.append(action);rows.append(tr);
  });
  status.textContent=ledger.length?`${ledger.length} locally entered record${ledger.length===1?'':'s'} · ${ledger.reduce((sum,x)=>sum+Number(x.amount||0),0).toLocaleString('en-US',{style:'currency',currency:'USD'})} across all record types (do not treat as net fundraising)`:'No records entered.';
  exportButton.disabled=!ledger.length;
}
form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const data=Object.fromEntries(new FormData(form));
  const url=new URL(data.url);
  if(!['https:','http:'].includes(url.protocol)){status.textContent='Use an HTTP or HTTPS source link.';return}
  if(ledger.length>=500){status.textContent='This worksheet supports up to 500 records. Export the CSV before adding more.';return}
  ledger.push({...data,url:url.href,amount:Number(data.amount).toFixed(2)});
  const saved=saveLedger();form.reset();renderLedger();
  if(!saved)status.textContent+=' Browser storage is unavailable; export now to keep these records.';
});
exportButton.addEventListener('click',()=>{
  const fields=['source','recipient','kind','date','amount','url'];
  const quote=value=>'"'+String(value??'').replaceAll('"','""')+'"';
  // Prefix spreadsheet formula triggers so opening a CSV cannot execute a user-supplied value.
  const safe=value=>/^[\s]*[=+\-@]/.test(String(value??''))?"'"+value:value;
  const csv=[fields.join(','),...ledger.map(x=>fields.map(f=>quote(f==='amount'?x[f]:safe(x[f]))).join(','))].join('\r\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});const href=URL.createObjectURL(blob);const a=document.createElement('a');a.href=href;a.download='pa-civic-evidence-ledger.csv';a.click();setTimeout(()=>URL.revokeObjectURL(href),1000);
});
renderLedger();
