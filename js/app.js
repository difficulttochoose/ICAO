console.log('App was loaded...');
// const str1={lit:'A',word:};
// const str2={lit:'B',word:};
// const str3={lit:'C',word:};
// const str4={lit:'D',word:};
// const str5={lit:'E',word:};
// const str6={lit:'F',word:};
// const str7={lit:'G',word:};
// const str8={lit:'H',word:};
// const str9={lit:'I',word:};
// const str10={lit:'J',word:};
// const str11={lit:'K',word:};
// const str12={lit:'L',word:};
// const str13={lit:'M',word:};
// const str14={lit:'N',word:};
// const str15={lit:'O',word:};
// const str16={lit:'P',word:};
// const str17={lit:'Q',word:};
// const str18={lit:'R',word:};
// const str19={lit:'S',word:};
// const str20={lit:'T',word:};
// const str21={lit:'U',word:};
// const str22={lit:'V',word:};
// const str23={lit:'W',word:};
// const str24={lit:'X',word:};
// const str25={lit:'Y',word:};
// const str26={lit:'Z',word:};
// const str27={lit:'0',word:};
// const str28={lit:'1',word:};
// const str29={lit:'2',word:};
// const str30={lit:'3',word:};
// const str31={lit:'4',word:};
// const str32={lit:'5',word:};
// const str33={lit:'6',word:};
// const str34={lit:'7',word:};
// const str35={lit:'8',word:};
// const str36={lit:'9',word:};
const word=['Álfa','Brávo','Chárlie','Délta','Écho','Fóxtrot','Gólf','Hotél','Índia','Júliett','Kílo','Líma','Míke','Novémber','Óscar','Papá','Quebéc','Rómeo','Siérra','Tángo','Úniform','Víctor','Whísky','X́ray','Yánkee','Zúlu','Nadazero','Unaone','Bissotwo','Terrathree','Kartefour','Pantafive','Soxisix','Setteseven','Oktoeight','Novenine'];
const lit=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','X','0','1','2','3','4','5','6','7','8','9'];//={}
let code = prompt('Enter your code:');
code.split('');
for(let i=0;i<code.length;i++)
{
    for(let j=0;j<lit.length;j++)
       if(code[i]==lit[j]) 
            console.log(word[j]);
}

//const locale='word';
//console.log(`${}`)