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
