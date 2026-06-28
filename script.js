const META = 4000;

function atualizarProgresso(valor) {
  arrecadado = Math.min(valor, META);

  const porcentagem = arrecadado / META;

  const runner = document.getElementById("runner");
  const texto = document.getElementById("current-value");

  const larguraRunner = 60;

  const jornada = document.querySelector(".journey");

  const larguraDisponivel = jornada.clientWidth - larguraRunner - 45;

  runner.style.left = `${porcentagem * larguraDisponivel}px`;

  const progresso = porcentagem * 100;

  if (progresso < 33) {
    texto.innerHTML = "Início da jornada..."; // Equipando a bombeira...
  } else if (progresso > 33 && progresso < 66) {
    texto.innerHTML = "A caminho do quartel...";
  } else if (progresso > 66 && progresso < 100) {
    texto.innerHTML = "Quase lá...";
  } else {
    texto.innerHTML = "Missão cumprida!";
  }
}

const donations = document.querySelectorAll(".donation");

const pixCard = document.getElementById("pixCard");
const pixTitle = document.getElementById("pixTitle");
const pixMessage = document.getElementById("pixMessage");

const pix = {
  30: "00020126430014br.gov.bcb.pix0114+55619833267640203Pix520400005303986540530.005802BR5925ANA_LIDIA_RODRIGUES_DA_SI6008BRASILIA62290525F27uVQc5Kil4awDABYxVFIGJA63047F8E",
  50: "00020126430014br.gov.bcb.pix0114+55619833267640203Pix520400005303986540550.005802BR5925ANA_LIDIA_RODRIGUES_DA_SI6008BRASILIA622905257vJj1FFdT3TLoYgdPx50jCHvP630465CE",
  100: "00020126430014br.gov.bcb.pix0114+55619833267640203Pix5204000053039865406100.005802BR5925ANA_LIDIA_RODRIGUES_DA_SI6008BRASILIA62290525iFQ9VPz9oNbLKvCFXoGYOqtPd6304F417",
  0: "00020126430014br.gov.bcb.pix0114+55619833267640203Pix5204000053039865802BR5925ANA_LIDIA_RODRIGUES_DA_SI6008BRASILIA62290525ON7MfEFbECvHHLiSS4A9MiRc86304DAD6"
};

donations.forEach((card) => {
  card.addEventListener("click", () => {
    donations.forEach((c) => c.classList.remove("highlight"));
    card.classList.add("highlight");
    const valor = Number(card.dataset.value);
    if (valor === 0) {
      document.getElementById("pixKey").value = pix[valor];
      pixTitle.innerHTML = "👑 Modo Chefão";
      pixMessage.innerHTML = "Você decidiu escolher outro valor. Qualquer ajuda é muito bem-vinda! ❤️";;
    } else {
      document.getElementById("pixKey").value = pix[valor];
      pixTitle.innerHTML = "🚒 Missão aceita!";
      pixMessage.innerHTML = ` Você escolheu fortalecer a missão com <strong>R$ ${valor}</strong>.<br><br> <strong>${fraseAleatoria()}</strong> `;
    }
    pixCard.classList.remove("hidden");
    pixCard.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

document.getElementById("copyPix").addEventListener("click", () => {
  const pix = document.getElementById("pixKey").value;
  if (!pix) {
    alert("Escolha um valor antes de copiar o PIX.");
    return;
  }
  navigator.clipboard.writeText(pix);
  const botao = document.getElementById("copyPix");
  botao.innerHTML = "✅ PIX copiado!";
  setTimeout(() => {
    botao.innerHTML = "📋 Copiar PIX";
  }, 2000);
});

const frases = [
  "🚒 O coturno agradece!",
  "🎒 Mais perto de completar o inventário.",
  "💪 Um passo mais perto da formatura!",
  "❤️ Obrigado por fortalecer essa missão!",
  "🔥 Equipamento desbloqueado (quase).",
  "😂 O instrutor continua bravo, mas agora com estilo.",
  "🧯 A carteira respirou por alguns segundos.",
  "📦 O enxoval ficou um pouquinho menos assustador.",
  "🚨 Missão aceita!",
  "☕ Agora já dá pra comprar alguns cafés de madrugada estudando.",
  "🏃 A personagem ganhou +10 de motivação.",
  "👨‍🚒 O caminhão de bombeiros ficou um pouquinho mais perto.",
  "🥾 Um cadarço do coturno já está garantido. 😅",
  "🫡 Reforço recebido. A missão continua!",
  "📣 O PIX foi convocado com sucesso!",
  "🚀 Velocidade da missão aumentada.",
  "❤️ Obrigado por fazer parte dessa história.",
  "🎒 Item desbloqueado: Meio par de meias.",
  "🚒 A equipe ganhou +1 apoiador.",
  "😂 Flexões futuras reduzidas em aproximadamente... nenhuma. Mas a felicidade aumentou bastante!",
  "❤️ Missão compartilhada com sucesso.",
];

function fraseAleatoria() {
  const indice = Math.floor(Math.random() * frases.length);

  return frases[indice];
}

const campanha = {
  meta: 4000,
  arrecadado: 0,
};

atualizarProgresso(campanha.arrecadado);
