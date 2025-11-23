import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('biography');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const timelineEvents = [
    { year: '1870', title: 'Рождение', description: 'Родился в купеческой семье' },
    { year: '1895', title: 'Начало предпринимательской деятельности', description: 'Основание первого производства' },
    { year: '1905', title: 'Расширение бизнеса', description: 'Открытие заводов в трёх городах' },
    { year: '1914', title: 'Военные поставки', description: 'Производство для нужд армии' },
    { year: '1917', title: 'Революционные события', description: 'Адаптация к новым условиям' },
    { year: '1925', title: 'Наследие', description: 'Передача дела следующему поколению' }
  ];

  const achievements = [
    {
      icon: 'Factory',
      title: 'Промышленное производство',
      description: 'Основал сеть заводов по всей Российской империи'
    },
    {
      icon: 'Users',
      title: 'Социальные программы',
      description: 'Создал программы обучения и поддержки рабочих'
    },
    {
      icon: 'Award',
      title: 'Государственные награды',
      description: 'Удостоен нескольких императорских наград'
    },
    {
      icon: 'TrendingUp',
      title: 'Экономический рост',
      description: 'Внёс значительный вклад в развитие регионов'
    }
  ];

  return (
    <div className="min-h-screen bg-background archive-grain">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Валентин Муравьёв</h1>
            <div className="hidden md:flex gap-6">
              {['biography', 'achievements', 'timeline', 'legacy'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent font-semibold' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'biography' && 'Биография'}
                  {section === 'achievements' && 'Достижения'}
                  {section === 'timeline' && 'Хронология'}
                  {section === 'legacy' && 'Наследие'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">1870 - 1940</p>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                  Валентин Муравьёв
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Российский предприниматель, промышленник и филантроп, оставивший значительный след 
                  в развитии отечественной индустрии начала XX века
                </p>
              </div>
              <div className="animate-slide-in">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-4 border-border shadow-2xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/0610d694-399d-49a6-9ebd-8305ef5923bc/files/30e74ce8-125c-4956-8a2f-5e6059e2575b.jpg"
                    alt="Валентин Муравьёв"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <section id="biography" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8 animate-slide-in">
              <Icon name="BookOpen" size={32} className="text-accent" />
              <h3 className="text-4xl font-bold text-primary">Биография</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="border-2 border-border bg-card/50 backdrop-blur h-full">
                  <CardContent className="pt-6">
                    <div className="space-y-6 text-lg leading-relaxed">
                      <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-accent">
                        Валентин Иванович Муравьёв родился в 1870 году в семье московских купцов. 
                        С юных лет проявлял интерес к технике и промышленному производству, 
                        что определило его дальнейший жизненный путь.
                      </p>
                      <p>
                        В 1895 году основал своё первое предприятие по производству 
                        металлоизделий. Благодаря новаторскому подходу к организации труда 
                        и внедрению передовых технологий того времени, дело быстро расширялось.
                      </p>
                      <p>
                        К началу XX века Муравьёв стал одним из крупнейших промышленников России, 
                        владея сетью заводов в Москве, Санкт-Петербурге и других крупных городах империи. 
                        Отличался не только предпринимательской хваткой, но и заботой о своих работниках, 
                        создавая для них школы, больницы и жилые посёлки.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="animate-fade-in">
                <Card className="border-2 border-border overflow-hidden h-full">
                  <img 
                    src="https://cdn.poehali.dev/projects/0610d694-399d-49a6-9ebd-8305ef5923bc/files/834ea733-bec8-45cc-bcfd-5caf5d41ff68.jpg"
                    alt="Промышленное предприятие"
                    className="w-full h-full object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12 animate-slide-in">
              <Icon name="Award" size={32} className="text-accent" />
              <h3 className="text-4xl font-bold text-primary">Достижения</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Icon name={achievement.icon} size={28} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2 text-primary">{achievement.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12 animate-slide-in">
              <Icon name="Clock" size={32} className="text-accent" />
              <h3 className="text-4xl font-bold text-primary">Хронология</h3>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className="relative pl-20 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-accent border-4 border-background flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-background"></div>
                    </div>
                    <Card className="border-l-4 border-l-accent bg-card/80 backdrop-blur">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl font-bold text-accent">{event.year}</span>
                          <Separator orientation="vertical" className="h-6" />
                          <h4 className="text-xl font-semibold text-primary">{event.title}</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="legacy" className="py-16 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8 animate-slide-in">
              <Icon name="Landmark" size={32} className="text-accent" />
              <h3 className="text-4xl font-bold text-primary">Наследие</h3>
            </div>
            <Card className="border-2 border-border bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Валентин Муравьёв оставил после себя не только процветающие предприятия, 
                    но и целую философию ответственного предпринимательства. Его подход к ведению 
                    бизнеса, сочетавший экономическую эффективность с социальной ответственностью, 
                    стал примером для многих российских промышленников.
                  </p>
                  <p>
                    Созданные им образовательные и медицинские учреждения продолжали работать 
                    десятилетиями, помогая тысячам людей. Его методы организации производства 
                    изучались и внедрялись на других предприятиях страны.
                  </p>
                  <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground">
                    «Истинное богатство предпринимателя измеряется не количеством золота в сундуках, 
                    а числом людей, которым он смог помочь построить достойную жизнь»
                    <footer className="mt-2 text-sm not-italic text-accent">— Из писем В.И. Муравьёва</footer>
                  </blockquote>
                  <p>
                    Память о Валентине Муравьёве живёт в архивных документах, воспоминаниях 
                    современников и в тех зданиях и предприятиях, которые и сегодня служат людям.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground tracking-wider">
              Документальный архивный портал • 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;