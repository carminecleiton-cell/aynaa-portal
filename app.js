const demoSales=[{fecha:"2026-03-01",canal:"Mercado Libre",producto:"Kit papelería escolar",cliente:"Cliente A",cantidad:4,precio_unitario:180,costo_unitario:110},{fecha:"2026-03-01",canal:"Tienda física",producto:"Libreta profesional",cliente:"Cliente B",cantidad:8,precio_unitario:42,costo_unitario:25}];
const STORAGE_KEY="aynaa_sales";
function saveSales(data){localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}
function getSales(){return JSON.parse(localStorage.getItem(STORAGE_KEY))||[]}
function renderApp(){console.log("Aynaa Dashboard activo con persistencia en LocalStorage");}
document.addEventListener("DOMContentLoaded",()=>{if(!localStorage.getItem(STORAGE_KEY))saveSales(demoSales);renderApp();});