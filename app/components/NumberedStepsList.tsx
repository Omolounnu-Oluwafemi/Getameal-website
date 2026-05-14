import Image from "next/image";

export interface StepItem {
  number: number | string;
  title: string;
  desc: string;
  mobileDesc?: string;
  img: string;
  bg: string;
}

interface Props {
  steps: StepItem[];
  className?: string;
}

export default function NumberedStepsList({ steps, className = "" }: Props) {
  return (
    <div className={className}>
      {steps.map((step, idx) => (
        <div key={String(step.number)} className="flex gap-4 sm:gap-8">
          {/* Left: circle number + dashed connector */}
          <div className="flex flex-col items-center">
            <div className="w-6.5 h-6.5 rounded-full bg-[#F7F7F7] flex items-center justify-center text-sm font-bold text-black shrink-0">
              {step.number}
            </div>
            {idx < steps.length - 1 && (
              <div
                className="flex-1 w-px my-2"
                style={{
                  background:
                    "repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 5px, transparent 5px, transparent 11px)",
                }}
              />
            )}
          </div>

          {/* Right: image + text */}
          <div
            className={`flex items-start gap-3 sm:gap-4 ${idx < steps.length - 1 ? "pb-6" : ""}`}
          >
            <div
              className={`w-15 h-15.75 rounded-xl ${step.bg} shrink-0 relative overflow-hidden`}
            >
              <Image
                src={step.img}
                alt={step.title}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="font-bold text-black text-base">{step.title}</p>
              <p className="text-[#5C5C5C] text-sm mt-0.5 leading-snug">
                {step.mobileDesc ? (
                  <>
                    <span className="md:hidden">{step.mobileDesc}</span>
                    <span className="hidden md:inline">{step.desc}</span>
                  </>
                ) : (
                  step.desc
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
