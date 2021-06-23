// This file to define functions about logistics (Array, Timer, Compare,...)

export const thoundsandSep=(x='')=>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const checkn = (str='') => {
   let char=''
    for (let i = 0; i < str.length; i++) {
       const element = str[i];
       char = element
   }
   if(char=="n"){
       return char
   }
}