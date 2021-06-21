// This file to define functions about logistics (Array, Timer, Compare,...)

export const thoundsandSep=(x='')=>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}