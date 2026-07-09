import Image from "next/image";
import type { TranslationType } from "@/lang";

const iconMap = ["/icons/equipment.svg", "/icons/doctor.svg", "/icons/report.svg", "/icons/patient.svg"];

export default function WhyChoose({ t }: { t: TranslationType }) {

    return (
        <section className="container py-20">
            <div className="flex flex-col items-center text-center mb-14 space-y-5">
                <span className="text-sm  text-white bg-primary px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {t.whyChooseTitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight max-w-2xl">
                    {t.whyChooseTitleText}
                </h2>
                <p className="text-muted-foreground  text-sm sm:text-base leading-relaxed max-w-2xl">
                    {t.whyChooseDesc}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.whyChooseList.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="bg-background rounded-2xl p-6 flex flex-col items-start text-left"
                        >
                            <div className="w-32 h-32 flex items-center justify-center mb-5 shrink-0">
                                <Image src={iconMap[i]} alt="" width={80} height={80} />
                            </div>
                            <h3 className="text-base font-semibold text-foreground mb-2 uppercase">
                                {item.title}
                            </h3>
                            <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
