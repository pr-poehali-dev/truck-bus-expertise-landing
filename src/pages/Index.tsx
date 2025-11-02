import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">ЭкспертАвто</div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-accent transition-colors">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-accent transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('advantages')} className="text-sm hover:text-accent transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('process')} className="text-sm hover:text-accent transition-colors">Процесс</button>
            <button onClick={() => scrollToSection('prices')} className="text-sm hover:text-accent transition-colors">Цены</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-accent transition-colors">FAQ</button>
          </div>
          <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90">
            Связаться
          </Button>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-primary">
                Экспертиза грузовых автомобилей и автобусов
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональная оценка технического состояния коммерческого транспорта. 
                Независимая экспертиза для юридических целей и покупки.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => scrollToSection('contacts')}>
                  Заказать экспертизу
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/df966fc6-5d22-48c5-aa30-0678fc65fffd/files/7d630d60-ecfc-442e-90e4-3a63f3836024.jpg" 
                alt="Экспертиза грузовых автомобилей" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Truck",
                title: "Техническая экспертиза",
                description: "Полная диагностика технического состояния грузовых автомобилей и автобусов"
              },
              {
                icon: "FileText",
                title: "Независимая оценка",
                description: "Объективная оценка рыночной стоимости транспортного средства"
              },
              {
                icon: "Scale",
                title: "Судебная экспертиза",
                description: "Экспертное заключение для судебных и страховых разбирательств"
              },
              {
                icon: "ShieldCheck",
                title: "Проверка перед покупкой",
                description: "Комплексная проверка состояния ТС перед приобретением"
              },
              {
                icon: "Wrench",
                title: "Дефектовка",
                description: "Выявление скрытых повреждений и дефектов конструкции"
              },
              {
                icon: "ClipboardCheck",
                title: "Экспертиза после ДТП",
                description: "Оценка ущерба и стоимости восстановительного ремонта"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-accent" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Award", title: "Опыт 15+ лет", description: "Специализируемся на коммерческом транспорте" },
              { icon: "Users", title: "Сертифицированные эксперты", description: "Все специалисты имеют лицензии" },
              { icon: "Clock", title: "Быстрая работа", description: "Экспертиза за 1-2 дня" },
              { icon: "FileCheck", title: "Полная документация", description: "Официальное заключение с печатью" }
            ].map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Как мы работаем</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: "01", title: "Заявка", description: "Оставьте заявку по телефону или на сайте" },
              { step: "02", title: "Согласование", description: "Обсуждаем детали, время и место осмотра" },
              { step: "03", title: "Осмотр", description: "Проводим детальную диагностику транспортного средства" },
              { step: "04", title: "Анализ", description: "Обрабатываем данные и составляем экспертное заключение" },
              { step: "05", title: "Заключение", description: "Передаем официальный документ с печатью и подписью" }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl font-bold text-accent/20">{item.step}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Стоимость услуг</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Базовая",
                price: "от 8 000 ₽",
                features: [
                  "Визуальный осмотр",
                  "Проверка документов",
                  "Базовая диагностика",
                  "Краткое заключение"
                ]
              },
              {
                title: "Стандартная",
                price: "от 15 000 ₽",
                features: [
                  "Полный технический осмотр",
                  "Компьютерная диагностика",
                  "Проверка узлов и агрегатов",
                  "Развернутое заключение",
                  "Фотофиксация"
                ],
                popular: true
              },
              {
                title: "Премиум",
                price: "от 25 000 ₽",
                features: [
                  "Максимальная диагностика",
                  "Дефектовка всех систем",
                  "Оценка стоимости ремонта",
                  "Юридическое заключение",
                  "Видеофиксация",
                  "Консультация эксперта"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={plan.popular ? "border-accent border-2 relative" : ""}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="text-3xl font-bold text-accent mt-2">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-accent hover:bg-accent/90' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => scrollToSection('contacts')}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Сколько времени занимает экспертиза?",
                  answer: "Стандартная экспертиза занимает 1-2 рабочих дня. Выезд и осмотр — 2-4 часа, подготовка заключения — 1 день. Срочная экспертиза возможна в день обращения."
                },
                {
                  question: "Имеет ли заключение юридическую силу?",
                  answer: "Да, наши заключения принимаются в судах и страховых компаниях. Все эксперты имеют необходимые лицензии и сертификаты."
                },
                {
                  question: "Выезжаете ли вы в регионы?",
                  answer: "Да, мы работаем по всей России. Стоимость выезда рассчитывается индивидуально в зависимости от удаленности объекта."
                },
                {
                  question: "Можно ли провести экспертизу на СТО?",
                  answer: "Да, мы проводим экспертизу в любом удобном месте: на СТО, в автопарке клиента или на нашей площадке."
                },
                {
                  question: "Что входит в экспертное заключение?",
                  answer: "Заключение включает: описание ТС, результаты диагностики всех систем, выявленные дефекты, оценку технического состояния, рыночную стоимость и рекомендации."
                },
                {
                  question: "Какие документы нужны для экспертизы?",
                  answer: "Необходимы: ПТС/СТС, паспорт владельца. Для судебной экспертизы могут потребоваться дополнительные документы."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg border">
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Связаться с нами</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-white/80">+7 (495) 123-45-67</p>
                      <p className="text-white/80">+7 (800) 555-35-35</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-white/80">info@expertavto.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-white/80">г. Москва, ул. Промышленная, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="mt-1" size={24} />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-white/80">Пн-Пт: 9:00 - 19:00</p>
                      <p className="text-white/80">Сб-Вс: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Заказать экспертизу</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 rounded-lg text-foreground"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 rounded-lg text-foreground"
                  />
                  <textarea 
                    placeholder="Комментарий" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-foreground"
                  />
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-primary/95 text-white/60 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 ЭкспертАвто. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
