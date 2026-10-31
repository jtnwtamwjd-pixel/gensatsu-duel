/* Presentation only: never writes to card definitions, saves, or duel state. */
(() => {
  'use strict';
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
    return {cls:'ill painted',sty:'',html:`<i class="paint sheet-${sheet} tile-${tile}" aria-hidden="true"></i>`};
  };
})();
