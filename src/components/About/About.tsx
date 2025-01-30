export function About() {
  return (
    <section
      id="sobre"
      className="flex max-w-7xl py-8 bg-zinc-900 rounded-md overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Sobre o jogo</h2>

        <div className="flex flex-col mb-6 gap-4">
          <h3 className="flex justify-center bg-zinc-700 w-full p-4 font-bold">
            Instruções de Jogo
          </h3>
          <p>
            Cada carta de meme possui dois atributos principais:{' '}
            <strong>ataque</strong> e <strong>vida</strong>. Durante o jogo, os
            jogadores podem utilizar as cartas para batalhar entre si. O valor
            de ataque determina o dano que a carta pode causar, enquanto o valor
            de vida representa a resistência da carta. O objetivo é reduzir a
            vida das cartas adversárias a zero, utilizando combinações
            estratégicas de cartas para vencer o jogo.
          </p>
        </div>

        <div className="flex flex-col mb-6 gap-4">
          <h3 className="flex justify-center bg-zinc-700 w-full p-4 font-bold">
            Padrão de Impressão
          </h3>
          <p>
            As cartas são impressas em papel de alta qualidade com acabamento
            fosco para garantir durabilidade e uma excelente sensação ao toque.
            Cada carta é cortada com precisão para proporcionar uma experiência
            de jogo fluida e sem interrupções.
          </p>
        </div>

        <div className="flex flex-col mb-6 gap-4">
          <h3 className="flex justify-center bg-zinc-700 w-full p-4 font-bold">
            Informações sobre o Criador
          </h3>
          <p>
            Este jogo foi criado por <strong>Daniel Orivaldo da Silva</strong>,
            um ilustrador e entusiasta de memes conhecido por sua habilidade em
            capturar a essência dos memes mais populares e transformá-los em
            experiências de jogo divertidas. Daniel tem uma vasta experiência em
            design gráfico e cultura pop, o que reflete em cada uma de suas
            criações.
          </p>
        </div>
      </div>
    </section>
  )
}
