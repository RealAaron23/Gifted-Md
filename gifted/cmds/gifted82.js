/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */

(function(_0x3241ab,_0x23d694){const _0xf3033d=_0x5950,_0x20732b=_0x3241ab();while(!![]){try{const _0x59ad6=-parseInt(_0xf3033d(0x141))/0x1*(-parseInt(_0xf3033d(0x145))/0x2)+parseInt(_0xf3033d(0x12b))/0x3+parseInt(_0xf3033d(0x130))/0x4*(-parseInt(_0xf3033d(0x138))/0x5)+-parseInt(_0xf3033d(0x133))/0x6*(parseInt(_0xf3033d(0x142))/0x7)+parseInt(_0xf3033d(0x13d))/0x8*(-parseInt(_0xf3033d(0x126))/0x9)+-parseInt(_0xf3033d(0x144))/0xa+parseInt(_0xf3033d(0x139))/0xb;if(_0x59ad6===_0x23d694)break;else _0x20732b['push'](_0x20732b['shift']());}catch(_0x169918){_0x20732b['push'](_0x20732b['shift']());}}}(_0x3ec6,0x760d3));function _0x5950(_0x25a004,_0x11cdc9){const _0x3ec6fe=_0x3ec6();return _0x5950=function(_0x5950ff,_0xb2c703){_0x5950ff=_0x5950ff-0x122;let _0x237cf6=_0x3ec6fe[_0x5950ff];return _0x237cf6;},_0x5950(_0x25a004,_0x11cdc9);}import _0x1dc3dc from'../giftech.js';import{writeFile,unlink}from'fs/promises';function _0x3ec6(){const _0x4f4965=['image','335CvYhIs','24084918nVWNJg','sender','mtype','find','6834264SjnUMH','isGroup','*You\x20Are\x20Not\x20an\x20Admin!*','download','5269AwORxO','1561406fSkgUz','decodeJid','5104120jChrLi','38QEPLVz','trim','slice','length','fullppgc','participants','error','quoted','toLowerCase','imageMessage','w:profile:picture','reply','match','9rkjNTS','.png','from','user','admin','2406606VkCJOj','Send/Reply\x20with\x20an\x20image\x20to\x20set\x20your\x20profile\x20picture\x20','Error\x20setting\x20profile\x20picture:','now','startsWith','47612XiVDjV','Profile\x20picture\x20Updated\x20Successfully.','includes','12BcXTgK','Error\x20setting\x20profile\x20picture.','Failed\x20to\x20download\x20Media.','body'];_0x3ec6=function(){return _0x4f4965;};return _0x3ec6();}import _0x2712f0 from'../../set.cjs';const setProfilePictureGroup=async(_0x546b35,_0x30c944)=>{const _0x326d77=_0x5950,_0x19dafc=_0x546b35[_0x326d77(0x136)][_0x326d77(0x125)](/^[\\/!#.]/),_0x4fed99=_0x19dafc?_0x19dafc[0x0]:'/',_0x5f1f6c=_0x546b35[_0x326d77(0x136)][_0x326d77(0x12f)](_0x4fed99)?_0x546b35[_0x326d77(0x136)]['slice'](_0x4fed99[_0x326d77(0x148)])['split']('\x20')[0x0][_0x326d77(0x14d)]():'',_0x2c4f35=_0x546b35[_0x326d77(0x136)][_0x326d77(0x147)](_0x4fed99[_0x326d77(0x148)]+_0x5f1f6c['length'])[_0x326d77(0x146)](),_0x4d0a6f=['setppfullgroup','setfullprofilepicgc',_0x326d77(0x149)];if(_0x4d0a6f[_0x326d77(0x132)](_0x5f1f6c)){if(!_0x546b35[_0x326d77(0x13e)])return _0x546b35[_0x326d77(0x124)]('*Group\x20Only\x20Commands!*');const _0x308991=await _0x30c944['groupMetadata'](_0x546b35[_0x326d77(0x128)]),_0x4f2ce6=_0x308991[_0x326d77(0x14a)],_0x1b28a5=await _0x30c944[_0x326d77(0x143)](_0x30c944[_0x326d77(0x129)]['id']),_0x98cf25=_0x4f2ce6[_0x326d77(0x13c)](_0x292ae4=>_0x292ae4['id']===_0x1b28a5)?.[_0x326d77(0x12a)],_0x13473f=_0x4f2ce6['find'](_0xb5213b=>_0xb5213b['id']===_0x546b35[_0x326d77(0x13a)])?.[_0x326d77(0x12a)];if(!_0x98cf25)return _0x546b35[_0x326d77(0x124)]('*Bot\x20is\x20Not\x20Admin!*');if(!_0x13473f)return _0x546b35[_0x326d77(0x124)](_0x326d77(0x13f));if(!_0x546b35[_0x326d77(0x14c)]||_0x546b35[_0x326d77(0x14c)][_0x326d77(0x13b)]!==_0x326d77(0x122))return _0x546b35[_0x326d77(0x124)](_0x326d77(0x12c)+(_0x4fed99+_0x5f1f6c));try{const _0x530969=await _0x546b35[_0x326d77(0x14c)][_0x326d77(0x140)]();if(!_0x530969)throw new Error(_0x326d77(0x135));const _0x8a437b='./'+Date[_0x326d77(0x12e)]()+_0x326d77(0x127);await writeFile(_0x8a437b,_0x530969);try{const {img:_0x2977f6}=await _0x1dc3dc(_0x530969);await _0x30c944['query']({'tag':'iq','attrs':{'to':_0x546b35[_0x326d77(0x128)],'type':'set','xmlns':_0x326d77(0x123)},'content':[{'tag':'picture','attrs':{'type':_0x326d77(0x137)},'content':_0x2977f6}]}),_0x546b35[_0x326d77(0x124)](_0x326d77(0x131));}catch(_0x5c7cd9){throw _0x5c7cd9;}finally{await unlink(_0x8a437b);}}catch(_0x12dd27){console[_0x326d77(0x14b)](_0x326d77(0x12d),_0x12dd27),_0x546b35[_0x326d77(0x124)](_0x326d77(0x134));}}};export default setProfilePictureGroup;

/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */
