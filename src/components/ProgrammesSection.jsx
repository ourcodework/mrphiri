import React, { Component } from 'react'
import { GraduationCap, Leaf, HardHat, Zap } from "lucide-react";

const qctoPrograms = [
  "Occupational Certificate: Pest Management Officer (NQF Level 05)",
  "Occupational Certificate: Garden Worker (NQF Level 02)",
  "Occupational Certificate: Landscape Gardener / Landscaping Supervisor (NQF Level 03)",
  "Occupational Skills Programme: Intermediate End User Computing (NQF Level 04)",
];

const agriShortSkills = [
  "Horticulture", "Landscaping", "Landscape Irrigation", "Crop Production",
  "Animal Production", "Poultry Production", "Mixed Farming", "Abattoir Processes",
];

const agriCompliance = [
  "First Aid", "Health & Safety", "Drive a Tractor",
  "Employment Rights & Responsibilities (BCEA, Labour Relations Act, Employment Equity)",
];

const cetaPrograms = [
  "Community House Building (NQF Level 2)",
  "Building & Civil Construction (NQF Level 2)",
  "Plumbing (NQF Level 4)",
  "Construction Plant Operations (NQF Level 2)",
];

const ewsetaPrograms = [
  "Electrical Engineering", "Renewable Energy",
  "Water & Wastewater Treatment", "Hot Water Systems Installation",
];

const ProgrammeList = ({ items }) => (
  <ul className="grid sm:grid-cols-2 gap-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-border">
        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
        <span className="text-sm text-foreground">{item}</span>
      </li>
    ))}
  </ul>
);

export class ProgrammesSection extends Component {
  render() {
    return (
      <section id="programmes" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Our Programmes</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            Accredited Training Programmes
          </h2>
        </div>

        <Tabs defaultValue="qcto" className="max-w-4xl mx-auto">
          <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
            <TabsTrigger value="qcto" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-5 py-2.5 border border-border">
              <GraduationCap className="w-4 h-4" /> QCTO
            </TabsTrigger>
            <TabsTrigger value="agriseta" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-5 py-2.5 border border-border">
              <Leaf className="w-4 h-4" /> AgriSETA
            </TabsTrigger>
            <TabsTrigger value="ceta" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-5 py-2.5 border border-border">
              <HardHat className="w-4 h-4" /> CETA
            </TabsTrigger>
            <TabsTrigger value="ewseta" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-5 py-2.5 border border-border">
              <Zap className="w-4 h-4" /> EWSETA
            </TabsTrigger>
          </TabsList>

          <TabsContent value="qcto" className="animate-fade-in">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">QCTO Accredited Training</h3>
            <ProgrammeList items={qctoPrograms} />
          </TabsContent>

          <TabsContent value="agriseta" className="animate-fade-in">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Short Skills Programmes</h3>
            <ProgrammeList items={agriShortSkills} />
            <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-4">Compliance Training</h3>
            <ProgrammeList items={agriCompliance} />
          </TabsContent>

          <TabsContent value="ceta" className="animate-fade-in">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">CETA Programmes</h3>
            <ProgrammeList items={cetaPrograms} />
          </TabsContent>

          <TabsContent value="ewseta" className="animate-fade-in">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">EWSETA Programmes</h3>
            <ProgrammeList items={ewsetaPrograms} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
    )
  }
}

export default ProgrammesSection