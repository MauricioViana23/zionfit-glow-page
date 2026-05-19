const PHASES = [
  {
    num: 1,
    time: "Dias 1 – 7",
    title: "Ativação",
    desc: "Hibisco e gengibre começam a drenar o excesso de líquidos. Você sente o corpo mais leve já na primeira semana.",
  },
  {
    num: 2,
    time: "Semanas 2 – 3",
    title: "Aceleração",
    desc: "Chá verde, canela e cromo reativam o metabolismo. Energia estável o dia todo, sem aquela fome desproporcional.",
  },
  {
    num: 3,
    time: "Semana 4 +",
    title: "Equilíbrio",
    desc: "Corpo em harmonia. Metabolismo ativo, inchaço controlado, energia constante. O resultado se consolida.",
  },
];

export function HowItWorksPhases() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#F6F2EE" }}>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #E96A92 0%, transparent 65%)" }} />

      <div className="relative mx-auto max-w-3xl px-5 py-24 sm:py-32 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase mb-5 block" style={{ color: "#E96A92" }}>
            — A Jornada
          </span>
          <h2 className="font-display text-[38px] leading-[1.05] sm:text-5xl tracking-tight" style={{ color: "#2A1720" }}>
            Três fases que<br />
            <em className="italic font-light" style={{ color: "#7C4A5C" }}>transformam seu corpo.</em>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(233,106,146,0.4), rgba(233,106,146,0.4), transparent)" }}
          />

          <div className="space-y-10 sm:space-y-14">
            {PHASES.map((p, idx) => (
              <div
                key={p.num}
                className={`relative pl-20 sm:pl-0 sm:flex sm:items-center ${idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                {/* Node dot */}
                <div className="absolute left-6 sm:left-1/2 top-8 -translate-x-1/2 z-10">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      background: "#E96A92",
                      boxShadow: "0 0 0 6px rgba(255,255,255,0.9), 0 0 0 7px rgba(233,106,146,0.2), 0 0 24px rgba(233,106,146,0.6)",
                    }}
                  />
                </div>

                {/* Spacer for desktop alternating */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Card */}
                <div className={`sm:w-1/2 ${idx % 2 === 0 ? "sm:pl-12" : "sm:pr-12"}`}>
                  <div
                    className="relative overflow-hidden p-7 sm:p-9"
                    style={{
                      borderRadius: "32px",
                      background: "linear-gradient(140deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 100%)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.7)",
                      boxShadow: "0 20px 60px -20px rgba(42,23,32,0.18), 0 4px 20px -8px rgba(233,106,146,0.15)",
                    }}
                  >
                    {/* Big background number */}
                    <span
                      className="absolute -top-6 -right-2 font-display text-[180px] leading-none italic font-light select-none"
                      style={{ color: "rgba(233,106,146,0.08)" }}
                    >
                      {p.num}
                    </span>

                    <span className="relative text-[11px] font-medium tracking-[0.25em] uppercase mb-3 block" style={{ color: "#E96A92" }}>
                      {p.time}
                    </span>
                    <h3 className="relative font-display text-3xl sm:text-4xl tracking-tight mb-4 leading-tight" style={{ color: "#2A1720" }}>
                      {p.title}
                    </h3>
                    <p className="relative text-[15px] leading-relaxed" style={{ color: "#6B5862" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
