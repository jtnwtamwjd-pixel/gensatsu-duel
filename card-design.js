/* Presentation only: never writes to card definitions, saves, or duel state. */
(() => {
  'use strict';
  // Dedicated illustrations take precedence over shared theme sheets.
  // Add an ID here only after its image has been generated and checked.
  const individual = {d0:'webp', d1:'png', d2:'png', d3:'webp', d4:'webp', d5:'png', d6:'png', d7:'webp'};
  Object.assign(individual, {"sk01":"jpg","sk02":"jpg","sk03":"jpg","sk04":"jpg","sk05":"jpg","sk06":"jpg","sk07":"jpg","sk08":"jpg","sk09":"jpg","sk10":"jpg","sk11":"jpg","sk12":"jpg","sk13":"jpg","sk14":"jpg","sk15":"jpg","sk16":"jpg","sk17":"jpg","sk18":"jpg","sk19":"jpg","sk20":"jpg","sk21":"jpg","sk22":"jpg","sk23":"jpg","sk24":"jpg","sk25":"jpg","sk26":"jpg","sk27":"jpg","sk28":"jpg","sk29":"jpg","sk30":"jpg","sk31":"jpg","sk32":"jpg","sk33":"jpg","sk34":"jpg"});
  Object.assign(individual, {"kk01":"webp","kk02":"webp","kk03":"webp","kk04":"webp","kk05":"webp","kk06":"webp","kk07":"webp","kk08":"webp","kk09":"webp","kk10":"webp","kk11":"webp","kk12":"webp","kk13":"webp","kk14":"webp","kk15":"webp","kk16":"webp","kk17":"webp","kk18":"webp","kk19":"webp","kk20":"webp","kk21":"webp","kk22":"webp","kk23":"webp","kk24":"webp","kk25":"webp","kk26":"webp","kk27":"webp","kk28":"webp","kk29":"webp","kk30":"webp","dm01":"webp","dm02":"webp","dm03":"webp","dm04":"webp","dm05":"webp","dm06":"webp","dm07":"webp","dm08":"webp","dm09":"webp","dm10":"webp","dm11":"webp","dm12":"webp","dm13":"webp","dm14":"webp","dm15":"webp","dm16":"webp","dm17":"webp","dm18":"webp","dm19":"webp","dm20":"webp","dm21":"webp","dm22":"webp","dm23":"webp","dm24":"webp","dm25":"webp","dm26":"webp","dm27":"webp","dm28":"webp","dm29":"webp","dm30":"webp","dm31":"webp","dm32":"webp"});
  Object.assign(individual, {"ab01":"jpg","ab02":"jpg","ab03":"jpg","ab04":"jpg","ab05":"jpg","ab06":"jpg","ab07":"jpg","ab08":"jpg","ab09":"jpg","ab10":"jpg","ab11":"jpg","ab12":"jpg","ab13":"jpg","ab14":"jpg","ab15":"jpg","ab16":"jpg","ab17":"jpg","ab18":"jpg","ab19":"jpg","ab20":"jpg","ab21":"jpg","ab22":"jpg","ab23":"jpg","ab24":"jpg","ab25":"jpg","ab26":"jpg","ab27":"jpg","ab28":"jpg","ab29":"jpg","ab30":"jpg","ab31":"jpg","ab32":"jpg","ab33":"jpg","ab34":"jpg"});
  const themes = {
    '星騎士': ['monsters',4], '深海':['monsters',11], '忍':['themes',8],
    '雷神':['themes',9], '獣王':['monsters',8], '魔導':['monsters',5],
    '死霊':['monsters',14], '花妖精':['themes',3], '天使':['monsters',10],
    '恐竜':['themes',4], '昆虫':['monsters',13], '冥王':['monsters',9],
    '侍':['themes',0], '海賊':['themes',1], '妖怪':['themes',2],
    '時計仕掛け':['themes',14], '結界':['themes',10], '王国':['monsters',4],
    '剣闘士':['monsters',4], '人形':['themes',5], '氷河':['themes',6],
    '錬金術':['themes',7], '次元':['themes',13], 'ユナイト':['monsters',6],
    'アセンド':['monsters',4], '神官':['themes',10], 'ハーモニア':['themes',12],
    'ヴァルキリー':['themes',11], 'ドラグーン':['monsters',1],
    'ミラージュ':['themes',15], 'ネメシス':['monsters',9]
  };
  const exact = {
    d0:['monsters',0],d1:['monsters',0],d2:['monsters',2],d3:['monsters',4],
    d4:['monsters',15],d5:['monsters',0],d6:['themes',10],d7:['monsters',1],
    d8:['monsters',1],d9:['monsters',2],da:['monsters',12],db:['monsters',0],
    dc:['monsters',1],df:['monsters',1],ff:['monsters',1],sd:['monsters',3],
    sc:['monsters',3],xd:['monsters',1],lw:['monsters',7],l2:['monsters',7],
    s_bolt:['spells',0],s_hole:['spells',1],s_wind:['spells',2],s_draw:['spells',3],
    s_burn:['spells',4],s_rev:['spells',5],s_eq:['spells',6],s_fus:['spells',7],
    s_heal:['spells',12],t_spr:['spells',8],t_pit:['spells',9],t_shd:['spells',10],
    t_mir:['spells',14]
  };
  function pick(d) {
    if(exact[d.id]) return exact[d.id];
    const n=d.name||'';
    if(d.type!=='monster') {
      if(d.sub==='field') return ['spells',15];
      if(/雷|電撃/.test(n)) return ['spells',0];
      if(/炎|火|爆|隕/.test(n)) return ['spells',d.type==='trap'?1:4];
      if(/風|嵐|渦/.test(n)) return ['spells',2];
      if(/融合|合成|合体/.test(n)) return ['spells',7];
      if(/蘇|再生|帰還|復活/.test(n)) return ['spells',5];
      if(/剣|刀|装備|武装/.test(n)) return ['spells',6];
      if(/槍|迎撃/.test(n)) return ['spells',8];
      if(/盾|守|防|結界/.test(n)) return ['spells',10];
      if(/穴|奈落|陥|落とし/.test(n)) return ['spells',9];
      if(/鎖|封|束縛/.test(n)) return ['spells',11];
      if(/回復|癒|治|生命/.test(n)) return ['spells',12];
      if(/時|時計/.test(n)) return ['spells',13];
      if(/鏡|幻|反射/.test(n)) return ['spells',14];
      return ['spells',d.type==='trap'?11:3];
    }
    if(d.kind==='link'||d.race==='サイバース') return ['monsters',7];
    if(d.attr==='神') return ['monsters',10];
    if(d.race==='ドラゴン') return ['monsters',d.lv<=3?0:d.attr==='風'?2:d.attr==='光'||d.attr==='水'?3:1];
    if(themes[d.theme]) return themes[d.theme];
    if(d.race==='機械') return ['monsters',6];
    if(d.race==='魔法使い') return ['monsters',5];
    if(d.race==='戦士'||d.race==='獣戦士') return ['monsters',4];
    if(d.race==='天使') return ['monsters',10];
    if(d.race==='悪魔') return ['monsters',9];
    if(d.race==='アンデット') return ['monsters',14];
    if(d.race==='昆虫') return ['monsters',13];
    if(d.race==='恐竜') return ['themes',4];
    if(d.race==='爬虫類') return ['monsters',15];
    if(d.race==='植物') return ['themes',3];
    if(d.race==='岩石') return ['monsters',12];
    if(d.race==='獣'||d.race==='鳥獣') return ['monsters',8];
    if(d.attr==='水') return ['monsters',11];
    if(d.attr==='地') return ['monsters',12];
    if(d.attr==='炎') return ['monsters',15];
    if(d.attr==='光') return ['monsters',10];
    return ['monsters',5];
  }
  window.phantomCardArt = function(d) {
    const [sheet,tile]=pick(d);
    const fallback=`<i class="paint sheet-${sheet} tile-${tile}" aria-hidden="true"></i>`;
    if (individual[d.id]) {
      return {cls:'ill painted',sty:'',html:`${fallback}<img class="individual-card-art" src="assets/cards/individual/${d.id}.${individual[d.id]}" alt="" decoding="async">`};
    }
    return {cls:'ill painted',sty:'',html:fallback};
  };
  // Keep the shared artwork visible if a dedicated image cannot be loaded.
  document.addEventListener('error', event => {
    if (event.target instanceof HTMLImageElement && event.target.classList.contains('individual-card-art')) {
      event.target.remove();
    }
  }, true);
})();
