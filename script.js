// =====================
// Multilingual Texts
// =====================
const texts = {
  en: {
    heroTitle: "Welcome to VIP AI Brain",
    heroDesc: "The smartest AI platform for Free, Premium & VIP users!",
    free: "Access basic AI features",
    premium: "Try powerful AI features once for free, then subscribe",
    vip: "Full AI power with subscription from day one",
    startFree: "Start Free",
    tryPremium: "Try Premium",
    subscribeVIP: "Subscribe VIP"
  },
  ar: {
    heroTitle: "مرحبا بك في VIP AI Brain",
    heroDesc: "أذكى منصة ذكاء اصطناعي للمستخدمين المجانيين والمميزين وVIP!",
    free: "الوصول إلى ميزات الذكاء الاصطناعي الأساسية",
    premium: "جرب ميزات قوية مرة واحدة مجانا ثم اشترك",
    vip: "الذكاء الاصطناعي الكامل مع الاشتراك من اليوم الأول",
    startFree: "ابدأ مجانًا",
    tryPremium: "جرب Premium",
    subscribeVIP: "اشترك VIP"
  },
  es: {
    heroTitle: "Bienvenido a VIP AI Brain",
    heroDesc: "La plataforma de IA más inteligente para usuarios Free, Premium & VIP!",
    free: "Accede a funciones básicas de IA",
    premium: "Prueba funciones poderosas una vez gratis, luego suscríbete",
    vip: "Todo el poder de IA con suscripción desde el primer día",
    startFree: "Comenzar Gratis",
    tryPremium: "Probar Premium",
    subscribeVIP: "Suscribirse VIP"
  }
};

// =====================
// Language Switcher
// =====================
function setLanguage(lang) {
  document.querySelector(".hero h1").innerText = texts[lang].heroTitle;
  document.querySelector(".hero p").innerText = texts[lang].heroDesc;

  const planDivs = document.querySelectorAll(".plan");
  planDivs[0].querySelector("p").innerText = texts[lang].free;
  planDivs[0].querySelector("button").innerText = texts[lang].startFree;

  planDivs[1].querySelector("p").innerText = texts[lang].premium;
  planDivs[1].querySelector("button").innerText = texts[lang].tryPremium;

  planDivs[2].querySelector("p").innerText = texts[lang].vip;
  planDivs[2].querySelector("button").innerText = texts[lang].subscribeVIP;
}

// =====================
// Plan Buttons Logic
// =====================
document.querySelector(".plan.free button").addEventListener("click", () => {
  alert("You started Free Plan! Enjoy your AI features.");
});

document.querySelector(".plan.premium button").addEventListener("click", () => {
  alert("You are trying Premium once for free! After this, subscription required.");
});

document.querySelector(".plan.vip button").addEventListener("click", () => {
  alert("VIP subscription required! Enjoy full AI power.");
});
