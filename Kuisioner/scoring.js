function susScore(a) { return a.length === 10 && a.every(v => Number.isInteger(v) && v >= 1 && v <= 5) ? a.reduce((s,v,i) => s + (i % 2 === 0 ? v-1 : 5-v),0)*2.5 : null; }
function asqScore(a) { const valid=a.filter(v=>Number.isInteger(v)&&v>=1&&v<=7); return valid.length ? valid.reduce((s,v)=>s+v,0)/valid.length : null; }
if(typeof module !== 'undefined') module.exports={susScore,asqScore};
