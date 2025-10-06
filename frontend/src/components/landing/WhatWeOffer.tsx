import { getIconByName } from "@/lib/utils/iconMap";
import { Service } from "@/types/landing-page";

export default function WhatWeOffer({ services }: { services: Service[] }) {
  return (
    <section className="bg-bgSecondary py-16">
      <div className="custom-container">
        <div className="section-header text-center">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">We provide everything you need to excel in competitive programming and build a successful career under one roof.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {services.map((service) => {
            const Icon = getIconByName(service.iconName);

            return (
              <div key={service.id} className="bg-bgPrimary p-8 rounded-xl shadow-sm custom-transition hover:-translate-y-1 hover:shadow-md">
                <div className="w-16 h-16 bg-accent-light rounded-lg flex items-center justify-center mb-6 text-primary text-xl">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-textPrimary mb-3">{service.title}</h3>
                <p className="text-textSecondary leading-7">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
