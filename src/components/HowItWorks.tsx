import { FileText, CheckCircle, Briefcase, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Application',
      description: 'Submit your application through our simple online form. No complicated paperwork required.',
    },
    {
      icon: CheckCircle,
      title: 'Verification',
      description: 'We verify your documents and help you complete all official requirements for legal work in Poland.',
    },
    {
      icon: Briefcase,
      title: 'Training & Setup',
      description: 'Get onboarded with the platforms, receive training, and access our car rental if needed.',
    },
    {
      icon: TrendingUp,
      title: 'Start Earning',
      description: 'Begin working immediately with full support and stable income opportunities in Warsaw.',
    },
  ];

  return (
    <section className="py-20 bg-kaukaz-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-kaukaz-milk">
            Start your journey in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-2xl p-6 hover:border-kaukaz-accent transition-all hover:bg-kaukaz-white/10"
            >
              <div className="absolute -top-4 -left-4 bg-kaukaz-accent text-kaukaz-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="mb-4">
                <step.icon size={40} className="text-kaukaz-accent" />
              </div>
              <h3 className="text-xl font-bold text-kaukaz-white mb-3">{step.title}</h3>
              <p className="text-kaukaz-milk/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
