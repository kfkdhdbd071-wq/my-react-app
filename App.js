import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// استيراد أيقونات Lucide React
import { Code, Rocket, Award, Briefcase, Clock, Star, ArrowRight, Mail, Phone, Github, Linkedin, Twitter, Check, Sun, Moon, Globe, Menu, X } from 'lucide-react';

const App = () => {
  // حالات لتتبع القسم النشط والقائمة المفتوحة وشهادة العميل الحالية والوضع المظلم واللغة
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isArabic, setIsArabic] = useState(false); // يتم التبديل بين العربية والإنجليزية

  // بيانات شهادات العملاء باللغتين
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      content: "Mohamed delivered an outstanding website that exceeded our expectations. His attention to detail and communication made the process seamless.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "Working with Mohamed was a pleasure. He understood our vision perfectly and created a beautiful, functional interface that our clients love.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "E-commerce Manager",
      content: "I've worked with many developers, but Mohamed stands out for his professionalism and ability to deliver high-quality work on time and within budget.",
      rating: 5
    }
  ];

  const arabicTestimonials = [
    {
      name: "سارة جونسون",
      role: "مؤسسة شركة ناشئة",
      content: "قدم محمد موقعًا متميزًا تجاوز توقعاتنا. لقد جعلت دقة التفاصيل والتواصل معه العملية سلسة للغاية.",
      rating: 5
    },
    {
      name: "مايكل تشين",
      role: "مدير تسويق",
      content: "كان العمل مع محمد متعة. لقد فهم رؤيتنا بشكل مثالي وأنشأ واجهة جميلة وعملية يحبها عملاؤنا.",
      rating: 5
    },
    {
      name: "إيما رودريغيز",
      role: "مدير التجارة الإلكترونية",
      content: "لقد عملت مع العديد من المطورين، لكن محمد يبرز باحترافيته وقدرته على تسليم عمل عالي الجودة في الوقت المحدد وفي حدود الميزانية.",
      rating: 5
    }
  ];

  // تأثير جانبي لتغيير شهادات العملاء تلقائياً كل 5 ثوانٍ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % (isArabic ? arabicTestimonials.length : testimonials.length));
    }, 5000);
    return () => clearInterval(interval); // تنظيف المؤقت عند إزالة المكون
  }, [isArabic, testimonials.length, arabicTestimonials.length]); // يتم إعادة تشغيل التأثير عند تغيير اللغة

  // بيانات الخدمات باللغتين
  const services = [
    {
      title: "Website Design & Development",
      description: "Beautiful, responsive websites tailored to your brand and business needs.",
      price: "$5 - $15",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "UI/UX Design",
      description: "Intuitive user interfaces and experiences that convert visitors into customers.",
      price: "$5 - $15",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Landing Page Creation",
      description: "High-converting landing pages designed to capture leads and drive sales.",
      price: "$5 - $15",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "Portfolio Website",
      description: "Professional portfolio websites to showcase your work and attract clients.",
      price: "$5 - $15",
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  const arabicServices = [
    {
      title: "تصميم وتطوير المواقع",
      description: "مواقع جميلة ومستجيبة مصممة خصيصًا لعلامتك التجارية واحتياجات عملك.",
      price: "5$ - 15$",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "تصميم واجهات المستخدم وتجربة المستخدم",
      description: "واجهات مستخدم بديهية وتجارب تحول الزوار إلى عملاء.",
      price: "5$ - 15$",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "إنشاء صفحات الهبوط",
      description: "صفحات هبوط عالية التحويل مصممة لجذب العملاء وزيادة المبيعات.",
      price: "5$ - 15$",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "موقع محفظة أعمال",
      description: "مواقع محفظة أعمال احترافية لعرض أعمالك وجذب العملاء.",
      price: "5$ - 15$",
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  // بيانات المهارات باللغتين
  const skills = [
    { name: "React", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "HTML/CSS", level: 98 },
    { name: "Responsive Design", level: 95 },
    { name: "Figma", level: 85 }
  ];

  const arabicSkills = [
    { name: "React", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "HTML/CSS", level: 98 },
    { name: "التصميم المتجاوب", level: 95 },
    { name: "Figma", level: 85 }
  ];

  // دالة للتمرير إلى قسم معين
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false); // إغلاق قائمة الجوال بعد النقر
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // دالة لتبديل الوضع المظلم
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // إضافة أو إزالة فئة 'dark' من جسم المستند
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  // دالة لتبديل اللغة
  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    // ضبط اتجاه النص بناءً على اللغة
    document.documentElement.lang = !isArabic ? 'ar' : 'en';
    document.documentElement.dir = !isArabic ? 'rtl' : 'ltr';
  };

  // متغيرات Framer Motion للتحريك العام للحاويات
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // تحريك العناصر الفرعية بالتسلسل
      }
    }
  };

  // متغيرات Framer Motion للتحريك العام للعناصر
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // اختيار البيانات بناءً على اللغة المحددة
  const currentServices = isArabic ? arabicServices : services;
  const currentTestimonials = isArabic ? arabicTestimonials : testimonials;
  const currentSkills = isArabic ? arabicSkills : skills;

  return (
    // العنصر الجذر للتطبيق، يغير الخلفية واللون بناءً على الوضع المظلم
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800'}`}>
      {/* شريط التنقل */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-lg'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* شعار الموقع */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <h1 className="text-xl font-bold">
                {isArabic ? "محمد عاطف" : "Mohamed Atif"}
              </h1>
            </div>
            
            {/* روابط التنقل لسطح المكتب */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'skills', 'testimonials', 'contact'].map((section, index) => {
                const sectionNames = isArabic 
                  ? ['الرئيسية', 'عنّي', 'خدماتي', 'مهاراتي', 'آراء العملاء', 'اتصل بي']
                  : ['Home', 'About', 'Services', 'Skills', 'Testimonials', 'Contact'];
                return (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    // تطبيق أنماط مختلفة للزر النشط وغير النشط وللوضع المظلم
                    className={`capitalize font-medium transition-colors duration-300 ${
                      activeSection === section 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {sectionNames[index]}
                  </button>
                );
              })}
            </div>

            {/* زر تبديل اللغة والثيم */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleLanguage}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}
                aria-label={isArabic ? "Switch to English" : "Switch to Arabic"} // نص بديل للقارئات الصوتية
              >
                <Globe className="w-5 h-5" />
              </button>
              
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}
                aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} // نص بديل للقارئات الصوتية
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              {/* زر قائمة الجوال (يظهر فقط في الجوال) */}
              <button 
                className={`md:hidden ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"} // نص بديل للقارئات الصوتية
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* قائمة التنقل للجوال (تظهر عند فتح القائمة) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden ${isDarkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {['home', 'about', 'services', 'skills', 'testimonials', 'contact'].map((section, index) => {
                  const sectionNames = isArabic 
                    ? ['الرئيسية', 'عنّي', 'خدماتي', 'مهاراتي', 'آراء العملاء', 'اتصل بي']
                    : ['Home', 'About', 'Services', 'Skills', 'Testimonials', 'Contact'];
                  return (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`capitalize font-medium transition-colors duration-300 ${
                        activeSection === section 
                          ? 'text-blue-600' 
                          : isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {sectionNames[index]}
                    </button>
                  );
                })}
                {/* أزرار تبديل اللغة والثيم في قائمة الجوال (للتكرار) */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                  <button 
                    onClick={toggleLanguage}
                    className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}
                    aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
                  >
                    <Globe className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}
                    aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* قسم البداية (Hero Section) */}
      <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* المحتوى النصي لقسم البداية */}
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {isArabic ? (
                    <>
                      مرحبًا، أنا <span className="text-blue-600">محمد عاطف</span>
                    </>
                  ) : (
                    <>
                      Hello, I'm <span className="text-blue-600">Mohamed Atif</span>
                    </>
                  )}
                </h1>
                <p className="text-xl">
                  {isArabic ? (
                    "مطور واجهات محترف مع خبرة تزيد عن 5 سنوات في إنشاء مواقع واجهات مستخدم جميلة ومستجيبة."
                  ) : (
                    "Professional Frontend Developer with 5+ years of experience creating stunning, responsive websites and user interfaces."
                  )}
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300"
                    onClick={() => scrollToSection('contact')}
                  >
                    {isArabic ? "ابدأ الآن" : "Get Started"}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                    onClick={() => scrollToSection('services')}
                  >
                    {isArabic ? "عرض الخدمات" : "View Services"}
                  </motion.button>
                </div>
              </motion.div>
            </div>
            {/* الصورة التوضيحية لقسم البداية */}
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  {/* هنا يمكنك استبدال الرابط بصورة فعلية أو استخدام Placeholder */}
                  <img 
                    src="https://i.postimg.cc/MpYqkFND/Chat-GPT-Image-16-2025-09-35-52.png" 
                    alt="صورة لمحمد عاطف" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* عنصر زخرفي إضافي */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم عنّي (About Section) */}
      <section id="about" className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "عنّي" : "About Me"}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* وصف عن المطور */}
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">
                  {isArabic ? "مطور واجهات | خبرة 5+ سنوات" : "Frontend Developer | 5+ Years Experience"}
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  {isArabic ? (
                    "أنا محمد عاطف، مطور واجهات محترف مع أكثر من 5 سنوات من الخبرة في صنع مواقع جميلة ومستجيبة وسهلة الاستخدام. أتخصص في React و Tailwind CSS وإطارات عمل JavaScript الحديثة لإنشاء تجارب رقمية استثنائية."
                  ) : (
                    "I'm Mohamed Atif, a passionate frontend developer with over 5 years of experience crafting beautiful, responsive, and user-friendly websites. I specialize in React, Tailwind CSS, and modern JavaScript frameworks to create exceptional digital experiences."
                  )}
                </p>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  {isArabic ? (
                    "أعمل على Fiverr منذ 2019، وقد ساعدت مئات العملاء على تحقيق رؤيتهم بأسعار معقولة تبدأ من 5 دولارات فقط. يركز عملي على تقديم عمل عالي الجودة يتجاوز التوقعات مع الحفاظ على تواصل واضح طوال المشروع."
                  ) : (
                    "Working on Fiverr since 2019, I've helped hundreds of clients bring their visions to life with affordable pricing starting from just $5. My focus is on delivering high-quality work that exceeds expectations while maintaining clear communication throughout the project."
                  )}
                </p>
                {/* أيقونات الخبرة */}
                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                      {isArabic ? "5+ سنوات خبرة" : "5+ Years Experience"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                      {isArabic ? "بائع متميز" : "Top Rated Seller"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* قسم "لماذا تختارني؟" */}
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-blue-900/20 to-indigo-900/20' : ''}`}
              >
                <h4 className="text-xl font-bold mb-6">
                  {isArabic ? "لماذا تختارني؟" : "Why Choose Me?"}
                </h4>
                <ul className="space-y-4">
                  {[
                    isArabic ? "أوقات تسليم سريعة مع ضمان الجودة" : "Fast turnaround times with quality assurance",
                    isArabic ? "تواصل واضح وتحديثات منتظمة" : "Clear communication and regular updates",
                    isArabic ? "أسعار معقولة تبدأ من 5 دولارات" : "Affordable pricing starting from $5",
                    isArabic ? "تصميم متجاوب لجميع الأجهزة" : "Responsive design for all devices",
                    isArabic ? "بنية كود صديقة لمحركات البحث" : "SEO-friendly code structure",
                    isArabic ? "تعديلات مجانية حتى تكن راضيًا" : "Free revisions until you're satisfied"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 mt-1" />
                      <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الخدمات (Services Section) */}
      <section id="services" className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "خدماتي" : "My Services"}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {isArabic ? (
                "أقدم مجموعة من خدمات تطوير الواجهات بأسعار تنافسية، تبدأ من 5 دولارات فقط. سواء كنت بحاجة إلى صفحة هبوط بسيطة أو تطبيق ويب معقد، يمكنني مساعدتك في تحقيق أهدافك."
              ) : (
                "I offer a range of frontend development services at competitive prices, starting from just $5. Whether you need a simple landing page or a complex web application, I can help you achieve your goals."
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 shadow-gray-700/20' : ''}`}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">{service.price}</span>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المهارات (Skills Section) */}
      <section id="skills" className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "مهاراتي" : "My Skills"}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {isArabic ? (
                "أبقى على اطلاع دائم بأحدث التقنيات وأفضل الممارسات في تطوير الواجهات لتقديم حلول حديثة وفعالة."
              ) : (
                "I stay current with the latest technologies and best practices in frontend development to deliver modern, efficient solutions."
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-50 rounded-xl p-6 ${isDarkMode ? 'bg-gray-700' : ''}`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                {/* شريط التقدم للمهارة */}
                <div className={`w-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                  <motion.div 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم آراء العملاء (Testimonials Section) */}
      <section id="testimonials" className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "آراء العملاء" : "Client Testimonials"}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {isArabic ? (
                "لا تأخذ كلامي كحقيقة، إليك ما يقوله العملاء عن العمل معي."
              ) : (
                "Don't just take my word for it. Here's what my clients have to say about working with me."
              )}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* عرض الشهادة الحالية */}
            <motion.div
              key={currentTestimonial} // مفتاح فريد لـ AnimatePresence لتمكين التحريك عند تغيير الشهادة
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className={`bg-white rounded-xl p-8 shadow-lg ${isDarkMode ? 'bg-gray-800' : ''}`}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < currentTestimonials[currentTestimonial].rating ? 'text-yellow-400' : isDarkMode ? 'text-gray-500' : 'text-gray-300'}`} 
                    fill={i < currentTestimonials[currentTestimonial].rating ? 'currentColor' : 'none'} 
                  />
                ))}
              </div>
              <p className={`text-lg mb-6 italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>"{currentTestimonials[currentTestimonial].content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {currentTestimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{currentTestimonials[currentTestimonial].name}</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentTestimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>
            
            {/* مؤشرات التنقل بين الشهادات */}
            <div className="flex justify-center mt-8 space-x-2">
              {currentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : isDarkMode ? 'bg-gray-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* قسم الاتصال (Contact Section) */}
      <section id="contact" className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "اتصل بي" : "Get In Touch"}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {isArabic ? (
                "هل أنت جاهز لبدء مشروعك؟ أنا متاح للعملاء الجدد ويسعدني أن أسمع عن أفكارك. تواصل معي اليوم!"
              ) : (
                "Ready to start your project? I'm available for new clients and would love to hear about your ideas. Contact me today!"
              )}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* معلومات الاتصال والروابط الاجتماعية */}
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold">
                  {isArabic ? "لنعمل معًا" : "Let's Work Together"}
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  {isArabic ? (
                    "أنا أقبل حاليًا مشاريع جديدة ويسعدني مناقشة كيفية مساعدتك في تحقيق أهدافك. سواء كنت بحاجة إلى موقع بسيط أو تطبيق ويب معقد، أنا هنا للمساعدة."
                  ) : (
                    "I'm currently accepting new projects and would be happy to discuss how I can help you achieve your goals. Whether you need a simple website or a complex web application, I'm here to help."
                  )}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>mohamedatif@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-blue-600" />
                    <a href="https://github.com/mohamedatif" target="_blank" rel="noopener noreferrer" className={`hover:underline ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>github.com/mohamedatif</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <a href="https://linkedin.com/in/mohamedatif" target="_blank" rel="noopener noreferrer" className={`hover:underline ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>linkedin.com/in/mohamedatif</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Twitter className="w-5 h-5 text-blue-600" />
                    <a href="https://twitter.com/mohamedatif" target="_blank" rel="noopener noreferrer" className={`hover:underline ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>@mohamedatif</a>
                  </div>
                </div>
                
                {/* قسم الأسعار */}
                <div className={`bg-blue-50 p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20' : ''}`}>
                  <h4 className="font-bold text-blue-800 mb-2">
                    {isArabic ? "الأسعار" : "Pricing"}
                  </h4>
                  <p className={isDarkMode ? "text-blue-300" : "text-blue-700"}>
                    {isArabic ? (
                      "تبدأ من 5 دولارات فقط للخدمات الأساسية، مع حزم متاحة حتى 15 دولارًا للمشاريع الأكثر تعقيدًا."
                    ) : (
                      "Starting from just $5 for basic services, with packages available up to $15 for more complex projects."
                    )}
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* نموذج الاتصال */}
            <div className="md:w-1/2">
              <motion.form
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`bg-gray-50 rounded-xl p-8 ${isDarkMode ? 'bg-gray-700' : ''}`}
                onSubmit={(e) => e.preventDefault()} // منع السلوك الافتراضي لإعادة تحميل الصفحة
              >
                <h4 className="text-xl font-bold mb-6">
                  {isArabic ? "أرسل لي رسالة" : "Send Me a Message"}
                </h4>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {isArabic ? "الاسم" : "Name"}
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border border-gray-300'}`}
                      placeholder={isArabic ? "اسمك" : "Your name"}
                      required // حقل مطلوب
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {isArabic ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border border-gray-300'}`}
                      placeholder={isArabic ? "your.email@example.com" : "your.email@example.com"}
                      required // حقل مطلوب
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {isArabic ? "الموضوع" : "Subject"}
                    </label>
                    <input 
                      type="text" 
                      id="subject"
                      className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border border-gray-300'}`}
                      placeholder={isArabic ? "استفسار عن المشروع" : "Project inquiry"}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {isArabic ? "الرسالة" : "Message"}
                    </label>
                    <textarea 
                      id="message"
                      rows="5" 
                      className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border border-gray-300'}`}
                      placeholder={isArabic ? "أخبرني عن مشروعك..." : "Tell me about your project..."}
                      required // حقل مطلوب
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                  >
                    {isArabic ? "إرسال الرسالة" : "Send Message"}
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* تذييل الصفحة (Footer) */}
      <footer className={`py-12 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* معلومات المطور الأساسية */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <h3 className="text-xl font-bold">
                  {isArabic ? "محمد عاطف" : "Mohamed Atif"}
                </h3>
              </div>
              <p className="mt-2 text-gray-400">
                {isArabic ? "مطور واجهات محترف | خبرة 5+ سنوات" : "Frontend Developer | 5+ Years Experience"}
              </p>
            </div>
            
            {/* أيقونات وسائل التواصل الاجتماعي */}
            <div className="flex space-x-6">
              <a href="https://github.com/mohamedatif" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Github Profile">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/mohamedatif" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Linkedin Profile">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/mohamedatif" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter Profile">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* حقوق الطبع والنشر */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>
              {isArabic ? "© 2024 محمد عاطف. جميع الحقوق محفوظة." : "© 2024 Mohamed Atif. All rights reserved."}
            </p>
            <p className="mt-2">
              {isArabic ? "مطور واجهات محترف | تبدأ من 5 دولارات" : "Professional Frontend Developer | Starting from $5"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;