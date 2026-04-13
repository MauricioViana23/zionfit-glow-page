import { useState } from "react";

const FAQS = [
  { q: "Em quanto tempo vou sentir diferença?", a: "A maioria das clientes relata redução de inchaço nos primeiros 7 dias. Energia mais estável costuma ser percebida entre a 2ª e 3ª semana. Para resultados completos, recomendamos o uso contínuo por pelo menos 30 dias." },
  { q: "Preciso tomar em jejum?", a: "O ideal é tomar em jejum, antes da primeira refeição. Isso potencializa a absorção dos ativos e maximiza os efeitos anti-inflamatórios e metabólicos. Mas se não for possível, pode tomar em outro horário." },
  { q: "Qual é o sabor?", a: "Pink Lemonade — leve, refrescante e levemente adoçado com stevia. Nossas clientes costumam dizer que parece um suco. Muitas tomam com água com gás para uma experiência ainda melhor." },
  { q: "Tem contraindicações?", a: "O ZionFit é feito com ingredientes naturais e não contém estimulantes agressivos. Porém, gestantes, lactantes e pessoas com condições médicas específicas devem consultar um médico antes de iniciar o uso." },
  { q: "Como funciona a garantia de 15 dias?", a: "Se você não sentir diferença nos primeiros 15 dias de uso, basta entrar em contato com nosso atendimento. Devolvemos 100% do valor, sem perguntas e sem burocracia." },
  { q: "O ZionFit é aprovado pela ANVISA?", a: "Sim. O ZionFit é registrado e aprovado pela ANVISA como suplemento alimentar. Todos os ingredientes seguem as normas brasileiras de segurança alimentar." },
  { q: "Em quantos dias chega meu pedido?", a: "Após a confirmação do pagamento, o envio é feito em até 2 dias úteis. O prazo de entrega varia de 3 a 10 dias úteis dependendo da sua região. Você recebe o código de rastreamento por e-mail." },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[720px] px-4 py-14 sm:py-20">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.15em] text-zion-primary uppercase mb-2 block">DÚVIDAS FREQUENTES</span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zion-dark leading-tight">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-zion-border rounded-[14px] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-4 text-left min-h-[52px]"
              >
                <span className="text-sm font-bold text-zion-dark pr-4">{faq.q}</span>
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zion-primary text-white text-sm font-bold transition-transform ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 text-sm text-zion-muted leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
