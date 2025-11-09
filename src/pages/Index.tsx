import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-primary/10 z-50 shadow-sm">
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-lg">
              <Icon name="Truck" className="text-white" size={28} />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ЭкспертАвто
              </div>
              <div className="text-xs text-muted-foreground">Профессиональная экспертиза</div>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-8 items-center">
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('advantages')} className="text-sm font-medium hover:text-accent transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-medium hover:text-accent transition-colors">Как работаем</button>
            <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-accent transition-colors">Цены</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-accent transition-colors">Вопросы</button>
            <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90 shadow-lg">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>

          <button 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={28} className="text-primary" />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-primary/10 shadow-lg">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 font-medium hover:text-accent transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('advantages')} className="block w-full text-left py-2 font-medium hover:text-accent transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('process')} className="block w-full text-left py-2 font-medium hover:text-accent transition-colors">Как работаем</button>
              <button onClick={() => scrollToSection('prices')} className="block w-full text-left py-2 font-medium hover:text-accent transition-colors">Цены</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 font-medium hover:text-accent transition-colors">Вопросы</button>
              <Button onClick={() => scrollToSection('contacts')} className="w-full bg-accent hover:bg-accent/90">
                Связаться
              </Button>
            </div>
          </div>
        )}
      </header>

      <section id="hero" className="pt-32 pb-24 bg-gradient-to-b from-secondary via-white to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm">
                <Icon name="Award" size={18} />
                <span>15+ лет опыта в экспертизе</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-primary">Экспертиза</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  грузового транспорта
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Профессиональная оценка технического состояния грузовых автомобилей и автобусов. 
                Независимая экспертиза для покупки, продажи и юридических целей.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-lg text-lg h-14 px-8" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать экспертизу
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:border-accent text-lg h-14 px-8" onClick={() => scrollToSection('services')}>
                  Узнать больше
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Проведено экспертиз</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">24 часа</div>
                  <div className="text-sm text-muted-foreground">Среднее время</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/df966fc6-5d22-48c5-aa30-0678fc65fffd/files/667d311f-18be-4ae7-a0bd-149b99f86efb.jpg" 
                alt="Экспертиза грузовых автомобилей" 
                className="relative rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
              <Icon name="Briefcase" size={18} />
              <span>Наши услуги</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по экспертизе коммерческого транспорта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Truck",
                title: "Техническая экспертиза",
                description: "Полная диагностика технического состояния грузовых автомобилей и автобусов с выездом на место"
              },
              {
                icon: "FileText",
                title: "Независимая оценка",
                description: "Объективная оценка рыночной стоимости транспортного средства для сделок купли-продажи"
              },
              {
                icon: "Scale",
                title: "Судебная экспертиза",
                description: "Официальное экспертное заключение для судебных и страховых разбирательств"
              },
              {
                icon: "ShieldCheck",
                title: "Проверка перед покупкой",
                description: "Комплексная проверка состояния ТС перед приобретением, выявление скрытых дефектов"
              },
              {
                icon: "Wrench",
                title: "Дефектовка",
                description: "Детальное выявление скрытых повреждений, дефектов конструкции и несоответствий"
              },
              {
                icon: "ClipboardCheck",
                title: "Экспертиза после ДТП",
                description: "Оценка ущерба, определение стоимости восстановительного ремонта для страховых"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:border-accent/50 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-accent" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
              <Icon name="Star" size={18} />
              <span>Почему мы</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что отличает нас от других компаний
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Award", title: "Опыт 15+ лет", description: "Специализируемся исключительно на коммерческом транспорте" },
              { icon: "Users", title: "Эксперты с лицензией", description: "Все специалисты сертифицированы и имеют допуски" },
              { icon: "Clock", title: "Быстро", description: "Выезд в день обращения, экспертиза за 1-2 дня" },
              { icon: "FileCheck", title: "Официально", description: "Заключение с печатью, принимается в суде" }
            ].map((advantage, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-shadow">
                  <Icon name={advantage.icon} className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
              <Icon name="Settings" size={18} />
              <span>Процесс работы</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и прозрачный процесс от заявки до результата
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: "01", title: "Заявка", description: "Оставьте заявку по телефону, на сайте или в мессенджере. Мы свяжемся с вами в течение 15 минут", icon: "Phone" },
              { step: "02", title: "Согласование", description: "Обсуждаем детали экспертизы, согласовываем время и место выезда специалиста", icon: "Calendar" },
              { step: "03", title: "Осмотр", description: "Наш эксперт проводит детальную диагностику с использованием профессионального оборудования", icon: "Search" },
              { step: "04", title: "Анализ", description: "Обрабатываем полученные данные, составляем подробное экспертное заключение", icon: "BarChart" },
              { step: "05", title: "Заключение", description: "Передаем официальный документ с печатью, подписью и фотофиксацией всех дефектов", icon: "FileCheck" }
            ].map((item, index) => (
              <div key={index} className="flex gap-8 items-start p-8 bg-gradient-to-r from-secondary to-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-primary/5 group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-5xl font-bold text-accent/20">{item.step}</span>
                    <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-24 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
              <Icon name="DollarSign" size={18} />
              <span>Прозрачные цены</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Стоимость услуг</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий тариф для вашей ситуации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Базовая",
                price: "8 000",
                period: "₽",
                features: [
                  "Визуальный осмотр ТС",
                  "Проверка документов",
                  "Базовая диагностика",
                  "Краткое заключение",
                  "1 день выполнения"
                ]
              },
              {
                title: "Стандартная",
                price: "15 000",
                period: "₽",
                features: [
                  "Полный технический осмотр",
                  "Компьютерная диагностика",
                  "Проверка всех узлов и агрегатов",
                  "Развернутое заключение",
                  "Фотофиксация дефектов",
                  "Консультация по телефону"
                ],
                popular: true
              },
              {
                title: "Премиум",
                price: "25 000",
                period: "₽",
                features: [
                  "Максимально полная диагностика",
                  "Дефектовка всех систем",
                  "Оценка стоимости ремонта",
                  "Юридическое заключение",
                  "Видеофиксация процесса",
                  "Личная консультация эксперта",
                  "Срочное выполнение"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'border-accent border-3 shadow-2xl scale-105' : 'border-primary/10'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-primary text-white text-center py-2 font-semibold text-sm">
                    ПОПУЛЯРНЫЙ ВЫБОР
                  </div>
                )}
                <CardHeader className={plan.popular ? 'pt-14' : ''}>
                  <CardTitle className="text-2xl text-primary">{plan.title}</CardTitle>
                  <div className="flex items-baseline gap-2 mt-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">{plan.price}</span>
                    <span className="text-2xl text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-accent mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full h-12 text-base font-semibold ${plan.popular ? 'bg-gradient-to-r from-accent to-primary hover:shadow-lg' : 'bg-primary hover:bg-primary/90'}`}
                    onClick={() => scrollToSection('contacts')}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
              <Icon name="HelpCircle" size={18} />
              <span>FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о наших услугах
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Сколько времени занимает экспертиза?",
                  answer: "Стандартная экспертиза занимает 1-2 рабочих дня. Выезд и осмотр транспортного средства — 2-4 часа, подготовка детального заключения — 1 день. При необходимости возможна срочная экспертиза в день обращения с доплатой 50%."
                },
                {
                  question: "Имеет ли заключение юридическую силу?",
                  answer: "Да, наши заключения имеют полную юридическую силу и принимаются в судах и страховых компаниях. Все наши эксперты имеют необходимые лицензии, сертификаты и официальную аккредитацию."
                },
                {
                  question: "Выезжаете ли вы в регионы?",
                  answer: "Да, мы работаем по всей России и странам СНГ. Стоимость выезда рассчитывается индивидуально в зависимости от удаленности объекта. Обычно это 30-50 рублей за километр от МКАД."
                },
                {
                  question: "Можно ли провести экспертизу на СТО или в автопарке?",
                  answer: "Да, мы проводим экспертизу в любом удобном для вас месте: на СТО, в автопарке клиента, на стоянке или на нашей специализированной площадке. Главное условие — безопасный доступ к транспортному средству."
                },
                {
                  question: "Что входит в экспертное заключение?",
                  answer: "Заключение включает: полное описание ТС с VIN и госномером, результаты диагностики всех основных систем, перечень выявленных дефектов с фотофиксацией, оценку технического состояния, рыночную стоимость и профессиональные рекомендации."
                },
                {
                  question: "Какие документы нужны для экспертизы?",
                  answer: "Необходимы: ПТС или СТС, паспорт владельца или доверенность. Для судебной экспертизы могут потребоваться дополнительные документы: определение суда, протокол ДТП, справки из ГИБДД."
                },
                {
                  question: "Даете ли вы гарантию на заключение?",
                  answer: "Мы несем полную ответственность за достоверность информации в заключении. Все данные проверяются двумя независимыми экспертами. В случае выявления ошибки мы бесплатно проведем повторную экспертизу."
                },
                {
                  question: "Можно ли заказать экспертизу анонимно?",
                  answer: "Да, для базовой экспертизы это возможно. Однако для официального заключения с юридической силой необходимо предоставить данные заказчика и документы на транспортное средство."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/50 px-8 rounded-2xl border border-primary/5 hover:border-accent/30 transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-lg text-primary hover:text-accent py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-gradient-to-br from-primary via-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-white/90">
                Готовы ответить на все ваши вопросы и провести экспертизу
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold mb-6">Контакты</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-5 p-4 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Телефон</p>
                      <p className="text-white/90 text-lg">+7 (495) 123-45-67</p>
                      <p className="text-white/90 text-lg">+7 (800) 555-35-35</p>
                      <p className="text-sm text-white/70 mt-1">Звонок по России бесплатный</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 p-4 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Email</p>
                      <p className="text-white/90 text-lg">info@expertavto.ru</p>
                      <p className="text-sm text-white/70 mt-1">Ответим в течение часа</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 p-4 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Адрес</p>
                      <p className="text-white/90 text-lg">г. Москва, ул. Промышленная, д. 15, стр. 3</p>
                      <p className="text-sm text-white/70 mt-1">Работаем по всей России</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 p-4 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Режим работы</p>
                      <p className="text-white/90">Пн-Пт: 9:00 - 21:00</p>
                      <p className="text-white/90">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-3xl font-bold mb-6 text-primary">Заказать экспертизу</h3>
                <form className="space-y-5">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя *" 
                      className="w-full px-5 py-4 rounded-xl border-2 border-primary/10 focus:border-accent outline-none text-foreground text-lg transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон *" 
                      className="w-full px-5 py-4 rounded-xl border-2 border-primary/10 focus:border-accent outline-none text-foreground text-lg transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-5 py-4 rounded-xl border-2 border-primary/10 focus:border-accent outline-none text-foreground text-lg transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Комментарий: марка, модель, год, что нужно проверить" 
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl border-2 border-primary/10 focus:border-accent outline-none text-foreground text-lg resize-none transition-colors"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-accent to-primary hover:shadow-2xl text-white h-14 text-lg font-semibold transition-all">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-primary/98 text-white/80 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary/50 rounded-xl flex items-center justify-center">
                  <Icon name="Truck" className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-white">ЭкспертАвто</div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Профессиональная экспертиза грузовых автомобилей и автобусов с 2009 года
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Техническая экспертиза</li>
                <li>Независимая оценка</li>
                <li>Судебная экспертиза</li>
                <li>Проверка перед покупкой</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@expertavto.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>© 2024 ЭкспертАвто. Все права защищены. ИНН 7701234567 ОГРН 1234567890123</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
