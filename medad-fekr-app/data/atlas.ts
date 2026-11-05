
export type ActivityTranslation = {
  purpose: string;
  instruction: string;
  steps: string[];
  questions: string[];
  teacherNote?: string;
  materials?: {
    required: boolean;
    type: "none" | "image" | "audio" | "text" | "object";
    items: string[];
  };
};

export type Activity = {
  purpose: string;
  instruction: string;
  steps: string[];
  questions: string[];
  teacherNote?: string;

  materials?: {
    required: boolean;
    type: "none" | "image" | "audio" | "text" | "object";
    items: string[];
  };

  translations?: {
    en: ActivityTranslation;
  };
};

export type Situation = {
  id: string;
  title: string;
  description: string;
  activity?: Activity;

  translations?: {
    en: {
      title: string;
      description: string;
    };
  };
};

export type AtlasLand = {
  id: string;
  code: string;
  title: string;
  description: string;
  situations: Situation[];

  translations?: {
    en: {
      title: string;
      description: string;
    };
  };
};


export const atlas: AtlasLand[] = [
  {
    id: "imagination",
    code: "06M",
    title: "تخیل",
    description:
     "ساختن امکان‌ها، جهان‌ها و تجربه‌هایی که در برابر ما وجود ندارند.",
    translations: {
     en: {
    title: "Imagination",
    description:
      "Imagining possibilities, worlds, and experiences that do not yet exist.",
   },
 },
     situations: [
      {
        id: "06M-01",
        title: "موزه‌ی اشیای جادویی",
        description:
          "در موزه‌ای شش شیء جادویی وجود دارد؛ هرکدام قدرتی متفاوت دارد و می‌توانی فقط یکی را انتخاب کنی.",
        
         translations: {
         en: {
         title: "The Museum of Magical Objects",
         description:
        "A museum holds six magical objects, each with a different power. You can choose only one.",
          },
        },

        activity: {
          purpose:
            "تقویت تخیل از طریق تصور یک امکان تازه و دنبال کردن کاربرد، محدودیت و پیامدهای آن.",

          instruction:
            "تصور کن وارد موزه‌ای شده‌ای که شش شیء جادویی در آن نگهداری می‌شود. هر شیء قدرتی متفاوت دارد. یکی را انتخاب کن و تصور کن وقتی وارد زندگی یک نفر می‌شود، چه اتفاق‌هایی به دنبال آن رخ می‌دهد.",

          steps: [
            "یکی از شش شیء جادویی را انتخاب کن.",
            "تصور کن چه کسی ممکن است به این شیء نیاز داشته باشد.",
            "تصور کن آن شخص چگونه از شیء استفاده می‌کند.",
            "فکر کن چه چیزی ممکن است برخلاف انتظار او اتفاق بیفتد.",
            "یک قانون یا محدودیت برای این شیء در نظر بگیر.",
            "تصور کن بعد از استفاده از آن، چه چیزی در زندگی آن شخص تغییر می‌کند.",
          ],

          questions: [
            "اگر این شیء واقعاً چنین قدرتی داشته باشد، چه کسی ممکن است به آن نیاز پیدا کند؟",
            "او با این شیء چه کاری انجام می‌دهد؟",
            "چه چیزی ممکن است برخلاف انتظارش اتفاق بیفتد؟",
            "اگر بتوانی یک قانون تازه برای این شیء تعیین کنی، آن قانون چیست؟",
            "بعد از استفاده از این شیء، چه چیزی در زندگی آن شخص تغییر می‌کند؟",
          ],

          teacherNote:
            "کارت‌های شش‌گانه فقط شیء و قدرت آن را معرفی می‌کنند. کاربرد، پیامد و محدودیت را دانش‌آموز می‌سازد. هدف، ساختن یک امکان و دنبال کردن پیامدهای آن است؛ نه پیدا کردن عجیب‌ترین شیء.",

          materials: {
            required: false,
            type: "none",
            items: [],
            },
          translations: {
           en: {
           purpose:
           "Develop imagination by exploring a new possibility and following its uses, limits, and consequences.",

           instruction:
            "Imagine entering a museum that holds six magical objects. Each object has a different power. Choose one and imagine what might happen when it becomes part of someone's life.",

           steps: [
           "Choose one of the six magical objects.",
           "Imagine who might need this object.",
           "Imagine how that person would use it.",
           "Consider what might happen differently from what they expected.",
           "Give the object one rule or limitation.",
           "Imagine what changes in that person's life after using it.",
           ],

          questions: [
           "If this object really had this power, who might need it?",
           "What would that person do with the object?",
           "What might happen differently from what they expected?",
           "If you could set a new rule for this object, what would it be?",
           "What would change in that person's life after using the object?",
          ],

          teacherNote:
           "The six cards introduce only each object's identity and power. Students create its uses, consequences, and limitations. The goal is to develop a possibility and explore its consequences—not to find the strangest object.",

           materials: {
           required: false,
           type: "none",
           items: [],
    },
  },
},

          
        },
      },

      {
        id: "06M-02",
        title: "نامه‌ای از سال ۲۱۲۰",
        description:
          "نوشتن نامه‌ای ناقص از زبان کودکی در سال ۲۱۲۰ و تصور چیزهایی که در آینده تغییر کرده یا باقی مانده‌اند.",
         translations: {
  en: {
    title: "A Letter from the Year 2120",
    description:
      "Writing an unfinished letter from the perspective of a child living in the year 2120, imagining what has changed and what has remained the same in their world.",
  },
},
        activity: {
          purpose:
            "گسترش تخیل زمانی از طریق تصور زندگی روزمره در آینده و مقایسه‌ی آن با زندگی امروز.",

          instruction:
            "نامه‌ای ناقص از کودکی در سال ۲۱۲۰ را بخوان. جای خالی‌های نامه را با تصور خودت کامل کن و زندگی این کودک را بساز.",

          steps: [
            "نامه‌ی ناقص را بخوان.",
            "جاهای خالی را با تصور خودت درباره‌ی زندگی در سال ۲۱۲۰ کامل کن.",
            "فکر کن چه چیزهایی در زندگی آن کودک با امروز فرق کرده است.",
            "یک چیز را انتخاب کن که عمداً شبیه زندگی امروز نگه داشته‌ای.",
            "در پایان، تصور کن اگر کودک سال ۲۱۲۰ یک روز به سال ۲۰۲۶ بیاید، از چه چیزی بیشتر تعجب می‌کند.",
          ],

          questions: [
            "در نامه‌ات چه چیزهایی در سال ۲۱۲۰ با امروز فرق کرده‌اند؟",
            "کدام چیزی که تغییر داده‌ای برای خودت جالب‌تر است؟ چرا؟",
            "چه چیزی را عمداً شبیه زندگی امروز نگه داشتی؟ چرا فکر می‌کنی آن چیز بعد از صد سال هنوز وجود دارد؟",
            "کدام بخش زندگی کودک ۲۱۲۰ برای یک کودک امروز عجیب به نظر می‌رسد؟",
            "کدام بخش زندگی امروز ممکن است برای کودک ۲۱۲۰ عجیب باشد؟",
            "اگر صد سال دیگر کسی نامه‌ی تو را بخواند، دوست داری از زندگی امروز چه چیزی را حتماً درباره‌ی ما بداند؟",
          ],

          teacherNote:
            "هدف، پیش‌بینی علمی آینده نیست. نامه عمداً ناقص است تا دانش‌آموز خودش جهان آینده را بسازد. از تعیین فناوری یا شکل مشخصی برای آینده خودداری کنید.",

          materials: {
            required: true,
            type: "text",
            items: ["/text/06M/06M-02.txt"],
                     
          },
           translations: {
            en: {
              purpose:
                "Develop time-based imagination by picturing everyday life in the future and comparing it with life today.",

              instruction:
                "Read an unfinished letter written by a child in the year 2120. Fill in the missing parts using your imagination and create a picture of this child's life.",

              steps: [
                "Read the unfinished letter.",
                "Fill in the blanks with your own ideas about life in the year 2120.",
                "Think about what has changed in this child's life compared with today.",
                "Choose one thing that you have deliberately kept similar to life today.",
                "Finally, imagine that a child from the year 2120 visits the year 2026. What would surprise them the most?",
              ],

              questions: [
                "In your letter, what is different about life in 2120 compared with today?",
                "Which of the changes you imagined do you find most interesting? Why?",
                "What did you deliberately keep the same as life today? Why do you think it might still exist a hundred years from now?",
                "Which part of a child's life in 2120 might seem strange to a child today?",
                "Which part of life today might seem strange to a child from 2120?",
                "If someone reads your letter a hundred years from now, what would you want them to know about our lives today?",
              ],

              teacherNote:
                "The goal is not to make scientific predictions about the future. The letter is deliberately unfinished so students can create their own future world. Avoid prescribing specific technologies or a particular vision of the future.",

              materials: {
                required: true,
                type: "text",
                items: ["/text/06M/06M-02.txt"],
              },
            },
          },
        },
      },

      {
        id: "06M-03",
        title: "شهری زیر ریشه‌های درختان",
        description:
          "تصور کردن شهری پنهان زیر ریشه‌های یک جنگل قدیمی و ساختن شیوه‌ی زندگی در آن.",
          translations: {
  en: {
    title: "A City Beneath the Tree Roots",
    description:
      "Imagining a hidden city beneath the roots of an ancient forest and creating a way of life for its inhabitants.",
  },
},
        activity: {
          purpose:
            "گسترش تخیل فضایی و کمک به دانش‌آموز برای ساختن یک جهان خیالی با رابطه میان مکان، زندگی و قوانین آن.",

          instruction:
            "تصور کن زیر ریشه‌های یک جنگل بسیار قدیمی، شهری پنهان وجود دارد؛ شهری که هیچ‌کس در دنیای ما تاکنون آن را ندیده است. تو برای اولین بار وارد این شهر شده‌ای.",

          steps: [
            "تصور کن وقتی وارد شهر می‌شوی، اولین چیزی که می‌بینی چیست.",
            "محل زندگی مردم و شیوه‌ی رفت‌وآمد آن‌ها را تصور کن.",
            "فکر کن نور، غذا و آب چگونه فراهم می‌شود.",
            "یک قانون عجیب اما منطقی برای این شهر بساز.",
            "تصور کن اگر یکی از قوانین شهر تغییر کند، چه چیز دیگری در زندگی مردم تغییر می‌کند.",
            "تصور کن اگر یکی از ساکنان شهر برای اولین بار به دنیای ما بیاید، چه چیزی برای او عجیب خواهد بود.",
          ],

          questions: [
            "وقتی وارد شهر می‌شوی، اولین چیزی که می‌بینی چیست؟",
            "مردم این شهر کجا زندگی می‌کنند؟",
            "برای رفت‌وآمد از چه چیزی استفاده می‌کنند؟",
            "اگر شهر زیر زمین است، نور از کجا می‌آید؟",
            "مردم برای غذا و آب چه راهی پیدا کرده‌اند؟",
            "یک قانون در این شهر چیست که در شهر ما عجیب به نظر می‌رسد؟",
            "چرا مردم این قانون را پذیرفته‌اند؟",
            "اگر یکی از قوانین شهر تغییر کند، چه چیز دیگری در زندگی مردم تغییر می‌کند؟",
            "اگر یکی از ساکنان این شهر بخواهد برای اولین بار به دنیای ما بیاید، چه چیزی برای او عجیب خواهد بود؟",
          ],

          teacherNote:
            "دانش‌آموز را به ساختن رابطه میان اجزای جهان خیالی تشویق کنید. ویژگی‌های شهر لازم نیست واقع‌گرایانه باشند، اما بهتر است انتخاب‌های مختلف دانش‌آموز با یکدیگر ارتباط داشته باشند.",

          materials: {
            required: false,
            type: "none",
            items: [],
                          
          },
           translations: {
            en: {
              purpose:
                "Develop spatial imagination by helping students create an imaginary world and explore the connections between its places, people's lives, and its rules.",

              instruction:
                "Imagine that beneath the roots of a very old forest, there is a hidden city—a city that no one in our world has ever seen. You are the first person to enter it.",

              steps: [
                "Imagine the first thing you see when you enter the city.",
                "Picture where the people live and how they travel from place to place.",
                "Think about how they get light, food, and water.",
                "Create one unusual but logical rule for this city.",
                "Imagine what else might change in people's lives if one of the city's rules changes.",
                "Imagine that one of the city's residents visits our world for the first time. What would seem strange to them?",
              ],

              questions: [
                "What is the first thing you see when you enter the city?",
                "Where do the people of this city live?",
                "How do they travel from place to place?",
                "If the city is underground, where does its light come from?",
                "How have the people found ways to get food and water?",
                "What is one rule in this city that would seem strange in our own city?",
                "Why have the people accepted this rule?",
                "If one of the city's rules changes, what else might change in people's lives?",
                "If one of the city's residents visits our world for the first time, what would seem strange to them?",
              ],

              teacherNote:
                "Encourage students to build connections between the different parts of their imaginary world. The city's features do not have to be realistic, but it is helpful if the students' different ideas connect with one another.",

              materials: {
                required: false,
                type: "none",
                items: [],
              },
            },
          },
        },
      },

      {
        id: "06M-04",
        title: "آسانسوری که به زمان‌های مختلف می‌رود",
        description: "سفر با آسانسوری که هر طبقه‌ی آن به زمانی متفاوت می‌رود.",
        translations: {
  en: {
    title: "An Elevator That Travels Through Time",
    description:
      "Traveling in an elevator where each floor takes you to a different point in time.",
  },
},
        activity: {
          purpose:
            "تقویت تخیل زمانی و کمک به دانش‌آموز برای تصور زندگی در زمان‌هایی متفاوت از زمان خود.",

          instruction:
            "در یک ساختمان قدیمی، آسانسوری پیدا می‌کنی که هر طبقه‌ی آن به یک زمان متفاوت می‌رود. می‌توانی فقط سه بار از آن استفاده کنی.",

          steps: [
            "سه زمان متفاوت را برای سفر انتخاب کن.",
            "تصور کن وقتی به هر زمان می‌رسی، اولین چیزی که می‌بینی چیست.",
            "زندگی آدم‌ها در آن زمان را با زندگی امروز مقایسه کن.",
            "چیزی را تصور کن که برخلاف انتظار توست.",
            "فکر کن اگر بتوانی فقط یک چیز را از یکی از آن زمان‌ها با خودت بیاوری، چه چیزی را انتخاب می‌کنی.",
            "بعد از سه سفر، تصور کن نگاهت به زمان خودت چه تغییری کرده است.",
          ],

          questions: [
            "به کدام زمان‌ها می‌روی؟ چرا؟",
            "وقتی به آنجا می‌رسی، اولین چیزی که می‌بینی چیست؟",
            "زندگی آدم‌ها در آن زمان چه تفاوتی با زندگی امروز دارد؟",
            "چه چیزی برخلاف انتظار توست؟",
            "اگر بتوانی فقط یک چیز را از آن زمان به زمان خودت بیاوری، چیست؟",
            "اگر یکی از آدم‌های آن زمان وارد زمان ما شود، چه چیزی برایش عجیب خواهد بود؟",
            "بعد از سه سفر، نگاهت به زمان خودت چه تغییری کرده است؟",
          ],

          teacherNote:
            "دانش‌آموز می‌تواند به گذشته، آینده یا حتی زمانی کاملاً خیالی که هرگز وجود نداشته سفر کند. تمرکز بر ساختن امکان‌های متفاوت است، نه اطلاعات تاریخی.",
                    
          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
            en: {
              purpose:
                "Develop time-based imagination by helping students picture life in times different from their own.",

              instruction:
                "In an old building, you discover an elevator where each floor takes you to a different time. You can use the elevator only three times.",

              steps: [
                "Choose three different times to visit.",
                "Imagine the first thing you see when you arrive in each time.",
                "Compare people's lives in those times with life today.",
                "Imagine something that happens differently from what you expected.",
                "Think about what you would choose if you could bring back just one thing from one of those times.",
                "After your three journeys, imagine how your view of your own time has changed.",
              ],

              questions: [
                "Which times would you visit? Why?",
                "What is the first thing you see when you arrive?",
                "How is people's life in that time different from life today?",
                "What is something that happens differently from what you expected?",
                "If you could bring just one thing from that time into your own time, what would it be?",
                "If someone from that time came to our time, what would seem strange to them?",
                "After your three journeys, how has your view of your own time changed?",
              ],

              teacherNote:
                "Students can travel to the past, the future, or even to a completely imaginary time that has never existed. The focus is on creating different possibilities, not on historical knowledge.",

              materials: {
                required: false,
                type: "none",
                items: [],
              },
            },
          },
        },
      },

      {
        id: "06M-05",
        title: "مغازه‌ی تعمیر خاطره‌ها",
        description:
          "تصور کردن مغازه‌ای که خاطره‌های آسیب‌دیده را تعمیر می‌کند.",
         translations: {
  en: {
    title: "The Memory Repair Shop",
    description:
      "Imagining a shop where damaged memories can be repaired.",
  },
},
        activity: {
          purpose:
            "تقویت تخیل از طریق تصور یک امکان غیرممکن و بررسی شکل‌های مختلف تغییر یا ترمیم یک خاطره.",

          instruction:
            "مغازه‌ای وجود دارد که خاطره‌ها را تعمیر می‌کند. یک روز مشتری‌ای وارد مغازه می‌شود و می‌گوید: «یک خاطره دارم که دیگر درست کار نمی‌کند.» تصور کن چه مشکلی برای این خاطره پیش آمده و چگونه می‌توان آن را تعمیر کرد.",

          steps: [
            "مشکل خاطره‌ی مشتری را تصور کن.",
            "تصور کن اگر این خاطره را ببینی، کدام قسمت آن عجیب یا خراب به نظر می‌رسد.",
            "راهی برای تعمیر آن پیدا کن.",
            "فکر کن آیا لازم است خاطره دقیقاً به شکل قبلی برگردد.",
            "تفاوت خاطره‌ی قبل و بعد از تعمیر را تصور کن.",
            "فکر کن بعد از تعمیر، این خاطره چه تغییری در احساس یا نگاه صاحبش ایجاد می‌کند.",
          ],

          questions: [
            "خاطره‌ی این مشتری چه مشکلی پیدا کرده است؟",
            "اگر این خاطره را ببینی، کدام قسمت آن عجیب یا خراب به نظر می‌رسد؟",
            "برای تعمیرش چه کاری می‌توانی انجام بدهی؟",
            "آیا لازم است همه‌ی خاطره را به شکل اولش برگردانی؟ چرا؟",
            "بعد از تعمیر، این خاطره چه تفاوتی با قبل دارد؟",
            "اگر صاحب خاطره بعد از تعمیر آن را به یاد بیاورد، چه چیزی در احساس یا نگاهش ممکن است تغییر کند؟",
            "آیا خاطره‌ای که تعمیر شده هنوز همان خاطره‌ی قبلی است؟ چرا؟",
          ],

          teacherNote:
            "دانش‌آموز را مجبور به استفاده از خاطره‌ی واقعی خودش نکنید. مشتری و خاطره می‌توانند کاملاً خیالی باشند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
        
       translations: {
            en: {
              purpose:
                "Develop imagination by exploring an impossible possibility and considering different ways a memory might be changed or repaired.",

              instruction:
                "There is a shop that repairs memories. One day, a customer walks in and says, 'I have a memory that doesn't work properly anymore.' Imagine what has gone wrong with this memory and how it could be repaired.",

              steps: [
                "Imagine what is wrong with the customer's memory.",
                "Imagine what might look strange or broken if you could see this memory.",
                "Find a way to repair it.",
                "Think about whether the memory needs to be exactly the way it was before.",
                "Imagine the difference between the memory before and after the repair.",
                "Think about how repairing this memory might change its owner's feelings or way of seeing things.",
              ],

              questions: [
                "What has gone wrong with this customer's memory?",
                "If you could see this memory, what part of it might look strange or broken?",
                "What could you do to repair it?",
                "Does the whole memory need to be restored exactly as it was? Why?",
                "How is the memory different after being repaired?",
                "If the owner remembers it after the repair, what might change in their feelings or way of seeing things?",
                "Is a repaired memory still the same memory as before? Why?",
              ],

              teacherNote:
                "Do not require students to use a real memory from their own lives. The customer and the memory can be entirely imaginary.",

                            materials: {
                required: false,
                type: "none",
                items: [],
              },
            },
          },
        },
      },
      

      {
        id: "06M-06",
        title: "اگر هرکس فقط یک جمله می‌توانست بگوید",
        description:
          "تصور کردن جهانی که هر آدم در هر روز فقط می‌تواند یک جمله بگوید.",
         translations: {
  en: {
    title: "If Everyone Could Say Only One Sentence",
    description:
      "Imagining a world where each person can say only one sentence per day.",
  },
},
        activity: {
          purpose:
            "تقویت تخیل از طریق تغییر یک قانون ساده و دنبال کردن پیامدهای آن در زندگی روزمره.",

          instruction:
            "تصور کن از فردا هر آدمی در هر روز فقط می‌تواند یک جمله بگوید. بقیه‌ی روز را باید بدون حرف زدن بگذراند. یک روز از زندگی در چنین دنیایی را تصور کن.",

          steps: [
            "تصور کن مردم برای گفتن همان یک جمله چه چیزهایی را باید انتخاب کنند.",
            "یک روز معمولی را در این دنیا تصور کن.",
            "فکر کن مدرسه، خانه و رابطه‌ی آدم‌ها چه تغییری می‌کند.",
            "یک موقعیت را تصور کن که حرف زدن در آن فقط یک بار ممکن است.",
            "اگر خودت فقط یک جمله در روز می‌توانستی بگویی، زمان و مخاطب آن جمله را انتخاب کن.",
          ],

          questions: [
            "مردم برای گفتن همان یک جمله چه چیزهایی را باید انتخاب کنند؟",
            "یک روز عادی در چنین دنیایی چگونه می‌گذرد؟",
            "چه چیزهایی سخت‌تر می‌شود و چه چیزهایی ممکن است تغییر کند؟",
            "اگر خودت فقط یک جمله در روز می‌توانستی بگویی، آن جمله را چه زمانی و به چه کسی می‌گفتی؟",
          ],

          teacherNote:
            "هدف، ساختن پیامدهای یک امکان ساده است. لازم نیست دانش‌آموز همه‌ی جامعه را توضیح دهد؛ یک روز و چند موقعیت مشخص برای ساختن این جهان کافی است.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
                    translations: {
            en: {
              purpose:
                "Develop imagination by changing a simple rule and exploring its consequences in everyday life.",

              instruction:
                "Imagine that starting tomorrow, every person can say only one sentence each day. They must spend the rest of the day without speaking. Imagine one day in a world like this.",

              steps: [
                "Imagine what people would have to choose to say in their one sentence.",
                "Picture an ordinary day in this world.",
                "Think about how school, home, and people's relationships might change.",
                "Imagine a situation in which people have only one chance to speak.",
                "If you could say only one sentence each day, choose when you would say it and who you would say it to.",
              ],

              questions: [
                "What would people have to choose to say in their one sentence?",
                "What would an ordinary day in this kind of world be like?",
                "What would become more difficult, and what might change?",
                "If you could say only one sentence each day, what would you say, when would you say it, and to whom?",
              ],

              teacherNote:
                "The goal is to explore the consequences of a simple possibility. Students do not need to explain how the entire society works; imagining one day and a few specific situations is enough to begin building this world.",

              materials: {
                required: false,
                type: "none",
                items: [],
              },
            },
          },
        },
      },

      {
        id: "06M-07",
        title: "مصاحبه با یک اختراع",
        description:
          "تصور کردن یک اختراع ناشناخته از صد سال آینده و ساختن کاربرد، محدودیت و پیامدهای آن.",
         translations: {
  en: {
    title: "An Interview with an Invention",
    description:
      "Imagining an unknown invention from a hundred years in the future and developing its uses, limitations, and possible consequences.",
  },
},
        activity: {
          purpose:
            "تقویت تخیل از طریق ساختن یک اختراع ناشناخته و دنبال کردن کاربرد، محدودیت و پیامدهای آن.",

          instruction:
            "وسیله‌ای عجیب از صد سال آینده پیدا شده است. هیچ‌کس نمی‌داند برای چه کاری ساخته شده. فکر کن این اختراع چیست و چه کاری می‌تواند انجام دهد.",

          steps: [
            "تصور کن این وسیله برای چه کاری ساخته شده است.",
            "فکر کن چگونه کار می‌کند.",
            "تصور کن چه کسی ممکن است به آن نیاز داشته باشد.",
            "یک کاری را مشخص کن که این اختراع نمی‌تواند انجام دهد.",
            "فکر کن اگر کسی از آن به شکلی غیرمنتظره استفاده کند، چه اتفاقی می‌افتد.",
            "تصور کن اگر این اختراع وارد زندگی امروز شود، چه چیزی تغییر می‌کند.",
            "یک قانون برای استفاده از آن تعیین کن.",
          ],

          questions: [
            "این وسیله برای چه کاری ساخته شده است؟",
            "چه چیزی باعث شد این‌طور فکر کنی؟",
            "چه کسی ممکن است به این اختراع نیاز داشته باشد؟",
            "چگونه کار می‌کند؟",
            "چه کاری را نمی‌تواند انجام دهد؟",
            "اگر کسی از آن به شکلی غیرمنتظره استفاده کند، چه اتفاقی ممکن است بیفتد؟",
            "اگر وارد زندگی امروز شود، چه چیزی ممکن است تغییر کند؟",
            "اگر بخواهی یک قانون برای استفاده از آن بگذاری، آن قانون چیست؟",
          ],

          teacherNote:
            "اختراع باید از یک ایده‌ی تازه ساخته شود، اما لازم نیست پیچیده یا علمی باشد. تمرکز بر این است که دانش‌آموز فقط یک وسیله‌ی عجیب نام‌گذاری نکند، بلکه کاربرد، محدودیت و پیامد آن را تصور کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
                    translations: {
            en: {
              purpose:
                "Develop imagination by creating an unfamiliar invention and exploring its uses, limitations, and consequences.",

              instruction:
                "A strange device from a hundred years in the future has been discovered. No one knows what it was made for. Imagine what this invention is and what it can do.",

              steps: [
                "Imagine what this device was made to do.",
                "Think about how it works.",
                "Imagine who might need it.",
                "Decide on one thing this invention cannot do.",
                "Imagine what might happen if someone uses it in an unexpected way.",
                "Think about what might change if this invention became part of our lives today.",
                "Create one rule for using it.",
              ],

              questions: [
                "What was this device made to do?",
                "What made you think that?",
                "Who might need this invention?",
                "How does it work?",
                "What is one thing it cannot do?",
                "What might happen if someone uses it in an unexpected way?",
                "What might change if it became part of our lives today?",
                "If you could make one rule for using it, what would that rule be?",
              ],

              teacherNote:
                "The invention should come from a fresh idea, but it does not need to be complicated or scientific. The focus is on helping students go beyond simply naming a strange device and imagine its purpose, limitations, and consequences.",

              materials: {
                required: false,
                type: "none",
                items: [],
              },
            },
          },
        },
      },

      {
        id: "06M-08",
        title: "اگر یک شیء می‌توانست حرف بزند",
        description:
          "دیدن یک روز عادی از جایگاه چیزی که همیشه در اطراف ماست اما معمولاً صدایی ندارد.",
         translations: {
  en: {
    title: "If an Object Could Talk",
    description:
      "Seeing an ordinary day from the perspective of something that is always around us but usually has no voice.",
  },
},
        activity: {
          purpose:
            "تقویت تخیل از طریق جان‌بخشی به اشیا و تجربه کردن جهان از جایگاه چیزی غیرانسانی.",

          instruction:
            "یکی از چیزهایی را انتخاب کن که هر روز اطرافت می‌بینی. تصور کن امروز، برای اولین و تنها بار، می‌تواند با تو حرف بزند.",

          steps: [
            "یک شیء آشنا را انتخاب کن.",
            "تصور کن این شیء در طول روز چه چیزهایی می‌بیند که تو معمولاً نمی‌بینی.",
            "فکر کن درباره‌ی آدم‌ها و اتفاق‌های اطرافش چه می‌داند.",
            "تصور کن اگر فقط یک بار فرصت حرف زدن داشته باشد، چه می‌گوید.",
            "فکر کن بعد از شنیدن حرفش، نگاه تو به آن شیء چه تغییری می‌کند.",
          ],

          questions: [
            "این شیء در طول روز چه چیزهایی می‌بیند که تو معمولاً نمی‌بینی؟",
            "درباره‌ی آدم‌ها یا اتفاق‌هایی که اطرافش رخ می‌دهد چه فکری دارد؟",
            "اگر فقط یک بار فرصت حرف زدن داشته باشد، چه می‌گوید؟",
            "بعد از شنیدن حرفش، آیا نگاه تو به آن شیء تغییر می‌کند؟",
          ],

          teacherNote:
            "هدف فقط انسان‌وار کردن شیء نیست. دانش‌آموز باید تلاش کند جهان را از جایگاه آن شیء ببیند؛ چیزی که برای آن شیء عادی است ممکن است برای انسان دیده نشده باشد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
                    translations: {
            en: {
              purpose:
                "Develop imagination by bringing objects to life and experiencing the world from the perspective of something non-human.",

              instruction:
                "Choose something you see around you every day. Imagine that today, for the first and only time, it can talk to you.",

              steps: [
                "Choose a familiar object.",
                "Imagine what this object sees throughout the day that you usually do not notice.",
                "Think about what it knows about the people and events around it.",
                "Imagine what it would say if it had only one chance to speak.",
                "Think about how hearing its words might change the way you see that object.",
              ],

              questions: [
                "What does this object see during the day that you usually do not notice?",
                "What does it think about the people or events happening around it?",
                "If it had only one chance to speak, what would it say?",
                "After hearing what it says, would the way you see this object change?",
              ],

              teacherNote:
                "The goal is not simply to give an object human qualities. Students should try to see the world from the object's perspective. Something ordinary to the object might be something humans have never noticed.",

              materials: {
                required: false,
                type: "none",
                items: [],
              },
            },
          },
        },
      },

      {
        id: "06M-09",
        title: "باغ جانوران ناممکن",
        description:
          "ساختن جانوری که از ترکیب ویژگی‌های جانوران آشنا به وجود آمده اما قبلاً وجود نداشته است.",
         translations: {
  en: {
    title: "The Garden of Impossible Animals",
    description:
      "Creating an animal that has never existed by combining features of familiar animals.",
  },
},
        activity: {
          purpose:
            "تقویت تخیل ترکیبی؛ ساختن چیزی تازه از عناصر آشنا و دنبال کردن رابطه‌ی میان ویژگی‌ها و پیامدهای آن‌ها.",

          instruction:
            "تصور کن وارد باغی شده‌ای که جانورانی در آن زندگی می‌کنند که هیچ‌جا وجود ندارند. از ویژگی‌های جانوران آشنا استفاده کن و یک جانور تازه بساز.",

          steps: [
            "ویژگی‌هایی از جانوران آشنا انتخاب کن.",
            "آن ویژگی‌ها را با یکدیگر ترکیب کن.",
            "فکر کن ترکیب این ویژگی‌ها چه توانایی تازه‌ای ایجاد می‌کند.",
            "محیط زندگی، غذا و شیوه‌ی دفاع جانور را تصور کن.",
            "فکر کن شکل بدن یا توانایی‌هایش چه مشکلی برایش ایجاد می‌کند.",
            "یک رفتار تازه برای جانورت بساز که از هیچ‌کدام از جانوران الهام‌بخش آن نگرفته باشد.",
          ],

          questions: [
            "این جانور چه ویژگی‌هایی از جانوران آشنا دارد؟",
            "این ویژگی‌ها وقتی با هم ترکیب می‌شوند، چه توانایی تازه‌ای به او می‌دهند؟",
            "کجا زندگی می‌کند؟",
            "چه چیزی می‌خورد و چگونه غذا پیدا می‌کند؟",
            "این شکل بدن یا توانایی‌ها چه مشکلی برایش ایجاد می‌کند؟",
            "چگونه از خودش دفاع می‌کند؟",
            "چه رفتاری دارد که از هیچ‌کدام از جانورانی که از آن‌ها الهام گرفته‌ای، نگرفته است؟",
            "اگر یک کودک برای اولین بار آن را ببیند، ممکن است درباره‌اش چه چیزی را اشتباه حدس بزند؟",
          ],

          teacherNote:
            "دانش‌آموز را از ترکیب سطحی چند جانور فراتر ببرید. مهم است که ویژگی‌های انتخاب‌شده با توانایی، محیط زندگی و رفتار جانور رابطه داشته باشند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
                    translations: {
            en: {
              purpose:
                "Develop combinational imagination by creating something new from familiar elements and exploring the connections between its features and their consequences.",

              instruction:
                "Imagine entering a garden where animals live that do not exist anywhere else. Use features of familiar animals to create a completely new animal.",

              steps: [
                "Choose features from familiar animals.",
                "Combine those features with one another.",
                "Think about what new ability this combination might create.",
                "Imagine the animal's habitat, food, and ways of protecting itself.",
                "Think about what problems its body shape or abilities might cause for it.",
                "Create a new behavior for your animal that is not borrowed from any of the animals that inspired you.",
              ],

              questions: [
                "Which features does your animal have from familiar animals?",
                "When combined, what new ability do these features give it?",
                "Where does it live?",
                "What does it eat, and how does it find food?",
                "What problems might its body shape or abilities cause for it?",
                "How does it protect itself?",
                "What behavior does it have that is different from the animals that inspired you?",
                "If a child saw it for the first time, what might they guess incorrectly about it?",
              ],

              teacherNote:
                "Encourage students to go beyond simply combining parts of different animals. The chosen features should connect to the animal's abilities, habitat, and behavior.",

              materials: {
                required: false,
                type: "none",
                items: [],
              },
            },
          },
        },
      },

      {
        id: "06M-10",
        title: "بندر کشتی‌های کاغذی",
        description:
          "تصور کردن بندی روی زمین که هیچ انسانی تاکنون به آن نرسیده و کشتی‌های کاغذی به آن می‌رسند.",
         translations: {
  en: {
    title: "The Harbor of Paper Boats",
    description:
      "Imagining a harbor in a place no human has ever reached, where paper boats arrive.",
  },
},
        activity: {
          purpose:
            "تقویت تخیل از طریق ساختن یک مکان ناشناخته از یک نقطه‌ی شروع محدود و تصور چیزی که هنوز در تجربه‌ی انسانی وجود ندارد.",

          instruction:
            "جایی روی زمین، بندی وجود دارد که هیچ انسانی تاکنون به آن نرسیده است. کشتی‌های کاغذی کودکان از رودخانه‌ها و دریاهای مختلف سرانجام به این بندر می‌رسند. امروز کشتی کاغذی تو به آنجا رسیده است و تو اولین انسانی هستی که این بندر را می‌بیند.",

          steps: [
            "تصور کن وقتی برای اولین بار بندر را می‌بینی، چه چیزی توجهت را جلب می‌کند.",
            "شکل و فضای بندر را تصور کن.",
            "فکر کن وقتی در بندر قدم می‌زنی، چه چیزهایی می‌بینی.",
            "یک ویژگی از بندر را انتخاب کن که بیشتر از همه برایت جالب یا عجیب است.",
          ],

          questions: [
            "وقتی برای اولین بار بندر را می‌بینی، چه چیزی توجهت را جلب می‌کند؟",
            "بندر چه شکلی است؟",
            "وقتی در بندر قدم می‌زنی، چه چیزهایی می‌بینی؟",
            "چه چیزی در این بندر برایت جالب‌تر یا عجیب‌تر از همه است؟",
          ],

          teacherNote:
            "هدف، ساختن یک مکان خیالی است، نه حل کردن یک معما درباره‌ی علت ناشناخته بودن بندر. پرسش‌ها فقط نقطه‌ی شروع‌اند و دانش‌آموز باید آزادی داشته باشد جهان این بندر را خودش بسازد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
                    translations: {
            en: {
              purpose:
                "Develop imagination by creating an unknown place from a limited starting point and imagining something that has never existed in human experience.",

              instruction:
                "Somewhere on Earth, there is a harbor that no human has ever reached. Paper boats made by children travel through rivers and seas from different places and eventually arrive at this harbor. Today, your paper boat has arrived there, and you are the first human to see it.",

              steps: [
                "Imagine what catches your attention when you see the harbor for the first time.",
                "Picture the shape and atmosphere of the harbor.",
                "Think about what you see as you walk around it.",
                "Choose one feature of the harbor that you find especially interesting or unusual.",
              ],

              questions: [
                "What catches your attention when you see the harbor for the first time?",
                "What does the harbor look like?",
                "What do you see as you walk around the harbor?",
                "What do you find most interesting or unusual about this harbor?",
              ],

              teacherNote:
                "The goal is to create an imaginary place, not to solve a mystery about why the harbor is unknown. The questions are only starting points, and students should be free to build the world of this harbor in their own way.",

              materials: {
                required: false,
                type: "none",
                items: [],
              },
            },
          },
        },
      },
    ],
  },
  {
    id: "observation",
    code: "01M",
    title: "مشاهده",
    description: "دیدن چیزی که معمولاً از کنار آن عبور می‌کنیم.",
    translations: {
  en: {
    title: "Observation",
    description: "Noticing what we usually pass by without a second look.",
  },
},
    situations: [
      {
        id: "01M-01",
        title: "پنج چیز که همیشه بوده‌اند",
        description:
          "در اطرافمان چیزهایی هستند که همیشه بوده‌اند، اما معمولاً دقیق به آن‌ها نگاه نمی‌کنیم.",
          translations: {
  en: {
    title: "Five Things That Have Always Been There",
    description:
      "There are things around us that have always been there, yet we rarely take a close look at them.",
  },
},
        activity: {
          purpose:
            "تقویت مشاهده‌ی آگاهانه و کمک به دانش‌آموز برای دیدن دوباره‌ی چیزهای آشنا و توجه به جزئیاتی که معمولاً از نظرش پنهان می‌مانند.",

          instruction:
            "از دانش‌آموزان بخواهید ابتدا پنج چیز آشنا در محیط اطراف خود پیدا کنند که مدت‌هاست آن‌ها را می‌بینند، اما معمولاً با دقت نگاهشان نمی‌کنند. سپس یکی را انتخاب کنند و آن را طوری توصیف کنند که جزئیات دیده‌شده، نه حدس‌ها و داستان‌های ذهنی، در مرکز نوشته باشد.",

          steps: [
            "از دانش‌آموزان بخواهید برای چند لحظه آرام و بدون عجله به محیط اطراف خود نگاه کنند.",
            "از آن‌ها بخواهید پنج چیز آشنا پیدا کنند که مدت‌هاست در اطرافشان بوده‌اند، اما معمولاً به آن‌ها دقیق نگاه نمی‌کنند.",
            "از میان آن پنج چیز، یکی را انتخاب کنند.",
            "آن چیز را بدون گفتن نامش، با دست‌کم سه ویژگی قابل مشاهده توصیف کنند.",
            "حالا دوباره دقیق‌تر نگاه کنند و دست‌کم یک جزئیات تازه پیدا کنند که پیش از این متوجهش نشده بودند.",
            "در پایان، یک توصیف کوتاه بنویسند که در آن هم ویژگی‌های قابل مشاهده و هم آن جزئیات تازه حضور داشته باشد.",
          ],

          questions: [
            "کدام چیز را انتخاب کردی؟ چرا فکر می‌کنی معمولاً به آن دقیق نگاه نمی‌کنی؟",
            "چه چیزی درباره‌ی آن دیدی که قبلاً متوجهش نشده بودی؟",
            "کدام جزئیات باعث می‌شوند کسی بدون دیدن آن، بتواند آن را در ذهنش تصور کند؟",
            "کدام بخش نوشته‌ات بر چیزی استوار است که واقعاً دیدی، نه چیزی که حدس زدی؟",
            "بعد از این‌که دقیق نگاه کردی، آیا آن چیز برایت همان چیز قبلی بود؟ چه چیزی در نگاهت تغییر کرد؟",
          ],

          teacherNote:
            "هدف فعالیت پیدا کردن اشیای عجیب نیست؛ ارزش آن در دیدن دوباره‌ی چیزهای کاملاً آشناست. دانش‌آموز را به استفاده از ویژگی‌های قابل مشاهده تشویق کنید و اجازه ندهید پاسخ‌ها خیلی سریع به حدس و داستان‌پردازی تبدیل شوند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Develop mindful observation and help students look at familiar things again, noticing details that usually go unnoticed.",
    instruction:
      "Ask students to first find five familiar things in their surroundings that they have seen for a long time but rarely look at closely. Then ask them to choose one and describe it, focusing on the details they can actually see rather than guesses or stories created in their minds.",
    steps: [
      "Ask students to look around calmly and without rushing for a few moments.",
      "Ask them to find five familiar things that have been around them for a long time but that they rarely observe closely.",
      "Ask them to choose one of those five things.",
      "Ask them to describe it without naming it, using at least three observable features.",
      "Now ask them to look more carefully and find at least one new detail they had not noticed before.",
      "Finally, ask them to write a short description that includes both observable features and the newly discovered detail.",
    ],
    questions: [
      "Which thing did you choose? Why do you think you usually do not look at it closely?",
      "What did you notice about it that you had not noticed before?",
      "Which details would help someone imagine this thing without actually seeing it?",
      "Which parts of your writing are based on what you actually saw rather than what you guessed?",
      "After looking at it carefully, did it still seem like the same thing to you? What changed in the way you saw it?",
    ],
    teacherNote:
      "The goal is not to find unusual objects; the value of this activity lies in looking at completely familiar things again. Encourage students to use observable features, and help them avoid turning their descriptions too quickly into guesses or imaginative stories.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "01M-02",
        title: "پنجره خاموش",
        description:
          "نگاه کردن به یک پنجره‌ی معمولی و پیدا کردن چیزهایی که از پشت آن دیده نمی‌شوند.",
        translations: {
  en: {
    title: "The Silent Window",
    description:
      "Looking at an ordinary window and noticing things that cannot be seen through it.",
  },
},
        activity: {
          purpose:
            "تقویت مشاهده‌ی دقیق و توجه به تفاوت میان آنچه مستقیماً دیده می‌شود و آنچه می‌توان از نشانه‌های موجود حدس زد.",

          instruction:
            "از دانش‌آموزان بخواهید به یک پنجره‌ی معمولی فکر کنند؛ پنجره‌ای که ممکن است هر روز آن را ببینند. از آن‌ها بخواهید ابتدا فقط چیزهایی را که واقعاً می‌بینند توصیف کنند و سپس درباره‌ی چیزهایی که دیده نمی‌شوند اما می‌توان از نشانه‌ها درباره‌شان سؤال پرسید، فکر کنند.",

          steps: [
            "از دانش‌آموزان بخواهید یک پنجره‌ی آشنا در مدرسه، خانه یا خیابان را انتخاب کنند.",
            "از آن‌ها بخواهید فقط چیزهایی را که واقعاً می‌توانند ببینند، بدون اینکه درباره‌ی آن‌ها داستان بسازند، توصیف کنند.",
            "از آن‌ها بخواهید سه چیز را پیدا کنند که مستقیماً دیده نمی‌شوند اما نشانه‌ای از وجودشان وجود دارد.",
            "از آن‌ها بخواهید درباره‌ی یکی از این چیزهای نادیده، یک حدس و یک پرسش مطرح کنند.",
            "در پایان، تفاوت میان «چیزی که دیدیم»، «چیزی که حدس زدیم» و «چیزی که هنوز نمی‌دانیم» را در کلاس بررسی کنید.",
          ],

          questions: [
            "از پشت این پنجره چه چیزی را واقعاً می‌توانی ببینی؟",
            "چه چیزی را نمی‌بینی اما نشانه‌ای از وجودش داری؟",
            "چه تفاوتی میان مشاهده و حدس وجود دارد؟",
            "اگر فقط یک سؤال می‌توانستی درباره‌ی چیزی که پشت پنجره است بپرسی، چه می‌پرسیدی؟",
            "آیا ممکن است دو نفر به یک پنجره نگاه کنند اما چیزهای متفاوتی ببینند؟ چرا؟",
          ],

          teacherNote:
            "در این فعالیت مرز میان مشاهده و تفسیر را حفظ کنید. اگر دانش‌آموز حدسی مطرح کرد، از او بپرسید «چه چیزی باعث شد این حدس را بزنی؟». هدف این نیست که حدس درست پیدا شود؛ هدف، آگاه شدن از تفاوت میان داده‌ی مشاهده‌شده و برداشت ذهنی است.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Develop careful observation and help students distinguish between what they directly see and what they can infer from available clues.",
    instruction:
      "Ask students to think of an ordinary window, perhaps one they see every day. First, ask them to describe only what they can actually see. Then invite them to think about things that remain unseen but that they can ask questions about based on the available clues.",
    steps: [
      "Ask students to choose a familiar window at school, at home, or on the street.",
      "Ask them to describe only what they can actually see, without making up stories about it.",
      "Ask them to identify three things that cannot be seen directly but for which there are clues suggesting their presence.",
      "Ask them to make one guess and raise one question about one of these unseen things.",
      "Finally, discuss in class the difference between 'what we saw,' 'what we guessed,' and 'what we still do not know.'",
    ],
    questions: [
      "What can you actually see through this window?",
      "What can you not see, but have a clue that it exists?",
      "What is the difference between observation and guessing?",
      "If you could ask only one question about something beyond the window, what would you ask?",
      "Is it possible for two people to look at the same window and see different things? Why?",
    ],
    teacherNote:
      "Maintain the distinction between observation and interpretation throughout this activity. When a student makes a guess, ask: 'What made you think that?' The goal is not to find the correct guess, but to become aware of the difference between observed information and personal interpretation.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "01M-03",
        title: "قبل از نام‌گذاری",
        description:
          "نگاه به یک شیء پیش از آنکه نامش را به زبان بیاوری، فقط با ویژگی‌های قابل‌مشاهده.",
           translations: {
  en: {
    title: "Before Naming",
    description:
      "Looking at an object before saying its name, focusing only on its observable features.",
  },
},
        activity: {
          purpose:
            "تمرین مشاهده‌ی دقیق و جدا کردن ویژگی‌های قابل‌مشاهده از نام، کاربرد و برداشت ذهنی درباره‌ی یک شیء.",

          instruction:
            "یک شیء ساده در اختیار دانش‌آموزان قرار دهید، اما از آن‌ها بخواهید تا مدتی نام آن را به زبان نیاورند. از آن‌ها بخواهید فقط بر اساس ویژگی‌هایی که واقعاً می‌بینند، آن را توصیف کنند.",

          steps: [
            "یک شیء ساده را در اختیار کلاس قرار دهید.",
            "از دانش‌آموزان بخواهید تا مدتی نام شیء را نگویند و حتی‌الامکان به کاربرد آن هم اشاره نکنند.",
            "از آن‌ها بخواهید ویژگی‌های قابل‌مشاهده‌ی شیء را پیدا کنند؛ مانند شکل، اندازه، رنگ، سطح، خطوط و بخش‌های مختلف آن.",
            "از آن‌ها بخواهید توصیف خود را با توصیف یک همکلاسی مقایسه کنند و ببینند چه جزئیاتی را یکی دیده و دیگری ندیده است.",
            "در پایان نام شیء را بگویید و درباره‌ی این تفاوت گفت‌وگو کنید که دانستن نام یک چیز چگونه می‌تواند روی شیوه‌ی دیدن آن اثر بگذارد.",
          ],

          questions: [
            "اگر نام این شیء را نمی‌دانستی، چگونه آن را برای کسی توضیح می‌دادی؟",
            "کدام ویژگی آن را اول از همه دیدی؟",
            "آیا دانستن نام یک شیء باعث می‌شود بعضی جزئیات آن را کمتر ببینیم؟ چرا؟",
            "چه چیزی را تو دیدی که همکلاسی‌ات ندیده بود؟",
            "آیا می‌توان یک شیء را فقط با ویژگی‌های قابل‌مشاهده توصیف کرد؟",
          ],

          teacherNote:
            "در مرحله‌ی اول اجازه ندهید دانش‌آموزان به نام یا کاربرد شیء تکیه کنند. اگر گفتند «این یک ... است» یا «برای ... استفاده می‌شود»، آن‌ها را به ویژگی قابل‌مشاهده برگردانید. هدف، تمرین مشاهده پیش از نام‌گذاری و قضاوت است.",

          materials: {
            required: true,
            type: "object",
            items: ["یک شیء ساده و آشنا برای مشاهده‌ی کلاسی"],
          },
          translations: {
  en: {
    purpose:
      "Practice careful observation and distinguish an object's observable features from its name, function, and the assumptions we make about it.",
    instruction:
      "Give students a simple object, but ask them not to say its name for a while. Invite them to describe it using only the features they can actually see.",
    steps: [
      "Place a simple object in front of the class.",
      "Ask students not to name the object for a while and, as much as possible, not to mention what it is used for.",
      "Ask them to identify the object's observable features, such as its shape, size, color, surface, lines, and different parts.",
      "Ask them to compare their descriptions with those of a classmate and notice which details one person saw that the other did not.",
      "Finally, reveal the object's name and discuss how knowing the name of something can affect the way we see it.",
    ],
    questions: [
      "If you did not know this object's name, how would you describe it to someone?",
      "Which feature did you notice first?",
      "Can knowing the name of an object make us less likely to notice some of its details? Why?",
      "What did you notice that your classmate did not?",
      "Is it possible to describe an object using only its observable features?",
    ],
    teacherNote:
      "During the first stage, do not let students rely on the object's name or function. If someone says, 'This is a ...' or 'It is used for ...', guide them back to its observable features. The goal is to practice observing before naming and judging.",
    materials: {
      required: true,
      type: "object",
      items: ["A simple, familiar object for classroom observation"],
    },
  },
},
        },
      },

      {
        id: "01M-04",
        title: "همان چیز، جای دیگر",
        description:
          "دیدن یک چیز آشنا از زاویه‌ای تازه و توجه به چیزهایی که با تغییر جای مشاهده آشکار یا پنهان می‌شوند.",
         translations: {
  en: {
    title: "The Same Thing, Somewhere Else",
    description:
      "Seeing a familiar thing from a new angle and noticing what becomes visible or hidden when our viewing position changes.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای درک اینکه جایگاه و زاویه‌ی مشاهده بر آنچه می‌بینیم اثر می‌گذارد.",

          instruction:
            "یک شیء یا بخش ساده‌ای از محیط را انتخاب کنید. از دانش‌آموزان بخواهید ابتدا از یک جای مشخص به آن نگاه کنند و سپس جای خود را تغییر دهند. هدف این است که ببینند با تغییر جای مشاهده، بعضی ویژگی‌ها ظاهر می‌شوند و بعضی دیگر از دید پنهان می‌مانند.",

          steps: [
            "یک شیء یا مکان ساده و آشنا را برای مشاهده انتخاب کنید.",
            "از دانش‌آموزان بخواهید ابتدا از جای خود به آن نگاه کنند و چند ویژگی قابل مشاهده را ثبت کنند.",
            "از آن‌ها بخواهید جای خود را تغییر دهند؛ مثلاً نزدیک‌تر، دورتر، بالاتر، پایین‌تر یا از سمت دیگر قرار بگیرند.",
            "از آن‌ها بخواهید دوباره همان چیز را مشاهده کنند و ویژگی‌های تازه‌ای را که این بار دیده‌اند پیدا کنند.",
            "در پایان، دو مشاهده را کنار هم قرار دهند و بنویسند چه چیزی با تغییر جای مشاهده دیده شد یا دیگر دیده نشد.",
          ],

          questions: [
            "وقتی از جای اول نگاه کردی، چه چیزی بیشتر به چشمت آمد؟",
            "بعد از تغییر جای خود، چه چیزی را دیدی که قبلاً نمی‌دیدی؟",
            "آیا چیزی هم بود که در نگاه دوم دیگر دیده نمی‌شد؟",
            "اگر شخص دیگری از جای متفاوتی نگاه کند، چه چیز متفاوتی ممکن است ببیند؟",
            "آیا تغییر جای مشاهده، خودِ چیز را تغییر داده بود یا فقط چیزی را که می‌دیدی؟",
          ],

          teacherNote:
            "هدف این فعالیت پیدا کردن یک «زاویه‌ی درست» نیست. دانش‌آموز باید تجربه کند که هر جایگاه بخشی از چیز را آشکار و بخشی دیگر را پنهان می‌کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Help students understand how our position and viewing angle influence what we see.",
    instruction:
      "Choose a simple object or a part of the surrounding environment. Ask students to look at it first from a specific position and then change their position. The goal is to notice how some features become visible while others disappear from view when the observer moves.",
    steps: [
      "Choose a simple, familiar object or place for observation.",
      "Ask students to look at it from where they are and record a few observable features.",
      "Ask them to change their position, for example by moving closer, farther away, higher, lower, or to the other side.",
      "Ask them to observe the same thing again and identify new features they can now see.",
      "Finally, place the two observations side by side and write down what became visible or disappeared when their position changed.",
    ],
    questions: [
      "When you looked from your first position, what caught your attention most?",
      "After changing your position, what did you see that you could not see before?",
      "Was there anything that was no longer visible from your second position?",
      "If someone else looked from a different position, what might they see differently?",
      "Did changing your position change the thing itself, or only what you could see of it?",
    ],
    teacherNote:
      "The goal of this activity is not to find the 'correct angle.' Students should experience how every viewing position reveals some parts of something while hiding others.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "01M-05",
        title: "ردّ زمان",
        description:
          "پیدا کردن نشانه‌هایی از گذشته در چیزهایی که همین حالا جلوی چشم ما هستند.",
         translations: {
  en: {
    title: "Traces of Time",
    description:
      "Finding signs of the past in things that are right in front of us now.",
  },
},
        activity: {
          purpose:
            "تقویت توجه به تغییر، فرسودگی و نشانه‌های زمانی و کمک به دانش‌آموز برای استنباط گذشته از روی شواهد قابل مشاهده.",

          instruction:
            "یک شیء یا بخش قدیمی از محیط مدرسه را برای مشاهده انتخاب کنید؛ چیزی که نشانه‌هایی از استفاده، تغییر یا گذر زمان در آن دیده می‌شود. از دانش‌آموزان بخواهید ابتدا فقط نشانه‌های قابل مشاهده را پیدا کنند و سپس درباره‌ی چیزهایی که این نشانه‌ها درباره‌ی گذشته به آن‌ها می‌گویند فکر کنند.",

          steps: [
            "یک شیء قدیمی یا بخشی از محیط مدرسه را برای مشاهده انتخاب کنید.",
            "از دانش‌آموزان بخواهید هر نشانه‌ای از استفاده، تغییر، فرسودگی یا تعمیر را که می‌بینند پیدا کنند.",
            "از آن‌ها بخواهید بین چیزی که واقعاً می‌بینند و چیزی که از روی آن حدس می‌زنند تفاوت بگذارند.",
            "از آن‌ها بخواهید حدس بزنند این نشانه‌ها درباره‌ی گذشته‌ی شیء چه اطلاعاتی می‌دهند.",
            "در پایان، چند مشاهده و چند استنباط مختلف را با هم مقایسه کنید و ببینید کدام استنباط‌ها شواهد بیشتری دارند.",
          ],

          questions: [
            "چه چیزی به تو نشان می‌دهد که این شیء مدت زیادی استفاده شده است؟",
            "کدام بخش آن بیشتر از بقیه تغییر کرده است؟",
            "چه چیزی را واقعاً می‌بینی و چه چیزی را فقط از روی آن حدس می‌زنی؟",
            "اگر این شیء می‌توانست درباره‌ی گذشته‌اش حرف بزند، چه چیزی را می‌توانستی از روی نشانه‌هایش حدس بزنی؟",
            "کدام حدس تو شواهد بیشتری دارد؟ چرا؟",
          ],

          teacherNote:
            "هدف، ساختن یک داستان خیالی درباره‌ی شیء نیست؛ هدف این است که دانش‌آموز یاد بگیرد از نشانه‌های قابل مشاهده درباره‌ی گذشته سؤال کند. مرتب از او بپرسید: «چه چیزی باعث شد این را بگویی؟» تا رابطه‌ی میان مشاهده و استنباط روشن شود.",

          materials: {
            required: true,
            type: "object",
            items: ["یک شیء قدیمی، فرسوده یا تعمیرشده در محیط مدرسه"],
          },
          translations: {
  en: {
    purpose:
      "Develop attention to change, wear, and signs of time, helping students infer the past from observable evidence.",
    instruction:
      "Choose an old object or an aged part of the school environment for observation—something that shows signs of use, change, or the passage of time. Ask students to first identify only the observable signs, and then think about what those signs might tell them about the past.",
    steps: [
      "Choose an old object or an aged part of the school environment for observation.",
      "Ask students to identify any signs of use, change, wear, or repair that they can see.",
      "Ask them to distinguish between what they actually see and what they infer from it.",
      "Ask them to make guesses about what these signs might reveal about the object's past.",
      "Finally, compare several observations and inferences, and discuss which inferences are supported by stronger evidence.",
    ],
    questions: [
      "What tells you that this object has been used for a long time?",
      "Which part of it has changed more than the others?",
      "What can you actually see, and what are you only guessing from what you see?",
      "If this object could talk about its past, what might you infer from the signs it carries?",
      "Which of your guesses is supported by stronger evidence? Why?",
    ],
    teacherNote:
      "The goal is not to invent an imaginary story about the object. It is to help students learn to ask questions about the past using observable clues. Keep asking, 'What made you say that?' to make the relationship between observation and inference clear.",
    materials: {
      required: true,
      type: "object",
      items: ["An old, worn, or repaired object from the school environment"],
    },
  },
},
        },
      },

      {
        id: "01M-06",
        title: "یک چیز که همین حالا در حال تغییر است",
        description:
          "مشاهده‌ی یک شیء یا پدیده در طول چند دقیقه و پیدا کردن تغییرهایی که معمولاً به چشم نمی‌آیند.",
          translations: {
  en: {
    title: "Something Changing Right Now",
    description:
      "Observing an object or phenomenon over several minutes and noticing changes that usually go unnoticed.",
  },
},
        activity: {
          purpose:
            "تقویت مشاهده‌ی فرایندی و کمک به دانش‌آموز برای توجه به تغییرات تدریجی و ثبت آن‌ها در طول زمان.",

          instruction:
            "یک پدیده‌ی ساده مانند یک تکه یخ، یک قطره آب یا یک ناحیه‌ی روشن‌شده با نور را برای چند دقیقه مشاهده کنید. از دانش‌آموزان بخواهید در چند لحظه‌ی مشخص دوباره به آن نگاه کنند و تغییرات را با دقت توصیف کنند.",

          steps: [
            "یکی از گزینه‌ها را برای مشاهده انتخاب کنید: یک تکه یخ، یک قطره آب یا یک ناحیه‌ی نور.",
            "در شروع، از دانش‌آموزان بخواهید وضعیت پدیده را بدون تفسیر و فقط با ویژگی‌های قابل مشاهده توصیف کنند.",
            "پس از چند دقیقه، دوباره همان پدیده را مشاهده کنند و تغییرات ایجادشده را پیدا کنند.",
            "مشاهده را یک بار دیگر تکرار کنید و از دانش‌آموزان بخواهید تغییرات را به ترتیب زمانی بیان کنند.",
            "در پایان، درباره‌ی این موضوع گفت‌وگو کنید که کدام تغییرها سریع دیده شدند و کدام تغییرها فقط با صبر کردن قابل مشاهده بودند.",
          ],

          questions: [
            "در اولین مشاهده دقیقاً چه چیزی دیدی؟",
            "چه چیزی در مشاهده‌ی دوم تغییر کرده بود؟",
            "کدام تغییر را زودتر از بقیه متوجه شدی؟",
            "اگر پنج دقیقه‌ی دیگر صبر کنیم، چه چیزی احتمالاً تغییر خواهد کرد؟",
            "آیا چیزی می‌تواند در حال تغییر باشد ولی ما نتوانیم تغییر آن را در یک لحظه ببینیم؟",
          ],

          teacherNote:
            "دانش‌آموزان را تشویق کنید تغییرات را به ترتیب زمانی و با واژه‌های قابل مشاهده توصیف کنند. هدف پیش‌بینی درست آینده نیست؛ هدف این است که دانش‌آموز متوجه شود بعضی پدیده‌ها فقط با مشاهده‌ی مکرر و صبر کردن قابل فهم هستند.",

          materials: {
            required: true,
            type: "object",
            items: [
              "یکی از این موارد: یک تکه یخ، یک قطره آب یا یک منبع/ناحیه نور",
            ],
          },
          translations: {
  en: {
    purpose:
      "Develop process-oriented observation and help students notice gradual changes and record them over time.",
    instruction:
      "Choose a simple phenomenon, such as an ice cube, a drop of water, or an area illuminated by light, and observe it for several minutes. Ask students to look at it again at specific intervals and describe the changes carefully.",
    steps: [
      "Choose one of the following for observation: an ice cube, a drop of water, or an area of light.",
      "At the beginning, ask students to describe the state of the phenomenon using only observable features, without interpretation.",
      "After a few minutes, ask them to observe the same phenomenon again and identify any changes.",
      "Repeat the observation once more and ask students to describe the changes in chronological order.",
      "Finally, discuss which changes became visible quickly and which could only be noticed by waiting patiently.",
    ],
    questions: [
      "What exactly did you see during your first observation?",
      "What had changed by the second observation?",
      "Which change did you notice first?",
      "If we wait another five minutes, what will probably change?",
      "Can something be changing even when we cannot see that change in a single moment?",
    ],
    teacherNote:
      "Encourage students to describe changes in chronological order using words that refer to observable features. The goal is not to predict the future correctly, but to help students realize that some phenomena can only be understood through repeated observation and patience.",
    materials: {
      required: true,
      type: "object",
      items: [
        "One of the following: an ice cube, a drop of water, or a light source/illuminated area",
      ],
    },
  },
},
        },
      },

      {
        id: "01M-07",
        title: "جای خالی",
        description:
          "پیدا کردن چیزهایی در محیط که نبودنشان به‌اندازه بودنشان معنا دارد.",
          translations: {
  en: {
    title: "The Empty Space",
    description:
      "Finding things in our surroundings whose absence can be just as meaningful as their presence.",
  },
},
        activity: {
          purpose:
            "تقویت توجه به غیاب، خلأ و تغییرات محیطی و کمک به دانش‌آموز برای کشف اطلاعاتی که از نبودن یک چیز می‌توان به دست آورد.",

          instruction:
            "از دانش‌آموزان بخواهید در محیط مدرسه به دنبال جای خالی یا چیزی بگردند که انتظار می‌رود باشد اما نیست. سپس از آن‌ها بخواهید بررسی کنند که این نبودن چه چیزی درباره‌ی محیط یا اتفاقی که افتاده به ما می‌گوید.",

          steps: [
            "از دانش‌آموزان بخواهید محیط کلاس یا مدرسه را با دقت نگاه کنند.",
            "از آن‌ها بخواهید یک جای خالی یا یک نبودن معنادار پیدا کنند؛ مثلاً جای یک وسیله، یک صندلی خالی، یک قاب بدون تصویر یا فضایی که معمولاً چیزی در آن قرار دارد.",
            "از آن‌ها بخواهید توضیح دهند از کجا فهمیده‌اند که چیزی در آنجا «نیست».",
            "از آن‌ها بخواهید چند احتمال مختلف درباره‌ی دلیل این نبودن مطرح کنند.",
            "در پایان، درباره‌ی تفاوت میان «آنچه می‌بینیم» و «آنچه از نبودن یک چیز نتیجه می‌گیریم» گفت‌وگو کنید.",
          ],

          questions: [
            "چه چیزی را پیدا کردی که نبودنش توجهت را جلب کرد؟",
            "از کجا فهمیدی که جای آن چیز خالی است؟",
            "چه چیزهایی ممکن است باعث شده باشند آن شیء یا فرد آنجا نباشد؟",
            "آیا می‌توانی بدون دیدن چیزی، از نبودنش اطلاعاتی به دست بیاوری؟",
            "کدام توضیح درباره‌ی این جای خالی شواهد بیشتری دارد؟",
          ],

          teacherNote:
            "دانش‌آموزان را به سمت داستان‌پردازی سریع نبرید. ابتدا از آن‌ها بخواهید خودِ غیاب را دقیق توصیف کنند و سپس چند احتمال برای توضیح آن بسازند. هدف، تجربه‌ی این ایده است که نبودن نیز می‌تواند داده و نشانه باشد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Develop attention to absence, emptiness, and changes in the environment, helping students discover what can be learned from something that is missing.",
    instruction:
      "Ask students to look around the school for an empty space or something that is expected to be there but is not. Then ask them to explore what this absence might tell us about the environment or about something that has happened.",
    steps: [
      "Ask students to look carefully around the classroom or school.",
      "Ask them to find an empty space or a meaningful absence, such as the place where an object used to be, an empty chair, a picture frame without a picture, or a space where something is usually kept.",
      "Ask them to explain how they know that something is missing from that place.",
      "Ask them to suggest several possible reasons for this absence.",
      "Finally, discuss the difference between 'what we see' and 'what we conclude from the absence of something.'",
    ],
    questions: [
      "What did you find whose absence caught your attention?",
      "How did you know that something was missing from that place?",
      "What might have caused that object or person not to be there?",
      "Can you learn something from the absence of something you cannot see?",
      "Which explanation for this empty space is supported by stronger evidence?",
    ],
    teacherNote:
      "Do not rush students into making up stories. First, ask them to describe the absence itself carefully, and then invite them to come up with several possible explanations. The goal is to experience the idea that absence can also provide information and clues.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "01M-08",
        title: "چیزی که باعث شد مکث کنم",
        description:
          "پیدا کردن چیزی در محیط که برای لحظه‌ای توجهت را متوقف می‌کند و تبدیل آن مشاهده به ماده‌ای برای نوشتن.",
         translations: {
  en: {
    title: "Something That Made Me Pause",
    description:
      "Finding something in the environment that makes you pause for a moment and turning that observation into material for writing.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای تبدیل مشاهده‌ی شخصی به ماده‌ای برای نوشتن و تجربه‌ی اینکه یک مشاهده می‌تواند آغاز یک توصیف، پرسش، حدس یا روایت باشد.",

          instruction:
            "از دانش‌آموزان بخواهید مدتی در محیط اطراف خود بمانند و به چیزهایی که معمولاً از کنارشان عبور می‌کنند توجه کنند. این بار به دنبال چیز عجیب، زیبا یا مهم نباشند؛ چیزی را پیدا کنند که به هر دلیلی باعث شده برای لحظه‌ای مکث کنند. سپس از همان مشاهده برای ساختن یک نوشته استفاده کنند.",

          steps: [
            "از دانش‌آموزان بخواهید چند دقیقه آرام در محیط اطراف خود بمانند و فقط مشاهده کنند.",
            "از آن‌ها بخواهید چیزی پیدا کنند که باعث شده برای لحظه‌ای مکث کنند.",
            "از آن‌ها بخواهید دقیقاً بنویسند چه چیزی دیدند یا متوجه شدند.",
            "از آن‌ها بخواهید فکر کنند چه چیزی باعث جلب توجهشان شد و بعد از آن چه چیزی به ذهنشان رسید.",
            "از آن‌ها بخواهید یک چیز را که هنوز درباره‌ی آن نمی‌دانند یا برایشان روشن نیست مشخص کنند.",
            "در پایان، از همان مشاهده یک نوشته‌ی کوتاه بسازند؛ نوشته می‌تواند توصیف، پرسش، حدس، خاطره یا روایت باشد.",
          ],

          questions: [
            "چه چیزی باعث شد مکث کنی؟",
            "دقیقاً چه چیزی در آن دیدی که توجهت را گرفت؟",
            "قبل از اینکه به آن دقیق نگاه کنی، چه فکری درباره‌اش داشتی؟",
            "بعد از مشاهده‌ی دقیق‌تر، چه چیزی در برداشتت تغییر کرد؟",
            "چه چیزی درباره‌ی آن هنوز برایت روشن نیست؟",
          ],

          teacherNote:
            "در این فعالیت لازم نیست همه‌ی دانش‌آموزان یک نوع نوشته تولید کنند. ارزش فعالیت در این است که مشاهده به ماده‌ی اولیه‌ی نوشتن تبدیل شود. اجازه دهید یکی از دانش‌آموزان از یک مشاهده به توصیف برسد، دیگری به پرسش، دیگری به حدس و دیگری به روایت.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Help students turn personal observations into material for writing and experience how an observation can become the starting point for a description, question, guess, or narrative.",
    instruction:
      "Ask students to spend some time in their surroundings, paying attention to things they usually pass by without noticing. This time, they should not look for something strange, beautiful, or important. Instead, they should find something that, for any reason, made them pause for a moment. Then ask them to use that observation as the starting point for a piece of writing.",
    steps: [
      "Ask students to spend a few quiet minutes observing their surroundings.",
      "Ask them to find something that made them pause for a moment.",
      "Ask them to write down exactly what they saw or noticed.",
      "Ask them to think about what caught their attention and what came to mind afterward.",
      "Ask them to identify one thing about it that they still do not know or understand.",
      "Finally, ask them to create a short piece of writing based on that observation. It could be a description, a question, a guess, a memory, or a narrative.",
    ],
    questions: [
      "What made you pause?",
      "What exactly did you see that caught your attention?",
      "Before looking at it closely, what did you think about it?",
      "After observing it more carefully, what changed in your understanding?",
      "What about it is still unclear to you?",
    ],
    teacherNote:
      "Students do not all need to produce the same kind of writing in this activity. Its value lies in turning observation into raw material for writing. Allow one student to develop a description from an observation, another to raise a question, another to make a guess, and another to create a narrative.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "01M-09",
        title: "پنج صدایی که همیشه هستند",
        description:
          "چند دقیقه فقط گوش‌دادن و پیدا کردن صداهایی که همیشه هستند اما نادیده گرفته می‌شوند.",
         translations: {
  en: {
    title: "Five Sounds That Are Always There",
    description:
      "Listening for a few minutes and discovering sounds that are always present but often go unnoticed.",
  },
},
        activity: {
          purpose:
            "تقویت مشاهده‌ی شنیداری و توجه به صداهای پس‌زمینه‌ای که معمولاً به دلیل حضور مداوم از آگاهی ما خارج می‌شوند.",

          instruction:
            "از دانش‌آموزان بخواهید چند دقیقه سکوت کنند و فقط به صداهای محیط گوش دهند. از آن‌ها بخواهید پنج صدای متفاوت پیدا کنند که معمولاً در محیط حضور دارند اما اغلب به آن‌ها توجه نمی‌کنند.",

          steps: [
            "از دانش‌آموزان بخواهید برای چند دقیقه صحبت نکنند و فقط گوش دهند.",
            "از آن‌ها بخواهید پنج صدای متفاوت را که در محیط می‌شنوند پیدا کنند.",
            "از آن‌ها بخواهید برای هر صدا مشخص کنند صدا از کجا می‌آید و تا چه اندازه به نظرشان نزدیک یا دور است.",
            "از آن‌ها بخواهید مشخص کنند کدام صدا را قبلاً هم بارها شنیده‌اند اما معمولاً متوجه حضورش نمی‌شوند.",
            "در پایان، صداهایی را که دانش‌آموزان پیدا کرده‌اند کنار هم قرار دهید و ببینید چند صدای مشترک و چند صدای متفاوت در کلاس وجود داشته است.",
          ],

          questions: [
            "کدام صدا را اول از همه شنیدی؟",
            "کدام صدا را همیشه می‌شنوی اما معمولاً متوجه آن نیستی؟",
            "از کجا فهمیدی هر صدا از کجا می‌آید؟",
            "آیا صدایی بود که ابتدا نمی‌شنیدی اما بعد از توجه کردن متوجهش شدی؟",
            "اگر همین محیط کاملاً ساکت شود، نبودن کدام صدا را بیشتر احساس خواهی کرد؟",
          ],

          teacherNote:
            "چند دقیقه‌ی اول را واقعاً به سکوت اختصاص دهید. دانش‌آموزان را تشویق کنید صداها را با ویژگی‌های شنیداری توصیف کنند، نه فقط با نام منبع. هدف این است که توجه آن‌ها از صداهای برجسته به صداهای پس‌زمینه نیز گسترش پیدا کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Develop auditory observation and attention to background sounds that often disappear from our awareness because they are constantly present.",
    instruction:
      "Ask students to remain silent for a few minutes and listen carefully to the sounds around them. Ask them to identify five different sounds that are usually present in the environment but that they rarely pay attention to.",
    steps: [
      "Ask students not to speak for a few minutes and simply listen.",
      "Ask them to identify five different sounds they can hear in their surroundings.",
      "Ask them to identify where each sound comes from and how near or far away it seems.",
      "Ask them to identify which sounds they have heard many times before but rarely notice.",
      "Finally, bring together the sounds identified by the students and see how many were shared and how many were different across the classroom.",
    ],
    questions: [
      "Which sound did you hear first?",
      "Which sound do you hear all the time but rarely notice?",
      "How did you figure out where each sound was coming from?",
      "Was there a sound you did not hear at first but noticed after paying attention?",
      "If this environment became completely silent, which missing sound would you notice most?",
    ],
    teacherNote:
      "Make sure the first few minutes are genuinely devoted to silence. Encourage students to describe sounds through their auditory qualities, rather than only naming their sources. The goal is to expand their attention from prominent sounds to background sounds as well.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "01M-10",
        title: "چیزهایی که کج هستند",
        description:
          "پیدا کردن چیزهایی در محیط که از نظم معمول فاصله گرفته‌اند.",
         translations: {
  en: {
    title: "Things That Are Out of Place",
    description:
      "Finding things in the environment that have moved away from their usual arrangement.",
  },
},
        activity: {
          purpose:
            "تقویت توجه به الگو، نظم و انحراف از نظم معمول و کمک به دانش‌آموز برای دیدن تفاوت‌های کوچک در محیط آشنا.",

          instruction:
            "از دانش‌آموزان بخواهید در محیط کلاس یا مدرسه به دنبال چیزهایی بگردند که کمی کج، جابه‌جا یا متفاوت از حالت معمول خود هستند. از آن‌ها بخواهید ابتدا وضعیت معمول را در ذهن خود مشخص کنند و سپس تفاوت را توصیف کنند.",

          steps: [
            "از دانش‌آموزان بخواهید محیط آشنا و روزمره‌ی کلاس یا مدرسه را با دقت نگاه کنند.",
            "از آن‌ها بخواهید یک چیز پیدا کنند که نسبت به نظم معمول محیط کمی کج یا جابه‌جا شده است.",
            "از آن‌ها بخواهید توضیح دهند چه چیزی باعث شده متوجه این تفاوت شوند.",
            "از آن‌ها بخواهید حدس بزنند این تغییر کوچک چگونه ایجاد شده است.",
            "در پایان، چند نمونه را کنار هم قرار دهید و درباره‌ی این موضوع گفت‌وگو کنید که چگونه شناختن نظم معمول به ما کمک می‌کند چیزهای متفاوت را ببینیم.",
          ],

          questions: [
            "چه چیزی را پیدا کردی که کج یا جابه‌جا بود؟",
            "از کجا فهمیدی که حالت معمولش این نیست؟",
            "اگر قبلاً شکل معمول این محیط را نمی‌شناختی، آیا باز هم متوجه این تفاوت می‌شدی؟",
            "چه اتفاق‌هایی ممکن است باعث این تغییر شده باشند؟",
            "آیا یک تغییر کوچک می‌تواند توجه ما را به کل محیط بیشتر کند؟ چرا؟",
          ],

          teacherNote:
            "هدف پیدا کردن بزرگ‌ترین یا عجیب‌ترین بی‌نظمی نیست. دانش‌آموزان را به سمت تفاوت‌های کوچک هدایت کنید. نکته‌ی اصلی این موقعیت این است که مشاهده‌ی دقیق فقط دیدن تفاوت نیست؛ گاهی ابتدا باید الگوی معمول را بشناسیم تا بتوانیم انحراف از آن را تشخیص دهیم.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Develop attention to patterns, order, and deviations from familiar arrangements, helping students notice small differences in familiar surroundings.",
    instruction:
      "Ask students to look around the classroom or school for things that are slightly tilted, displaced, or different from their usual position. Ask them to first recall what the usual arrangement looks like and then describe the difference they have noticed.",
    steps: [
      "Ask students to look carefully at the familiar, everyday environment of their classroom or school.",
      "Ask them to find something that is slightly tilted or displaced from its usual position.",
      "Ask them to explain what made them notice this difference.",
      "Ask them to guess how this small change might have happened.",
      "Finally, bring several examples together and discuss how knowing the usual arrangement of an environment helps us notice things that are different.",
    ],
    questions: [
      "What did you find that was tilted or out of place?",
      "How did you know that this was not its usual position?",
      "If you did not already know what this environment normally looked like, would you still have noticed the difference?",
      "What events might have caused this change?",
      "Can a small change make us pay more attention to the entire environment? Why?",
    ],
    teacherNote:
      "The goal is not to find the biggest or strangest irregularity. Guide students toward small differences. The central idea of this activity is that careful observation is not only about noticing differences; sometimes we must first recognize the usual pattern before we can detect a deviation from it.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
    ],
  },
  {
    id: "narrative",
    code: "02M",
    title: "روایت",
    description: "ساختن معنا از میان لحظه‌ها و تجربه‌ها.",
    translations: {
  en: {
    title: "Narrative",
    description: "Creating meaning through moments and experiences.",
  },
},
    situations: [
      {
        id: "02M-01",
        title: "جمله‌های ناتمام",
        description:
          "ساختن یک داستان از یک شروع داده‌شده و دنبال کردن آن تا پایان.",
         translations: {
  en: {
    title: "Unfinished Sentences",
    description:
      "Building a story from a given beginning and following it through to the end.",
  },
},
        activity: {
          purpose:
            "تمرین شروع کردن یک روایت و ادامه دادن آن به شکلی که اتفاق‌ها برای خواننده قابل‌دنبال‌کردن باشند.",

          instruction:
            "یکی از جمله‌های زیر را برای شروع انتخاب کن و داستانت را از همان‌جا ادامه بده. داستانت می‌تواند واقعی یا خیالی باشد. لازم نیست داستان پیچیده یا عجیب باشد؛ فقط آن را تا یک پایان دنبال کن.",

          steps: [
            "یکی از جمله‌های شروع را انتخاب کن.",
            "فکر کن بعد از این جمله چه اتفاقی می‌تواند بیفتد.",
            "داستان را با دنبال کردن اتفاق‌ها ادامه بده.",
            "در پایان، داستانت را به شکلی تمام کن که خواننده بداند ماجرا به کجا رسید.",
          ],

          questions: [
            "داستانت از کجا شروع شد؟",
            "بعد از شروع چه اتفاقی افتاد؟",
            "چه چیزی باعث شد اتفاق بعدی رخ بدهد؟",
            "داستانت چطور تمام شد؟",
          ],

          teacherNote:
            "هدف، نوشتن یک داستان ادبی یا پیچیده نیست. اگر دانش‌آموز فقط چند اتفاق پراکنده تعریف کرد، از او بخواهید رابطه‌ی میان اتفاق‌ها را پیدا کند: «بعد از این چه شد؟» یا «این اتفاق چطور به اتفاق بعدی رسید؟»",

          materials: {
            required: true,
            type: "text",
            items: ["/text/02M/02M-01.txt"],
          },
          translations: {
  en: {
    purpose:
      "Practice beginning a narrative and continuing it in a way that allows the reader to follow the events.",
    instruction:
      "Choose one of the sentences below as your starting point and continue your story from there. Your story can be real or imaginary. It does not need to be complicated or unusual; just follow it through to an ending.",
    steps: [
      "Choose one of the opening sentences.",
      "Think about what might happen after this sentence.",
      "Continue the story by following the events.",
      "At the end, finish your story in a way that lets the reader know what happened.",
    ],
    questions: [
      "Where did your story begin?",
      "What happened after the beginning?",
      "What caused the next event to happen?",
      "How did your story end?",
    ],
    teacherNote:
      "The goal is not to write a literary or complicated story. If a student simply lists a few unrelated events, ask them to find the connection between those events: 'What happened next?' or 'How did this event lead to the next one?'",
    materials: {
      required: true,
      type: "text",
      items: ["/text/02M/02M-01.txt"],
    },
  },
},
        },
      },

      {
        id: "02M-02",
        title: "داستانی پشت دو عکس",
        description:
          "ساختن یک روایت از دو تصویر که فقط ردپاهایی از یک داستان را نشان می‌دهند.",
         translations: {
  en: {
    title: "A Story Behind Two Pictures",
    description:
      "Creating a narrative from two images that reveal only traces of a story.",
  },
},
        activity: {
          purpose:
            "تمرین ساختن یک روایت از روی نشانه‌های تصویری و کنار هم گذاشتن اتفاق‌ها، بدون اینکه تصویر داستان را به‌طور کامل تعیین کند.",

          instruction:
            "به این دو عکس نگاه کن. به نظرت داستان پشت این دو عکس چیست؟ می‌توانی هر دو عکس را بخشی از یک داستان واقعی یا خیالی در نظر بگیری. داستانت را از جایی شروع کن که به نظرت مناسب است و آن را تا پایان ادامه بده.",

          steps: [
            "به هر دو عکس با دقت نگاه کن.",
            "به چیزهایی که در عکس‌ها می‌بینی و چیزهایی که حدس می‌زنی توجه کن.",
            "فکر کن چه اتفاقی ممکن است بین دو عکس افتاده باشد.",
            "داستان را با اتفاق‌هایی که خودت انتخاب کرده‌ای بساز و تا یک پایان ادامه بده.",
          ],

          questions: [
            "در دو عکس چه چیزهایی را با اطمینان می‌بینی؟",
            "چه اتفاقی ممکن است بین دو عکس افتاده باشد؟",
            "داستانت از کجا شروع شد؟",
            "در پایان چه اتفاقی افتاد؟",
          ],

          teacherNote:
            "دو عکس قرار نیست یک ترتیب قطعی برای داستان تعیین کنند. دانش‌آموز لازم نیست مشخص کند کدام عکس حتماً اول بوده است. هدف این است که از چند نشانه‌ی تصویری، یک روایت قابل‌دنبال‌کردن بسازد. اگر چند داستان متفاوت و سازگار با عکس‌ها ساخته شد، همه می‌توانند معتبر باشند.",

          materials: {
            required: true,
            type: "image",
            items: ["/images/02M/02M-02.png"],
          },
          translations: {
  en: {
    purpose:
      "Practice creating a narrative from visual clues and connecting events without allowing the images to determine the entire story.",
    instruction:
      "Look at these two pictures. What do you think the story behind them might be? You can imagine both pictures as parts of a real or imaginary story. Start wherever you think is appropriate and continue your story through to the end.",
    steps: [
      "Look carefully at both pictures.",
      "Pay attention to what you can see in the pictures and what you are only guessing.",
      "Think about what might have happened between the two pictures.",
      "Build your story using events of your own choosing and continue it through to an ending.",
    ],
    questions: [
      "What can you see with certainty in the two pictures?",
      "What might have happened between the two pictures?",
      "Where did your story begin?",
      "What happened at the end?",
    ],
    teacherNote:
      "The two pictures are not meant to establish a fixed order for the story. Students do not need to decide that one picture must come before the other. The goal is to create a coherent narrative from a few visual clues. Several different stories that fit the pictures can all be valid.",
    materials: {
      required: true,
      type: "image",
      items: ["/images/02M/02M-02.png"],
    },
  },
},
        },
      },

      {
        id: "02M-03",
        title: "وقتی منتظر بودم",
        description: "روایت یک بار انتظار، از شروع تا لحظه‌ای که تمام شد.",
         translations: {
  en: {
    title: "When I Was Waiting",
    description:
      "Telling the story of one experience of waiting, from its beginning to the moment it ended.",
  },
},
        activity: {
          purpose:
            "تمرین روایت کردن یک تجربه‌ی پیوسته و دنبال کردن اتفاق‌ها در طول یک بازه‌ی زمانی.",

          instruction:
            "یک بار را به یاد بیاور که منتظر کسی، چیزی یا اتفاقی بودی. داستان آن انتظار را از لحظه‌ای که شروع شد تا زمانی که تمام شد تعریف کن. می‌توانی از یک تجربه‌ی واقعی استفاده کنی یا یک داستان خیالی بسازی.",

          steps: [
            "یک موقعیت انتظار را انتخاب کن.",
            "مشخص کن انتظار از چه لحظه‌ای شروع شد.",
            "اتفاق‌ها، فکرها یا کارهایی را که در طول انتظار رخ دادند به ترتیب روایت کن.",
            "بگو انتظار چطور تمام شد.",
          ],

          questions: [
            "منتظر چه چیزی یا چه کسی بودی؟",
            "انتظار از کجا شروع شد؟",
            "در طول انتظار چه اتفاق‌هایی افتاد؟",
            "در پایان چه چیزی انتظار تو را تمام کرد؟",
          ],

          teacherNote:
            "هدف فقط تعریف کردن اینکه «منتظر چه چیزی بودم» نیست؛ مهم این است که دانش‌آموز بتواند شروع، میانه و پایان یک تجربه‌ی پیوسته را روایت کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practice narrating a continuous experience and following events across a period of time.",
    instruction:
      "Remember a time when you were waiting for someone, something, or an event. Tell the story of that waiting, from the moment it began until it ended. You can use a real experience or create an imaginary story.",
    steps: [
      "Choose a situation in which you were waiting.",
      "Identify the moment when the waiting began.",
      "Narrate the events, thoughts, or things you did during the waiting period in order.",
      "Explain how the waiting came to an end.",
    ],
    questions: [
      "What or whom were you waiting for?",
      "Where did the waiting begin?",
      "What happened while you were waiting?",
      "What finally brought your waiting to an end?",
    ],
    teacherNote:
      "The goal is not simply to say, 'What was I waiting for?' What matters is that students can narrate the beginning, middle, and end of a continuous experience.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "02M-04",
        title: "چیزی که یاد گرفتم بی‌آنکه بخواهم",
        description:
          "روایت تجربه‌ای که در آن بدون قصد قبلی، چیزی تازه یاد گرفته شد.",
         translations: {
  en: {
    title: "Something I Learned Without Trying",
    description:
      "Telling the story of an experience in which something new was learned unintentionally.",
  },
},
        activity: {
          purpose:
            "تمرین روایت تجربه‌ای که در جریان آن یک تغییر در فهم یا دانستن دانش‌آموز اتفاق می‌افتد.",

          instruction:
            "یک اتفاق را به یاد بیاور که بدون اینکه قصد یاد گرفتن داشته باشی، وسط آن ناگهان چیزی را فهمیدی. داستان آن اتفاق را تعریف کن و بگو لحظه‌ای که فهمیدی چه زمانی بود. می‌توانی یک داستان واقعی یا خیالی بسازی.",

          steps: [
            "یک تجربه را انتخاب کن که در ابتدا قصد یادگیری در آن نداشتی.",
            "داستان را از شروع آن تجربه تعریف کن.",
            "اتفاق‌هایی را که در طول تجربه افتادند دنبال کن.",
            "لحظه‌ای را پیدا کن که متوجه شدی چیز تازه‌ای فهمیده‌ای.",
            "داستان را تا پایان تجربه ادامه بده.",
          ],

          questions: [
            "در آغاز داستان چه اتفاقی افتاد؟",
            "در طول ماجرا چه چیزی تغییر کرد؟",
            "چه زمانی فهمیدی چیز تازه‌ای یاد گرفته‌ای؟",
            "بعد از آن چه اتفاقی افتاد؟",
          ],

          teacherNote:
            "هدف، نوشتن یک «نتیجه‌ی اخلاقی» یا توضیح دادن اینکه چه چیزی یاد گرفته‌ای نیست. نقطه‌ی اصلی روایت، دنبال کردن تجربه‌ای است که در جریان آن فهم تازه‌ای شکل گرفته است.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practice narrating an experience in which a change in the student's understanding or knowledge takes place.",
    instruction:
      "Remember an event in which you suddenly understood something, even though you had not intended to learn anything. Tell the story of what happened and describe the moment when you realized it. You can create a real or imaginary story.",
    steps: [
      "Choose an experience in which you did not initially intend to learn anything.",
      "Tell the story from the beginning of that experience.",
      "Follow the events that took place along the way.",
      "Identify the moment when you realized that you had understood something new.",
      "Continue the story until the experience comes to an end.",
    ],
    questions: [
      "What happened at the beginning of the story?",
      "What changed during the experience?",
      "When did you realize that you had learned something new?",
      "What happened after that?",
    ],
    teacherNote:
      "The goal is not to write a 'moral lesson' or explain what you learned. The central point of the narrative is to follow an experience in which a new understanding gradually took shape.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "02M-05",
        title: "یک جای آشنا، یک اتفاق کوچک",
        description:
          "روایت یک اتفاق کوچک که یک جای آشنا را برای مدتی متفاوت می‌کند.",
         translations: {
  en: {
    title: "A Familiar Place, a Small Event",
    description:
      "Telling the story of a small event that makes a familiar place feel different for a while.",
  },
},
        activity: {
          purpose:
            "تمرین روایت کردن یک تغییر کوچک در محیطی آشنا و نشان دادن تفاوت میان وضعیت معمول و اتفاقی که رخ داده است.",

          instruction:
            "یک جای آشنا را به یاد بیاور که همیشه تقریباً یک‌شکل است. یک روز اتفاق کوچکی افتاد که آن را برایت متفاوت کرد. داستان آن روز را تعریف کن.",

          steps: [
            "یک جای آشنا را انتخاب کن.",
            "فکر کن این مکان معمولاً چه شکلی است.",
            "یک اتفاق کوچک یا غیرمنتظره برای آن روز انتخاب کن.",
            "داستان را از زمانی که اتفاق شروع شد دنبال کن.",
            "بگو در پایان چه اتفاقی افتاد.",
          ],

          questions: [
            "آن مکان معمولاً چه شکلی است؟",
            "چه چیزی آن روز متفاوت شد؟",
            "بعد از آن اتفاق چه شد؟",
            "داستانت چطور تمام شد؟",
          ],

          teacherNote:
            "هدف، توصیف کامل یک مکان نیست. تمرکز روی یک تغییر کوچک و دنبال کردن اتفاق‌هایی است که بعد از آن تغییر رخ می‌دهند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practice narrating a small change in a familiar environment and showing the difference between its usual state and what happened.",
    instruction:
      "Think of a familiar place that usually looks more or less the same. One day, a small event happened that made it feel different to you. Tell the story of that day.",
    steps: [
      "Choose a familiar place.",
      "Think about what this place usually looks like.",
      "Choose a small or unexpected event that happened there that day.",
      "Follow the story from the moment the event began.",
      "Explain what happened in the end.",
    ],
    questions: [
      "What does that place usually look like?",
      "What was different that day?",
      "What happened after that event?",
      "How did your story end?",
    ],
    teacherNote:
      "The goal is not to provide a complete description of a place. The focus is on one small change and following the events that take place after it.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "02M-06",
        title: "یک روز از زبان یک شیء کوچک",
        description: "روایت یک روز از نگاه یک شیء کوچک و آشنا.",
         translations: {
  en: {
    title: "A Day in the Life of a Small Object",
    description:
      "Telling the story of a day from the perspective of a small, familiar object.",
  },
},
        activity: {
          purpose:
            "تمرین ساختن روایت از یک زاویه‌ی دید متفاوت و انتخاب اتفاق‌هایی که یک شیء می‌تواند ببیند یا تجربه کند.",

          instruction:
            "یک شیء کوچک و آشنا را انتخاب کن؛ مثلاً یک مداد، کلید، کفش یا لیوان. تصور کن این شیء می‌تواند داستان بگوید. یک روز از زندگی آن را از زبان خودش روایت کن.",

          steps: [
            "یک شیء کوچک و آشنا انتخاب کن.",
            "فکر کن این شیء در طول یک روز کجا بوده و چه چیزهایی دیده یا تجربه کرده است.",
            "اتفاق‌های مهم آن روز را انتخاب کن.",
            "داستان را از زبان خود شیء تعریف کن.",
            "داستان را تا پایان روز یا پایان ماجرا ادامه بده.",
          ],

          questions: [
            "شیء تو داستان را از کجا شروع می‌کند؟",
            "در طول روز چه اتفاقی برای آن می‌افتد؟",
            "چه چیزهایی را می‌تواند ببیند یا بفهمد؟",
            "داستانش در پایان به کجا می‌رسد؟",
          ],

          teacherNote:
            "به دانش‌آموز یادآوری کنید که شیء فقط از چیزهایی خبر دارد که از جای خودش می‌تواند ببیند، بشنود یا تجربه کند. هدف، پیچیده کردن زاویه‌ی دید نیست؛ فقط تجربه کردن یک راوی متفاوت است.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practice creating a narrative from an unusual point of view and choosing events that an object might see or experience.",
    instruction:
      "Choose a small, familiar object, such as a pencil, a key, a shoe, or a glass. Imagine that this object can tell stories. Narrate one day in its life in its own voice.",
    steps: [
      "Choose a small, familiar object.",
      "Think about where this object has been throughout the day and what it might have seen or experienced.",
      "Choose the important events of that day.",
      "Tell the story in the object's own voice.",
      "Continue the story until the end of the day or the end of the events.",
    ],
    questions: [
      "Where does your object begin its story?",
      "What happens to it throughout the day?",
      "What can it see or understand?",
      "Where does its story lead in the end?",
    ],
    teacherNote:
      "Remind students that the object only knows about things it can see, hear, or experience from where it is. The goal is not to make the point of view complicated, but simply to experience having a different narrator.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "02M-07",
        title: "صدایی که مرا به یاد چیزی انداخت",
        description:
          "ساختن یک روایت از یک صدا که جرقه‌ی یک اتفاق یا داستان را ایجاد می‌کند.",
         translations: {
  en: {
    title: "A Sound That Reminded Me of Something",
    description:
      "Creating a narrative from a sound that sparks an event or a story.",
  },
},
        activity: {
          purpose: "تمرین تبدیل یک محرک شنیداری به یک روایت پیوسته.",

          instruction:
            "یک صدا را انتخاب کن که تو را به یاد یک اتفاق، یک موقعیت یا حتی یک داستان بیندازد. اول خود صدا را کوتاه توصیف کن. بعد داستانی را که با شنیدن آن صدا در ذهنت شکل گرفته، از جایی که شروع شد تا جایی که تمام شد، روایت کن.",

          steps: [
            "یک صدای آشنا یا خیالی انتخاب کن.",
            "در چند جمله بگو این صدا چه شکلی است یا از کجا می‌آید.",
            "فکر کن این صدا چه اتفاق یا داستانی را در ذهنت شروع می‌کند.",
            "داستان را از شروع تا پایان روایت کن.",
          ],

          questions: [
            "صدای انتخابی تو چیست؟",
            "با شنیدن آن صدا چه اتفاقی در داستانت شروع شد؟",
            "بعد از شروع داستان چه اتفاقی افتاد؟",
            "داستانت چطور تمام شد؟",
          ],

          teacherNote:
            "صدا می‌تواند یک خاطره‌ی واقعی، یک موقعیت خیالی یا یک داستان کاملاً ساخته‌شده را شروع کند. تمرکز اصلی بر رابطه‌ی میان صدا، جرقه‌ی داستان و روایت است؛ نه خصوصی یا احساسی بودن خاطره.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practice turning an auditory stimulus into a continuous narrative.",
    instruction:
      "Choose a sound that reminds you of an event, a situation, or even a story. First, briefly describe the sound itself. Then narrate the story that began to take shape in your mind when you heard it, from its beginning to its end.",
    steps: [
      "Choose a familiar or imaginary sound.",
      "In a few sentences, describe what the sound is like or where it comes from.",
      "Think about what event or story this sound sets in motion in your mind.",
      "Narrate the story from beginning to end.",
    ],
    questions: [
      "What sound did you choose?",
      "What event began in your story when you heard that sound?",
      "What happened after the story began?",
      "How did your story end?",
    ],
    teacherNote:
      "The sound can bring to mind a real memory, an imaginary situation, or a completely invented story. The main focus is on the relationship between the sound, the spark of the story, and the narrative—not on whether the memory is private or emotionally personal.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "02M-08",
        title: "سه کلمه، یک داستان",
        description: "ساختن یک داستان کوتاه با استفاده از سه کلمه‌ی داده‌شده.",
         translations: {
  en: {
    title: "Three Words, One Story",
    description:
      "Creating a short story using three given words.",
  },
},
        activity: {
          purpose: "تمرین ساختن یک روایت قابل‌دنبال‌کردن از چند عنصر پراکنده.",

          instruction:
            "با این سه کلمه یک داستان بساز. داستانت می‌تواند واقعی یا خیالی باشد. لازم نیست این کلمه‌ها بخش اصلی داستان باشند؛ فقط باید هر سه کلمه جایی در داستان تو حضور داشته باشند.",

          steps: [
            "سه کلمه را بخوان.",
            "فکر کن چطور می‌توانی آن‌ها را در یک داستان کنار هم قرار بدهی.",
            "داستانت را بنویس.",
            "داستان را طوری ادامه بده که اتفاق‌ها برای خواننده قابل‌دنبال‌کردن باشند.",
          ],

          questions: [
            "داستانت از کجا شروع شد؟",
            "سه کلمه را کجای داستان استفاده کردی؟",
            "بعد از شروع چه اتفاقی افتاد؟",
            "داستانت چطور تمام شد؟",
          ],

          teacherNote:
            "هدف فعالیت ساختن یک داستان عجیب، شاعرانه یا پیچیده نیست. سه کلمه فقط نقطه‌ی شروع‌اند. لازم نیست هر کلمه نقش مهمی داشته باشد یا به یک عنصر نمادین تبدیل شود. تمرکز اصلی بر این است که دانش‌آموز چند عنصر پراکنده را در یک روایت ساده و قابل‌دنبال‌کردن کنار هم قرار دهد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practice building a coherent narrative from several separate elements.",
    instruction:
      "Create a story using these three words. Your story can be real or imaginary. The words do not need to play major roles in the story; they simply need to appear somewhere in it.",
    steps: [
      "Read the three words.",
      "Think about how you can bring them together in one story.",
      "Write your story.",
      "Continue the story in a way that allows the reader to follow the events.",
    ],
    questions: [
      "Where did your story begin?",
      "Where did you use the three words in your story?",
      "What happened after the beginning?",
      "How did your story end?",
    ],
    teacherNote:
      "The goal is not to create a strange, poetic, or complicated story. The three words are simply a starting point. Each word does not need to play an important role or become a symbolic element. The main focus is on bringing several separate elements together in a simple, coherent narrative that the reader can follow.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "02M-09",
        title: "اولین بار که خودم انجامش دادم",
        description: "روایت اولین تجربه‌ی انجام یک کار به‌تنهایی.",
        translations: {
  en: {
    title: "The First Time I Did It Myself",
    description:
      "Telling the story of the first time you did something on your own.",
  },
},
        activity: {
          purpose:
            "تمرین روایت کردن یک تجربه‌ی شخصی از نقطه‌ی شروع تا پایان و دنبال کردن اتفاق‌ها، دشواری‌ها و تلاش‌های میان راه.",

          instruction:
            "یک کاری را به یاد بیاور که اولین بار خودت انجامش دادی؛ کاری که قبلاً معمولاً شخص دیگری برایت انجام می‌داد یا کمکت می‌کرد. داستان آن تجربه را از قبل از شروع تا زمانی که کار تمام شد روایت کن. می‌توانی یک تجربه‌ی واقعی یا یک داستان خیالی بسازی.",

          steps: [
            "کاری را انتخاب کن که اولین بار خودت انجامش دادی.",
            "فکر کن پیش از شروع چه تصوری از انجام آن کار داشتی.",
            "مهم‌ترین دشواری یا لحظه‌ی تردید را در طول کار پیدا کن.",
            "بگو چطور کار را ادامه دادی.",
            "داستان را تا پایان تجربه دنبال کن.",
          ],

          questions: [
            "قبل از شروع کار چه فکری می‌کردی؟",
            "کدام قسمت کار برایت سخت‌تر بود؟",
            "آیا لحظه‌ای بود که فکر کنی نمی‌توانی آن را انجام دهی؟",
            "چه چیزی باعث شد ادامه بدهی؟",
            "در پایان چه اتفاقی افتاد؟",
          ],

          teacherNote:
            "روی مسیر تجربه تمرکز کنید، نه فقط نتیجه‌ی موفقیت‌آمیز آن. اگر دانش‌آموز فقط بگوید «خودم انجامش دادم و موفق شدم»، از او بخواهید لحظه‌های بین شروع و پایان را پیدا کند؛ مخصوصاً دشواری، تلاش و نقطه‌ی تغییر.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practice narrating a personal experience from beginning to end, following the events, difficulties, and efforts along the way.",
    instruction:
      "Remember something you did on your own for the first time—something that someone else had usually done for you or helped you with before. Tell the story of that experience, from before you started until the task was finished. You can use a real experience or create an imaginary story.",
    steps: [
      "Choose something you did on your own for the first time.",
      "Think about what you expected before you started.",
      "Identify the most difficult part or a moment of hesitation during the task.",
      "Describe how you continued.",
      "Follow the story until the experience comes to an end.",
    ],
    questions: [
      "What were you thinking before you started?",
      "Which part of the task was the most difficult for you?",
      "Was there a moment when you thought you could not do it?",
      "What made you keep going?",
      "What happened in the end?",
    ],
    teacherNote:
      "Focus on the process of the experience, not just on whether it ended successfully. If a student only says, 'I did it myself and succeeded,' ask them to describe the moments between the beginning and the end, especially the difficulty, the effort, and the turning point.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "02M-10",
        title: "وقتی چیزی گم شد",
        description: "روایت ماجرایی که با گم شدن یک چیز شروع می‌شود.",
         translations: {
  en: {
    title: "When Something Went Missing",
    description:
      "Telling the story of an event that begins when something goes missing.",
  },
},
        activity: {
          purpose:
            "تمرین ساختن یک روایت پیوسته از یک اتفاق ساده و دنبال کردن ماجرا تا پایان.",

          instruction:
            "چیزی را انتخاب کن که یک روز گم شده بود. داستانت را از لحظه‌ای شروع کن که فهمیدی آن چیز دیگر سر جایش نیست. بعد بگو چه اتفاق‌هایی افتاد و داستان چطور تمام شد. می‌توانی یک ماجرای واقعی یا خیالی بسازی.",

          steps: [
            "یک چیز واقعی یا خیالی را که گم شده انتخاب کن.",
            "داستان را از لحظه‌ای شروع کن که متوجه گم شدن آن شدی.",
            "اتفاق‌هایی را که بعد از آن افتادند به ترتیب تعریف کن.",
            "بگو در پایان چه اتفاقی افتاد.",
          ],

          questions: [
            "چه زمانی فهمیدی آن چیز دیگر سر جایش نیست؟",
            "بعد از فهمیدن این موضوع چه کار کردی؟",
            "در طول ماجرا چه اتفاق‌هایی افتاد؟",
            "در پایان آن چیز پیدا شد یا ماجرا به شکل دیگری تمام شد؟",
          ],

          teacherNote:
            "هدف ساختن یک داستان هیجان‌انگیز یا پیچیده نیست. دانش‌آموز باید بتواند یک خط روایی ساده را از لحظه‌ی فهمیدن گم شدن چیزی تا پایان دنبال کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practice creating a continuous narrative from a simple event and following the story through to the end.",
    instruction:
      "Choose something that went missing one day. Begin your story at the moment you realized it was no longer where it belonged. Then describe what happened next and how the story ended. You can create a real or imaginary event.",
    steps: [
      "Choose something real or imaginary that went missing.",
      "Begin the story at the moment you realized it was missing.",
      "Describe the events that followed in chronological order.",
      "Explain what happened in the end.",
    ],
    questions: [
      "When did you realize that the thing was no longer where it belonged?",
      "What did you do after realizing it was missing?",
      "What happened during the search or the events that followed?",
      "Was the thing found in the end, or did the story end in another way?",
    ],
    teacherNote:
      "The goal is not to create an exciting or complicated story. Students should be able to follow a simple narrative line from the moment they realize something is missing to the end.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
    ],
  },
  {
    id: "letter",
    code: "04M",
    title: "نامه",
    description: "نوشتن برای کسی یا چیزی که معمولاً مخاطب نامه نیست.",
    translations: {
  en: {
    title: "Letters",
    description: "Writing to someone or something that is not usually addressed in a letter.",
  },
},
    situations: [
      {
        id: "04M-01",
        title: "نامه به خودم، ده سال بعد",
        description: "نوشتن نامه‌ای به خودِ آینده.",
        translations: {
  en: {
    title: "A Letter to Myself, Ten Years from Now",
    description: "Writing a letter to one's future self.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای تصور آینده، توجه به تغییرات احتمالی زندگی و بیان خواسته‌ها، نگرانی‌ها و پرسش‌های امروز خطاب به خودِ آینده.",

          instruction:
            "از دانش‌آموزان بخواهید تصور کنند ده سال گذشته و خودِ آینده‌شان نامه‌ای از امروز دریافت می‌کند. از آن‌ها بخواهید برای خودِ ده سال بعدشان نامه بنویسند؛ نامه‌ای که در آن از زندگی امروز، چیزهای مهم، آرزوها و پرسش‌هایی که دوست دارند پاسخشان را در آینده بدانند صحبت کنند.",

          steps: [
            "از دانش‌آموزان بخواهید خودشان را ده سال در آینده تصور کنند.",
            "از آن‌ها بخواهید چند چیز از زندگی امروز را که دوست دارند خودِ آینده‌شان به یاد داشته باشد انتخاب کنند.",
            "از آن‌ها بخواهید یک یا چند آرزو، نگرانی یا پرسش را خطاب به خودِ آینده بنویسند.",
            "از آن‌ها بخواهید تصور کنند خودِ ده سال بعدشان چه پاسخی ممکن است به این نامه بدهد.",
            "در پایان، از آن‌ها بخواهید نامه را با یک جمله برای خودِ آینده تمام کنند.",
          ],

          questions: [
            "دوست داری خودِ ده سال بعدت درباره‌ی امروز چه چیزی را بداند؟",
            "امروز چه چیزی برایت مهم است که ممکن است ده سال بعد دیگر مهم نباشد؟",
            "چه چیزی را دوست داری در ده سال آینده تغییر کند؟",
            "اگر خودِ آینده‌ات می‌توانست همین حالا به تو پاسخ بدهد، دوست داشتی چه چیزی از او بپرسی؟",
            "دوست داری ده سال بعد وقتی این نامه را می‌خوانی، چه احساسی داشته باشی؟",
          ],

          teacherNote:
            "هدف، پیش‌بینی دقیق آینده یا نوشتن فهرستی از آرزوها نیست. دانش‌آموز را تشویق کنید از «امروز» نیز چیزی وارد نامه کند تا فاصله‌ی میان اکنون و آینده معنا پیدا کند. اگر دانش‌آموز تمایلی به بیان موضوعی شخصی ندارد، می‌تواند نامه‌ای کاملاً خیالی بنویسد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Help students imagine the future, consider possible changes in their lives, and express their present wishes, concerns, and questions to their future selves.",

    instruction:
      "Ask students to imagine that ten years have passed and their future selves have received a letter from today. Invite them to write a letter to themselves ten years from now, sharing something about their present lives, what matters to them, their hopes, and the questions they would like their future selves to answer.",

    steps: [
      "Ask students to imagine themselves ten years in the future.",
      "Invite them to choose a few things from their lives today that they would like their future selves to remember.",
      "Ask them to write one or more wishes, concerns, or questions addressed to their future selves.",
      "Invite them to imagine how their ten-years-older selves might respond to the letter.",
      "Finally, ask them to end the letter with a sentence addressed to their future selves.",
    ],

    questions: [
      "What would you like your future self, ten years from now, to know about today?",
      "What matters to you today that might no longer matter ten years from now?",
      "What would you like to change over the next ten years?",
      "If your future self could answer you right now, what would you like to ask?",
      "How would you like to feel when you read this letter ten years from now?",
    ],

    teacherNote:
      "The goal is not to predict the future accurately or make a list of wishes. Encourage students to include something from their present lives so that the distance between now and the future becomes meaningful. If a student does not wish to share something personal, they may write an entirely imaginary letter.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
      {
        id: "04M-02",
        title: "نامه به خودم، وقتی کوچک‌تر بودم",
        description: "نوشتن نامه‌ای به خودِ چند سال پیش.",
        translations: {
  en: {
    title: "A Letter to My Younger Self",
    description: "Writing a letter to oneself a few years ago.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای بازنگری در تجربه‌های گذشته و بیان چیزهایی که امروز می‌داند اما شاید خودِ کوچک‌ترش نمی‌دانست.",

          instruction:
            "از دانش‌آموزان بخواهید خودشان را چند سال کوچک‌تر تصور کنند و نامه‌ای برای آن کودک بنویسند. از آن‌ها بخواهید درباره‌ی چیزی که امروز می‌دانند، تجربه‌ای که پشت سر گذاشته‌اند یا چیزی که دوست داشتند آن زمان کسی به آن‌ها می‌گفت، صحبت کنند.",

          steps: [
            "از دانش‌آموزان بخواهید خودشان را چند سال کوچک‌تر تصور کنند.",
            "از آن‌ها بخواهید یک چیز را انتخاب کنند که دوست داشتند در آن سن می‌دانستند.",
            "از آن‌ها بخواهید آن موضوع را در قالب یک نامه با خودِ کوچک‌ترشان در میان بگذارند.",
            "از آن‌ها بخواهید یک خاطره یا تجربه را که باعث شده امروز این موضوع را بهتر بفهمند، در نامه وارد کنند.",
            "در پایان، از آن‌ها بخواهید نامه را با یک جمله‌ی کوتاه برای آرام کردن، تشویق کردن یا راهنمایی خودِ کوچک‌ترشان تمام کنند.",
          ],

          questions: [
            "اگر می‌توانستی به خودِ چند سال پیشت یک چیز بگویی، چه می‌گفتی؟",
            "چه تجربه‌ای باعث شد این چیز را یاد بگیری؟",
            "آیا چیزی هست که امروز می‌دانی اما آن زمان نمی‌توانستی بفهمی؟",
            "فکر می‌کنی خودِ کوچک‌ترت با خواندن این نامه چه احساسی پیدا می‌کرد؟",
            "آیا ممکن است خودِ امروزت هم هنوز چیزی داشته باشد که خودِ آینده‌ات بخواهد درباره‌اش به تو نامه بنویسد؟",
          ],

          teacherNote:
            "هدف، قضاوت کردن گذشته یا گفتن اینکه «آن زمان اشتباه می‌کردم» نیست. دانش‌آموز را تشویق کنید با خودِ کوچک‌ترش با مهربانی و همدلی صحبت کند. اگر موضوعی شخصی است که نمی‌خواهد مطرح کند، می‌تواند از یک موقعیت خیالی یا تجربه‌ای ساده استفاده کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Help students reflect on past experiences and express things they know today but may not have understood when they were younger.",

    instruction:
      "Ask students to imagine themselves a few years younger and write a letter to that child. Invite them to share something they know today, an experience they have been through, or something they wish someone had told them back then.",

    steps: [
      "Ask students to imagine themselves a few years younger.",
      "Invite them to choose one thing they wish they had known at that age.",
      "Ask them to share that thought with their younger selves in the form of a letter.",
      "Invite them to include a memory or experience that helped them understand this better today.",
      "Finally, ask them to end the letter with a short sentence meant to comfort, encourage, or guide their younger selves.",
    ],

    questions: [
      "If you could tell your younger self one thing, what would you say?",
      "What experience helped you learn this?",
      "Is there something you know today that you could not have understood back then?",
      "How do you think your younger self would feel after reading this letter?",
      "Could there still be something about your present life that your future self might want to write to you about?",
    ],

    teacherNote:
      "The goal is not to judge the past or say, 'I was wrong back then.' Encourage students to speak to their younger selves with kindness and empathy. If there is something personal they do not wish to discuss, they may use an imaginary situation or a simple experience instead.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
      {
        id: "04M-03",
        title: "نامه به وسیله‌ای که بیشتر از همه تو را همراهی کرده است",
        description: "نوشتن نامه‌ای قدردانی به وسیله‌ای که همیشه همراهت بوده.",
         
        translations: {
  en: {
    title: "A Letter to an Object That Has Been with You the Longest",
    description: "Writing a letter of appreciation to an object that has always been by your side.",
  },
},
activity: {
          purpose:
            "کمک به دانش‌آموز برای دیدن ارزش و خاطره‌ی یک شیء آشنا و تمرین خطاب قرار دادن موجودی که معمولاً مخاطب نامه نیست.",

          instruction:
            "از دانش‌آموزان بخواهید وسیله‌ای را انتخاب کنند که مدت زیادی همراهشان بوده است؛ مثل کیف، مداد، عروسک، دوچرخه یا وسیله‌ای دیگر. سپس از آن‌ها بخواهید نامه‌ای برای آن وسیله بنویسند و از خاطرات، همراهی‌ها و اتفاق‌هایی که با آن داشته‌اند بگویند.",

          steps: [
            "از دانش‌آموزان بخواهید وسیله‌ای را انتخاب کنند که مدت زیادی است آن را دارند یا مرتب از آن استفاده می‌کنند.",
            "از آن‌ها بخواهید چند خاطره یا اتفاق مهمی را که این وسیله در آن حضور داشته به یاد بیاورند.",
            "از آن‌ها بخواهید تصور کنند وسیله می‌تواند نامه را بخواند و حرف‌های آن‌ها را بفهمد.",
            "از آن‌ها بخواهید در نامه از وسیله تشکر کنند و بگویند چه چیزی از همراهی با آن به یاد دارند.",
            "در پایان، از آن‌ها بخواهید نامه را با جمله‌ای تمام کنند که نشان دهد اگر روزی این وسیله دیگر کنارشان نباشد، چه چیزی از آن در ذهنشان باقی می‌ماند.",
          ],

          questions: [
            "چرا این وسیله را انتخاب کردی؟",
            "قدیمی‌ترین خاطره‌ای که با این وسیله داری چیست؟",
            "این وسیله در چه لحظه‌هایی بیشتر از همیشه همراهت بوده است؟",
            "اگر این وسیله می‌توانست جواب نامه‌ات را بدهد، فکر می‌کنی چه می‌گفت؟",
            "اگر روزی دیگر این وسیله را نداشته باشی، بیشتر از همه دلت برای چه چیزی درباره‌ی آن تنگ می‌شود؟",
          ],

          teacherNote:
            "هدف فقط تشکر کردن از یک وسیله نیست. دانش‌آموز را به سمت خاطره و رابطه‌ای که با آن شیء ساخته شده هدایت کنید. اگر وسیله‌ای انتخاب شد که خاطره‌ی خاصی ندارد، از دانش‌آموز بخواهید وسیله‌ای را انتخاب کند که در بخش مهمی از زندگی روزمره‌اش حضور داشته است.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Help students recognize the value and memories associated with a familiar object, while practicing writing to someone or something that is not usually addressed in a letter.",

    instruction:
      "Ask students to choose an object that has been with them for a long time, such as a schoolbag, pencil, doll, bicycle, or something else. Then invite them to write a letter to that object, sharing memories, moments of companionship, and things they have experienced together.",

    steps: [
      "Ask students to choose an object they have owned for a long time or use regularly.",
      "Invite them to recall a few important memories or events in which this object was present.",
      "Ask them to imagine that the object can read the letter and understand what they are saying.",
      "Invite them to thank the object in their letter and describe what they remember about having it with them.",
      "Finally, ask them to end the letter with a sentence expressing what they would remember most if the object were no longer with them one day.",
    ],

    questions: [
      "Why did you choose this object?",
      "What is your oldest memory involving it?",
      "During which moments has this object been with you more than ever?",
      "If this object could reply to your letter, what do you think it would say?",
      "If you no longer had this object one day, what would you miss most about it?",
    ],

    teacherNote:
      "The goal is not simply to thank an object. Guide students toward the memories and the relationship they have developed with it. If a student chooses an object that has no particular memories attached to it, invite them to choose something that has been part of an important aspect of their daily lives.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
      {
        id: "04M-04",
        title: "نامه به فصل مورد علاقه‌ات",
        description: "نوشتن نامه به یکی از فصل‌های سال و بیان علاقه به آن.",
         translations: {
  en: {
    title: "A Letter to Your Favorite Season",
    description: "Writing a letter to one of the seasons and expressing why you like it.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای تبدیل یک علاقه‌ی کلی به توصیف، خاطره و دلیل و تمرین نامه‌نویسی برای یک مخاطب غیرانسانی.",

          instruction:
            "از دانش‌آموزان بخواهید یکی از فصل‌های سال را که بیشتر از بقیه دوست دارند انتخاب کنند و نامه‌ای برای آن بنویسند. در نامه، فقط به گفتن اینکه آن فصل را دوست دارند بسنده نکنند؛ از ویژگی‌ها، خاطره‌ها و لحظه‌هایی بگویند که باعث این علاقه شده‌اند.",

          steps: [
            "از دانش‌آموزان بخواهید فصل مورد علاقه‌ی خود را انتخاب کنند.",
            "از آن‌ها بخواهید سه ویژگی از آن فصل را که بیشتر از همه دوست دارند پیدا کنند.",
            "از آن‌ها بخواهید یک خاطره یا اتفاق مربوط به آن فصل را به یاد بیاورند.",
            "از آن‌ها بخواهید نامه را خطاب به خودِ فصل بنویسند و توضیح دهند چرا آن را دوست دارند.",
            "در پایان، از آن‌ها بخواهید یک سؤال از فصل مورد علاقه‌شان بپرسند؛ سؤالی که اگر فصل می‌توانست جواب بدهد، پاسخ جالبی داشت.",
          ],

          questions: [
            "چه چیزی در این فصل باعث شده آن را بیشتر از فصل‌های دیگر دوست داشته باشی؟",
            "اگر بخواهی فصل مورد علاقه‌ات را بدون گفتن نامش معرفی کنی، چه چیزهایی درباره‌اش می‌گویی؟",
            "کدام خاطره‌ات بیشتر از همه به این فصل مربوط است؟",
            "اگر این فصل می‌توانست جواب نامه‌ات را بدهد، فکر می‌کنی چه می‌گفت؟",
            "اگر قرار بود فقط یک چیز از این فصل را برای همیشه نگه داری، چه چیزی را انتخاب می‌کردی؟",
          ],

          teacherNote:
            "دانش‌آموزان را از پاسخ‌های کلی مثل «پاییز را دوست دارم چون قشنگ است» به سمت جزئیات، تجربه و دلیل هدایت کنید. تفاوت علاقه‌ی دانش‌آموزان به یک فصل می‌تواند زمینه‌ی خوبی برای گفت‌وگو درباره‌ی این باشد که یک چیز واحد می‌تواند برای آدم‌های مختلف معناهای متفاوتی داشته باشد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Help students turn a general preference into description, memory, and reasoning, while practicing letter-writing to a non-human recipient.",

    instruction:
      "Ask students to choose the season they like most and write a letter to it. Encourage them not to stop at simply saying that they like the season, but to describe its features, memories, and moments that have shaped their fondness for it.",

    steps: [
      "Ask students to choose their favorite season.",
      "Invite them to identify three features of that season that they like most.",
      "Ask them to recall a memory or event connected to that season.",
      "Invite them to write a letter addressed to the season itself, explaining why they like it.",
      "Finally, ask them to include a question for their favorite season—a question that might receive an interesting answer if the season could speak.",
    ],

    questions: [
      "What is it about this season that makes you like it more than the others?",
      "If you had to describe your favorite season without saying its name, what would you tell us about it?",
      "Which of your memories is most closely connected to this season?",
      "If this season could reply to your letter, what do you think it would say?",
      "If you could keep just one thing about this season forever, what would you choose?",
    ],

    teacherNote:
      "Guide students beyond general answers such as 'I like autumn because it is beautiful' toward details, experiences, and reasons. Differences in students' preferences can provide a good starting point for discussing how the same thing can have different meanings for different people.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
      {
        id: "04M-05",
        title: "نامه به شخصیت محبوب یک داستان یا فیلم",
        description: "نوشتن نامه به یک شخصیت داستانی محبوب.",
         translations: {
  en: {
    title: "A Letter to a Favorite Character from a Story or Film",
    description: "Writing a letter to a beloved fictional character.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای تبدیل علاقه به یک شخصیت داستانی به گفت‌وگویی معنادار و بیان دلیل‌های شخصی برای این علاقه.",

          instruction:
            "از دانش‌آموزان بخواهید یک شخصیت از یک داستان، کتاب، فیلم یا انیمیشن را که دوست دارند انتخاب کنند و برای او نامه بنویسند. در نامه می‌توانند درباره‌ی رفتارها، تصمیم‌ها، ویژگی‌ها یا اتفاق‌هایی که از شخصیت به یاد دارند صحبت کنند.",

          steps: [
            "از دانش‌آموزان بخواهید یک شخصیت داستانی را که دوست دارند انتخاب کنند.",
            "از آن‌ها بخواهید یک رفتار، تصمیم یا ویژگی مشخص از شخصیت را که بیشتر از همه توجهشان را جلب کرده پیدا کنند.",
            "از آن‌ها بخواهید در نامه توضیح دهند چرا آن ویژگی یا رفتار برایشان مهم بوده است.",
            "از آن‌ها بخواهید یک سؤال از شخصیت بپرسند؛ سؤالی که پاسخ آن در داستان یا فیلم مشخص نشده است.",
            "در پایان، از آن‌ها بخواهید چیزی را که دوست دارند از آن شخصیت یاد بگیرند یا به او بگویند، در نامه اضافه کنند.",
          ],

          questions: [
            "کدام ویژگی این شخصیت باعث شد او را دوست داشته باشی؟",
            "کدام تصمیم یا رفتار او بیشتر از همه در ذهنت مانده است؟",
            "اگر می‌توانستی یک سؤال از او بپرسی، چه می‌پرسیدی؟",
            "اگر شخصیت می‌توانست درباره‌ی یکی از تصمیم‌هایش توضیح بیشتری بدهد، دوست داشتی درباره‌ی کدام تصمیم بشنوی؟",
            "آیا چیزی در این شخصیت هست که دوست داشته باشی خودت هم داشته باشی؟ چرا؟",
          ],

          teacherNote:
            "دانش‌آموز را از تعریف کلی مثل «او را دوست دارم چون شجاع است» به سمت یک نمونه‌ی مشخص از داستان هدایت کنید. مهم است که علاقه‌ی دانش‌آموز به شخصیت به شواهدی از رفتار یا تصمیم‌های او در داستان وصل شود.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Help students turn their interest in a fictional character into a meaningful conversation and express their personal reasons for liking that character.",

    instruction:
      "Ask students to choose a character from a story, book, film, or animated movie that they like, and write a letter to that character. They can write about the character's actions, decisions, qualities, or events they remember from the story.",

    steps: [
      "Ask students to choose a fictional character they like.",
      "Invite them to identify a specific action, decision, or quality of the character that caught their attention most.",
      "Ask them to explain in their letter why that quality or action mattered to them.",
      "Invite them to ask the character a question whose answer was never revealed in the story or film.",
      "Finally, ask them to add something they would like to learn from the character or say to them.",
    ],

    questions: [
      "Which quality of this character made you like them?",
      "Which of their decisions or actions has stayed in your mind the most?",
      "If you could ask this character one question, what would you ask?",
      "If the character could explain one of their decisions in more detail, which decision would you want to hear about?",
      "Is there something about this character that you wish you had yourself? Why?",
    ],

    teacherNote:
      "Guide students beyond general statements such as 'I like this character because they are brave' toward a specific example from the story. It is important to connect students' admiration for a character to evidence from that character's actions or decisions in the story.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
      {
        id: "04M-06",
        title: "نامه به حیوانی که دوست داری یا دوست داری بیشتر درباره‌اش بدانی",
        description: "نوشتن نامه به یک حیوان، واقعی یا مورد کنجکاوی.",
         translations: {
  en: {
    title: "A Letter to an Animal You Love or Want to Know More About",
    description: "Writing a letter to an animal you know or are curious about.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای تبدیل علاقه یا کنجکاوی درباره‌ی یک حیوان به یک خطاب شخصی و تمرین پرسیدن، توصیف کردن و بیان احساس یا کنجکاوی.",

          instruction:
            "از دانش‌آموزان بخواهید حیوانی را انتخاب کنند که دوستش دارند یا درباره‌اش کنجکاوند. سپس از آن‌ها بخواهید نامه‌ای برای آن حیوان بنویسند و در آن از چیزهایی که درباره‌اش می‌دانند، چیزهایی که می‌خواهند بدانند و پرسش‌هایی که دوست دارند از او بپرسند صحبت کنند.",

          steps: [
            "از دانش‌آموزان بخواهید یک حیوان را انتخاب کنند؛ حیوانی که دوستش دارند یا دوست دارند بیشتر درباره‌اش بدانند.",
            "از آن‌ها بخواهید چند ویژگی یا رفتار آن حیوان را که برایشان جالب است مشخص کنند.",
            "از آن‌ها بخواهید یک یا چند پرسش بنویسند که دوست دارند خود حیوان به آن‌ها پاسخ دهد.",
            "از آن‌ها بخواهید در نامه توضیح دهند چرا این حیوان برایشان جالب یا دوست‌داشتنی است.",
            "در پایان، از آن‌ها بخواهید تصور کنند حیوان نامه را دریافت کرده و یک پاسخ کوتاه به آن‌ها می‌دهد.",
          ],

          questions: [
            "چرا این حیوان را انتخاب کردی؟",
            "درباره‌ی این حیوان چه چیزی را از قبل می‌دانی؟",
            "بیشتر از همه دوست داری چه چیزی درباره‌ی زندگی یا رفتار آن بفهمی؟",
            "اگر حیوان می‌توانست فقط به یک سؤال تو پاسخ دهد، چه می‌پرسیدی؟",
            "فکر می‌کنی اگر این حیوان می‌توانست درباره‌ی زندگی خودش برایت نامه بنویسد، چه چیزی برایش مهم بود؟",
          ],

          teacherNote:
            "دو مسیر برای این فعالیت باز بگذارید: دانش‌آموز می‌تواند از یک حیوان مورد علاقه بنویسد یا از حیوانی که شناخت کمی از آن دارد اما درباره‌اش کنجکاو است. در حالت دوم، پاسخ‌ها لازم نیست علمی و دقیق باشند؛ تمرکز فعالیت بر تبدیل کنجکاوی به خطاب و پرسش است.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Help students turn their interest or curiosity about an animal into a personal form of address, while practicing asking questions, describing, and expressing feelings or curiosity.",

    instruction:
      "Ask students to choose an animal they like or are curious about. Then invite them to write a letter to that animal, sharing what they already know about it, what they would like to learn, and the questions they would like to ask it.",

    steps: [
      "Ask students to choose an animal they like or would like to know more about.",
      "Invite them to identify a few features or behaviors of the animal that they find interesting.",
      "Ask them to write one or more questions they would like the animal itself to answer.",
      "Invite them to explain in their letters why this animal interests them or why they like it.",
      "Finally, ask them to imagine that the animal has received their letter and is writing a short reply.",
    ],

    questions: [
      "Why did you choose this animal?",
      "What do you already know about this animal?",
      "What would you most like to understand about its life or behavior?",
      "If the animal could answer just one of your questions, what would you ask?",
      "If this animal could write you a letter about its own life, what do you think would matter most to it?",
    ],

    teacherNote:
      "Keep both approaches open: students may write about an animal they love or one they know little about but are curious about. In the second case, their answers do not need to be scientifically accurate. The focus is on turning curiosity into a personal address and questions.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
      {
        id: "04M-07",
        title: "نامه‌ای که کسی نیمه‌کاره گذاشته",
        description:
          "حدس‌زدن و تکمیل یک نامه‌ی ناشناس که فقط جمله‌ی آغازینش داده شده.",
         translations: {
  en: {
    title: "A Letter Someone Left Unfinished",
    description:
      "Guessing and completing an anonymous letter when only its opening sentence is provided.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای تمرین حدس و استنباط موقعیت از یک تکه متن ناقص، و سپس تمرین نوشتن نامه از دیدگاهی که خودش انتخاب کرده، نه از دیدگاه از‌پیش‌تعیین‌شده.",

          instruction:
            "معلم فقط جمله‌ی آغازین یک نامه‌ی ناشناس را روی تخته می‌نویسد یا می‌خواند، بدون گفتن نویسنده یا گیرنده. از دانش‌آموزان بخواهید حدس بزنند این نامه از چه کسی به چه کسی نوشته شده و چرا نیمه‌کاره مانده، سپس خودشان آن را کامل کنند.",

          steps: [
            "جمله‌ی آغازین نامه را (مثلاً «نمی‌دانم چطور باید این را بگویم، ولی باید یک چیزی را بهت بگویم که مدت‌هاست توی ذهنم است...») روی تخته بنویسید یا بخوانید.",
            "از دانش‌آموزان بخواهید چند حدس درباره‌ی نویسنده و گیرنده‌ی این نامه بزنند.",
            "از آن‌ها بخواهید یکی از حدس‌هایشان را انتخاب کنند و همان را مبنای نوشته‌شان قرار دهند.",
            "از آن‌ها بخواهید نامه را از همان جمله ادامه دهند و تمام کنند.",
            "در پایان، از چند دانش‌آموز بخواهید فقط حدس اولشان را (نه متن کامل را) با کلاس در میان بگذارند تا تفاوت برداشت‌ها دیده شود.",
          ],

          questions: [
            "چرا فکر می‌کنی این نامه نیمه‌کاره مانده بود؟",
            "نویسنده چه چیزی را سخت می‌دانست که بگوید؟",
            "اگر گیرنده‌ی نامه را عوض کنی، ادامه‌ی نامه چقدر فرق می‌کند؟",
            "کدام کلمه یا جمله‌ی آغازین بیشترین راهنمایی را به تو داد؟",
            "فکر می‌کنی در نهایت این نامه فرستاده شد یا نه؟ چرا؟",
          ],

          teacherNote:
            "هدف رسیدن به یک حدس «درست» نیست؛ حدس‌های متفاوت دانش‌آموزان به‌همان اندازه ارزشمندند. این فعالیت عمداً از یک متن ناشناس و بی‌نام شروع می‌شود تا فاصله‌ی امنی از تجربه‌ی شخصی ایجاد کند؛ کسی مجبور به نوشتن از دیدگاه یک موقعیت واقعی و شخصیِ خودش نیست.",

          materials: {
            required: true,
            type: "text",
            items: ["/text/04M/04M-07.txt"],
          },
          translations: {
  en: {
    purpose:
      "Help students practice inferring a situation from a fragment of text, then writing a letter from a perspective of their own choosing rather than one assigned in advance.",

    instruction:
      "The teacher writes or reads aloud only the opening sentence of an anonymous letter, without identifying its writer or recipient. Ask students to guess who might have written the letter, who it might be addressed to, and why it was left unfinished. Then invite them to complete it themselves.",

    steps: [
      "Write or read aloud the opening sentence of the letter (for example: 'I don't know how to say this, but there's something I've wanted to tell you for a long time...').",
      "Ask students to make several guesses about who wrote the letter and who might receive it.",
      "Invite them to choose one of their guesses and use it as the basis for their writing.",
      "Ask them to continue and complete the letter, starting from the given sentence.",
      "Finally, invite a few students to share only their initial guesses, not their complete letters, so the class can notice the differences in interpretation.",
    ],

    questions: [
      "Why do you think this letter was left unfinished?",
      "What might the writer have found difficult to say?",
      "If you changed the recipient of the letter, how different would the rest of it become?",
      "Which word or part of the opening sentence gave you the strongest clue?",
      "Do you think the letter was eventually sent? Why?",
    ],

    teacherNote:
      "The goal is not to arrive at one 'correct' guess. Students' different interpretations are equally valuable. This activity deliberately begins with an anonymous, unidentified text to create a safe distance from personal experience. No one is required to write from the perspective of a real, personal situation.",

    materials: {
      required: true,
      type: "text",
      items: ["/text/04M/04M-07.txt"],
    },
  },
},
        },
      },
      {
        id: "04M-08",
        title: "نامه به صدایی که هر روز می‌شنوی",
        description:
          "نوشتن نامه به یک صدای آشنا و روزمره، بعد از گوش‌دادن واقعی و دقیق به آن.",
         translations: {
  en: {
    title: "A Letter to a Sound You Hear Every Day",
    description:
      "Writing a letter to a familiar, everyday sound after listening to it carefully and attentively.",
  },
},
        activity: {
          purpose:
            "تقویت گوش‌دادن دقیق به محیط روزمره و تبدیل یک تجربه‌ی شنیداری آشنا و نادیده‌گرفته‌شده به موضوع نوشتن و دلبستگی.",

          instruction:
            "از دانش‌آموزان بخواهید چند لحظه فقط گوش بدهند و یک صدای آشنای روزمره (زنگ مدرسه، صدای باد پشت پنجره، صدای قدم‌ها در راهرو، یا هر صدای دیگری که هرروز می‌شنوند) را در ذهن مشخص کنند. سپس نامه‌ای برای همان صدا بنویسند.",

          steps: [
            "چند لحظه در سکوت فقط گوش بدهید و صداهای اطراف را بشنوید.",
            "یک صدا را انتخاب کنید که هرروز، بدون توجه زیاد، آن را می‌شنوید.",
            "به یاد بیاورید این صدا از کِی در زندگی‌تان هست و چه زمان‌هایی آن را می‌شنوید.",
            "نامه را با گفتن این‌که این صدا چه نقشی در روزهایتان دارد شروع کنید.",
            "در پایان نامه بنویسید اگر یک روز این صدا نباشد، روزتان چه فرقی می‌کند.",
          ],

          questions: [
            "این صدا را برای اولین‌بار کِی به‌یاد داری؟",
            "این صدا معمولاً در چه لحظه‌ای از روزت می‌آید؟",
            "اگر این صدا یک روز نباشد، چه چیزی کم می‌شود؟",
            "این صدا بیشتر تو را به یاد چه زمانی یا کجا می‌اندازد؟",
            "اگر این صدا می‌توانست جواب نامه‌ات را بدهد، چه می‌گفت؟",
          ],

          teacherNote:
            "هدف توصیف فیزیکی صدا نیست؛ هدف کشف رابطه‌ای است که دانش‌آموز — حتی بدون توجه آگاهانه — با یک صدای تکرارشونده‌ی روزمره ساخته است. اگر دانش‌آموزی صدای مشخصی به ذهنش نمی‌رسد، می‌توانید چند نمونه (زنگ تفریح، صدای باران، صدای در) را به‌عنوان الهام مثال بزنید، بدون آنکه انتخاب را محدود کنید.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Strengthen careful listening to the everyday environment and turn a familiar, often-overlooked auditory experience into a subject for writing and personal attachment.",

    instruction:
      "Ask students to listen quietly for a few moments and identify a familiar everyday sound in their minds, such as the school bell, wind outside the window, footsteps in the hallway, or any other sound they hear regularly. Then invite them to write a letter to that sound.",

    steps: [
      "Spend a few moments in silence, simply listening to the sounds around you.",
      "Choose one sound that you hear every day, often without paying much attention to it.",
      "Think about when this sound first became part of your life and the moments when you usually hear it.",
      "Begin the letter by describing the role this sound plays in your days.",
      "At the end of the letter, write about how your day would be different if this sound were absent for one day.",
    ],

    questions: [
      "When do you first remember hearing this sound?",
      "At what moment of your day do you usually hear it?",
      "If this sound were absent for one day, what would be missing?",
      "What time or place does this sound remind you of most?",
      "If this sound could reply to your letter, what would it say?",
    ],

    teacherNote:
      "The goal is not to describe the physical qualities of the sound. It is to discover the relationship a student has developed with a recurring everyday sound, even without consciously noticing it. If a student cannot think of a particular sound, you may offer examples such as the recess bell, the sound of rain, or a door opening as inspiration, without limiting their choices.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
      {
        id: "04M-09",
        title: "نامه‌ای که تصمیم گرفتی نفرستی",
        description: "نوشتن نامه‌ای خصوصی که فقط برای خودت است.",
        translations: {
  en: {
    title: "A Letter You Decided Not to Send",
    description: "Writing a private letter meant only for yourself.",
  },
},
        activity: {
          purpose:
            "ایجاد فضایی امن برای بیان فکرها و احساساتی که لزوماً قرار نیست به مخاطب واقعی گفته شوند و کمک به دانش‌آموز برای تجربه‌ی نامه به‌عنوان ابزاری برای فکر کردن، نه فقط ارتباط با دیگری.",

          instruction:
            "از دانش‌آموزان بخواهید نامه‌ای را تصور کنند که قرار نیست هرگز برای مخاطبش فرستاده شود. می‌توانند آن را خطاب به یک آدم، یک مکان، یک اتفاق یا حتی خودشان بنویسند و هر چیزی را که دوست دارند اما قرار نیست بگویند، در آن بنویسند.",

          steps: [
            "از دانش‌آموزان بخواهید یک مخاطب برای نامه انتخاب کنند؛ واقعی یا خیالی.",
            "از آن‌ها بخواهید تصور کنند این نامه قرار نیست به دست مخاطب برسد.",
            "از آن‌ها بخواهید چیزی را انتخاب کنند که دوست دارند در این نامه بگویند اما در یک گفت‌وگوی معمولی شاید نتوانند یا نخواهند بگویند.",
            "از آن‌ها بخواهید نامه را بدون نگرانی درباره‌ی قضاوت مخاطب بنویسند.",
            "در پایان، از آن‌ها بخواهید نامه را دوباره بخوانند و فقط در صورتی که خودشان مایل‌اند، یک جمله را که از همه برایشان مهم‌تر بوده مشخص کنند.",
          ],

          questions: [
            "اگر مطمئن باشی هیچ‌کس این نامه را نمی‌خواند، چه چیزی را راحت‌تر می‌توانی بگویی؟",
            "چرا تصمیم گرفتی این نامه را نفرستی؟",
            "نوشتن چیزی که قرار نیست گفته شود، چه تفاوتی با گفتنش دارد؟",
            "بعد از نوشتن نامه، نگاهت به موضوع یا مخاطب تغییر کرد؟",
            "اگر مجبور نباشی نامه را به کسی نشان بدهی، دوست داری آن را نگه داری، پاره کنی یا کنار بگذاری؟ چرا؟",
          ],

          teacherNote:
            "این فعالیت باید واقعاً اختیاری و امن باشد. دانش‌آموز نباید مجبور به خواندن نامه یا حتی نشان دادن یک جمله از آن شود. هدف فعالیت، تجربه‌ی نوشتن برای بیان و فکر کردن است، نه افشای مسائل شخصی. می‌توان اجازه داد دانش‌آموز به‌جای یک موضوع شخصی، یک موقعیت کاملاً خیالی انتخاب کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Create a safe space for expressing thoughts and feelings that are not necessarily meant to be shared with a real recipient, and help students experience letter-writing as a tool for thinking, not merely communicating with someone else.",

    instruction:
      "Ask students to imagine writing a letter that will never be sent to its intended recipient. They may address it to a person, a place, an event, or even themselves. Invite them to write anything they would like to say but do not intend to express directly.",

    steps: [
      "Ask students to choose someone or something to address the letter to, real or imaginary.",
      "Invite them to imagine that the letter will never reach its recipient.",
      "Ask them to choose something they would like to say in this letter but might not be able or willing to say in an ordinary conversation.",
      "Invite them to write the letter without worrying about how the recipient might judge them.",
      "Finally, ask them to read the letter again and, only if they wish, identify one sentence that matters most to them.",
    ],

    questions: [
      "If you were certain no one would ever read this letter, what would be easier for you to say?",
      "Why did you decide not to send this letter?",
      "How is writing something you do not intend to say different from actually saying it?",
      "After writing the letter, did your view of the subject or recipient change?",
      "If you did not have to show the letter to anyone, would you want to keep it, tear it up, or put it aside? Why?",
    ],

    teacherNote:
      "This activity must be genuinely voluntary and safe. Students must not be required to read their letters aloud or even share a single sentence. The goal is to experience writing as a way of expressing and thinking, not to reveal personal matters. Students may choose an entirely imaginary situation instead of a personal subject.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
      {
        id: "04M-10",
        title: "نامه به یک آرزو",
        description:
          "نوشتن نامه‌ای خطاب به یک آرزوی شخصی، با شروع «آرزوی من، اگر می‌توانی صدای مرا بشنوی...»",
        translations: {
  en: {
    title: "A Letter to a Wish",
    description:
      "Writing a letter to a personal wish, beginning with: 'My wish, if you can hear me...'",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای شناخت دقیق‌تر یک آرزو، بیان دلیل اهمیت آن و فکر کردن به رابطه‌ی میان آرزو، اکنون و آینده.",

          instruction:
            "از دانش‌آموزان بخواهید یک آرزوی شخصی را انتخاب کنند و تصور کنند آن آرزو می‌تواند صدای آن‌ها را بشنود. سپس نامه‌ای برای آن بنویسند و در آن از دلیل شکل‌گیری آرزو، معنایی که برایشان دارد و چیزی که دوست دارند روزی اتفاق بیفتد صحبت کنند.",

          steps: [
            "از دانش‌آموزان بخواهید یک آرزوی شخصی را انتخاب کنند؛ آرزویی واقعی یا کاملاً خیالی.",
            "از آن‌ها بخواهید فکر کنند این آرزو از کجا آمده و چرا برایشان مهم شده است.",
            "از آن‌ها بخواهید نامه را با جمله‌ی «آرزوی من، اگر می‌توانی صدای مرا بشنوی...» شروع کنند.",
            "از آن‌ها بخواهید در نامه توضیح دهند اگر این آرزو روزی تحقق پیدا کند، چه چیزی در زندگی یا نگاه آن‌ها تغییر خواهد کرد.",
            "در پایان، از آن‌ها بخواهید یک جمله خطاب به آرزویشان بنویسند که نشان دهد حتی اگر هنوز به آن نرسیده‌اند، چه چیزی از مسیر امروز برایشان مهم است.",
          ],

          questions: [
            "این آرزو از کجا آمده است؟",
            "چرا این آرزو برای تو مهم است؟",
            "اگر آرزویت همین فردا برآورده شود، چه چیزی در زندگی تو تغییر می‌کند؟",
            "اگر آرزویت می‌توانست به نامه‌ات پاسخ بدهد، فکر می‌کنی چه می‌گفت؟",
            "آیا ممکن است وقتی بزرگ‌تر شوی، معنای این آرزو برایت تغییر کند؟ چرا؟",
            "اگر رسیدن به آرزو مهم باشد، آیا خودِ مسیر رسیدن هم می‌تواند ارزشمند باشد؟",
          ],

          teacherNote:
            "هدف، ارزش‌گذاری آرزوها یا تشخیص آرزوهای «واقع‌بینانه» و «غیرواقع‌بینانه» نیست. اجازه دهید آرزوها شخصی، ساده، بزرگ یا کاملاً خیالی باشند. تمرکز فعالیت بر این است که دانش‌آموز بتواند درباره‌ی چرایی یک آرزو، معنای آن و تغییری که تحققش ایجاد می‌کند فکر کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Help students understand a wish more clearly, express why it matters to them, and reflect on the relationship between a wish, the present, and the future.",

    instruction:
      "Ask students to choose a personal wish and imagine that the wish can hear them. Then invite them to write a letter to it, describing where the wish came from, what it means to them, and what they hope will happen one day.",

    steps: [
      "Ask students to choose a personal wish, whether realistic or entirely imaginary.",
      "Invite them to think about where this wish came from and why it became important to them.",
      "Ask them to begin the letter with the sentence: 'My wish, if you can hear me...'",
      "Invite them to explain in the letter what would change in their lives or in the way they see things if this wish came true one day.",
      "Finally, ask them to write a sentence addressed to their wish, expressing what matters to them about the journey they are on today, even if they have not yet reached it.",
    ],

    questions: [
      "Where did this wish come from?",
      "Why does this wish matter to you?",
      "If your wish came true tomorrow, what would change in your life?",
      "If your wish could reply to your letter, what do you think it would say?",
      "Could the meaning of this wish change as you grow older? Why?",
      "If reaching a wish is important, could the journey toward it also be valuable?",
    ],

    teacherNote:
      "The goal is not to judge students' wishes or classify them as 'realistic' or 'unrealistic.' Allow wishes to be personal, simple, ambitious, or entirely imaginary. The focus is on helping students think about why they have a particular wish, what it means to them, and what might change if it came true.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
    ],
  },

  {
    id: "comparison",
    code: "05M",
    title: "مقایسه",
    description: "دیدن تفاوت‌ها و شباهت‌هایی که نوع نگاه را تغییر می‌دهند.",
    translations: {
  en: {
    title: "Comparison",
    description: "Discovering similarities and differences that can change the way we see things.",
  },
},
    situations: [
      {
        id: "05M-01",
        title: "دو کیف، دو داستان",
        description:
          "ساختن داستان‌هایی درباره‌ی صاحبان دو کیف بر پایه‌ی وسایل داخل آن‌ها و تشخیص تفاوت میان مشاهده و حدس.",
          translations: {
  en: {
    title: "Two Bags, Two Stories",
    description:
      "Creating stories about the owners of two bags based on the objects inside them, while distinguishing between observation and guesswork.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی توجه به جزئیات، استفاده از شواهد و ساختن برداشت‌های مختلف از یک مجموعه نشانه.",

          instruction:
            "دو کیف باز را که وسایل داخلشان دیده می‌شود، با دقت نگاه کن. از روی وسایل حدس بزن هر کیف ممکن است متعلق به چه کسی باشد و چه داستانی پشت آن باشد. لازم نیست صاحب واقعی کیف را پیدا کنی؛ مهم این است که بتوانی برای حدست از چیزهایی که در تصویر می‌بینی دلیل بیاوری.",

          steps: [
            "به وسایل داخل هر دو کیف با دقت نگاه کن.",
            "چند چیزی را که واقعاً در تصویر می‌بینی، بدون حدس و تفسیر، یادداشت کن.",
            "حدس بزن هر کیف ممکن است متعلق به چه کسی باشد.",
            "برای حدست از وسایل داخل کیف دلیل بیاور.",
            "فکر کن صاحب هر کیف ممکن است در چه موقعیت یا ماجرایی از این وسایل استفاده کرده باشد.",
            "برای یکی از کیف‌ها یک داستان کوتاه بساز.",
            "در پایان مشخص کن کدام بخش‌های داستانت از چیزهایی که دیدی آمده‌اند و کدام بخش‌ها را خودت حدس زده‌ای یا ساخته‌ای.",
          ],

          questions: [
            "در تصویر دقیقاً چه چیزهایی می‌بینی؟",
            "کدام وسیله بیشتر روی حدس تو درباره‌ی صاحب کیف تأثیر گذاشت؟ چرا؟",
            "از کجا فهمیدی یا حدس زدی صاحب کیف ممکن است چنین آدمی باشد؟",
            "آیا می‌توان از همین وسایل، داستان دیگری هم ساخت؟",
            "کدام بخش از داستانت بر اساس چیزی بود که واقعاً دیدی و کدام بخش را خودت اضافه کردی؟",
            "اگر یکی از وسایل کیف را برداریم، آیا داستان یا حدست درباره‌ی صاحب آن تغییر می‌کند؟",
          ],

          teacherNote:
            "هدف پیدا کردن صاحب واقعی کیف نیست. دانش‌آموز باید میان «آنچه می‌بینم» و «آنچه از آن نتیجه می‌گیرم» تفاوت بگذارد و متوجه شود که یک مجموعه نشانه می‌تواند به بیش از یک برداشت یا داستان منجر شود.",

          materials: {
            required: true,
            type: "image",
            items: ["/images/05M/05M-01.png"],
          },
          translations: {
  en: {
    purpose:
      "Strengthen students' ability to notice details, use evidence, and develop different interpretations from the same set of clues.",

    instruction:
      "Look carefully at the two open bags and the objects inside them. Based on these objects, guess who each bag might belong to and what story might lie behind it. You do not need to identify the actual owners. What matters is being able to support your guesses with reasons drawn from what you can see in the pictures.",

    steps: [
      "Look carefully at the objects inside both bags.",
      "Write down a few things you can actually see in the pictures, without guessing or interpreting.",
      "Guess who each bag might belong to.",
      "Use the objects inside each bag as evidence to support your guess.",
      "Imagine what situation or event the owner of each bag might have used these objects for.",
      "Create a short story about one of the bags.",
      "Finally, identify which parts of your story came from things you actually saw and which parts you guessed or invented yourself.",
    ],

    questions: [
      "What exactly can you see in the pictures?",
      "Which object had the greatest influence on your guess about the owner of the bag? Why?",
      "What makes you think the owner of the bag might be this kind of person?",
      "Could these same objects inspire a different story?",
      "Which parts of your story were based on something you actually saw, and which parts did you add yourself?",
      "If we removed one of the objects from the bag, would your story or guess about its owner change?",
    ],

    teacherNote:
      "The goal is not to identify the actual owner of either bag. Students should distinguish between 'what I see' and 'what I conclude from it,' and recognize that the same set of clues can lead to more than one interpretation or story.",

    materials: {
      required: true,
      type: "image",
      items: ["/images/05M/05M-01.png"],
    },
  },
},
        },
      },

      {
        id: "05M-02",
        title: "دو نقاش، یک منظره",
        description:
          "مقایسه‌ی دو نقاشی متفاوت از یک منظره و کشف تفاوت نگاه هر نقاش.",
        translations: {
  en: {
    title: "Two Painters, One Landscape",
    description:
      "Comparing two different paintings of the same landscape and discovering how each painter sees it differently.",
  },
},
          activity: {
          purpose:
            "کمک به دانش‌آموز برای تشخیص تفاوت میان یک موضوع مشترک و شیوه‌های متفاوت دیدن و بازنمایی آن.",
          instruction:
            "دو نقاشی را تصور کنید که هر دو یک منظره‌ی واحد را نشان می‌دهند، اما هر نقاش آن را به شکل متفاوتی دیده و کشیده است. از دانش‌آموزان بخواهید ابتدا تفاوت‌های قابل مشاهده را پیدا کنند و سپس فکر کنند این تفاوت‌ها چه چیزی درباره‌ی نگاه هر نقاش نشان می‌دهد.",
          steps: [
            "دو نقاشی از یک منظره‌ی مشترک را در اختیار دانش‌آموزان قرار دهید.",
            "از دانش‌آموزان بخواهید ویژگی‌هایی را پیدا کنند که در هر دو نقاشی یکسان یا مشابه‌اند.",
            "از آن‌ها بخواهید تفاوت‌های دو نقاشی را از نظر رنگ، اندازه، جزئیات، زاویه‌ی دید و چیزهایی که بیشتر یا کمتر دیده شده‌اند بررسی کنند.",
            "از آن‌ها بخواهید حدس بزنند هر نقاش به کدام بخش منظره توجه بیشتری داشته است.",
            "در پایان، از آن‌ها بخواهید توضیح دهند چگونه ممکن است دو نفر یک چیز واحد را ببینند اما تصویر متفاوتی از آن ارائه کنند.",
          ],
          questions: [
            "هر دو نقاشی چه چیزهایی را یکسان نشان می‌دهند؟",
            "مهم‌ترین تفاوت میان دو نقاشی چیست؟",
            "کدام بخش منظره در نقاشی اول بیشتر به چشم می‌آید و در نقاشی دوم کمتر؟",
            "فکر می‌کنی هر نقاش بیشتر به چه چیزی توجه کرده است؟ از کجا این را فهمیدی؟",
            "اگر خودت همان منظره را نقاشی می‌کردی، کدام بخش را برجسته‌تر می‌کردی؟ چرا؟",
          ],
          teacherNote:
            "دانش‌آموز را از قضاوت‌هایی مثل «این نقاشی زیباتر است» به سمت مشاهده‌ی تفاوت‌های قابل بررسی هدایت کنید. مهم است که ابتدا تفاوت‌ها را ببیند و سپس درباره‌ی نگاه نقاشان فرضیه بسازد. تأکید کنید که دو بازنمایی متفاوت لزوماً به معنای درست بودن یکی و غلط بودن دیگری نیست.",
          materials: {
            required: true,
            type: "image",
            items: ["/images/05M/05M-02-a.jfif", "/images/05M/05M-02-b.jfif"],
          },
          translations: {
  en: {
    purpose:
      "Help students recognize the difference between a shared subject and the different ways people see and represent it.",

    instruction:
      "Imagine two painters looking at the same landscape, but each seeing and painting it differently. Ask students to first identify the visible differences, then consider what those differences might reveal about each painter's way of seeing.",

    steps: [
      "Show students two paintings of the same landscape.",
      "Ask them to identify the features that are the same or similar in both paintings.",
      "Invite them to examine the differences in color, size, details, viewing angle, and which elements are more or less prominent.",
      "Ask them to guess which parts of the landscape each painter paid more attention to.",
      "Finally, invite them to explain how two people can look at the same thing yet create different representations of it.",
    ],

    questions: [
      "What do both paintings show in the same way?",
      "What is the most noticeable difference between the two paintings?",
      "Which part of the landscape stands out more in the first painting and less in the second?",
      "What do you think each painter paid the most attention to? What makes you think so?",
      "If you were painting the same landscape, which part would you make more prominent? Why?",
    ],

    teacherNote:
      "Guide students away from judgments such as 'this painting is more beautiful' and toward observable, discussable differences. It is important that they first notice the differences and then form hypotheses about the painters' perspectives. Emphasize that two different representations do not necessarily mean that one is right and the other is wrong.",

    materials: {
      required: true,
      type: "image",
      items: ["/images/05M/05M-02-a.jfif", "/images/05M/05M-02-b.jfif"],
    },
  },
},
        },
      },

      {
        id: "05M-03",
        title: "یک چیز، دو کاربرد",
        description:
          "مقایسه‌ی یک چیز مشابه در دو موقعیت و کشف اینکه کاربرد و محیط چگونه نگاه ما به آن را تغییر می‌دهند.",
            translations: {
  en: {
    title: "One Object, Two Uses",
    description:
      "Comparing the same kind of object in two different situations and discovering how its setting and use can change the way we see it.",
  },
},       
          activity: {
          purpose:
            "کمک به دانش‌آموز برای دیدن اینکه یک چیز واحد، وقتی در موقعیت‌های متفاوت قرار می‌گیرد، می‌تواند کاربردها و ویژگی‌های مهم متفاوتی پیدا کند.",
          instruction:
            "دو تصویر از یک چیز مشابه را در دو موقعیت متفاوت در اختیار دانش‌آموزان قرار دهید؛ مثلاً یک صندلی در کلاس و یک صندلی در ایستگاه اتوبوس. از آن‌ها بخواهید تصویرها را با هم مقایسه کنند و بررسی کنند که محیط و کاربرد چگونه باعث می‌شوند به ویژگی‌های متفاوتی از همان چیز توجه کنیم.",
          steps: [
            "دو تصویر از یک چیز مشابه را در دو موقعیت متفاوت در اختیار دانش‌آموزان قرار دهید.",
            "از آن‌ها بخواهید بدون حدس زدن درباره‌ی داستان، ویژگی‌هایی را که در هر دو تصویر می‌بینند یادداشت کنند.",
            "از آن‌ها بخواهید تفاوت‌های دو موقعیت را بررسی کنند؛ مثل جایگاه، چیزهای اطراف، افراد حاضر و شیوه‌ی استفاده.",
            "از آن‌ها بخواهید مشخص کنند در هر موقعیت، کدام ویژگی آن چیز بیشتر به چشم می‌آید.",
            "در پایان، از آن‌ها بخواهید توضیح دهند چگونه محیط می‌تواند نگاه ما به یک چیز را تغییر دهد، حتی وقتی خودِ چیز تقریباً همان است.",
          ],
          questions: [
            "چه چیزهایی در دو تصویر شبیه یکدیگرند؟",
            "چه چیزی در محیط دو تصویر تغییر کرده است؟",
            "در هر تصویر، بیشتر متوجه کدام ویژگی آن چیز شدی؟",
            "فکر می‌کنی چرا در دو موقعیت به ویژگی‌های متفاوتی توجه می‌کنیم؟",
            "اگر همین چیز را در یک جای کاملاً متفاوت ببینی، چه چیزی ممکن است درباره‌ی آن برایت مهم‌تر شود؟",
            "آیا محیط فقط کاربرد یک چیز را تغییر می‌دهد یا می‌تواند نگاه ما به خودِ آن چیز را هم تغییر دهد؟",
          ],
          teacherNote:
            "تمرکز فعالیت بر پیدا کردن یک کاربرد درست نیست. دانش‌آموز باید رابطه‌ی میان «چیز»، «محیط» و «کاربرد» را ببیند. ابتدا او را به مشاهده‌ی تفاوت‌های واقعی تصویرها هدایت کنید و بعد اجازه دهید درباره‌ی کاربرد یا معنای آن‌ها برداشت شخصی داشته باشد.",
          materials: {
            required: true,
            type: "image",
            items: ["/images/05M/05M-03.png"],
          },
          translations: {
  en: {
    purpose:
      "Help students recognize that the same object can take on different uses and become important in different ways when placed in different situations.",

    instruction:
      "Show students two pictures of the same kind of object in two different settings, such as a chair in a classroom and a chair at a bus stop. Ask them to compare the pictures and explore how the setting and purpose can draw our attention to different features of the very same object.",

    steps: [
      "Show students two pictures of the same kind of object in two different settings.",
      "Ask them to write down the features they can see in both pictures, without guessing or inventing a story.",
      "Invite them to examine the differences between the two settings, such as the object's position, surrounding objects, people present, and how it is being used.",
      "Ask them to identify which feature of the object stands out most in each setting.",
      "Finally, invite them to explain how the surroundings can change the way we see an object, even when the object itself remains almost the same.",
    ],

    questions: [
      "What do the two pictures have in common?",
      "What has changed in the surroundings between the two pictures?",
      "Which feature of the object caught your attention most in each picture?",
      "Why do you think we pay attention to different features in different situations?",
      "If you saw the same object in a completely different place, what might become more important to you about it?",
      "Does the setting only change how an object is used, or can it also change the way we see the object itself?",
    ],

    teacherNote:
      "The focus is not on finding one correct use. Students should notice the relationship between the 'object,' its 'setting,' and its 'use.' First guide them toward observing the actual differences between the pictures, then allow them to form their own interpretations about the objects' uses or meanings.",

    materials: {
      required: true,
      type: "image",
      items: ["/images/05M/05M-03.png"],
    },
  },
},
        },
      },

      {
        id: "05M-04",
        title: "دو آهنگ، دو حس",
        description:
          "مقایسه‌ی حس دو قطعه‌ی موسیقی متفاوت و کشف اینکه چگونه ویژگی‌های موسیقی می‌توانند حال‌وهوای متفاوتی ایجاد کنند.",
          translations: {
  en: {
    title: "Two Pieces of Music, Two Feelings",
    description:
      "Comparing the feelings evoked by two different pieces of music and discovering how musical features can create different moods.",
  },
},
          activity: {
          purpose:
            "تقویت گوش‌دادن دقیق و کمک به دانش‌آموز برای تشخیص و مقایسه‌ی تفاوت‌های سرعت، ریتم، شدت و حال‌وهوای دو قطعه‌ی موسیقی.",
          instruction:
            "دو قطعه‌ی موسیقی را گوش کنید:ابتدا فقط به واکنش خودتان توجه کنید و سپس بررسی کنید چه ویژگی‌هایی در هر قطعه ممکن است باعث ایجاد این تفاوت شده باشند.",
          steps: [
            "از دانش‌آموزان بخواهید دو قطعه را از نظر سرعت، شدت، ریتم، حرکت موسیقی و حال‌وهوایی که ایجاد می‌کنند با هم مقایسه کنند.",
            "از آن‌ها بخواهید برای هر احساسی که نوشته‌اند، دست‌کم یک ویژگی شنیداری پیدا کنند که ممکن است باعث ایجاد آن احساس شده باشد.",
            "در پایان، از آن‌ها بخواهید توضیح دهند چگونه یک آهنگساز می‌تواند دو قطعه‌ی بسیار متفاوت بسازد.",
          ],
          questions: [
            "بعد از شنیدن هر قطعه چه حسی داشتی؟",
            "کدام قطعه بیشتر احساس حرکت و انرژی داشت؟ از کجا فهمیدی؟",
            "کدام قطعه آرام‌تر و نرم‌تر به نظر می‌رسید؟",
            "اگر قرار بود هر قطعه را با یک حرکت بدن نشان بدهی، حرکتت در هرکدام چگونه بود؟",
            "کدام ویژگی موسیقی بیشترین تأثیر را روی احساس تو داشت؟",
            "چطور ممکن است یک آهنگساز موسیقی‌ای بسازد که یک‌بار تو را به حرکت و بار دیگر به آرامش دعوت کند؟",
          ],
          teacherNote:
            "هدف فعالیت پیدا کردن یک احساس درست یا نام‌گذاری تخصصی موسیقی نیست. مهم این است که دانش‌آموز تلاش کند احساس خود را به یک ویژگی قابل شنیدن در موسیقی مرتبط کند.",
          materials: {
            required: true,
            type: "audio",
            items: ["/audio/05M/05M-04-a.mp3", "/audio/05M/05M-04-b.mp3"],
          },
          translations: {
  en: {
    purpose:
      "Develop careful listening and help students identify and compare differences in tempo, rhythm, intensity, and the overall mood of two musical pieces.",

    instruction:
      "Listen to two pieces of music. First, pay attention only to your own reactions. Then explore which features of each piece might have created these different feelings.",

    steps: [
      "Ask students to compare the two pieces in terms of tempo, intensity, rhythm, musical movement, and the moods they create.",
      "Invite them to identify at least one audible feature that might have contributed to each feeling they have described.",
      "Finally, ask them to explain how a composer can create two very different musical pieces.",
    ],

    questions: [
      "How did you feel after listening to each piece?",
      "Which piece gave you a stronger sense of movement and energy? How could you tell?",
      "Which piece seemed calmer and gentler?",
      "If you had to express each piece through a body movement, what would your movement look like?",
      "Which musical feature had the greatest influence on your feelings?",
      "How might a composer create music that invites you to move in one moment and feel calm in another?",
    ],

    teacherNote:
      "The goal is not to identify one correct feeling or use technical musical terminology. What matters is that students try to connect their feelings to an audible feature of the music.",

    materials: {
      required: true,
      type: "audio",
      items: ["/audio/05M/05M-04-a.mp3", "/audio/05M/05M-04-b.mp3"],
    },
  },
},
        },
      },

      {
        id: "05M-05",
        title: "کدام کیف بهتر است؟",
        description:
          "مقایسه‌ی دو کیف با وسایل متفاوت و کشف اینکه پاسخ به سؤال «کدام بهتر است؟» به چیزی که برای ما مهم است بستگی دارد.",
           translations: {
  en: {
    title: "Which Bag Is Better?",
    description:
      "Comparing two bags with different contents and discovering that the answer to 'Which is better?' depends on what matters to us.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای تشخیص اینکه یک چیز را نمی‌توان بدون مشخص کردن معیار، به‌طور مطلق بهتر از چیز دیگری دانست و افراد مختلف ممکن است با دیدن گزینه‌های یکسان، انتخاب‌های متفاوتی داشته باشند.",

          instruction:
            "دو کیف باز با وسایل متفاوت به دانش‌آموزان نشان دهید. از آن‌ها بخواهید ابتدا بدون دریافت معیار مشخص بگویند کدام کیف را بیشتر می‌پسندند و دلیل انتخابشان را بنویسند. سپس درباره‌ی این گفت‌وگو کنید که انتخاب آن‌ها به چه چیزی که برایشان مهم بوده، بستگی داشته است.",

          steps: [
            "دو کیف و وسایل داخل آن‌ها را با دقت نگاه کن.",
            "پیش از اینکه معیار مشخصی معرفی شود، انتخاب کن کدام کیف را بیشتر می‌پسندی.",
            "دلیل انتخابت را بنویس.",
            "فکر کن هنگام انتخاب به کدام وسیله‌ها یا ویژگی‌های کیف بیشتر توجه کردی.",
            "حالا چند معیار متفاوت مثل «برای سفر»، «برای سرگرمی» یا «برای ثبت و یادآوری اتفاق‌ها» را در نظر بگیر.",
            "بررسی کن آیا با تغییر معیار، انتخاب تو هم تغییر می‌کند یا نه.",
            "در پایان، توضیح بده چرا نمی‌توان گفت یک کیف بدون در نظر گرفتن معیار، همیشه بهتر از کیف دیگر است.",
          ],

          questions: [
            "در ابتدا کدام کیف را انتخاب کردی؟ چرا؟",
            "کدام وسیله‌ی داخل کیف بیشتر روی انتخابت تأثیر گذاشت؟",
            "اگر بخواهی با این کیف به یک سفر بروی، کدام را انتخاب می‌کنی؟ چرا؟",
            "اگر بخواهی چیزی برای سرگرمی پیدا کنی، انتخابت تغییر می‌کند؟",
            "آیا ممکن است دو نفر همین دو کیف را ببینند اما انتخاب متفاوتی داشته باشند؟ چرا؟",
            "وقتی می‌گوییم «این کیف بهتر است»، چه چیزی را باید مشخص کنیم تا حرفمان کامل‌تر شود؟",
          ],

          teacherNote:
            "هدف فعالیت انتخاب یک کیف برنده نیست. نکته‌ی اصلی این است که دانش‌آموز متوجه شود «بهتر بودن» بدون مشخص کردن معیار، معنای کاملی ندارد و یک انتخاب می‌تواند برای یک هدف مناسب‌تر از انتخاب دیگر باشد.",

          materials: {
            required: true,
            type: "image",
            items: ["/images/05M/05M-05.png"],
          },
          translations: {
  en: {
    purpose:
      "Help students recognize that something cannot be considered absolutely better than something else without specifying a criterion, and that different people may make different choices even when looking at the same options.",

    instruction:
      "Show students two open bags containing different objects. First, without giving them any specific criteria, ask them to say which bag they prefer and write down their reasons. Then discuss what mattered most to them when making their choices.",

    steps: [
      "Look carefully at the two bags and the objects inside them.",
      "Before any specific criteria are introduced, choose the bag you prefer.",
      "Write down the reason for your choice.",
      "Think about which objects or features of the bags influenced your choice most.",
      "Now consider several different criteria, such as 'for traveling,' 'for entertainment,' or 'for recording and remembering events.'",
      "Explore whether your choice changes when the criterion changes.",
      "Finally, explain why we cannot say that one bag is always better than the other without considering a specific criterion.",
    ],

    questions: [
      "Which bag did you choose at first? Why?",
      "Which object inside the bag influenced your choice most?",
      "If you were going on a trip with one of these bags, which would you choose? Why?",
      "If you wanted to find something for entertainment, would your choice change?",
      "Could two people look at these same bags and make different choices? Why?",
      "When we say 'This bag is better,' what do we need to specify to make our statement more complete?",
    ],

    teacherNote:
      "The goal is not to choose a winning bag. The main point is for students to recognize that 'better' has no complete meaning without a specified criterion, and that one option may be more suitable than another for a particular purpose.",

    materials: {
      required: true,
      type: "image",
      items: ["/images/05M/05M-05.png"],
    },
  },
},
        },
      },

      {
        id: "05M-06",
        title: "یک تصویر، دو قاب",
        description:
          "دیدن یک صحنه از دو قاب متفاوت و توجه به اینکه با تغییر قاب، بعضی جزئیات آشکار و بعضی اطلاعات پنهان می‌شوند.",
         translations: {
  en: {
    title: "One Image, Two Frames",
    description:
      "Viewing a scene through two different frames and noticing how changing the frame reveals some details while hiding others.",
  },
},
          activity: {
          purpose:
            "کمک به دانش‌آموز برای کشف اینکه یک تصویر واحد، بسته به اینکه از چه فاصله و با چه محدوده‌ای دیده شود، اطلاعات متفاوتی در اختیار ما قرار می‌دهد.",
          instruction:
            "یک تصویر را ابتدا به‌صورت کامل و سپس همان تصویر را در یک نمای نزدیک‌تر ببینید. تلاش کنید بدون حدس‌زدن درباره‌ی داستان تصویر، فقط آنچه را در هر قاب می‌بینید با هم مقایسه کنید.",
          steps: [
            "ابتدا تصویر کامل را ببینید و چند چیزی را که در آن مشاهده می‌کنید نام ببرید.",
            "حالا همان تصویر را در نمای نزدیک ببینید.",
            "توجه کنید چه جزئیاتی در نمای نزدیک دیده می‌شوند که در نگاه اول به چشم نمی‌آمدند.",
            "توجه کنید در نمای نزدیک چه چیزهایی از تصویر کامل دیگر دیده نمی‌شوند.",
            "دو قاب را با هم مقایسه کنید و بگویید هرکدام چه اطلاعاتی بیشتر یا کمتر در اختیار شما قرار می‌دهند.",
            "در پایان، یک جمله بنویسید که توضیح دهد تغییر قاب چه چیزی را در دیدن تصویر تغییر داد.",
          ],
          questions: [
            "در هر دو قاب چه چیزهایی مشترک است؟",
            "در نمای نزدیک چه چیزی را دیدی که در تصویر کامل متوجه آن نشده بودی؟",
            "چه چیزهایی در تصویر کامل دیده می‌شد که در نمای نزدیک دیگر دیده نمی‌شود؟",
            "آیا با تغییر قاب، چیزی درباره‌ی تصویر برایت روشن‌تر شد؟",
            "آیا چیزی هم هست که در نمای نزدیک درباره‌ی آن اطلاعات کمتری داشته باشی؟",
            "اگر فقط یکی از این دو قاب را می‌دیدی، چه اطلاعاتی را از دست می‌دادی؟",
          ],
          teacherNote:
            "هدف فعالیت پیدا کردن پاسخ درست درباره‌ی تصویر نیست. توجه دانش‌آموز را به تفاوت اطلاعاتی که از دو قاب یک تصویر به دست می‌آید جلب کنید. بهتر است در گفت‌وگو میان آنچه واقعاً در تصویر دیده می‌شود و برداشتی که ممکن است از آن داشته باشیم تفاوت گذاشته شود.",
          materials: {
            required: true,
            type: "image",
            items: ["/images/05M/05M-06-a.jpg", "/images/05M/05M-06-b.jpg"],
          },
          translations: {
  en: {
    purpose:
      "To help students discover that the same image provides different information depending on the viewing distance and the area included in the frame.",
    instruction:
      "Show an image first in its entirety and then as a closer view of the same image. Ask students to compare only what they can see in each frame, without guessing the story behind the image.",
    steps: [
      "First, look at the full image and name a few things you can observe in it.",
      "Now look at the same image in a closer view.",
      "Notice which details become visible in the closer view that you did not notice at first.",
      "Notice which parts of the full image are no longer visible in the closer view.",
      "Compare the two frames and explain what information each one provides more or less of.",
      "Finally, write one sentence explaining how changing the frame changed the way you saw the image.",
    ],
    questions: [
      "What do you see in both frames?",
      "What did you notice in the closer view that you had not noticed in the full image?",
      "What could you see in the full image that is no longer visible in the closer view?",
      "Did changing the frame make anything about the image clearer to you?",
      "Is there anything you know less about when looking at the closer view?",
      "If you could see only one of these two frames, what information would you miss?",
    ],
    teacherNote:
      "The goal is not to find the correct answer about the image. Draw students' attention to the differences in the information provided by the two frames of the same image. In the discussion, it is helpful to distinguish between what is actually visible in the image and the interpretations we may form from it.",
    materials: {
      required: true,
      type: "image",
      items: ["/images/05M/05M-06-a.jpg", "/images/05M/05M-06-b.jpg"],
    },
  },
},
        },
      },

      {
        id: "05M-07",
        title: "یک صدا، دو معنا",
        description:
          "شنیدن یک صدای یکسان در دو موقعیت متفاوت و کشف اینکه زمینه می‌تواند برداشت ما از یک صدا را تغییر دهد.",
          translations: {
  en: {
    title: "One Sound, Two Meanings",
    description:
      "Hearing the same sound in two different situations and discovering how context can change the way we interpret it.",
  },
},
          activity: {
          purpose:
            "کمک به دانش‌آموز برای تشخیص تفاوت میان خودِ یک صدا و معنایی که در یک موقعیت به آن می‌دهد.",
          instruction:
            "یک صدای واحد را در دو موقعیت متفاوت برای دانش‌آموزان پخش کنید؛ برای مثال، صدای کوبیدن به در. از آن‌ها بخواهید ابتدا بدون دانستن موقعیت درباره‌ی آن حدس بزنند و سپس بررسی کنند که با تغییر موقعیت، برداشتشان چگونه تغییر کرده است.",
          steps: [
            "یک صدای کوتاه و مشخص را برای دانش‌آموزان پخش کنید.",
            "از آن‌ها بخواهید بدون دانستن موقعیت، بنویسند فکر می‌کنند چه اتفاقی در حال رخ دادن است.",
            "همان صدا را در زمینه‌ی دیگری معرفی کنید یا توضیح متفاوتی درباره‌ی موقعیت ارائه دهید.",
            "از آن‌ها بخواهید بررسی کنند آیا برداشتشان از همان صدا تغییر کرده است یا نه.",
            "از آن‌ها بخواهید مشخص کنند کدام بخش از برداشتشان مربوط به خود صدا و کدام بخش مربوط به اطلاعاتی است که درباره‌ی موقعیت دارند.",
            "در پایان، از آن‌ها بخواهید توضیح دهند چگونه یک صدای یکسان می‌تواند در دو موقعیت معنای متفاوتی پیدا کند.",
          ],
          questions: [
            "وقتی صدا را برای اولین بار شنیدی، فکر کردی چه اتفاقی افتاده است؟",
            "چه چیزی باعث شد چنین برداشتی داشته باشی؟",
            "بعد از تغییر موقعیت، آیا برداشتت از همان صدا تغییر کرد؟",
            "کدام بخش از چیزی که فهمیدی از خود صدا می‌آمد و کدام بخش را از موقعیت حدس زدی؟",
            "آیا ممکن است دو نفر یک صدا را بشنوند اما برداشت متفاوتی از آن داشته باشند؟ چرا؟",
            "اگر فقط صدا را می‌شنیدی و هیچ اطلاعاتی درباره‌ی موقعیت نداشتی، چه چیزهایی را نمی‌توانستی با اطمینان بفهمی؟",
          ],
          teacherNote:
            "هدف فعالیت پیدا کردن معنای درست صدا نیست. دانش‌آموز باید متوجه شود که شنیده‌ی ما و تفسیری که از آن می‌سازیم همیشه یک چیز نیستند. بهتر است میان «چیزی که شنیدم» و «فکر کردم به چه معناست» تفاوت گذاشته شود.",
          materials: {
            required: true,
            type: "audio",
            items: ["/audio/05M/05M-07.wav"],
          },
          translations: {
  en: {
    purpose:
      "To help students distinguish between a sound itself and the meaning they assign to it in a particular situation.",
    instruction:
      "Play the same sound for students in two different contexts; for example, the sound of someone knocking on a door. First, ask them to make guesses without knowing the context. Then help them explore how their interpretation changes when the context changes.",
    steps: [
      "Play a short, recognizable sound for the students.",
      "Ask them to write down what they think is happening, without knowing the context.",
      "Introduce the same sound in a different context or provide a different explanation of the situation.",
      "Ask them to consider whether their interpretation of the same sound has changed.",
      "Ask them to identify which parts of their interpretation came from the sound itself and which came from the information they received about the situation.",
      "Finally, ask them to explain how the same sound can have different meanings in two different situations.",
    ],
    questions: [
      "When you first heard the sound, what did you think was happening?",
      "What made you form that interpretation?",
      "After the context changed, did your interpretation of the same sound change?",
      "Which parts of what you understood came from the sound itself, and which parts did you infer from the situation?",
      "Is it possible for two people to hear the same sound but interpret it differently? Why?",
      "If you heard only the sound and had no information about the situation, what could you not know for certain?",
    ],
    teacherNote:
      "The goal is not to find the correct meaning of the sound. Students should recognize that what we hear and the interpretation we form are not always the same thing. It is helpful to distinguish between 'What I heard' and 'What I thought it meant.'",
    materials: {
      required: true,
      type: "audio",
      items: ["/audio/05M/05M-07.wav"],
    },
  },
},
        },
      },

      {
        id: "05M-08",
        title: "یک تصویر، دو عنوان",
        description:
          "نوشتن دو عنوان متفاوت برای یک تصویر و کشف اینکه چگونه یک تصویر واحد می‌تواند برداشت‌های متفاوتی ایجاد کند.",
          translations: {
  en: {
    title: "One Image, Two Titles",
    description:
      "Writing two different titles for the same image and discovering how a single image can lead to different interpretations.",
  },
},       
          activity: {
          purpose:
            "کمک به دانش‌آموز برای کشف رابطه‌ی میان یک تصویر واحد، برداشت ذهنی و نوشته‌ای که از آن برداشت تولید می‌شود.",
          instruction:
            "یک تصویر را در اختیار دانش‌آموزان قرار دهید که بتوان از آن بیش از یک برداشت داشت. از آن‌ها بخواهید برای همان تصویر دو عنوان متفاوت بنویسند و سپس بررسی کنند چه چیزی در ذهنشان باعث شده برای یک تصویر، دو عنوان متفاوت ممکن باشد.",
          steps: [
            "یک تصویر نسبتاً باز و قابل‌تفسیر را در اختیار دانش‌آموزان قرار دهید.",
            "از آن‌ها بخواهید بدون توضیح اضافی، اولین عنوانی را که به ذهنشان می‌رسد برای تصویر بنویسند.",
            "از آن‌ها بخواهید دوباره به همان تصویر نگاه کنند و عنوانی بنویسند که برداشت متفاوتی از تصویر ایجاد کند.",
            "از آن‌ها بخواهید دو عنوان خود را با یکدیگر مقایسه کنند و مشخص کنند چه چیزی در هر عنوان تغییر کرده است.",
            "از آن‌ها بخواهید توضیح دهند کدام جزئیات تصویر یا کدام برداشت ذهنی باعث شکل‌گیری هر عنوان شده است.",
            "در پایان، از آن‌ها بخواهید یک عنوان سوم بنویسند که نه تکرار عنوان اول باشد و نه عنوان دوم.",
          ],
          questions: [
            "چه عنوانی اول به ذهنت رسید؟ چرا؟",
            "برای عنوان دوم چه چیزی را در تصویر جور دیگری دیدی یا تفسیر کردی؟",
            "آیا هر دو عنوان می‌توانند درباره‌ی یک تصویر قابل قبول باشند؟ چرا؟",
            "کدام جزئیات تصویر بیشتر روی عنوان تو اثر گذاشتند؟",
            "اگر فقط عنوان اول را می‌دیدی، چه برداشتی از تصویر پیدا می‌کردی؟",
            "عنوان سوم تو چه چیزی را نشان می‌دهد که در دو عنوان قبلی نبود؟",
          ],
          teacherNote:
            "هدف فعالیت پیدا کردن عنوان درست نیست. بخش مهم فعالیت این است که دانش‌آموز متوجه شود یک ماده‌ی تصویری واحد می‌تواند نقطه‌ی شروع چند برداشت و چند نوشته باشد. بهتر است ابتدا عنوان‌ها بدون بحث درباره‌ی درست یا غلط بودنشان نوشته شوند و بعد درباره‌ی دلیل شکل‌گیری هرکدام گفت‌وگو شود.",
          materials: {
            required: true,
            type: "image",
            items: ["/images/05M/05M-08.png"],
          },
          translations: {
  en: {
    purpose:
      "To help students discover the relationship between a single image, their mental interpretation of it, and the writing that emerges from that interpretation.",
    instruction:
      "Give students an image that allows for more than one interpretation. Ask them to write two different titles for the same image, then explore what in their thinking made it possible to give one image two different titles.",
    steps: [
      "Give students an open-ended image that allows for different interpretations.",
      "Ask them to look at the image and write the first title that comes to mind, without any additional explanation.",
      "Ask them to look at the same image again and write a title that creates a different interpretation.",
      "Ask them to compare their two titles and identify what has changed between them.",
      "Ask them to explain which details in the image or which interpretations led them to create each title.",
      "Finally, ask them to write a third title that is neither a repetition of the first nor the second.",
    ],
    questions: [
      "What was the first title that came to mind? Why?",
      "What did you see or interpret differently in the image when you came up with the second title?",
      "Could both titles be reasonable interpretations of the same image? Why?",
      "Which details in the image had the greatest influence on your titles?",
      "If you saw only the first title, what impression would you form of the image?",
      "What does your third title reveal that was not present in the first two?",
    ],
    teacherNote:
      "The goal is not to find the correct title. The important part of the activity is for students to recognize that a single visual source can be the starting point for several interpretations and several pieces of writing. It is best to have students write their titles before discussing whether they are right or wrong, and then talk about the reasons behind each one.",
    materials: {
      required: true,
      type: "image",
      items: ["/images/05M/05M-08.png"],
    },
  },
},
        },
      },

      {
        id: "05M-09",
        title: "راه دراز، راه کوتاه",
        description: "مقایسه‌ی دو مسیر متفاوت برای رسیدن به یک مقصد.",
        translations: {
  en: {
    title: "The Long Way, the Short Way",
    description:
      "Comparing two different routes to the same destination.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای درک اینکه کوتاه‌ترین مسیر همیشه تنها معیار انتخاب یک مسیر نیست و ویژگی‌هایی مانند آرامش، شلوغی، امنیت یا لذت مسیر نیز می‌توانند در تصمیم‌گیری اهمیت داشته باشند.",
          instruction:
            "دو مسیر متفاوت برای رسیدن به یک مقصد را در اختیار دانش‌آموزان قرار دهید. یکی از مسیرها کوتاه‌تر و دیگری آرام‌تر و دلپذیرتر است. از دانش‌آموزان بخواهید مسیرها را از چند جنبه با یکدیگر مقایسه کنند و سپس توضیح دهند در شرایط مختلف کدام مسیر را انتخاب می‌کنند.",
          steps: [
            "دو مسیر برای رسیدن به یک مقصد مشخص به دانش‌آموزان معرفی کنید.",
            "از آن‌ها بخواهید ویژگی‌های هر مسیر را از نظر طول، زمان، شلوغی، آرامش و چیزهای دیگری که برایشان مهم است بررسی کنند.",
            "از آن‌ها بخواهید مشخص کنند در چه شرایطی مسیر کوتاه‌تر را انتخاب می‌کنند.",
            "از آن‌ها بخواهید مشخص کنند در چه شرایطی مسیر آرام‌تر را ترجیح می‌دهند.",
            "در پایان، از آن‌ها بخواهید توضیح دهند آیا می‌توان گفت یکی از دو مسیر همیشه بهتر از دیگری است یا انتخاب به شرایط بستگی دارد.",
          ],
          questions: [
            "کدام مسیر کوتاه‌تر است و از کجا این را می‌فهمی؟",
            "کدام مسیر آرام‌تر یا دلپذیرتر است؟",
            "اگر عجله داشته باشی کدام مسیر را انتخاب می‌کنی؟ چرا؟",
            "اگر وقت کافی داشته باشی، آیا باز هم مسیر کوتاه‌تر را انتخاب می‌کنی؟",
            "چه ویژگی دیگری می‌تواند باعث شود یک مسیر را به مسیر دیگر ترجیح بدهی؟",
            "آیا می‌توان گفت یک مسیر همیشه بهترین مسیر است؟ چرا؟",
          ],
          teacherNote:
            "هدف فعالیت این نیست که دانش‌آموز به یک پاسخ واحد برسد. او باید متوجه شود که «بهتر بودن» به معیار مقایسه بستگی دارد. می‌توانید دو مسیر را طوری طراحی کنید که یکی از نظر فاصله بهتر باشد و دیگری از نظر آرامش، زیبایی یا شلوغی؛ سپس از دانش‌آموز بخواهید معیار خود را برای انتخاب مشخص کند.",
          materials: {
            required: true,
            type: "text",
            items: ["/text/05M/05M-09.txt"],
          },
          translations: {
  en: {
    purpose:
      "To help students understand that the shortest route is not always the only criterion for choosing a route. Factors such as peace and quiet, crowds, safety, and enjoyment can also matter when making a decision.",
    instruction:
      "Present students with two different routes to the same destination. One route is shorter, while the other is quieter and more pleasant. Ask students to compare the routes from several perspectives and explain which one they would choose in different circumstances.",
    steps: [
      "Introduce two routes to a specific destination.",
      "Ask students to examine the features of each route in terms of distance, time, crowds, peace and quiet, and anything else that matters to them.",
      "Ask them to identify the circumstances in which they would choose the shorter route.",
      "Ask them to identify the circumstances in which they would prefer the quieter route.",
      "Finally, ask them whether one route can always be considered better than the other, or whether the choice depends on the circumstances.",
    ],
    questions: [
      "Which route is shorter, and how do you know?",
      "Which route is quieter or more pleasant?",
      "If you were in a hurry, which route would you choose? Why?",
      "If you had enough time, would you still choose the shorter route?",
      "What other feature might make you prefer one route over the other?",
      "Can we say that one route is always the best? Why?",
    ],
    teacherNote:
      "The goal is not for students to arrive at a single answer. They should recognize that what counts as 'better' depends on the criteria used for comparison. You can design the two routes so that one is better in terms of distance and the other in terms of peace and quiet, beauty, or crowds. Then ask students to identify the criteria behind their choices.",
    materials: {
      required: true,
      type: "text",
      items: ["/text/05M/05M-09.txt"],
    },
  },
},
        },
      },

      {
        id: "05M-10",
        title: "یک بازی، تنها یا با دوست",
        description:
          "مقایسه‌ی تجربه‌ی یک بازی در دو حالت تنها و همراه با دوست.",
          translations: {
  en: {
    title: "One Game, Alone or with a Friend",
    description:
      "Comparing the experience of playing a game alone and playing it with a friend.",
  },
},
          activity: {
          purpose:
            "کمک به دانش‌آموز برای تشخیص اینکه حضور یا نبودن دیگران چگونه می‌تواند تجربه، تصمیم‌ها، احساس و شیوه‌ی بازی کردن را تغییر دهد.",
          instruction:
            "یک بازی آشنا را در دو حالت تصور یا تجربه کنید: یک بار به‌تنهایی و یک بار همراه با یک دوست. از دانش‌آموزان بخواهید این دو تجربه را با هم مقایسه کنند و بررسی کنند آیا تغییر فقط در تعداد بازیکنان است یا خودِ تجربه‌ی بازی نیز تغییر می‌کند.",
          steps: [
            "از دانش‌آموزان بخواهید یک بازی را انتخاب کنند که بتوان آن را هم به‌تنهایی و هم همراه با یک دوست انجام داد.",
            "از آن‌ها بخواهید تجربه‌ی بازی در حالت تنهایی را توصیف کنند.",
            "از آن‌ها بخواهید همان بازی را در حالت همراهی با یک دوست تصور یا تجربه کنند.",
            "از آن‌ها بخواهید دو تجربه را از نظر تصمیم‌گیری، همکاری، رقابت و احساس با هم مقایسه کنند.",
            "از آن‌ها بخواهید مشخص کنند کدام بخش تجربه به خود بازی مربوط است و کدام بخش به حضور دوست.",
            "در پایان، از آن‌ها بخواهید توضیح دهند حضور یک نفر دیگر چگونه می‌تواند چیزی را که قبلاً همان بازی می‌دانستند تغییر دهد.",
          ],
          questions: [
            "وقتی تنها بازی می‌کنی، چه چیزی بیشتر به چشم می‌آید؟",
            "وقتی با دوستت بازی می‌کنی، چه چیزی تغییر می‌کند؟",
            "آیا ممکن است یک بازی در تنهایی لذت‌بخش باشد و همان بازی با دوستت لذت‌بخش نباشد؟ چرا؟",
            "حضور یک نفر دیگر چگونه می‌تواند تصمیم تو را تغییر دهد؟",
            "کدام بخش تجربه‌ی بازی به خود بازی مربوط است و کدام بخش به حضور دوستت؟",
            "اگر فقط یکی از این دو حالت را می‌دیدی، چه چیزی درباره‌ی تجربه‌ی بازی نمی‌فهمیدی؟",
          ],
          teacherNote:
            "هدف فعالیت این نیست که بازی در تنهایی یا همراهی را بهتر بدانیم. دانش‌آموز باید ببیند که تغییر یک عامل کوچک، یعنی حضور فرد دیگر، می‌تواند تجربه‌ی یک فعالیت واحد را تغییر دهد. اگر دانش‌آموز بازی مناسبی پیدا نکرد، می‌توان از بازی‌هایی مانند ساختن لگو، نقاشی یا حل یک معما نیز استفاده کرد.",
          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To help students recognize how the presence or absence of other people can change an experience, decisions, feelings, and the way a game is played.",
    instruction:
      "Imagine or experience a familiar game in two different ways: once alone and once with a friend. Ask students to compare the two experiences and explore whether only the number of players changes, or whether the experience of playing the game itself changes as well.",
    steps: [
      "Ask students to choose a game that can be played both alone and with a friend.",
      "Ask them to describe what it is like to play the game alone.",
      "Ask them to imagine or experience playing the same game with a friend.",
      "Ask them to compare the two experiences in terms of decision-making, cooperation, competition, and feelings.",
      "Ask them to identify which parts of the experience are related to the game itself and which are related to having a friend present.",
      "Finally, ask them to explain how another person's presence can change something they previously thought of as the same game.",
    ],
    questions: [
      "When you play alone, what stands out the most?",
      "What changes when you play with your friend?",
      "Is it possible for a game to be enjoyable when played alone but not enjoyable when played with a friend? Why?",
      "How can another person's presence change your decisions?",
      "Which parts of the gaming experience are related to the game itself, and which are related to having your friend there?",
      "If you experienced only one of these two situations, what would you not understand about the experience of playing the game?",
    ],
    teacherNote:
      "The goal is not to decide whether playing alone or with someone else is better. Students should see how changing one small factor—the presence of another person—can change the experience of the same activity. If a student cannot think of a suitable game, you can suggest activities such as building with LEGO, drawing, or solving a puzzle.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
    ],
  },

  {
    id: "dialogue",
    code: "07M",
    title: "گفت‌وگو",
    description: "دیدن فکرها و تفاوت نگاه‌ها از راه گفت‌وگو.",
    translations: {
  en: {
    title: "Dialogue",
    description: "Exploring thoughts and different perspectives through dialogue.",
  },
},
    situations: [
      {
        id: "07M-01",
        title: "گفت‌وگوی من و آینده‌ام",
        description:
          "نوشتن گفت‌وگویی بین خودِ امروز و خودِ ده‌سال‌بعد، با محرک یک صندلی خالی.",
         translations: {
  en: {
    title: "A Conversation Between Me and My Future Self",
    description:
      "Writing a dialogue between your present self and your self ten years from now, prompted by an empty chair.",
  },
},
        activity: {
          purpose:
            "فکر کردن درباره‌ی تفاوت نگاه و تجربه در دو زمان متفاوت از زندگی از راه گفت‌وگو.",

          instruction:
            "یک صندلی خالی روبه‌روی خودت تصور کن. خودِ ده سال بعدت روی آن نشسته است و می‌توانی با او گفت‌وگو کنی. چه چیزهایی بین شما ردوبدل می‌شود؟",

          steps: [
            "خودِ امروز و خودِ ده سال بعدت را مشخص کن.",
            "گفت‌وگو را با یک سؤال یا جمله آغاز کن.",
            "بگذار هرکدام درباره‌ی چیزی که برای خودش مهم است حرف بزند.",
            "به تفاوت فکرها، نگرانی‌ها یا خواسته‌های این دو نفر توجه کن.",
            "گفت‌وگو را طوری تمام کن که لازم نباشد یکی از آن‌ها حتماً دیگری را قانع کرده باشد.",
          ],

          questions: [
            "اولین چیزی که از خودِ آینده‌ات می‌پرسی چیست؟",
            "خودِ آینده‌ات ممکن است چه چیزی از زندگی امروز تو را عجیب بداند؟",
            "تو چه چیزی را درباره‌ی زندگی آینده‌ات می‌خواهی بدانی؟",
            "آیا خودِ آینده‌ات ممکن است با یکی از فکرهای امروز تو موافق نباشد؟",
            "اگر خودِ آینده‌ات چیزی را نداند، چه سؤالی از تو می‌پرسد؟",
          ],

          teacherNote:
            "گفت‌وگو را به نصیحت‌کردن یا پیام انگیزشی تبدیل نکنید. مهم این است که دو نسخه از یک نفر بتوانند نگاه‌ها و تجربه‌های متفاوتی داشته باشند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Reflecting on differences in perspective and experience at two different points in life through dialogue.",
    instruction:
      "Imagine an empty chair in front of you. Your self ten years from now is sitting in it, and you can have a conversation with them. What would you say to each other?",
    steps: [
      "Identify your present self and your self ten years from now.",
      "Begin the conversation with a question or a statement.",
      "Let each version of you talk about something that matters to them.",
      "Pay attention to differences in their thoughts, concerns, or wishes.",
      "End the conversation without requiring either version of you to convince the other.",
    ],
    questions: [
      "What is the first thing you would ask your future self?",
      "What might your future self find strange about your life today?",
      "What would you like to know about your future life?",
      "Might your future self disagree with one of your current ideas?",
      "If your future self did not know something, what might they ask you?",
    ],
    teacherNote:
      "Do not turn the dialogue into a session of giving advice or delivering motivational messages. What matters is that two versions of the same person can have different perspectives and experiences.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "07M-02",
        title: "گفت‌وگوی دو وسیله",
        description: "نوشتن گفت‌وگوی دو وسیله که سال‌هاست کنار هم هستند.",
         translations: {
  en: {
    title: "A Conversation Between Two Objects",
    description:
      "Writing a dialogue between two objects that have been side by side for years.",
  },
},
        activity: {
          purpose:
            "تمرین دیدن یک موقعیت از نگاه موجودی دیگر و ساختن گفت‌وگویی که ویژگی‌های دو طرف در آن دیده شود.",

          instruction:
            "دو وسیله را انتخاب کن که مدت زیادی در یک خانه، مدرسه یا جای دیگر کنار هم بوده‌اند. تصور کن این دو وسیله می‌توانند با هم حرف بزنند. درباره‌ی چه چیزی گفت‌وگو می‌کنند؟",

          steps: [
            "دو وسیله را انتخاب کن.",
            "فکر کن هر وسیله چه چیزهایی را بیشتر از دیگری می‌بیند یا تجربه می‌کند.",
            "یک موضوع یا اتفاق مشترک برای گفت‌وگوی آن‌ها پیدا کن.",
            "گفت‌وگو را بنویس و اجازه بده هر وسیله نگاه خودش را داشته باشد.",
            "در پایان لازم نیست یکی از دو وسیله حق را به دیگری بدهد.",
          ],

          questions: [
            "دو وسیله‌ای که انتخاب کردی چه هستند؟",
            "هرکدام از آن‌ها چه چیزهایی را می‌بیند که دیگری کمتر می‌بیند؟",
            "موضوع گفت‌وگویشان چیست؟",
            "آیا درباره‌ی آن موضوع با هم موافق‌اند؟",
            "هرکدام چه دلیلی برای نظر خودش دارد؟",
            "کدام جمله بیشتر نشان می‌دهد که این گفت‌وگو بین دو وسیله است؟",
          ],

          teacherNote:
            "ویژگی‌های واقعی وسیله‌ها باید در گفت‌وگو اثر بگذارد. اگر دو وسیله فقط جای دو انسان قرار بگیرند، بخش مهمی از ظرفیت فعالیت از بین می‌رود.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practicing how to see a situation from another being's perspective and creating a dialogue that reflects the characteristics of both participants.",
    instruction:
      "Choose two objects that have been together for a long time in a home, school, or another place. Imagine that these two objects can talk to each other. What might they talk about?",
    steps: [
      "Choose two objects.",
      "Think about what each object sees or experiences more than the other.",
      "Find a shared topic or event for their conversation.",
      "Write the dialogue and let each object express its own perspective.",
      "At the end, neither object has to agree that the other is right.",
    ],
    questions: [
      "Which two objects did you choose?",
      "What does each object see that the other sees less often?",
      "What are they talking about?",
      "Do they agree with each other about the topic?",
      "What reasons does each one have for its opinion?",
      "Which sentence best shows that this is a conversation between two objects?",
    ],
    teacherNote:
      "The real characteristics of the objects should influence the dialogue. If the two objects simply take the place of two human characters, an important part of the activity's potential is lost.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "07M-03",
        title: "گفت‌وگوی قبل از تصمیم",
        description:
          "شنیدن دلایل دو نفر پیش از تصمیم‌گیری، بدون رسیدن به نتیجه‌ی نهایی.",
         translations: {
  en: {
    title: "A Conversation Before a Decision",
    description:
      "Hearing two people's reasons before a decision is made, without reaching a final conclusion.",
  },
},
        activity: {
          purpose:
            "تمرین دیدن یک مسئله از دو نگاه متفاوت و ساختن گفت‌وگویی که در آن هر طرف دلیل قابل‌دفاع خودش را دارد.",

          instruction:
            "دو نفر باید درباره‌ی یک موضوع مهم تصمیم بگیرند، اما هنوز تصمیم نهایی را نگرفته‌اند. گفت‌وگوی آن‌ها را بنویس؛ طوری که هر دو نفر بتوانند دلیل خودشان را توضیح دهند.",

          steps: [
            "موضوع تصمیم را انتخاب کن.",
            "برای هر دو نفر یک نظر متفاوت در نظر بگیر.",
            "دلیل هرکدام را مشخص کن.",
            "گفت‌وگو را بنویس و اجازه بده هر دو نفر به حرف دیگری واکنش نشان دهند.",
            "گفت‌وگو را پیش از رسیدن به یک نتیجه‌ی قطعی تمام کن.",
          ],

          questions: [
            "موضوع تصمیم چیست؟",
            "هر نفر چه انتخابی را ترجیح می‌دهد؟",
            "مهم‌ترین دلیل هرکدام چیست؟",
            "آیا یکی از آن‌ها چیزی را می‌بیند که دیگری به آن توجه نکرده است؟",
            "اگر هر دو نفر بخواهند طرف مقابل را قانع کنند، چه می‌گویند؟",
            "آیا لازم است در پایان یکی از آن‌ها برنده شود؟ چرا؟",
          ],

          teacherNote:
            "هر دو طرف باید دلیل قابل‌قبولی داشته باشند. فعالیت نباید از ابتدا یک طرف را درست و طرف دیگر را اشتباه نشان دهد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practicing how to look at an issue from two different perspectives and creating a dialogue in which each side has reasons they can defend.",
    instruction:
      "Two people need to make an important decision about something, but they have not made their final choice yet. Write their conversation so that both people can explain their reasons.",
    steps: [
      "Choose the topic of the decision.",
      "Give each person a different point of view.",
      "Identify the reasons behind each person's position.",
      "Write the dialogue and let both people respond to what the other says.",
      "End the conversation before a definite conclusion is reached.",
    ],
    questions: [
      "What is the decision about?",
      "Which option does each person prefer?",
      "What is the most important reason for each person's choice?",
      "Does one of them notice something the other has overlooked?",
      "If both people wanted to convince the other, what would they say?",
      "Does one of them have to win in the end? Why?",
    ],
    teacherNote:
      "Both sides should have reasonable arguments. The activity should not present one side as right and the other as wrong from the beginning.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "07M-04",
        title: "گفت‌وگوی دو همکلاسی بعد از باختن یک بازی",
        description:
          "نوشتن گفت‌وگوی دو هم‌تیمی که هرکدام چیز متفاوتی از باخت به‌یاد دارند.",
         translations: {
  en: {
    title: "Two Classmates Talking After Losing a Game",
    description:
      "Writing a dialogue between two teammates who remember different things about their loss.",
  },
},
        activity: {
          purpose: "فکر کردن درباره‌ی تفاوت نگاه دو نفر به یک اتفاق مشترک.",

          instruction:
            "دو همکلاسی بعد از باختن یک بازی کنار هم نشسته‌اند. هرکدام فکر می‌کند می‌داند چه چیزی باعث باخت شده است. گفت‌وگوی آن‌ها را بنویس.",

          steps: [
            "فکر کن هرکدام از دو همکلاسی باخت را چگونه دیده‌اند.",
            "برای هرکدام یک دلیل یا برداشت متفاوت در نظر بگیر.",
            "گفت‌وگو را از لحظه‌ای بعد از بازی شروع کن.",
            "بگذار هرکدام درباره‌ی چیزی که دیده یا احساس کرده حرف بزند.",
            "در پایان مشخص کن آیا نگاه آن‌ها به هم نزدیک شده است یا نه.",
          ],

          questions: [
            "هرکدام فکر می‌کنند چرا بازی را باخته‌اند؟",
            "آیا هر دو نفر دقیقاً یک اتفاق را به یاد می‌آورند؟",
            "یکی از آن‌ها چه چیزی را مهم‌تر از دیگری می‌بیند؟",
            "آیا یکی از آن‌ها ممکن است بخشی از ماجرا را ندیده باشد؟",
            "در پایان گفت‌وگو چه چیزی درباره‌ی باخت برای هر دو روشن‌تر شده است؟",
          ],

          teacherNote:
            "تمرکز فعالیت روی تفاوت برداشت دو نفر از یک اتفاق است، نه پیدا کردن مقصر یا برنده‌ی بحث.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Reflecting on how two people can have different perspectives on the same shared event.",
    instruction:
      "Two classmates are sitting together after losing a game. Each thinks they know what caused the loss. Write their conversation.",
    steps: [
      "Think about how each classmate sees the loss.",
      "Give each of them a different reason or interpretation.",
      "Begin the conversation just after the game.",
      "Let each person talk about something they saw or felt.",
      "At the end, consider whether their perspectives have become closer.",
    ],
    questions: [
      "Why does each person think they lost the game?",
      "Do both people remember exactly the same events?",
      "What does one person consider more important than the other?",
      "Might one of them have missed part of what happened?",
      "By the end of the conversation, what has become clearer to both of them about the loss?",
    ],
    teacherNote:
      "The focus is on the difference between two people's interpretations of the same event, not on finding someone to blame or deciding who won the argument.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "07M-05",
        title: "گفت‌وگوی دو احساس",
        description:
          "نوشتن گفت‌وگویی نمایشی بین دو احساس که در یک موقعیت با هم روبه‌رو شده‌اند.",
          translations: {
  en: {
    title: "A Conversation Between Two Emotions",
    description:
      "Writing a dramatic dialogue between two emotions that encounter each other in a particular situation.",
  },
},
        activity: {
          purpose:
            "فکر کردن درباره‌ی هم‌زمانی یا تعارض احساس‌ها و پیدا کردن زبان برای نشان دادن آن‌ها در قالب گفت‌وگو.",

          instruction:
            "دو احساس را انتخاب کن که در یک موقعیت می‌توانند با هم روبه‌رو شوند. تصور کن این دو احساس می‌توانند با یکدیگر حرف بزنند. گفت‌وگویشان را بنویس.",

          steps: [
            "دو احساس را انتخاب کن.",
            "یک موقعیت پیدا کن که هر دو احساس بتوانند در آن حضور داشته باشند.",
            "فکر کن هر احساس درباره‌ی آن موقعیت چه می‌گوید.",
            "گفت‌وگو را بنویس.",
            "بگذار هر احساس دلیل خودش را برای حضورش بیان کند.",
          ],

          questions: [
            "چه دو احساسی را انتخاب کردی؟",
            "در چه موقعیتی با هم روبه‌رو شده‌اند؟",
            "هر احساس چه چیزی می‌خواهد؟",
            "آیا این دو احساس با هم مخالف‌اند یا ممکن است هر دو لازم باشند؟",
            "کدام جمله بهتر از همه شخصیت یکی از احساس‌ها را نشان می‌دهد؟",
            "آیا در پایان یکی از احساس‌ها دیگری را شکست می‌دهد؟ چرا؟",
          ],

          teacherNote:
            "از جفت‌های کلیشه‌ای و پاسخ‌های از پیش‌قابل‌حدس فاصله بگیرید. موقعیت باید باعث شود رابطه‌ی میان دو احساس معنا پیدا کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Reflecting on emotions that occur together or come into conflict, and finding a way to express them through dialogue.",
    instruction:
      "Choose two emotions that could encounter each other in a particular situation. Imagine that these two emotions can talk to each other. Write their conversation.",
    steps: [
      "Choose two emotions.",
      "Find a situation in which both emotions could be present.",
      "Think about what each emotion would say about that situation.",
      "Write their conversation.",
      "Let each emotion explain why it is present.",
    ],
    questions: [
      "Which two emotions did you choose?",
      "In what situation have they encountered each other?",
      "What does each emotion want?",
      "Are these two emotions in conflict, or might both of them be necessary?",
      "Which sentence best expresses the personality of one of the emotions?",
      "Does one emotion defeat the other at the end? Why?",
    ],
    teacherNote:
      "Avoid clichéd pairs and predictable, ready-made answers. The situation should make the relationship between the two emotions meaningful.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "07M-06",
        title: "گفت‌وگوی من و یک کتاب",
        description: "تصور گفت‌وگو با کتابی که چیزی برای گفتن به خواننده دارد.",
         translations: {
  en: {
    title: "A Conversation Between Me and a Book",
    description:
      "Imagining a conversation with a book that has something to say to its reader.",
  },
},
        activity: {
          purpose:
            "تمرین گفت‌وگوی دوطرفه و تصور یک نگاه مستقل برای یک کتاب یا داستان.",

          instruction:
            "تصور کن یکی از کتاب‌هایی که خوانده‌ای می‌تواند با تو حرف بزند. با آن گفت‌وگو کن؛ اما این بار کتاب هم از تو سؤال می‌پرسد.",

          steps: [
            "یک کتاب یا داستان را انتخاب کن.",
            "تصور کن کتاب می‌تواند درباره‌ی خودش و خواننده‌اش حرف بزند.",
            "گفت‌وگو را با یک سؤال یا جمله شروع کن.",
            "بگذار کتاب هم از تو سؤال بپرسد.",
            "در پایان، یکی از چیزهایی را مشخص کن که در نگاهت به کتاب یا خودت تغییر کرده است.",
          ],

          questions: [
            "اولین چیزی که از کتاب می‌پرسی چیست؟",
            "کتاب ممکن است چه سؤالی از تو بپرسد؟",
            "اگر کتاب درباره‌ی یکی از شخصیت‌هایش نظر متفاوتی داشته باشد، چه می‌گوید؟",
            "کتاب درباره‌ی خواننده‌اش چه چیزی می‌تواند بداند؟",
            "آیا ممکن است کتاب از چیزی که تو درباره‌اش فکر می‌کنی خوشش نیاید؟",
            "این گفت‌وگو چه چیز تازه‌ای درباره‌ی کتاب یا خودت نشان می‌دهد؟",
          ],

          teacherNote:
            "کتاب را به یک پاسخ‌دهنده‌ی منفعل تبدیل نکنید. بخشی از جذابیت فعالیت در این است که کتاب هم شخصیت و نگاه خودش را داشته باشد و از دانش‌آموز سؤال کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practicing two-way dialogue and imagining an independent perspective for a book or story.",
    instruction:
      "Imagine that one of the books you have read can talk to you. Have a conversation with it—but this time, the book asks you questions too.",
    steps: [
      "Choose a book or story.",
      "Imagine that the book can talk about itself and its reader.",
      "Begin the conversation with a question or a statement.",
      "Let the book ask you questions too.",
      "At the end, identify one thing that has changed in the way you see the book or yourself.",
    ],
    questions: [
      "What is the first thing you would ask the book?",
      "What question might the book ask you?",
      "If the book had a different opinion about one of its characters, what might it say?",
      "What could the book know about its reader?",
      "Is there something you think the book might dislike about what you think of it?",
      "What new thing does this conversation reveal about the book or yourself?",
    ],
    teacherNote:
      "Do not turn the book into a passive respondent. Part of what makes this activity interesting is that the book should have its own personality and perspective, and should ask the student questions as well.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "07M-07",
        title: "گفت‌وگویی که فقط با سؤال پیش می‌رود",
        description:
          "ساختن گفت‌وگویی که هر جمله‌ی آن سؤال است و هر سؤال اطلاعات یا معنای تازه‌ای به گفت‌وگو اضافه می‌کند.",
          translations: {
  en: {
    title: "A Conversation Made Entirely of Questions",
    description:
      "Creating a conversation in which every sentence is a question, and each question adds new information or meaning.",
  },
},
        activity: {
          purpose:
            "فهمیدن اینکه سؤال می‌تواند علاوه بر گرفتن اطلاعات، گفت‌وگو را تغییر دهد، ابهام ایجاد کند یا مسیر فکر طرف مقابل را عوض کند.",

          instruction:
            "یک موقعیت را انتخاب کن که در آن دو نفر درباره‌ی چیزی مهم یا عجیب با هم حرف می‌زنند. گفت‌وگو را طوری بنویس که همه‌ی جمله‌ها سؤال باشند؛ اما هر سؤال باید کاری در گفت‌وگو انجام دهد.",

          steps: [
            "یک موقعیت یا اتفاق مشخص انتخاب کن.",
            "دو نفر را در آن موقعیت قرار بده.",
            "گفت‌وگو را فقط با سؤال‌ها پیش ببر.",
            "هر سؤال باید اطلاعات تازه‌ای بدهد، ابهامی ایجاد کند، چیزی را به چالش بکشد یا سؤال بعدی را ضروری کند.",
            "در پایان، خواننده باید چیزی را درباره‌ی موقعیت بفهمد که در ابتدای گفت‌وگو نمی‌دانست.",
          ],

          questions: [
            "در ابتدای گفت‌وگو چه چیزی را نمی‌دانیم؟",
            "کدام سؤال می‌تواند اولین اطلاعات مهم را آشکار کند؟",
            "کدام سؤال ممکن است طرف مقابل را غافلگیر کند؟",
            "آیا سؤالی هست که پاسخ آن باعث شود سؤال بعدی شکل بگیرد؟",
            "کدام سؤال می‌تواند یک برداشت قبلی را تغییر دهد؟",
            "در پایان چه چیزی را فهمیده‌ایم که در آغاز نمی‌دانستیم؟",
          ],

          teacherNote:
            "هدف، تولید تعداد زیادی سؤال نیست. سؤال‌ها باید در ساختن و پیش‌بردن گفت‌وگو نقش داشته باشند. تفاوت این فعالیت با سرزمین 09M در این است که سؤال در اینجا ابزار ساختن یک گفت‌وگو و پیش‌بردن موقعیت است.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Understanding that questions can do more than gather information: they can change a conversation, create uncertainty, or shift the other person's line of thinking.",
    instruction:
      "Choose a situation in which two people are talking about something important or unusual. Write their conversation so that every sentence is a question—but each question must serve a purpose in the conversation.",
    steps: [
      "Choose a specific situation or event.",
      "Place two people in that situation.",
      "Move the conversation forward using questions only.",
      "Each question should provide new information, create uncertainty, challenge something, or make the next question necessary.",
      "By the end, the reader should understand something about the situation that they did not know at the beginning.",
    ],
    questions: [
      "What is still unknown at the beginning of the conversation?",
      "Which question could reveal the first important piece of information?",
      "Which question might surprise the other person?",
      "Is there a question whose answer could lead to the next question?",
      "Which question could change an earlier interpretation?",
      "What do we understand at the end that we did not know at the beginning?",
    ],
    teacherNote:
      "The goal is not to produce a large number of questions. Each question should play a role in creating and advancing the conversation. The difference between this activity and Land 09M is that here, questions are used to build a dialogue and move the situation forward.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "07M-08",
        title: "گفت‌وگو با کسی که فقط یک کلمه می‌گوید",
        description:
          "نوشتن گفت‌وگویی معنادار با محدودیت یک‌کلمه‌ای برای یکی از طرفین.",
          translations: {
  en: {
    title: "A Conversation with Someone Who Says Only One Word",
    description:
      "Writing a meaningful conversation with the restriction that one participant can reply using only one word.",
  },
},
        activity: {
          purpose:
            "تمرین ساختن معنا از پاسخ‌های بسیار محدود و توجه به نقش سؤال، موقعیت و نشانه‌ها در گفت‌وگو.",

          instruction:
            "با کسی روبه‌رو شده‌ای که به هر سؤال یا جمله‌ی تو فقط با یک کلمه جواب می‌دهد. با این حال، باید گفت‌وگو را ادامه بدهی. گفت‌وگو را بنویس.",

          steps: [
            "موقعیتی را انتخاب کن که در آن با این فرد روبه‌رو شده‌ای.",
            "شخصیت یا هدف او را برای خودت مشخص کن.",
            "گفت‌وگو را آغاز کن.",
            "او را مجبور کن فقط با یک کلمه پاسخ دهد.",
            "با سؤال‌ها و واکنش‌های خودت تلاش کن گفت‌وگو همچنان معنا داشته باشد.",
          ],

          questions: [
            "چرا این شخص فقط یک کلمه جواب می‌دهد؟",
            "اولین کلمه‌ای که می‌گوید چیست؟",
            "از یک پاسخ کوتاه چه چیزهایی می‌توانی حدس بزنی؟",
            "چطور می‌توانی بدون گرفتن یک جواب طولانی، اطلاعات بیشتری به دست بیاوری؟",
            "آیا ممکن است یک کلمه بیش از یک معنی داشته باشد؟",
            "در پایان، درباره‌ی این شخص چه چیزی فهمیده‌ای؟",
          ],

          teacherNote:
            "کوتاهی پاسخ‌ها باید واقعاً روی شکل گفت‌وگو اثر بگذارد. دانش‌آموز می‌تواند از موقعیت، سؤال‌ها و واکنش‌های طرف مقابل برای ساختن معنای بیشتر استفاده کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practicing how to create meaning from very limited responses and noticing the role of questions, context, and clues in a conversation.",
    instruction:
      "You meet someone who responds to every question or statement you make with just one word. Even so, you have to keep the conversation going. Write the conversation.",
    steps: [
      "Choose a situation in which you meet this person.",
      "Decide on this person's character or purpose.",
      "Begin the conversation.",
      "Make sure this person can respond using only one word.",
      "Use your questions and reactions to keep the conversation meaningful.",
    ],
    questions: [
      "Why does this person answer using only one word?",
      "What is the first word they say?",
      "What can you infer from a short response?",
      "How can you find out more without getting a long answer?",
      "Can one word have more than one meaning?",
      "What have you learned about this person by the end?",
    ],
    teacherNote:
      "The short responses should genuinely affect the shape of the conversation. Students can use the situation, their questions, and the other person's reactions to create additional meaning.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "07M-09",
        title: "گفت‌وگوی پشت در",
        description:
          "نوشتن گفت‌وگوی دو نفر که پشت یک در بسته‌اند، طوری که فقط از حرف‌ها اتفاق فهمیده شود.",
          translations: {
  en: {
    title: "The Conversation Behind the Door",
    description:
      "Writing a conversation between two people behind a closed door, so that the reader discovers what is happening only through their words.",
  },
},
        activity: {
          purpose:
            "تمرین انتقال اطلاعات ناقص و ساختن موقعیت از راه گفت‌وگو، بدون توضیح مستقیم همه‌چیز برای خواننده.",

          instruction:
            "دو نفر پشت یک در بسته هستند و ما نمی‌توانیم آنچه را داخل اتاق اتفاق می‌افتد ببینیم. فقط می‌توانیم صدای آن‌ها را بشنویم. گفت‌وگویشان را بنویس؛ طوری که خواننده بتواند از حرف‌هایشان حدس بزند چه اتفاقی افتاده است.",

          steps: [
            "یک اتفاق یا راز برای داخل اتاق در نظر بگیر.",
            "مشخص کن دو نفر داخل اتاق درباره‌ی چه چیزی حرف می‌زنند.",
            "گفت‌وگو را بدون توضیح مستقیم صحنه بنویس.",
            "از جمله‌ها، واکنش‌ها و سؤال‌های آن‌ها نشانه‌هایی درباره‌ی اتفاق بده.",
            "همه‌چیز را برای خواننده توضیح نده و اجازه بده بخشی از ماجرا را خودش کشف کند.",
          ],

          questions: [
            "چه اتفاقی داخل اتاق افتاده است؟",
            "خواننده در ابتدا چه چیزهایی را نمی‌داند؟",
            "کدام جمله می‌تواند اولین نشانه را به خواننده بدهد؟",
            "آیا یکی از شخصیت‌ها چیزی را از دیگری پنهان می‌کند؟",
            "کدام بخش از ماجرا باید فقط از حرف‌ها فهمیده شود؟",
            "در پایان چه چیزی برای خواننده روشن می‌شود و چه چیزی همچنان می‌تواند مبهم بماند؟",
          ],

          teacherNote:
            "قدرت فعالیت در اطلاعات ناقص است. از دانش‌آموز نخواهید همه‌ی اتفاق را پیش از گفت‌وگو توضیح دهد؛ خود گفت‌وگو باید حامل اطلاعات باشد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practicing how to convey incomplete information and build a situation through dialogue, without directly explaining everything to the reader.",
    instruction:
      "Two people are behind a closed door, and we cannot see what is happening inside the room. We can only hear their voices. Write their conversation so that the reader can infer what has happened from their words.",
    steps: [
      "Imagine an event or a secret inside the room.",
      "Decide what the two people inside the room are talking about.",
      "Write the conversation without directly describing the scene.",
      "Use their sentences, reactions, and questions to give clues about what is happening.",
      "Do not explain everything to the reader. Let them discover part of the story for themselves.",
    ],
    questions: [
      "What has happened inside the room?",
      "What does the reader not know at the beginning?",
      "Which sentence could give the reader the first clue?",
      "Is one of the characters hiding something from the other?",
      "Which parts of the story should be understood only through what the characters say?",
      "What becomes clear to the reader at the end, and what might remain unclear?",
    ],
    teacherNote:
      "The strength of this activity lies in incomplete information. Do not ask students to explain everything that happened before writing the dialogue; the dialogue itself should carry the information.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "07M-10",
        title: "گفت‌وگوی دو درخت با دو نگاه متفاوت",
        description:
          "نوشتن گفت‌وگوی دو درخت که درباره‌ی یک تغییر مهم در محیط خود نظرهای متفاوتی دارند.",
           translations: {
  en: {
    title: "A Conversation Between Two Trees with Different Perspectives",
    description:
      "Writing a conversation between two trees that have different opinions about an important change in their surroundings.",
  },
},
        activity: {
          purpose:
            "تمرین ساختن دو دیدگاه متفاوت بدون تقسیم شخصیت‌ها به «درست» و «غلط» و نشان دادن تفاوت نگاه از راه گفت‌وگو.",

          instruction:
            "دو درخت را تصور کن که سال‌هاست در یک جا زندگی می‌کنند. قرار است تغییر مهمی در اطرافشان اتفاق بیفتد؛ مثلاً ساختن یک زمین بازی، قطع کردن بخشی از باغ یا تبدیل شدن آنجا به یک پارک. این دو درخت درباره‌ی این تغییر نظر متفاوتی دارند. گفت‌وگویشان را بنویس.",

          steps: [
            "یک تغییر مهم در محیط اطراف دو درخت انتخاب کن.",
            "برای هر درخت یک دیدگاه متفاوت در نظر بگیر.",
            "برای هر دو دیدگاه دلیل پیدا کن.",
            "گفت‌وگو را طوری بنویس که هر درخت بتواند نظر دیگری را بفهمد، حتی اگر با آن موافق نباشد.",
            "در پایان لازم نیست یکی از دو درخت دیگری را قانع کند.",
          ],

          questions: [
            "چه تغییری قرار است در محیط دو درخت اتفاق بیفتد؟",
            "هر درخت چه نظری درباره‌ی این تغییر دارد؟",
            "چرا هرکدام چنین نظری دارد؟",
            "چه چیزی برای یکی مهم است که ممکن است برای دیگری مهم نباشد؟",
            "آیا یکی از آن‌ها می‌تواند بخشی از حرف دیگری را بپذیرد؟",
            "اگر تصمیم نهایی با خود درخت‌ها بود، چه چیزی ممکن بود پیشنهاد کنند؟",
          ],

          teacherNote:
            "درخت‌ها را به شخصیت‌های کلیشه‌ای «پیر دانا» و «نهال امیدوار» تبدیل نکنید. اختلاف آن‌ها باید از موقعیت و تجربه یا نیاز متفاوتشان به وجود بیاید و هر دو دیدگاه باید قابل‌فهم باشد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practicing how to create two different perspectives without dividing the characters into 'right' and 'wrong', and showing their differences through dialogue.",
    instruction:
      "Imagine two trees that have lived in the same place for years. An important change is about to happen around them—for example, a playground will be built, part of the garden will be cut down, or the area will be turned into a park. The two trees have different opinions about this change. Write their conversation.",
    steps: [
      "Choose an important change that is about to happen in the trees' surroundings.",
      "Give each tree a different point of view.",
      "Find reasons to support both perspectives.",
      "Write the conversation so that each tree can understand the other's point of view, even if it does not agree with it.",
      "At the end, neither tree has to convince the other.",
    ],
    questions: [
      "What change is about to happen in the trees' surroundings?",
      "What does each tree think about this change?",
      "Why does each tree hold that opinion?",
      "What matters to one tree that might not matter to the other?",
      "Could either tree accept part of what the other says?",
      "If the trees themselves could make the final decision, what might they suggest?",
    ],
    teacherNote:
      "Do not turn the trees into clichéd characters such as 'the wise old tree' and 'the hopeful young sapling'. Their disagreement should arise from their different situations, experiences, or needs, and both perspectives should be understandable.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
    ],
  },
  {
    id: "choice",
    code: "10M",
    title: "انتخاب",
    description: "انتخاب کردن و فکر کردن درباره‌ی دلیل انتخاب.",
    translations: {
  en: {
    title: "Choice",
    description: "Making choices and thinking about the reasons behind them.",
  },
},
    situations: [
      {
        id: "10M-01",
        title: "یک ابرقدرت: پرواز یا نامرئی‌شدن",
        description: "انتخاب یکی از دو ابرقدرت و توضیح دلیل انتخاب.",
         translations: {
  en: {
    title: "A Superpower: Flying or Becoming Invisible",
    description: "Choosing one of two superpowers and explaining the reason for the choice.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی انتخاب آگاهانه، تشخیص معیارهای شخصی برای تصمیم‌گیری و دفاع از یک انتخاب با دلیل.",

          instruction:
            "فرض کن برای یک سال فقط می‌توانی یکی از این دو ابرقدرت را داشته باشی: پرواز یا نامرئی‌شدن. کدام را انتخاب می‌کنی؟",

          steps: [
            "یکی از دو ابرقدرت را انتخاب کن.",
            "فکر کن با این قدرت چه کارهایی می‌توانی انجام بدهی.",
            "توضیح بده چرا این قدرت را به دیگری ترجیح می‌دهی.",
            "به یک دردسر یا محدودیت این قدرت فکر کن.",
            "اگر بعد از مدتی بفهمی انتخابت برایت مناسب نبوده، فکر کن چه چیزی ممکن است باعث شود آن را نگه داری یا عوض کنی.",
          ],

          questions: [
            "کدام ابرقدرت را انتخاب کردی؟",
            "مهم‌ترین دلیل انتخابت چیست؟",
            "با این قدرت چه کاری را بیشتر از همه دوست داری انجام بدهی؟",
            "چه چیزی ممکن است استفاده از این قدرت را سخت یا دردسرساز کند؟",
            "اگر دوستت قدرت دیگری را انتخاب کند، چه دلیلی ممکن است داشته باشد؟",
            "اگر بعداً بفهمی انتخاب دیگری برایت مناسب‌تر بوده، آیا حاضری انتخابت را تغییر بدهی؟ چرا؟",
          ],

          teacherNote:
            "هدف فعالیت رسیدن به یک پاسخ درست نیست. روی تفاوت معیارهای دانش‌آموزان تمرکز کنید. ممکن است دو دانش‌آموز یک قدرت را انتخاب کنند اما دلایل کاملاً متفاوتی داشته باشند. همچنین دانش‌آموز را تشویق کنید میان «چیزی که دوست دارم» و «دلیلی که برای انتخابم دارم» تفاوت بگذارد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To strengthen the ability to make informed choices, identify personal decision-making criteria, and justify a choice with reasons.",

    instruction:
      "Imagine that you can have only one of these two superpowers for a year: flying or becoming invisible. Which one would you choose?",

    steps: [
      "Choose one of the two superpowers.",
      "Think about what you could do with this power.",
      "Explain why you prefer this power over the other one.",
      "Think of one difficulty or limitation this power might have.",
      "If you later realize that your choice was not right for you, think about what might make you keep it or change it.",
    ],

    questions: [
      "Which superpower did you choose?",
      "What is the most important reason for your choice?",
      "What would you most like to do with this power?",
      "What might make using this power difficult or troublesome?",
      "If your friend chose the other power, what might their reason be?",
      "If you later realized that the other choice suited you better, would you be willing to change your choice? Why?",
    ],

    teacherNote:
      "The goal is not to arrive at a correct answer. Focus on the differences in students' decision-making criteria. Two students may choose the same power for completely different reasons. Also, encourage students to distinguish between 'something I like' and 'a reason I have for choosing it.'",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "10M-02",
        title: "بهترین و دوست‌داشتنی‌ترین",
        description:
          "انتخاب بهترین و دوست‌داشتنی‌ترین اثر از میان چیزهایی که قبلاً ساخته‌ای.",
          translations: {
  en: {
    title: "The Best and the Most Beloved",
    description:
      "Choosing the best and the most beloved work from among things you have created before.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی ارزش‌گذاری و فکر کردن درباره‌ی معیارهایی که باعث می‌شوند چیزی را بهترین یا دوست‌داشتنی‌ترین بدانیم.",

          instruction:
            "به نقاشی‌ها، کاردستی‌ها یا چیزهایی که قبلاً ساخته‌ای فکر کن. کدام‌یک را بهترین می‌دانی و کدام‌یک را بیشتر از همه دوست داری؟ چرا؟",

          steps: [
            "چند نقاشی، کاردستی یا چیز دیگری را که قبلاً ساخته‌ای به یاد بیاور.",
            "یکی را به‌عنوان بهترین انتخاب کن.",
            "یکی را به‌عنوان دوست‌داشتنی‌ترین انتخاب کن.",
            "توضیح بده چرا این دو را انتخاب کردی.",
          ],

          questions: [
            "کدام کارت را بهترین می‌دانی؟",
            "چرا آن را بهترین می‌دانی؟",
            "کدام کارت را بیشتر از همه دوست داری؟",
            "چرا این یکی را بیشتر از بقیه دوست داری؟",
            "آیا چیزی که بهترین می‌دانی همان چیزی است که بیشتر از همه دوست داری؟ چرا؟",
            "اگر کسی انتخاب دیگری داشته باشد، چه دلیلی ممکن است برای انتخابش داشته باشد؟",
          ],

          teacherNote:
            "هدف پیدا کردن تعریف درست یا مشترکی از «بهترین» و «دوست‌داشتنی‌ترین» نیست. هر دانش‌آموز می‌تواند معیار خودش را داشته باشد؛ مثل زیبایی، خلاقیت، تلاش، خاطره یا چیزی که برایش اهمیت دارد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To strengthen the ability to evaluate and reflect on the criteria that lead us to consider something the best or the most beloved.",

    instruction:
      "Think about drawings, crafts, or other things you have made before. Which one do you consider the best, and which one do you like the most? Why?",

    steps: [
      "Recall a few drawings, crafts, or other things you have made before.",
      "Choose one as your best work.",
      "Choose one as the work you like the most.",
      "Explain why you chose these two.",
    ],

    questions: [
      "Which of your works do you consider the best?",
      "Why do you consider it the best?",
      "Which of your works do you like the most?",
      "Why do you like this one more than the others?",
      "Is the work you consider the best also the one you like the most? Why?",
      "If someone else made a different choice, what might their reason be?",
    ],

    teacherNote:
      "The goal is not to find a correct or shared definition of 'the best' and 'the most beloved.' Each student may have their own criteria, such as beauty, creativity, effort, a memory, or something personally important to them.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "10M-03",
        title: "اول کدام کار؟",
        description: "انتخاب اینکه چند کار روزمره را با چه ترتیبی انجام دهیم.",
         translations: {
  en: {
    title: "Which Task First?",
    description:
      "Choosing the order in which to do several everyday tasks.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی اولویت‌بندی و فکر کردن درباره‌ی معیاری که باعث می‌شود یک کار را زودتر از کارهای دیگر انجام دهیم.",

          instruction:
            "وقتی از مدرسه به خانه می‌رسی، چند کار داری که می‌خواهی یا باید انجام بدهی؛ مثلاً تکلیف، بازی و یک کار در خانه. نمی‌توانی همه را با هم انجام بدهی. کدام کار را اول انجام می‌دهی؟ چرا؟",

          steps: [
            "چند کاری را که بعد از مدرسه می‌خواهی یا باید انجام بدهی، خودت انتخاب کن.",
            "تصمیم بگیر کدام کار را اول انجام می‌دهی.",
            "دلیل انتخابت را توضیح بده.",
            "بگو چه چیزی باعث شد این کار را به کارهای دیگر ترجیح بدهی.",
          ],

          questions: [
            "کدام کار را اول انتخاب کردی؟",
            "مهم‌ترین دلیل تو برای این انتخاب چیست؟",
            "آیا این کار ضروری‌تر بود، بیشتر دوستش داشتی یا دلیل دیگری داشتی؟",
            "اگر اول کار دیگری را انجام می‌دادی، چه چیزی تغییر می‌کرد؟",
            "دوستت ممکن است چرا ترتیب دیگری انتخاب کند؟",
            "اگر فقط می‌توانستی یکی از کارها را انجام بدهی، کدام را انتخاب می‌کردی؟ چرا؟",
          ],

          teacherNote:
            "کارهای گفته‌شده در موقعیت فقط مثال‌اند. دانش‌آموز می‌تواند کارهای واقعی خودش را انتخاب کند. هدف، پیدا کردن یک ترتیب درست برای همه نیست؛ مهم این است که دانش‌آموز بتواند معیار اولویت خود را توضیح دهد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To strengthen the ability to set priorities and reflect on the criteria that lead us to do one task before another.",

    instruction:
      "When you get home from school, you have several things you want or need to do, such as homework, playing, and helping with a household task. You cannot do them all at once. Which one would you do first? Why?",

    steps: [
      "Choose a few things you want or need to do after school.",
      "Decide which task you would do first.",
      "Explain the reason for your choice.",
      "Say what made you prioritize this task over the others.",
    ],

    questions: [
      "Which task did you choose to do first?",
      "What is the most important reason for your choice?",
      "Was this task more necessary, something you liked more, or was there another reason?",
      "What would change if you did another task first?",
      "Why might your friend choose a different order?",
      "If you could do only one of these tasks, which would you choose? Why?",
    ],

    teacherNote:
      "The tasks mentioned in the scenario are only examples. Students may choose tasks from their own lives. The goal is not to find one correct order for everyone; what matters is that students can explain their own criteria for setting priorities.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "10M-04",
        title: "قانونی که دلت می‌خواهد عوض شود",
        description:
          "انتخاب یک قانون مدرسه، پیشنهاد تغییر آن و فکر کردن درباره‌ی نتیجه‌ی این تغییر.",
          translations: {
  en: {
    title: "A Rule You Wish You Could Change",
    description:
      "Choosing a school rule, suggesting a change, and thinking about the possible consequences.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی تصمیم‌گیری، تشخیص مسئله و دفاع از یک پیشنهاد با دلیل و توجه به پیامدهای تغییر.",

          instruction:
            "یک قانون مدرسه را انتخاب کن که فکر می‌کنی می‌توانست جور دیگری باشد. اگر اختیار تغییر آن را داشتی، چه تغییری می‌دادی؟ چرا فکر می‌کنی این تغییر بهتر است؟ بعد از تغییر این قانون، چه چیزی ممکن است بهتر شود و چه مشکل تازه‌ای ممکن است به وجود بیاید؟",

          steps: [
            "یک قانون مدرسه را انتخاب کن که فکر می‌کنی می‌تواند تغییر کند.",
            "توضیح بده چه تغییری در آن می‌دهی.",
            "دلیل خودت را برای این تغییر بنویس.",
            "فکر کن بعد از تغییر این قانون چه چیزی ممکن است بهتر شود.",
            "به یک مشکل تازه که ممکن است به وجود بیاید هم فکر کن.",
          ],

          questions: [
            "کدام قانون را انتخاب کردی؟",
            "چرا فکر می‌کنی این قانون می‌تواند جور دیگری باشد؟",
            "اگر اختیار تغییر آن را داشتی، دقیقاً چه تغییری می‌دادی؟",
            "چرا فکر می‌کنی تغییر پیشنهادی تو بهتر است؟",
            "بعد از این تغییر چه چیزی ممکن است بهتر شود؟",
            "چه مشکل تازه‌ای ممکن است به وجود بیاید؟",
          ],

          teacherNote:
            "هدف فعالیت فقط شکایت از قوانین مدرسه نیست. دانش‌آموز باید یک وضعیت موجود را ببیند، تغییر پیشنهادی بدهد، دلیل بیاورد و پیامدهای احتمالی آن را در نظر بگیرد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To strengthen decision-making, problem identification, and the ability to justify a proposal while considering the consequences of change.",

    instruction:
      "Choose a school rule that you think could be different. If you had the power to change it, what would you change? Why do you think this change would be better? After the rule changes, what might improve, and what new problem might arise?",

    steps: [
      "Choose a school rule that you think could be changed.",
      "Explain what change you would make to it.",
      "Write down your reason for suggesting this change.",
      "Think about what might improve after the rule changes.",
      "Also think of one new problem that might arise.",
    ],

    questions: [
      "Which rule did you choose?",
      "Why do you think this rule could be different?",
      "If you had the power to change it, exactly what would you change?",
      "Why do you think your proposed change would be better?",
      "What might improve after this change?",
      "What new problem might arise?",
    ],

    teacherNote:
      "The goal is not simply to complain about school rules. Students should examine an existing situation, suggest a change, give reasons, and consider its possible consequences.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "10M-05",
        title: "یک روز بدون برق یا یک روز بدون اینترنت",
        description:
          "انتخاب میان دو محدودیت آشنا و فکر کردن درباره‌ی تأثیر هرکدام بر زندگی روزمره.",
          translations: {
  en: {
    title: "A Day Without Electricity or a Day Without the Internet",
    description:
      "Choosing between two familiar limitations and thinking about how each would affect everyday life.",
  },
},
        activity: {
          purpose:
            "تمرین انتخاب در شرایط محدودیت و فکر کردن درباره‌ی چیزهایی که در یک تصمیم برای ما اهمیت دارند.",

          instruction:
            "فرض کن فردا فقط یکی از این دو امکان را نداری: برق یا اینترنت. کدام را ترجیح می‌دهی که نداشته باشی؟ چرا؟ در طول روز چه چیزهایی برایت تغییر می‌کند؟ انتخابت به چه چیزی بستگی دارد؟",

          steps: [
            "تصمیم بگیر نبودن برق برایت قابل‌تحمل‌تر است یا نبودن اینترنت.",
            "دلیل انتخابت را توضیح بده.",
            "به چیزهایی فکر کن که در طول روز برایت تغییر می‌کنند.",
            "بگو کدام تغییر برایت مهم‌تر است.",
          ],

          questions: [
            "کدام را انتخاب کردی که یک روز نداشته باشی؟",
            "مهم‌ترین دلیل انتخابت چیست؟",
            "در طول روز چه کاری برایت سخت‌تر می‌شود؟",
            "چه کاری را بدون آن امکان می‌توانی به شکل دیگری انجام بدهی؟",
            "اگر دوستت انتخاب متفاوتی داشته باشد، چه دلیلی ممکن است داشته باشد؟",
            "انتخابت بیشتر به چه چیزی بستگی داشت: راحتی، نیاز، سرگرمی، ارتباط یا چیز دیگری؟",
          ],

          teacherNote:
            "هدف پیدا کردن پاسخ درست نیست. دو انتخاب باید برای دانش‌آموز واقعاً هزینه داشته باشند و او بتواند معیار خود را برای ترجیح یکی توضیح دهد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To practice making choices under constraints and reflecting on what matters to us when making a decision.",

    instruction:
      "Imagine that tomorrow you will have to go without one of these two things: electricity or the internet. Which would you rather go without? Why? What would change for you during the day? What would your choice depend on?",

    steps: [
      "Decide whether going without electricity or going without the internet would be easier for you.",
      "Explain the reason for your choice.",
      "Think about the things that would change for you during the day.",
      "Say which of these changes would matter most to you.",
    ],

    questions: [
      "Which one did you choose to go without for a day?",
      "What is the most important reason for your choice?",
      "What would become more difficult for you during the day?",
      "What could you do in a different way without that resource?",
      "If your friend made a different choice, what might their reason be?",
      "What did your choice depend on most: convenience, necessity, entertainment, communication, or something else?",
    ],

    teacherNote:
      "The goal is not to find a correct answer. Both options should involve a real cost for the student, and the student should be able to explain the criteria behind preferring one over the other.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "10M-06",
        title: "دوستی که تعریف می‌کند یا دوستی که روراست است؟",
        description:
          "انتخاب میان دو نوع رفتار دوستانه و فکر کردن درباره‌ی ویژگی‌هایی که در یک دوستی برای ما اهمیت دارند.",
          translations: {
  en: {
    title: "A Friend Who Praises You or a Friend Who Is Honest?",
    description:
      "Choosing between two kinds of friendly behavior and reflecting on the qualities that matter to us in a friendship.",
  },
},
        activity: {
          purpose:
            "فکر کردن درباره‌ی ویژگی‌هایی که در یک رابطه برای خودمان ارزشمند می‌دانیم و تفاوت میان چیزی که خوشایند است و چیزی که ممکن است به ما کمک کند.",

          instruction:
            "فرض کن دو دوست داری. دوست اول تقریباً همیشه از تو تعریف می‌کند و وقتی کاری انجام می‌دهی، می‌گوید خیلی خوب بوده است. دوست دوم تو را دوست دارد، اما اگر فکر کند کاری را می‌توانی بهتر انجام بدهی، نظر واقعی‌اش را می‌گوید؛ حتی اگر شنیدن آن همیشه خوشایند نباشد. حالا قرار است یک کار مهم انجام بدهی و فقط می‌توانی یکی از این دو دوست را کنار خودت داشته باشی. کدام را انتخاب می‌کنی؟ چرا؟",

          steps: [
            "یکی از دو دوست را انتخاب کن.",
            "توضیح بده چه چیزی در رفتار او برایت مهم‌تر است.",
            "فکر کن چرا این ویژگی را به ویژگی دوست دیگر ترجیح می‌دهی.",
            "دلیل انتخابت را در قالب یک متن کوتاه توضیح بده.",
          ],

          questions: [
            "کدام دوست را انتخاب کردی؟",
            "چه چیزی در رفتار او برایت مهم‌تر است؟",
            "چرا این ویژگی را به ویژگی دوست دیگر ترجیح دادی؟",
            "آیا ممکن است شنیدن نظر دوست دوم گاهی ناراحت‌کننده باشد اما با این حال مفید باشد؟ چرا؟",
            "اگر کسی دوست اول را انتخاب کند، چه دلیل قابل‌قبولی ممکن است داشته باشد؟",
            "به نظر تو یک دوست خوب همیشه باید حرفی را بزند که شنیدنش خوشایند است؟ چرا؟",
          ],

          teacherNote:
            "هدف پیدا کردن «دوست بهتر» نیست. پاسخ‌های متفاوت می‌توانند نشان دهند که دانش‌آموزان در یک دوستی چه چیزهایی را ارزشمند می‌دانند؛ مثل تشویق، صداقت، حمایت، آرامش یا کمک به بهتر شدن.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To reflect on the qualities we value in a relationship and the difference between something that feels pleasant and something that may actually help us.",

    instruction:
      "Imagine you have two friends. The first one praises you almost all the time and tells you that everything you do is great. The second one cares about you, but if they think you could do something better, they tell you what they really think, even if it is not always pleasant to hear. Now imagine you are about to do something important and can have only one of these friends by your side. Which one would you choose? Why?",

    steps: [
      "Choose one of the two friends.",
      "Explain what matters most to you about their behavior.",
      "Think about why you prefer this quality to the other friend's quality.",
      "Explain the reason for your choice in a short piece of writing.",
    ],

    questions: [
      "Which friend did you choose?",
      "What matters most to you about their behavior?",
      "Why did you prefer this quality to the other friend's quality?",
      "Could hearing the second friend's opinion sometimes be upsetting but still helpful? Why?",
      "If someone chose the first friend, what reasonable reason might they have?",
      "Do you think a good friend should always say things that are pleasant to hear? Why?",
    ],

    teacherNote:
      "The goal is not to identify the 'better friend.' Different answers can reveal what students value in a friendship, such as encouragement, honesty, support, comfort, or help in becoming better.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "10M-07",
        title: "بین سفر به گذشته یا سفر به آینده",
        description: "انتخاب جهت سفر با یک ماشین زمان یک‌بارمصرف.",
        translations: {
  en: {
    title: "A Journey to the Past or the Future",
    description: "Choosing the direction of a one-time journey in a time machine.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی تصمیم‌گیری در شرایطی که هر دو انتخاب جذابیت و پیامدهای ناشناخته دارند و کمک به دانش‌آموز برای دفاع از انتخاب خود بر اساس هدف و کنجکاوی.",

          instruction:
            "فرض کن یک ماشین زمان پیدا کرده‌ای که فقط یک بار می‌توانی از آن استفاده کنی. می‌توانی به گذشته بروی یا به آینده. فقط یک زمان را می‌توانی ببینی و بعد برگردی. کدام را انتخاب می‌کنی و چرا؟ مهم‌ترین چیزی که می‌خواهی از آن سفر به دست بیاوری چیست؟ چه چیزی ممکن است باعث شود انتخابت نتیجه‌ای غیرمنتظره داشته باشد؟",

          steps: [
            "گذشته یا آینده را انتخاب کن.",
            "مشخص کن دوست داری چه زمانی را ببینی.",
            "مهم‌ترین چیزی را که می‌خواهی از آن سفر به دست بیاوری مشخص کن.",
            "توضیح بده چرا این چیز برایت مهم است.",
            "به چیزی فکر کن که ممکن است در سفر برخلاف انتظارت پیش برود.",
          ],

          questions: [
            "به گذشته می‌روی یا آینده؟ چرا؟",
            "مهم‌ترین چیزی که می‌خواهی در آن سفر ببینی یا بفهمی چیست؟",
            "اگر به گذشته بروی، چه چیزی ممکن است غافلگیرت کند؟",
            "اگر به آینده بروی، چه چیزی ممکن است برخلاف انتظار تو باشد؟",
            "اگر فقط می‌توانستی یک چیز از سفر به دست بیاوری، آن چه بود؟",
            "چه چیزی ممکن است باعث شود بعداً فکر کنی انتخاب دیگری بهتر بود؟",
          ],

          teacherNote:
            "این موقعیت پاسخ درست ندارد. ارزش فعالیت در تصمیم‌گیری میان دو امکان جذاب و نامطمئن است. توجه اصلی باید به هدف، معیار و دلیل انتخاب دانش‌آموز باشد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To strengthen decision-making when both options are appealing and have unknown consequences, and to help students justify their choices based on their goals and curiosity.",

    instruction:
      "Imagine you have found a time machine that you can use only once. You can travel either to the past or to the future. You can visit only one point in time before returning. Which would you choose, and why? What is the most important thing you hope to gain from this journey? What might make the journey turn out differently from what you expect?",

    steps: [
      "Choose either the past or the future.",
      "Decide what time you would like to visit.",
      "Identify the most important thing you hope to gain from the journey.",
      "Explain why this matters to you.",
      "Think of something that might happen during the journey that goes against your expectations.",
    ],

    questions: [
      "Would you travel to the past or the future? Why?",
      "What is the most important thing you would want to see or find out during the journey?",
      "If you traveled to the past, what might surprise you?",
      "If you traveled to the future, what might turn out differently from what you expect?",
      "If you could gain only one thing from the journey, what would it be?",
      "What might make you later think that the other choice would have been better?",
    ],

    teacherNote:
      "There is no correct answer to this scenario. The value of the activity lies in making a choice between two appealing but uncertain possibilities. The main focus should be on the student's goal, criteria, and reasons for choosing.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "10M-08",
        title: "یک دقیقه برای برداشتن",
        description: "انتخاب سه چیز برای برداشتن در یک دقیقه‌ی محدود.",
         translations: {
  en: {
    title: "One Minute to Grab Things",
    description: "Choosing three things to take with you when time is limited to one minute.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی اولویت‌بندی، هزینه‌ی فرصت و توضیح اینکه چرا بعضی گزینه‌ها را بر گزینه‌های دیگر ترجیح می‌دهیم.",

          instruction:
            "فرض کن فقط یک دقیقه فرصت داری از اتاقت بیرون بروی و فقط سه چیز می‌توانی با خودت ببری. چه چیزهایی را انتخاب می‌کنی؟ برای هر انتخابت بگو چرا برداشتن آن را به دو چیز دیگر ترجیح دادی.",

          steps: [
            "سه چیز را از اتاقت انتخاب کن.",
            "هر سه انتخاب را با چیزهایی که برنداشتی مقایسه کن.",
            "برای هر انتخاب دلیل خودت را بنویس.",
            "توضیح بده چه چیزی باعث شد این سه چیز را مهم‌تر بدانی.",
          ],

          questions: [
            "سه چیزی که انتخاب کردی چه هستند؟",
            "مهم‌ترین انتخابت کدام است؟ چرا؟",
            "برای انتخاب‌هایت بیشتر به چه چیزی فکر کردی؟",
            "چه چیزی را دوست داشتی برداری اما مجبور شدی رهایش کنی؟",
            "چرا آن را به یکی از سه انتخابت ترجیح ندادی؟",
            "اگر فقط اجازه داشتی یک چیز برداری، کدام را انتخاب می‌کردی؟ چرا؟",
          ],

          teacherNote:
            "هدف پیدا کردن «سه چیز درست» نیست؛ معیارهای اولویت‌بندی دانش‌آموز اهمیت دارد. دانش‌آموزان ممکن است بر اساس نیاز، ارزش عاطفی، کاربرد، خاطره یا دلایل دیگر انتخاب کنند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To strengthen prioritization, understand opportunity cost, and explain why we prefer some options over others.",

    instruction:
      "Imagine you have only one minute to leave your room, and you can take only three things with you. What would you choose? For each choice, explain why you would rather take it than two other things.",

    steps: [
      "Choose three things from your room.",
      "Compare each of your three choices with the things you did not take.",
      "Write down your reason for each choice.",
      "Explain what made you consider these three things more important.",
    ],

    questions: [
      "What are the three things you chose?",
      "Which of your choices is the most important? Why?",
      "What did you think about most when making your choices?",
      "What did you want to take but had to leave behind?",
      "Why did you not choose it as one of your three things?",
      "If you were allowed to take only one thing, which would you choose? Why?",
    ],

    teacherNote:
      "The goal is not to find the 'right three things'; what matters are the student's prioritization criteria. Students may choose based on necessity, emotional value, usefulness, memories, or other reasons.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "10M-09",
        title: "قول به دوست یا کمک به خانواده؟",
        description:
          "انتخاب میان عمل به یک قول و کمک به یکی از اعضای خانواده در شرایطی که انجام هر دو ممکن نیست.",
           translations: {
  en: {
    title: "Keeping a Promise to a Friend or Helping Your Family?",
    description:
      "Choosing between keeping a promise and helping a family member when it is not possible to do both.",
  },
},
        activity: {
          purpose:
            "استفاده از یک انتخاب دشوار برای فکر کردن درباره‌ی قول، رابطه، مسئولیت و ارزش‌هایی که در یک تصمیم برای ما اهمیت دارند.",

          instruction:
            "فرض کن به دوستت قول داده‌ای که بعد از مدرسه با او کاری را که مدت‌ها منتظرش بوده‌اید انجام بدهی. همان روز، یکی از اعضای خانواده از تو می‌خواهد در کاری که برای او مهم است کمکش کنی. اگر به دوستت برسی، نمی‌توانی به خانواده کمک کنی؛ و اگر بمانی و کمک کنی، نمی‌توانی به قولت عمل کنی. کدام را انتخاب می‌کنی؟ چرا؟",

          steps: [
            "یکی از دو انتخاب را انتخاب کن.",
            "توضیح بده چرا این انتخاب برایت مهم‌تر است.",
            "به کسی فکر کن که انتخابش نمی‌کنی و بگو انتخاب تو چه اثری ممکن است بر او داشته باشد.",
            "دلیل انتخابت را در قالب یک متن توضیح بده.",
          ],

          questions: [
            "کدام را انتخاب کردی: عمل به قولت یا کمک به خانواده؟",
            "مهم‌ترین دلیل انتخابت چیست؟",
            "در انتخابت کدام چیز برایت مهم‌تر بود؟",
            "فکر می‌کنی کسی که انتخابش نکردی چه احساسی پیدا می‌کند؟",
            "آیا ممکن است برای انتخاب خودت دلیل دیگری هم وجود داشته باشد؟",
            "اگر دوستت یا عضو خانواده‌ات انتخاب تو را بفهمد، چه چیزی دوست داری برایش توضیح بدهی؟",
          ],

          teacherNote:
            "هدف پیدا کردن یک پاسخ درست نیست. هر دو طرف موقعیت باید برای دانش‌آموز مهم باشند. موقعیت فرضی است و لازم نیست دانش‌آموز از تجربه‌ی واقعی خانواده یا دوستی خود استفاده کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Using a difficult choice to reflect on promises, relationships, responsibilities, and the values that matter to us when making a decision.",

    instruction:
      "Imagine you have promised a friend that after school you will do something together that you have both been looking forward to for a long time. On the same day, a family member asks you to help with something important to them. If you go to meet your friend, you cannot help your family; if you stay to help, you cannot keep your promise. Which would you choose? Why?",

    steps: [
      "Choose one of the two options.",
      "Explain why this choice matters more to you.",
      "Think about the person you did not choose and say how your decision might affect them.",
      "Explain the reason for your choice in a piece of writing.",
    ],

    questions: [
      "Which did you choose: keeping your promise or helping your family?",
      "What is the most important reason for your choice?",
      "What mattered most to you when making this decision?",
      "How do you think the person you did not choose might feel?",
      "Could there be another reason for your choice as well?",
      "If your friend or family member understood your decision, what would you want to explain to them?",
    ],

    teacherNote:
      "The goal is not to find one correct answer. Both sides of the situation should matter to the student. This is a hypothetical scenario; students do not need to draw on real experiences involving their family or friendships.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "10M-10",
        title: "چه چیزی را انتخاب نمی‌کنم؟",
        description:
          "اولویت‌ بندی میان چند کار و کنار گذاشتن یکی از آن‌ها بر اساس معیارهای شخصی.",
          translations: {
  en: {
    title: "What Will I Choose Not to Do?",
    description:
      "Prioritizing several tasks and setting one aside based on personal criteria.",
  },
},
        activity: {
          purpose:
            "تمرین اولویت‌بندی، هزینه‌ی فرصت و توضیح معیاری که باعث می‌شود یک کار را کنار بگذاریم.",

          instruction:
            "فرض کن امروز فقط وقت داری سه کار انجام بدهی. چهار کاری را که دوست داری یا لازم است امروز انجام بدهی، خودت بنویس. حالا فقط می‌توانی سه تای آن‌ها را انجام بدهی؛ پس باید یکی را کنار بگذاری. کدام کار را انتخاب نمی‌کنی؟ چرا؟ توضیح بده چه چیزی باعث شد سه کار دیگر را به آن ترجیح بدهی.",

          steps: [
            "چهار کاری را که می‌خواهی یا لازم است امروز انجام بدهی، خودت انتخاب و یادداشت کن.",
            "چهار کار را با هم مقایسه کن.",
            "یکی از آن‌ها را کنار بگذار.",
            "دلیل انتخابت را توضیح بده.",
          ],

          questions: [
            "چهار کاری که انتخاب کردی چه هستند؟",
            "کدام کار را کنار گذاشتی؟",
            "مهم‌ترین دلیل کنار گذاشتن آن چیست؟",
            "چه چیزی باعث شد سه کار دیگر را به آن ترجیح بدهی؟",
            "اگر دوستت یکی از سه کار دیگر را کنار بگذارد، چه دلیلی ممکن است داشته باشد؟",
            "به نظر تو برای چنین انتخابی کدام معیار مهم‌تر است: ضرورت، علاقه، فایده، زمان یا چیز دیگری؟ چرا؟",
          ],

          teacherNote:
            "هدف پیدا کردن «انتخاب درست» نیست. پاسخ‌های متفاوت می‌توانند نشان دهند که دانش‌آموزان برای تصمیم‌گیری چه معیارهایی دارند؛ مثل ضرورت، علاقه، فایده، زمان، دیگران یا پیامد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To practice prioritization, understand opportunity cost, and explain the criteria that lead us to leave one task aside.",

    instruction:
      "Imagine you have time to do only three things today. Write down four things you would like or need to do today. Now imagine you can do only three of them, so you have to leave one out. Which one will you choose not to do? Why? Explain what made you prefer the other three.",

    steps: [
      "Choose and write down four things you would like or need to do today.",
      "Compare the four tasks with one another.",
      "Set one of them aside.",
      "Explain the reason for your choice.",
    ],

    questions: [
      "What are the four things you chose?",
      "Which task did you set aside?",
      "What is the most important reason for leaving it out?",
      "What made you prefer the other three tasks?",
      "If your friend set aside one of the other three tasks, what might their reason be?",
      "In your opinion, which criterion matters most in making this kind of choice: necessity, interest, usefulness, time, or something else? Why?",
    ],

    teacherNote:
      "The goal is not to find the 'right choice.' Different answers can reveal the criteria students use when making decisions, such as necessity, interest, usefulness, time, other people, or consequences.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
    ],
  },

  {
    id: "emotion",
    code: "03M",
    title: "بیان احساس",
    description: "پیدا کردن زبان‌های تازه برای تجربه‌های درونی.",
     translations: {
  en: {
    title: "Emotional Expression",
    description: "Finding new languages for inner experiences.",
  },
},
    situations: [
      {
        id: "03M-01",
        title: "لحظه‌ای که غرق شادی شدم",
        description:
          "توصیف یک لحظه‌ی شادی یا هیجان از طریق نشانه‌ها، رفتار و جزئیات.",
           translations: {
  en: {
    title: "A Moment When I Was Overwhelmed with Joy",
    description:
      "Describing a moment of joy or excitement through signs, behavior, and details.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای تبدیل یک احساس درونی به نشانه‌های بیرونی، جزئیات حسی و تصویرهای قابل‌درک برای خواننده.",

          instruction:
            "یک لحظه‌ی واقعی را به یاد بیاور که خیلی خوشحال یا هیجان‌زده بودی. این بار به جای اینکه فقط بگویی «خیلی خوشحال بودم»، تلاش کن شادی آن لحظه را طوری توصیف کنی که خواننده بتواند آن را ببیند، بشنود و احساس کند.",

          steps: [
            "یک لحظه‌ی واقعی از شادی یا هیجان زیاد را انتخاب کن.",
            "به چیزهایی فکر کن که در آن لحظه می‌دیدی، می‌شنیدی یا لمس می‌کردی.",
            "تغییرهای بدنت را به یاد بیاور؛ مثلاً حالت صورت، حرکت دست‌ها، سرعت حرف زدن یا ضربان قلب.",
            "یک جمله، صدا یا اتفاق کوچک را پیدا کن که شادی آن لحظه را بیشتر کرد.",
            "تجربه را در چند پاراگراف بنویس، بدون اینکه مرتب فقط از کلمه‌هایی مثل «شاد»، «خوشحال» یا «هیجان‌زده» استفاده کنی.",
            "در پایان، یک جمله یا تصویر را انتخاب کن که فکر می‌کنی بیش از همه احساس آن لحظه را منتقل می‌کند.",
          ],

          questions: [
            "اولین نشانه‌ای که نشان می‌داد خوشحال شده‌ای چه بود؟",
            "بدنت در آن لحظه چه تغییری کرده بود؟",
            "چه چیزی می‌دیدی یا می‌شنیدی که هنوز در خاطرت مانده است؟",
            "اگر کسی تو را از بیرون می‌دید، از کجا می‌فهمید چه احساسی داری؟",
            "آیا شادی تو ناگهان به وجود آمد یا کم‌کم بیشتر شد؟",
            "کدام جزئیات نوشته‌ات می‌تواند بدون استفاده از کلمه‌ی «شادی»، احساس تو را منتقل کند؟",
          ],

          teacherNote:
            "هدف، آموزش مستقیم واژگان احساسات نیست. دانش‌آموز باید یاد بگیرد احساس را از طریق نشانه‌ها، رفتار، واکنش‌های بدنی و جزئیات محیط نشان دهد. اگر نوشته فقط درباره‌ی علت خوشحالی باشد، او را دوباره به خودِ لحظه و نشانه‌های قابل مشاهده برگردانید.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To help students turn an inner feeling into outward signs, sensory details, and images that readers can understand.",

    instruction:
      "Remember a real moment when you felt very happy or excited. This time, instead of simply saying, 'I was very happy,' try to describe that moment of joy so that the reader can see it, hear it, and feel it.",

    steps: [
      "Choose a real moment when you felt great joy or excitement.",
      "Think about the things you could see, hear, or touch at that moment.",
      "Recall the changes in your body, such as your facial expression, hand movements, speaking speed, or heartbeat.",
      "Remember a sentence, sound, or small event that made that moment even more joyful.",
      "Write about the experience in a few paragraphs without repeatedly using words such as 'happy,' 'joyful,' or 'excited.'",
      "At the end, choose one sentence or image that you think conveys the feeling of that moment most strongly.",
    ],

    questions: [
      "What was the first sign that showed you were happy?",
      "How did your body change at that moment?",
      "What did you see or hear that you still remember?",
      "If someone had watched you from the outside, how could they have known what you were feeling?",
      "Did your happiness appear suddenly or grow gradually?",
      "Which details in your writing could convey your feeling without using the word 'happiness'?",
    ],

    teacherNote:
      "The goal is not to teach emotion vocabulary directly. Students should learn to express feelings through signs, behavior, bodily reactions, and details of the surroundings. If a piece of writing focuses only on the reason for the happiness, guide the student back to the moment itself and its observable signs.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "03M-02",
        title: "یک دلتنگی کوچک",
        description:
          "توصیف دلتنگی برای چیزی که دیگر مثل گذشته در زندگی حضور ندارد.",
         translations: {
  en: {
    title: "A Little Longing",
    description:
      "Describing the feeling of missing something that is no longer part of life in the way it once was.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای تبدیل یک احساس مبهم به خاطره، جزئیات و تصویرهای ملموس.",

          instruction:
            "به چیزی فکر کن که دیگر مثل گذشته در زندگی‌ات حضور ندارد؛ شاید یک وسیله، یک فصل، یک خانه، یک کوچه، یک مکان یا چیزی آشنا. درباره‌ی دلتنگی برای آن بنویس، اما تلاش کن دلتنگی را بیشتر از میان جزئیات و خاطره‌ها نشان بدهی تا با توضیح مستقیم.",

          steps: [
            "یک شیء، فصل، مکان یا چیز آشنا را انتخاب کن که کمی دلتنگش هستی.",
            "یک خاطره‌ی کوچک و مشخص از آن را به یاد بیاور.",
            "سه جزئیات از آن را پیدا کن؛ چیزی که می‌دیدی، می‌شنیدی، لمس می‌کردی یا بویش را حس می‌کردی.",
            "توضیح بده چه چیزی تغییر کرده که باعث شده دلتنگش شوی.",
            "متنت را طوری بنویس که خواننده بدون دیدن تکرار کلمه‌ی «دلتنگی» بتواند این احساس را بفهمد.",
            "در پایان، یک جمله بنویس که اگر آن چیز می‌توانست صدایت را بشنود، دوست داشتی به آن بگویی.",
          ],

          questions: [
            "دلتنگ چه چیزی هستی؟",
            "آخرین بار چه زمانی آن را مثل گذشته تجربه کردی؟",
            "کوچک‌ترین جزئیاتی که از آن در خاطرت مانده چیست؟",
            "چه چیزی تغییر کرده که باعث شده دلتنگش شوی؟",
            "اگر دوباره یک روز کامل به آن زمان یا مکان برگردی، اولین چیزی که توجهت را جلب می‌کند چیست؟",
            "اگر نباید از کلمه‌ی «دلتنگ» استفاده کنی، چگونه این احساس را در نوشته‌ات نشان می‌دهی؟",
          ],

          teacherNote:
            "فعالیت را به سمت خاطرات بسیار سنگین یا فقدان‌های حساس نبرید. گزینه‌هایی مانند یک فصل، مدرسه‌ی قدیمی، اسباب‌بازی، خانه‌ی قبلی، یک کوچه یا یک مکان تفریحی مناسب‌ترند. تمرکز اصلی بر تبدیل احساس به جزئیات ملموس است.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To help students turn a vague feeling into memories, details, and tangible images.",

    instruction:
      "Think of something that is no longer part of your life in the way it once was. It might be an object, a season, a house, a street, a place, or something familiar. Write about missing it, but try to convey the feeling through details and memories rather than direct explanation.",

    steps: [
      "Choose an object, season, place, or familiar thing that you miss a little.",
      "Recall one small, specific memory connected to it.",
      "Find three details about it: something you saw, heard, touched, or smelled.",
      "Explain what has changed and made you miss it.",
      "Write your text so that the reader can understand the feeling without repeatedly seeing the word 'miss.'",
      "At the end, write one sentence you would like to say to that thing if it could hear you.",
    ],

    questions: [
      "What do you miss?",
      "When was the last time you experienced it as you used to?",
      "What is the smallest detail about it that you still remember?",
      "What has changed and made you miss it?",
      "If you could return to that time or place for one whole day, what would catch your attention first?",
      "If you were not allowed to use the word 'miss,' how would you show this feeling in your writing?",
    ],

    teacherNote:
      "Do not steer the activity toward very painful memories or sensitive losses. Options such as a season, an old school, a toy, a former home, a street, or a recreational place are more suitable. The main focus is on turning a feeling into tangible details.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "03M-03",
        title: "اسمش را نگو",
        description:
          "بیان یک احساس بدون نام بردن از آن، به‌گونه‌ای که خواننده بتواند آن را از نشانه‌ها حدس بزند.",
          translations: {
  en: {
    title: "Don't Name It",
    description:
      "Expressing a feeling without naming it, so that the reader can infer it from the clues.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی نشان دادن احساس به جای نام‌گذاری مستقیم و توجه به نشانه‌هایی که باعث می‌شوند خواننده یک احساس را از متن استنباط کند.",

          instruction:
            "یک احساس را انتخاب کن، اما اسم آن را در نوشته‌ات نیاور. تلاش کن خواننده فقط از روی رفتار، حالت بدن، فکرها، صداها و اتفاق‌های متن بفهمد چه احساسی داری.",

          steps: [
            "یک احساس را انتخاب کن؛ مثلاً ترس، شادی، خجالت، حسادت، آرامش یا دلتنگی.",
            "سه نشانه پیدا کن که می‌تواند آن احساس را بدون نام بردن نشان دهد.",
            "یک موقعیت کوتاه بساز یا یک تجربه‌ی ساده را انتخاب کن که این نشانه‌ها در آن دیده شوند.",
            "متنت را بنویس، اما نام مستقیم احساس را به کار نبر.",
            "نوشته را به یک همکلاسی بده و از او بخواه حدس بزند چه احساسی را توصیف کرده‌ای.",
            "از او بپرس از کدام جمله یا نشانه به این نتیجه رسیده است.",
          ],

          questions: [
            "اگر اجازه نداشتی اسم احساست را بگویی، از چه چیزی کمک می‌گرفتی؟",
            "بدن آدم هنگام این احساس چه چیزی را نشان می‌دهد؟",
            "رفتار آدم در این حالت چگونه تغییر می‌کند؟",
            "آیا یک نشانه به‌تنهایی برای فهمیدن احساس کافی است؟",
            "کدام جمله‌ی نوشته‌ات بیشتر از همه احساس را نشان می‌دهد؟",
            "آیا ممکن است دو نفر از یک نوشته دو احساس متفاوت برداشت کنند؟ چرا؟",
          ],

          teacherNote:
            "هدف این نیست که دانش‌آموز عمداً متن را مبهم کند. نشانه‌ها باید آن‌قدر مشخص باشند که خواننده بتواند بر اساس متن حدس بزند. بعد از حدس، از دانش‌آموز بخواهید نشان دهد کدام بخش نوشته این برداشت را ایجاد کرده است.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To strengthen the ability to show a feeling instead of naming it directly, and to notice the clues that help readers infer a feeling from a text.",

    instruction:
      "Choose a feeling, but do not mention its name in your writing. Try to help the reader understand how you feel only through behavior, body language, thoughts, sounds, and events in the text.",

    steps: [
      "Choose a feeling, such as fear, joy, embarrassment, jealousy, calmness, or longing.",
      "Find three clues that could show this feeling without naming it.",
      "Create a short situation or choose a simple experience in which these clues could appear.",
      "Write your text without directly naming the feeling.",
      "Give your writing to a classmate and ask them to guess which feeling you have described.",
      "Ask them which sentence or clue led them to that conclusion.",
    ],

    questions: [
      "If you were not allowed to name your feeling, what would you use to express it?",
      "What might a person's body reveal when they experience this feeling?",
      "How does a person's behavior change in this state?",
      "Is one clue enough to understand a feeling?",
      "Which sentence in your writing shows the feeling most clearly?",
      "Could two people interpret two different feelings from the same piece of writing? Why?",
    ],

    teacherNote:
      "The goal is not to make the text deliberately vague. The clues should be clear enough for the reader to make an informed guess. After the guess, ask the student to point out which part of the writing led to that interpretation.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "03M-04",
        title: "نقشه‌ی احساس",
        description:
          "تبدیل یک احساس به یک سرزمین خیالی و نوشتن درباره‌ی رابطه‌ی میان بخش‌های آن.",
          translations: {
  en: {
    title: "A Map of a Feeling",
    description:
      "Turning a feeling into an imaginary land and writing about the relationships between its different parts.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای تبدیل یک تجربه‌ی درونی به یک فضای خیالی و کشف اینکه بخش‌های مختلف یک احساس می‌توانند ویژگی‌ها، مسیرها و موانع متفاوتی داشته باشند.",

          instruction:
            "تصور کن احساس امروزت یک سرزمین است. در این سرزمین می‌تواند کوه، رودخانه، جنگل، دریاچه، جاده، غار یا هر چیز دیگری وجود داشته باشد. نقشه‌ی این سرزمین را بساز و بعد درباره‌ی بخش‌های مختلف آن بنویس.",

          steps: [
            "یک احساس را انتخاب کن.",
            "تصور کن این احساس به یک سرزمین تبدیل شده است.",
            "برای بخش‌های مختلف آن ویژگی‌هایی انتخاب کن؛ مثلاً یک راه باریک، یک جای روشن، یک منطقه‌ی شلوغ یا یک مکان ناشناخته.",
            "روی نقشه مشخص کن خودت کجای این سرزمین هستی.",
            "یک مسیر را از نقطه‌ای به نقطه‌ی دیگر انتخاب کن و توضیح بده در طول آن چه اتفاقی می‌افتد.",
            "یک جای امن، یک جای دشوار و یک جای ناشناخته پیدا کن و درباره‌ی هرکدام بنویس.",
          ],

          questions: [
            "سرزمین احساس تو چه نامی دارد؟",
            "کدام بخش سرزمین از همه بزرگ‌تر است؟ چرا؟",
            "هر بخش چه ویژگی‌ای از احساس تو را نشان می‌دهد؟",
            "خودت الان کجای این سرزمین هستی؟",
            "اگر بخواهی به جای دیگری بروی، چه مسیری را انتخاب می‌کنی؟",
            "اگر فردا احساست تغییر کند، کدام قسمت نقشه تغییر می‌کند؟",
          ],

          teacherNote:
            "نقاشی وسیله‌ی ورود به نوشتن است، نه هدف نهایی. لازم نیست نمادها معنای قراردادی داشته باشند؛ مثلاً کوه لزوماً نباید نشانه‌ی سختی باشد. از دانش‌آموز بخواهید خودش رابطه‌ی میان عناصر نقشه و احساس را توضیح دهد. در پایان بهتر است حداقل یک بخش از نقشه را با یک متن کوتاه توصیف کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To help students transform an inner experience into an imaginary place and discover how different parts of a feeling can have different features, paths, and obstacles.",

    instruction:
      "Imagine that today's feeling is a land. This land might have mountains, rivers, forests, lakes, roads, caves, or anything else. Create a map of this land and then write about its different parts.",

    steps: [
      "Choose a feeling.",
      "Imagine that this feeling has turned into a land.",
      "Give different parts of this land their own features, such as a narrow path, a bright place, a crowded area, or an unfamiliar location.",
      "Mark where you are on the map.",
      "Choose a path from one point to another and explain what happens along the way.",
      "Find a safe place, a difficult place, and an unknown place, and write about each one.",
    ],

    questions: [
      "What is the name of your land of feelings?",
      "Which part of the land is the largest? Why?",
      "What feature of your feeling does each part represent?",
      "Where are you in this land right now?",
      "If you wanted to go somewhere else, which path would you choose?",
      "If your feeling changed tomorrow, which part of the map would change?",
    ],

    teacherNote:
      "Drawing is a way into writing, not the final goal. Symbols do not need to have fixed meanings; for example, a mountain does not necessarily have to represent difficulty. Ask students to explain the relationship between the elements of their map and their feelings. At the end, it is best for them to describe at least one part of the map in a short piece of writing.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "03M-05",
        title: "دو احساس با هم",
        description:
          "نوشتن درباره‌ی موقعیتی که هم‌زمان دو احساس متفاوت ایجاد می‌کند.",
         translations: {
  en: {
    title: "Two Feelings at Once",
    description:
      "Writing about a situation that brings out two different feelings at the same time.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای کشف اینکه یک اتفاق می‌تواند هم‌زمان احساس‌های متفاوت یا حتی متضاد ایجاد کند.",

          instruction:
            "به موقعیتی فکر کن که در آن دو احساس متفاوت را هم‌زمان تجربه می‌کنی؛ مثلاً هم خوشحال و هم نگران، هم مشتاق و هم خجالت‌زده، یا هم دلتنگ و هم آرام. درباره‌ی این دو احساس بنویس و نشان بده هرکدام چگونه خودش را نشان می‌دهد.",

          steps: [
            "یک موقعیت واقعی یا خیالی انتخاب کن که بتواند دو احساس متفاوت ایجاد کند.",
            "دو احساسی را که هم‌زمان وجود دارند مشخص کن.",
            "برای هر احساس چند نشانه پیدا کن؛ در فکر، بدن، رفتار یا محیط.",
            "فکر کن آیا این دو احساس با هم درگیر می‌شوند یا می‌توانند کنار هم باشند.",
            "موقعیت را به شکل یک متن کوتاه روایت یا توصیف کن.",
            "در پایان توضیح بده کدام احساس در پایان پررنگ‌تر شد و چرا.",
          ],

          questions: [
            "چه اتفاقی باعث شد دو احساس متفاوت هم‌زمان به وجود بیایند؟",
            "کدام نشانه مربوط به احساس اول است و کدام مربوط به احساس دوم؟",
            "آیا ممکن است دو احساس مخالف هم‌زمان واقعی باشند؟",
            "کدام احساس در طول موقعیت قوی‌تر شد؟",
            "آیا یکی از احساس‌ها باعث تغییر احساس دیگر شد؟",
            "اگر یک نفر فقط بخشی از ماجرا را ببیند، ممکن است یکی از احساس‌ها را نبیند؟",
          ],

          teacherNote:
            "دانش‌آموز را مجبور نکنید حتماً از تجربه‌ی شخصی استفاده کند. می‌تواند موقعیتی خیالی بسازد. هدف، فهرست کردن احساس‌ها نیست؛ دانش‌آموز باید نشان دهد هر احساس چگونه در رفتار، فکر یا بدن ظاهر می‌شود و چگونه این دو احساس در یک موقعیت کنار هم قرار می‌گیرند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To help students discover that a single event can bring about different or even opposite feelings at the same time.",

    instruction:
      "Think of a situation in which you experience two different feelings at the same time, such as being both happy and worried, both excited and embarrassed, or both longing for something and feeling calm. Write about these two feelings and show how each one expresses itself.",

    steps: [
      "Choose a real or imaginary situation that could bring about two different feelings.",
      "Identify the two feelings that exist at the same time.",
      "Find several clues for each feeling in thoughts, the body, behavior, or the surroundings.",
      "Think about whether these two feelings conflict with each other or can exist side by side.",
      "Write a short piece of narrative or descriptive text about the situation.",
      "At the end, explain which feeling became stronger and why.",
    ],

    questions: [
      "What happened to bring about these two different feelings at the same time?",
      "Which clue relates to the first feeling, and which relates to the second?",
      "Can two opposite feelings both be real at the same time?",
      "Which feeling became stronger during the situation?",
      "Did one feeling cause the other to change?",
      "If someone saw only part of what happened, might they fail to notice one of the feelings?",
    ],

    teacherNote:
      "Do not require students to use a personal experience. They can create an imaginary situation. The goal is not simply to list feelings; students should show how each feeling appears in behavior, thoughts, or the body, and how the two feelings coexist in the same situation.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "03M-06",
        title: "موسیقی چه می‌گوید؟",
        description:
          "شنیدن یک قطعه، ساختن برداشت احساسی و مقایسه‌ی آن با متنی که برای موسیقی نوشته شده است.",
          translations: {
  en: {
    title: "What Does the Music Say?",
    description:
      "Listening to a musical piece, forming an emotional interpretation, and comparing it with the text written about the music.",
  },
},
        activity: {
          purpose:
            "تقویت شنیدن دقیق، تشخیص نشانه‌های احساسی و درک تفاوت میان برداشت شخصی و معنایی که یک اثر می‌تواند در متن یا زمینه‌ی خود داشته باشد.",

          instruction:
            "به یک قطعه‌ی موسیقی گوش بده، بدون اینکه ابتدا بدانی آهنگساز درباره‌ی آن چه نوشته است. ببین موسیقی چه احساسی، تصویر یا اتفاقی را در ذهن تو ایجاد می‌کند. بعد متن مربوط به قطعه را بخوان و برداشت خودت را با آن مقایسه کن.",

          steps: [
            "قطعه را یک بار بدون نوشتن گوش کن.",
            "بار دوم، چند کلمه یا تصویر بنویس که هنگام شنیدن به ذهنت می‌آیند.",
            "به تغییر سرعت، شدت، تکرار صداها، بالا و پایین رفتن موسیقی و سکوت‌ها توجه کن.",
            "یک احساس، تصویر یا اتفاق را انتخاب کن و توضیح بده کدام بخش موسیقی تو را به آن رسانده است.",
            "حالا متن مربوط به قطعه را بخوان: آنتونیو ویوالدی-بهار:پرندگان با آواز شاد به استقبال بهار می‌روند. جویبارها با وزش نسیم ملایم جریان می‌یابند. آسمان ناگهان تیره می‌شود و رعدوبرق خبر از طوفان می‌دهد. با آرام‌شدن طوفان، پرندگان دوباره آواز می‌خوانند.",
            "در پایان، موسیقی را برای کسی توصیف کن که آن را نشنیده است.",
          ],

          questions: [
            "اولین احساس یا تصویری که موسیقی در تو ایجاد کرد چه بود؟",
            "کدام بخش موسیقی بیشتر از همه روی این برداشت تأثیر گذاشت؟",
            "آیا سرعت یا شدت موسیقی در طول قطعه احساس تو را تغییر داد؟",
            "متن مربوط به قطعه با برداشت تو کجا هماهنگ بود؟",
            "کجا برداشت تو با متن متفاوت بود؟",
            "اگر کسی برداشت دیگری داشته باشد، چه شواهدی از موسیقی می‌تواند از آن برداشت پشتیبانی کند؟",
          ],

          teacherNote:
            "هدف پیدا کردن «احساس درست» یا حدس زدن منظور آهنگساز نیست. نکته‌ی مهم این است که دانش‌آموز میان «برداشت من» و «آنچه در متن یا زمینه‌ی اثر آمده» تفاوت بگذارد و بتواند برای برداشت خود به ویژگی‌هایی از موسیقی اشاره کند.",

          materials: {
            required: true,
            type: "audio",
            items: ["/audio/03M/03M-06.ogg"],
          },
          translations: {
  en: {
    purpose:
      "To strengthen careful listening, recognition of emotional cues, and understanding of the difference between personal interpretation and the meaning a work may have within its own text or context.",

    instruction:
      "Listen to a piece of music without first knowing what the composer has written about it. Notice what feelings, images, or events the music brings to your mind. Then read the text related to the piece and compare it with your own interpretation.",

    steps: [
      "Listen to the piece once without writing anything.",
      "Listen a second time and write down a few words or images that come to mind.",
      "Pay attention to changes in tempo, intensity, repetition of sounds, rising and falling musical lines, and silences.",
      "Choose one feeling, image, or event and explain which part of the music led you to it.",
      "Now read the text related to the piece: Antonio Vivaldi – Spring: Birds greet spring with joyful songs. Streams flow as a gentle breeze blows. Suddenly, the sky grows dark, and thunder announces a storm. As the storm subsides, the birds begin singing again.",
      "Finally, describe the music to someone who has never heard it.",
    ],

    questions: [
      "What was the first feeling or image the music brought to your mind?",
      "Which part of the music had the greatest influence on your interpretation?",
      "Did changes in the tempo or intensity of the music affect your feelings as the piece progressed?",
      "Where did the text related to the piece agree with your interpretation?",
      "Where was your interpretation different from the text?",
      "If someone had a different interpretation, what evidence in the music might support it?",
    ],

    teacherNote:
      "The goal is not to find the 'correct feeling' or guess what the composer intended. What matters is that students distinguish between 'my interpretation' and 'what the text or context of the work says,' and can point to features of the music that support their interpretation.",

    materials: {
      required: true,
      type: "audio",
      items: ["/audio/03M/03M-06.ogg"],
    },
  },
},
        },
      },

      {
        id: "03M-07",
        title: "چهره‌های خاموش",
        description:
          "استنباط یک احساس از نشانه‌های یک تصویر و جدا کردن مشاهده از حدس.",
          translations: {
  en: {
    title: "Silent Faces",
    description:
      "Inferring a feeling from the clues in an image and distinguishing observation from guessing.",
  },
},
        activity: {
          purpose:
            "تقویت توجه به نشانه‌های غیرکلامی و درک اینکه احساسات را معمولاً مستقیم نمی‌بینیم، بلکه از نشانه‌ها درباره‌ی آن‌ها برداشت می‌کنیم.",

          instruction:
            "به تصویر یک چهره نگاه کن. هیچ توضیحی درباره‌ی صاحب چهره نداری. ابتدا فقط چیزهایی را که واقعاً در تصویر می‌بینی پیدا کن. بعد از روی آن نشانه‌ها چند احتمال درباره‌ی احساس او بساز و یکی را برای نوشتن انتخاب کن.",

          steps: [
            "تصویر را با دقت نگاه کن و بدون نوشتن چند ثانیه به آن توجه کن.",
            "چیزهایی را که واقعاً می‌بینی یادداشت کن؛ حالت صورت، نگاه، نور، لباس، محیط و جزئیات دیگر.",
            "سه نشانه را انتخاب کن که در برداشت تو از احساس چهره نقش دارند.",
            "دو یا سه احتمال درباره‌ی احساس یا وضعیت شخصیت بساز.",
            "یکی از احتمال‌ها را انتخاب کن و توضیح بده چه اتفاقی ممکن است پیش از این تصویر افتاده باشد.",
            "داستان کوتاهی بنویس.",
            "در پایان مشخص کن کدام بخش نوشته مشاهده‌ی مستقیم از تصویر است و کدام بخش را خودت ساخته‌ای.",
          ],

          questions: [
            "چه چیزی را واقعاً در تصویر می‌بینی؟",
            "از کدام نشانه به احساس شخصیت پی بردی؟",
            "آیا می‌توانی برای همین نشانه‌ها یک احساس متفاوت تصور کنی؟",
            "چه اتفاقی ممکن است پیش از این تصویر افتاده باشد؟",
            "کدام بخش نوشته‌ات مشاهده است و کدام بخش حدس یا تخیل؟",
            "اگر یکی از جزئیات تصویر حذف شود، آیا برداشتت تغییر می‌کند؟",
          ],

          teacherNote:
            "چند تفسیر متفاوت می‌توانند قابل‌قبول باشند، به شرط آنکه دانش‌آموز بتواند به نشانه‌ای در تصویر اشاره کند. سؤال مهم این است: «از کجای تصویر به این نتیجه رسیدی؟» از تبدیل سریع تصویر به یک داستان قطعی جلوگیری کنید.",

          materials: {
            required: true,
            type: "image",
            items: ["/images/03M/03M-07.jfif"],
          },
          translations: {
  en: {
    purpose:
      "To strengthen attention to nonverbal cues and understand that we do not usually see feelings directly; instead, we form interpretations about them based on clues.",

    instruction:
      "Look at the image of a face. You have no information about the person in it. First, identify only what you can actually see in the image. Then use those clues to come up with several possibilities about how the person might be feeling, and choose one to write about.",

    steps: [
      "Look carefully at the image and spend a few seconds observing it without writing.",
      "Write down what you can actually see: facial expression, gaze, lighting, clothing, surroundings, and other details.",
      "Choose three clues that influence your interpretation of the person's feelings.",
      "Come up with two or three possibilities about the person's feelings or situation.",
      "Choose one possibility and explain what might have happened before this moment.",
      "Write a short story.",
      "At the end, identify which parts of your writing are direct observations from the image and which parts you have made up.",
    ],

    questions: [
      "What can you actually see in the image?",
      "Which clue helped you infer the person's feelings?",
      "Can you imagine a different feeling that could be suggested by these same clues?",
      "What might have happened before this image was taken?",
      "Which parts of your writing are observations, and which are guesses or imagination?",
      "If one detail were removed from the image, would your interpretation change?",
    ],

    teacherNote:
      "Several different interpretations can be acceptable, as long as students can point to a clue in the image to support them. The important question is: 'What in the image led you to that conclusion?' Avoid turning the image too quickly into one definite story.",

    materials: {
      required: true,
      type: "image",
      items: ["/images/03M/03M-07.jfif"],
    },
  },
},
        },
      },

      {
        id: "03M-08",
        title: "امروز دلم شبیه ... بود",
        description:
          "بیان یک احساس با انتخاب تصویری که ویژگی‌های دقیق و مشترکی با آن احساس دارد.",
          translations: {
  en: {
    title: "Today, My Heart Was Like...",
    description:
      "Expressing a feeling by choosing an image that shares precise qualities with that feeling.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی استفاده‌ی دقیق از تشبیه برای بیان تجربه‌ی درونی و پیدا کردن رابطه‌ای شخصی و غیرکلیشه‌ای میان یک چیز و یک احساس.",

          instruction:
            "جمله را کامل کن: «امروز دلم شبیه ... بود.» می‌توانی هر چیزی را انتخاب کنی؛ یک اتاق، کفش خیس، پنجره، تکه‌ای ابر، یک خیابان یا هر چیز دیگری. اما انتخابت کافی نیست؛ باید دقیقاً توضیح بدهی چه ویژگی‌ای باعث شده این چیز شبیه احساس تو باشد.",

          steps: [
            "احساسی را که امروز بیشتر از همه در خودت حس می‌کنی انتخاب کن.",
            "یک چیز پیدا کن که به نظرت می‌تواند تصویر این احساس باشد.",
            "حداقل دو ویژگی دقیق از آن چیز پیدا کن.",
            "توضیح بده هر ویژگی چگونه با احساس تو ارتباط دارد.",
            "اگر تشبیه اولت خیلی معمولی است، یک گزینه‌ی غیرمنتظره‌تر پیدا کن.",
            "جمله‌ی آغازین را به یک متن کوتاه تبدیل کن.",
            "در پایان، دو تشبیه خودت را با هم مقایسه کن و بگو کدام‌یک احساس را بهتر منتقل می‌کند و چرا.",
          ],

          questions: [
            "امروز دلت شبیه چه چیزی بود؟",
            "دقیقاً کدام ویژگی آن چیز به احساس تو مربوط است؟",
            "آیا می‌توانی به جای یک ویژگی کلی، یک ویژگی دقیق‌تر پیدا کنی؟",
            "اگر تشبیه اولت را عوض کنی، چه چیز دیگری انتخاب می‌کنی؟",
            "کدام تشبیه بهتر احساس تو را منتقل می‌کند؟ چرا؟",
            "آیا ممکن است دو نفر یک احساس مشابه را با دو تصویر کاملاً متفاوت بیان کنند؟",
          ],

          teacherNote:
            "ارزش فعالیت در عجیب بودن تشبیه نیست؛ در دقیق بودن رابطه است. مثلاً «دلم شبیه گل بود چون زیبا بود» رابطه‌ی ضعیفی می‌سازد. از دانش‌آموز بخواهید ویژگی مشخص‌تری پیدا کند که واقعاً با تجربه‌ی درونی او ارتباط دارد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To strengthen the ability to use precise similes to express inner experiences and find personal, non-clichéd connections between an object and a feeling.",

    instruction:
      "Complete the sentence: 'Today, my heart was like ...' You can choose anything: a room, a wet shoe, a window, a piece of cloud, a street, or something else. But choosing something is not enough; you must explain exactly which quality makes it resemble your feeling.",

    steps: [
      "Choose the feeling you have been experiencing most strongly today.",
      "Find something that you think could represent this feeling.",
      "Identify at least two precise qualities of that thing.",
      "Explain how each quality relates to your feeling.",
      "If your first simile is too ordinary, find a more unexpected option.",
      "Turn the opening sentence into a short piece of writing.",
      "At the end, compare two of your similes and explain which one conveys the feeling better and why.",
    ],

    questions: [
      "What was your heart like today?",
      "Exactly which quality of that thing relates to your feeling?",
      "Can you find a more precise quality instead of a general one?",
      "If you changed your first simile, what else would you choose?",
      "Which simile conveys your feeling better? Why?",
      "Could two people express a similar feeling through two completely different images?",
    ],

    teacherNote:
      "The value of the activity lies not in how strange the simile is, but in how precise the connection is. For example, 'My heart was like a flower because it was beautiful' creates a weak connection. Ask students to find a more specific quality that genuinely relates to their inner experience.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "03M-09",
        title: "شهری که چند چیز در آن نیست",
        description:
          "کشف احساس‌هایی که از نشانه‌های زندگی یک شهر کم‌رنگ یا ناپدید شده‌اند.",
          translations: {
  en: {
    title: "A City Missing a Few Things",
    description:
      "Discovering which feelings have faded or disappeared through clues in the everyday life of a city.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی استنباط احساس از رفتار و موقعیت و درک اینکه نبودن یک احساس را می‌توان از تغییر رفتار آدم‌ها حدس زد.",

          instruction:
            "متن زیر را بخوان:\n\n«در این شهر، مردم چیزهای تازه را کمتر امتحان می‌کنند. اگر چیزی عجیب در خیابان ببینند، معمولاً از کنارش می‌گذرند و نمی‌پرسند چیست.\n\nاگر کسی زمین بخورد، بیشتر مردم صبر می‌کنند تا خودش بلند شود. اگر کاری چند بار خراب شود، معمولاً کسی دوباره امتحانش نمی‌کند.\n\nمدرسه‌ها آرام و منظم‌اند. بچه‌ها بیشتر همان کارهایی را انجام می‌دهند که از قبل بلدند و کمتر کسی می‌پرسد: اگر جور دیگری انجامش بدهیم چه می‌شود؟»\n\nفکر می‌کنی در این شهر چه احساس‌هایی کم‌رنگ یا ناپدید شده‌اند؟",

          steps: [
            "متن را با دقت بخوان.",
            "دو یا سه احساس را انتخاب کن که فکر می‌کنی در این شهر کم‌رنگ شده‌اند.",
            "برای هر احساس، یک یا چند جمله از متن پیدا کن که تو را به این نتیجه رسانده است.",
            "یکی از این احساس‌ها را انتخاب کن و تصور کن اگر دوباره به شهر برگردد، اولین نشانه‌ی حضورش چه خواهد بود.",
            "یک متن کوتاه بنویس که نشان دهد مردم پس از بازگشت آن احساس چه تغییری می‌کنند.",
            "در پایان توضیح بده چرا فکر می‌کنی آن احساس برای زندگی مردم اهمیت دارد.",
          ],

          questions: [
            "فکر می‌کنی کدام احساس در این شهر کم‌رنگ شده است؟",
            "از کدام جمله‌ی متن به این نتیجه رسیدی؟",
            "آیا می‌توانی یک احساس دیگر پیدا کنی که با همین جمله‌ها جور باشد؟",
            "اگر آن احساس دوباره به شهر برگردد، اولین تغییر در رفتار مردم چیست؟",
            "آیا ممکن است نبودن یک احساس همیشه بد نباشد؟",
            "اگر فقط یکی از احساس‌های گمشده برگردد، کدام را انتخاب می‌کنی و چرا؟",
          ],

          teacherNote:
            "پاسخ واحدی وجود ندارد، اما هر برداشت باید به نشانه‌ای از متن متصل باشد. فعالیت را از «حدس زدن کلمه‌ی موردنظر معلم» دور نگه دارید. هدف، استنباط احساس از رفتار و سپس تصور کردن نقش آن احساس در زندگی است.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To strengthen the ability to infer feelings from behavior and situations, and understand that the absence of a feeling can sometimes be inferred from changes in people's behavior.",

    instruction:
      "Read the following text:\n\n'In this city, people are less willing to try new things. If they see something unusual in the street, they usually walk past it without asking what it is.\n\nIf someone falls, most people wait for them to get up on their own. If something goes wrong several times, people usually stop trying again.\n\nSchools are quiet and orderly. Children mostly do the things they already know how to do, and few people ask, \"What would happen if we did it differently?\"'\n\nWhat feelings do you think have faded or disappeared in this city?",

    steps: [
      "Read the text carefully.",
      "Choose two or three feelings that you think have faded in this city.",
      "For each feeling, find one or more sentences in the text that led you to this conclusion.",
      "Choose one of these feelings and imagine what the first sign of its return to the city would be.",
      "Write a short piece of text showing how people change after that feeling returns.",
      "At the end, explain why you think this feeling matters in people's lives.",
    ],

    questions: [
      "Which feeling do you think has faded in this city?",
      "Which sentence in the text led you to that conclusion?",
      "Can you think of another feeling that could also fit the same sentences?",
      "If that feeling returned to the city, what would be the first change in people's behavior?",
      "Could the absence of a feeling sometimes be a good thing?",
      "If only one of the missing feelings could return, which would you choose and why?",
    ],

    teacherNote:
      "There is no single answer, but every interpretation should be connected to a clue in the text. Keep the activity away from 'guessing the word the teacher has in mind.' The goal is to infer feelings from behavior and then imagine the role those feelings play in people's lives.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "03M-10",
        title: "ترسی که یک‌بار داشتم و گذشت",
        description:
          "روایت یک ترس کوچک از لحظه‌ی شروع تا زمانی که شدت آن تغییر می‌کند.",
           translations: {
  en: {
    title: "A Fear I Once Had That Passed",
    description:
      "Narrating a small fear from the moment it begins until its intensity changes.",
  },
},
        activity: {
          purpose:
            "کمک به دانش‌آموز برای مشاهده‌ی تغییر یک احساس در طول زمان و کشف اینکه چه چیزی می‌تواند شدت ترس را تغییر دهد.",

          instruction:
            "یک ترس کوچک و قابل‌روایت را به یاد بیاور؛ مثلاً ترس از یک صدا، تاریکی، یک حیوان، یک اتفاق یا یک موقعیت. لازم نیست درباره‌ی ترس‌های خیلی شخصی یا سنگین بنویسی. داستان را از لحظه‌ای شروع کن که ترس را احساس کردی و تا زمانی ادامه بده که فهمیدی دیگر مثل قبل نمی‌ترسی.",

          steps: [
            "یک ترس کوچک و قابل‌کنترل را انتخاب کن.",
            "لحظه‌ای را پیدا کن که برای اولین بار متوجه ترس شدی.",
            "تغییرهای بدن و فکر خودت را هنگام ترس توصیف کن.",
            "بگو چه چیزی باعث شد ترس ادامه پیدا کند یا بیشتر شود.",
            "لحظه‌ای را پیدا کن که ترس شروع به کم شدن کرد.",
            "پایان داستان را با توصیف احساسی بنویس که پس از کم شدن ترس داشتی.",
            "در پایان فکر کن آیا موقعیت تغییر کرد، یا نگاه و احساس تو نسبت به آن تغییر کرد.",
          ],

          questions: [
            "اولین نشانه‌ای که فهمیدی ترسیده‌ای چه بود؟",
            "در آن لحظه بدنت چه واکنشی نشان داد؟",
            "ذهنت چه چیزهایی را تصور می‌کرد؟",
            "چه چیزی باعث شد ترست بیشتر یا کمتر شود؟",
            "لحظه‌ای که فهمیدی دیگر مثل قبل نمی‌ترسی چه زمانی بود؟",
            "بعد از اینکه ترس کم شد، چه احساسی داشتی؟",
            "اگر دوباره همان موقعیت پیش بیاید، آیا واکنش تو مثل قبل خواهد بود؟ چرا؟",
          ],

          teacherNote:
            "دانش‌آموز را به انتخاب یک ترس کوچک و قابل‌کنترل هدایت کنید و او را مجبور به بازگویی تجربه‌ای حساس نکنید. ارزش فعالیت در مشاهده‌ی مسیر احساس است: شروع، افزایش، تغییر و کاهش؛ نه در شدت یا تلخی تجربه.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "To help students observe how a feeling changes over time and discover what can affect the intensity of fear.",

    instruction:
      "Remember a small fear that you can comfortably talk about, such as being afraid of a sound, the dark, an animal, an event, or a situation. You do not need to write about very personal or intense fears. Start your story at the moment you first felt afraid and continue until you realized you were no longer as afraid as before.",

    steps: [
      "Choose a small, manageable fear.",
      "Identify the moment when you first became aware of your fear.",
      "Describe the changes in your body and thoughts while you were afraid.",
      "Explain what made the fear continue or grow stronger.",
      "Identify the moment when your fear began to fade.",
      "Write the ending of your story by describing how you felt after the fear had lessened.",
      "At the end, think about whether the situation changed, or whether your perspective and feelings about it changed.",
    ],

    questions: [
      "What was the first sign that made you realize you were afraid?",
      "How did your body react at that moment?",
      "What kinds of things was your mind imagining?",
      "What made your fear grow stronger or weaker?",
      "When did you realize that you were no longer as afraid as before?",
      "How did you feel after your fear had faded?",
      "If the same situation happened again, would your reaction be the same as before? Why?",
    ],

    teacherNote:
      "Guide students toward choosing a small, manageable fear, and do not force them to recount a sensitive experience. The value of the activity lies in observing the course of a feeling: its beginning, increase, change, and decrease—not in the intensity or distressing nature of the experience.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
    ],
  },

  {
    id: "questioning",
    code: "09M",
    title: "پرسش‌نویسی",
    description:
      "یاد گرفتن اینکه پیش از پاسخ‌دادن، سؤال‌های بهتر، متفاوت‌تر و پُراطلاعات‌تر بسازیم.",
    translations: {
  en: {
    title: "Question Writing",
    description:
      "Learning to create better, more varied, and more informative questions before trying to answer.",
  },
},
      situations: [
      {
        id: "09M-01",
        title: "صد پرسش درباره‌ی یک قطره باران",
        description: "ساختن پرسش‌های متفاوت درباره‌ی چیزی ساده و آشنا.",
         translations: {
  en: {
    title: "One Hundred Questions About a Raindrop",
    description: "Creating different questions about something simple and familiar.",
  },
},
        activity: {
          purpose:
            "گسترش توانایی تولید پرسش و تجربه‌ی این نکته که یک موضوع ساده می‌تواند از زاویه‌های بسیار متفاوت بررسی شود.",
          instruction:
            "تصور کن یک قطره باران روی شیشه‌ی پنجره نشسته است. قرار نیست درباره‌اش پاسخ بدهی؛ قرار است هرچه بیشتر درباره‌اش سؤال بسازی. تلاش کن سؤال‌هایت شبیه هم نباشند و هر بار از زاویه‌ای تازه به قطره نگاه کنی.",
          steps: [
            "ابتدا پنج سؤال ساده درباره‌ی قطره باران بنویس.",
            "حالا سؤال‌هایی درباره‌ی گذشته‌ی قطره بساز؛ مثلاً از کجا آمده یا پیش از رسیدن به پنجره کجا بوده است.",
            "چند سؤال درباره‌ی آینده‌ی قطره بنویس.",
            "از زاویه‌ی یک دانشمند، یک شاعر، یک پرنده یا خود قطره سؤال بساز.",
            "حداقل سه سؤال بساز که پاسخشان فقط یک کلمه نباشد.",
            "در پایان، سه سؤال را انتخاب کن که خودت بیشتر از همه دوست داری پاسخشان را بدانی و توضیح بده چرا.",
          ],
          questions: [
            "کدام سؤال تو را بیشتر از همه کنجکاو می‌کند؟",
            "کدام سؤال از زاویه‌ای ساخته شده که ابتدا به ذهنت نمی‌رسید؟",
            "کدام سؤال پاسخ کوتاه ندارد؟",
            "آیا دو سؤال داری که درباره‌ی یک چیز باشند اما از دو زاویه‌ی کاملاً متفاوت پرسیده شده باشند؟",
            "اگر خود قطره می‌توانست از تو سؤال بپرسد، چه می‌پرسید؟",
          ],
          teacherNote:
            "هدف فقط رسیدن به عدد صد نیست. بهتر است پس از تولید سؤال‌ها، آن‌ها را از نظر تنوع زاویه و نوع کنجکاوی بررسی کنید. اگر دانش‌آموز سؤال‌های مشابه تولید کرد، او را به تغییر زاویه‌ی دید دعوت کنید.",
          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Expanding the ability to generate questions and discovering that a simple subject can be explored from many different angles.",
    instruction:
      "Imagine a raindrop resting on a windowpane. You are not supposed to answer questions about it; your task is to create as many questions as you can. Try to make your questions different from one another, looking at the raindrop from a fresh angle each time.",
    steps: [
      "First, write five simple questions about the raindrop.",
      "Now create questions about the raindrop's past. For example, where did it come from, or where was it before reaching the window?",
      "Write a few questions about the raindrop's future.",
      "Ask questions from the perspective of a scientist, a poet, a bird, or the raindrop itself.",
      "Create at least three questions that cannot be answered with just one word.",
      "Finally, choose the three questions you would most like to know the answers to, and explain why.",
    ],
    questions: [
      "Which question makes you the most curious?",
      "Which question comes from an angle you had not thought of at first?",
      "Which question does not have a short answer?",
      "Do you have two questions about the same thing that approach it from completely different angles?",
      "If the raindrop could ask you a question, what would it ask?",
    ],
    teacherNote:
      "The goal is not simply to reach the number one hundred. After generating the questions, it is better to examine them in terms of the variety of perspectives and types of curiosity they express. If students produce similar questions, invite them to change their point of view.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "09M-02",
        title: "پرسش‌های یک ربات تازه‌به‌دنیا‌آمده",
        description:
          "دیدن چیزهای آشنا از جایگاه موجودی که هیچ‌چیز درباره‌ی زندگی انسان‌ها نمی‌داند.",
           translations: {
  en: {
    title: "Questions from a Newly Awakened Robot",
    description:
      "Seeing familiar things from the perspective of a being that knows nothing about human life.",
  },
},
          activity: {
          purpose:
            "تقویت نگاه بیگانه به امور آشنا و کشف اینکه بسیاری از چیزهای روزمره فقط به دلیل عادت، بدیهی به نظر می‌رسند.",
          instruction:
            "یک ربات را تصور کن که امروز برای اولین بار هوشیار شده است. او هیچ‌چیز درباره‌ی زندگی انسان‌ها نمی‌داند؛ نه مدرسه را می‌شناسد، نه خانواده را، نه غذا خوردن را و نه حتی مفهوم «سلام کردن» را. سؤال‌های او را بنویس.",
          steps: [
            "پنج چیز کاملاً عادی از زندگی روزمره انتخاب کن.",
            "برای هرکدام یک سؤال بساز که یک انسان معمولاً به دلیل عادت آن را نمی‌پرسد.",
            "سؤال‌های ربات را طوری بنویس که واقعاً از ناآشنا بودن او با جهان ناشی شوند.",
            "یکی از سؤال‌ها را انتخاب کن و حدس بزن چرا پاسخ دادن به آن برای یک انسان دشوار است.",
            "در پایان، یکی از سؤال‌های ربات را خودت هم جدی بگیر و درباره‌اش فکر کن.",
          ],
          questions: [
            "ربات درباره‌ی کدام چیز عجیب‌ترین سؤال را پرسید؟",
            "کدام چیز روزمره بعد از نگاه ربات دیگر آن‌قدر بدیهی به نظر نمی‌رسد؟",
            "اگر ربات درباره‌ی مدرسه سؤال کند، چه می‌پرسد؟",
            "کدام سؤال او باعث شد خودت هم درباره‌ی چیزی دوباره فکر کنی؟",
            "اگر فقط یک سؤال از ربات می‌توانستی بپرسی، چه می‌پرسیدی؟",
          ],
          teacherNote:
            "دانش‌آموز را به سمت سؤال‌های صرفاً بامزه هدایت نکنید. ارزش فعالیت در غریب‌کردن امر آشناست؛ یعنی دیدن چیزی که به دلیل عادت دیگر درباره‌اش سؤال نمی‌کنیم.",
          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Developing the ability to look at familiar things as an outsider and discovering that many everyday things seem obvious only because we are used to them.",
    instruction:
      "Imagine a robot that has become conscious for the very first time today. It knows nothing about human life: it does not know what school or family is, how people eat, or even what it means to say hello. Write down the questions it might ask.",
    steps: [
      "Choose five completely ordinary things from everyday life.",
      "For each one, create a question that a human would not usually ask simply because they are so familiar with it.",
      "Write the robot's questions so that they genuinely arise from its unfamiliarity with the world.",
      "Choose one of the questions and guess why it might be difficult for a human to answer.",
      "Finally, take one of the robot's questions seriously yourself and think about it.",
    ],
    questions: [
      "What was the strangest question the robot asked?",
      "Which everyday thing no longer seems so obvious when seen through the robot's eyes?",
      "If the robot asked about school, what might it ask?",
      "Which of its questions made you rethink something yourself?",
      "If you could ask the robot only one question, what would it be?",
    ],
    teacherNote:
      "Do not steer students toward questions that are merely funny. The value of this activity lies in making the familiar seem unfamiliar: noticing things we no longer question because we are used to them.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "09M-03",
        title: "دستورالعملی با یک مرحله‌ی گمشده",
        description:
          "خواندن یک دستورالعمل ناقص و طرح سؤال‌هایی برای پیدا کردن اطلاعاتی که جا افتاده است.",
           translations: {
  en: {
    title: "Instructions with a Missing Step",
    description:
      "Reading an incomplete set of instructions and asking questions to find the missing information.",
  },
},
          activity: {
          purpose:
            "تقویت توانایی تشخیص اطلاعات ناقص و ساختن پرسش‌هایی که یک خلأ اطلاعاتی را آشکار می‌کنند.",
          instruction:
            "یک دستورالعمل به تو داده شده، اما یک مرحله‌ی مهم آن حذف شده است. تو نمی‌دانی دقیقاً چه چیزی جا افتاده. با پرسیدن سؤال‌های مناسب باید بفهمی چه اطلاعاتی کم است.",
          steps: [
            "دستورالعمل ناقص را با دقت بخوان.",
            "مشخص کن در کدام قسمت نمی‌توانی با اطمینان به مرحله‌ی بعد بروی.",
            "پنج سؤال بساز که به پیدا کردن مرحله‌ی گمشده کمک کنند.",
            "سؤال‌ها را از کلی به دقیق مرتب کن.",
            "یکی از سؤال‌ها را انتخاب کن که اگر فقط اجازه‌ی پرسیدن یک سؤال داشتی، آن را می‌پرسیدی.",
            "در پایان، مرحله‌ی گمشده را با توجه به شواهد موجود حدس بزن.",
          ],
          questions: [
            "دقیقاً کجا متوجه شدی که چیزی کم است؟",
            "کدام سؤال بیشترین اطلاعات را می‌تواند به تو بدهد؟",
            "چه اطلاعاتی هنوز در اختیار نداری؟",
            "آیا دو سؤال متفاوت می‌توانند به کشف یک اطلاعات یکسان کمک کنند؟",
            "اگر پاسخ یکی از سؤال‌ها غیرمنتظره باشد، چه سؤال دیگری می‌پرسی؟",
          ],
          teacherNote:
            "هدف فعالیت حدس زدن جواب معلم نیست؛ هدف تشخیص دقیق اطلاعات موردنیاز و ساختن سؤال‌هایی است که بتوانند خلأ را روشن کنند.",
          materials: {
            required: true,
            type: "text",
            items: ["/text/09M/09M-03.txt"],
          },
          translations: {
  en: {
    purpose:
      "Developing the ability to identify incomplete information and formulate questions that reveal what is missing.",
    instruction:
      "You have been given a set of instructions, but an important step has been removed. You do not know exactly what is missing. By asking suitable questions, you must figure out what information is needed.",
    steps: [
      "Read the incomplete instructions carefully.",
      "Identify the point at which you cannot confidently move on to the next step.",
      "Create five questions that could help you find the missing step.",
      "Arrange your questions from the broadest to the most specific.",
      "Choose the one question you would ask if you were allowed to ask only one.",
      "Finally, use the available clues to make an educated guess about the missing step.",
    ],
    questions: [
      "At exactly what point did you realize something was missing?",
      "Which question could give you the most information?",
      "What information do you still not have?",
      "Can two different questions help uncover the same piece of information?",
      "If the answer to one of your questions is unexpected, what would you ask next?",
    ],
    teacherNote:
      "The goal is not to guess the answer the teacher has in mind. The goal is to identify precisely what information is needed and create questions that can reveal the gap.",
    materials: {
      required: true,
      type: "text",
      items: ["/text/09M/09M-03.txt"],
    },
  },
},
        },
      },

      {
        id: "09M-04",
        title: "کفش وسط جنگل",
        description:
          "طرح سؤال درباره‌ی یک نشانه‌ی مبهم، بدون عجله برای ساختن یک توضیح قطعی.",
           translations: {
  en: {
    title: "A Shoe in the Middle of the Forest",
    description:
      "Asking questions about an ambiguous clue without rushing to form a definite explanation.",
  },
},
          activity: {
          purpose:
            "تقویت کنجکاوی و توانایی تولید پرسش درباره‌ی یک موقعیت مبهم، بدون اینکه اولین حدس به‌عنوان واقعیت پذیرفته شود.",
          instruction:
            "در وسط یک جنگل، یک کفش تنها پیدا کرده‌ای. هیچ‌کس اطراف آن نیست. کفش کاملاً معمولی به نظر می‌رسد، اما معلوم نیست چرا آنجاست. قبل از اینکه داستانی برایش بسازی، سؤال‌هایی بنویس که می‌توانند راز آن را روشن کنند.",
          steps: [
            "هر چیزی را که واقعاً از موقعیت می‌دانی مشخص کن.",
            "پنج سؤال درباره‌ی خود کفش بساز.",
            "چند سؤال درباره‌ی کسی که ممکن است صاحب آن باشد بساز.",
            "چند سؤال درباره‌ی محیط اطراف کفش بنویس.",
            "سؤال‌هایی بساز که بتوانند بین چند توضیح مختلف تفاوت ایجاد کنند.",
            "در پایان، دو یا سه فرضیه‌ی متفاوت درباره‌ی کفش بساز.",
          ],
          questions: [
            "کدام سؤال می‌تواند بیشترین اطلاعات را به تو بدهد؟",
            "چه چیزی را می‌دانی و چه چیزی را فقط حدس می‌زنی؟",
            "آیا می‌توانی دو توضیح کاملاً متفاوت برای وجود کفش بسازی؟",
            "برای تشخیص میان این دو توضیح چه سؤالی لازم است؟",
            "اگر فقط اجازه داشتی یک چیز دیگر را درباره‌ی موقعیت بفهمی، چه می‌پرسیدی؟",
          ],
          teacherNote:
            "تصویر لازم نیست. خود موقعیت «کفش وسط جنگل» عمداً ناقص و مبهم است تا دانش‌آموز با سؤال، اطلاعات موردنیازش را مشخص کند.",
          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Developing curiosity and the ability to generate questions about an ambiguous situation without accepting the first guess as fact.",
    instruction:
      "In the middle of a forest, you find a single shoe. There is no one around. The shoe looks completely ordinary, but it is unclear why it is there. Before making up a story about it, write questions that could help uncover its mystery.",
    steps: [
      "Identify everything you actually know about the situation.",
      "Create five questions about the shoe itself.",
      "Create a few questions about the person who might own it.",
      "Write a few questions about the area around the shoe.",
      "Create questions that could help distinguish between several possible explanations.",
      "Finally, come up with two or three different hypotheses about the shoe.",
    ],
    questions: [
      "Which question could give you the most information?",
      "What do you know, and what are you only guessing?",
      "Can you come up with two completely different explanations for why the shoe is there?",
      "What question would you need to ask to distinguish between those two explanations?",
      "If you were allowed to find out just one more thing about the situation, what would you ask?",
    ],
    teacherNote:
      "No image is needed. The situation of a shoe in the middle of a forest is deliberately incomplete and ambiguous, so students can use questions to identify what information they need.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "09M-05",
        title: "صدایی که نمی‌دانی از کجاست",
        description:
          "ساختن سؤال‌هایی که بتوانند میان احتمال‌های مختلف درباره‌ی یک صدای ناشناخته تفاوت ایجاد کنند.",
           translations: {
  en: {
    title: "A Sound Whose Source You Cannot Identify",
    description:
      "Creating questions that can distinguish between different possibilities about the source of an unfamiliar sound.",
  },
},
          activity: {
          purpose:
            "تقویت پرسش‌گری تحقیقی و استفاده از سؤال برای محدود کردن یک مسئله‌ی ناشناخته.",
          instruction:
            "صدایی را می‌شنوی، اما نمی‌دانی از کجا می‌آید. چند احتمال مختلف برای منبع صدا وجود دارد. قبل از اینکه تصمیم بگیری صدا چیست، سؤال‌هایی طراحی کن که با پاسخشان بتوانی احتمال‌ها را محدود کنی.",
          steps: [
            "صدای ناشناخته را با دقت گوش کن.",
            "چند احتمال متفاوت برای منبع صدا در نظر بگیر.",
            "سؤال‌هایی بساز که اطلاعات تازه‌ای درباره‌ی صدا به تو بدهند.",
            "سؤال‌هایی را انتخاب کن که بتوانند میان احتمال‌های مختلف تفاوت ایجاد کنند.",
            "بر اساس پاسخ‌های احتمالی، سه فرضیه درباره‌ی منبع صدا بساز.",
            "یک سؤال نهایی انتخاب کن که بیشترین کمک را به تشخیص میان فرضیه‌ها می‌کند.",
          ],
          questions: [
            "کدام سؤال بیشترین اطلاعات را می‌تواند به تو بدهد؟",
            "کدام سؤال می‌تواند چند احتمال را هم‌زمان کنار بزند؟",
            "اگر پاسخ یک سؤال «بله» باشد، چه احتمال‌هایی باقی می‌مانند؟",
            "اگر پاسخ «نه» باشد، چه چیزی تغییر می‌کند؟",
            "اگر پاسخ سؤال‌ها با حدس اولت جور درنیاید، چه سؤال تازه‌ای می‌پرسی؟",
          ],
          teacherNote:
            "هدف، حدس‌زدن سریع منبع صدا نیست. معیار مهم این است که سؤال تا چه اندازه اطلاعات تازه می‌دهد و میان احتمال‌ها تمایز ایجاد می‌کند.",
          materials: {
            required: true,
            type: "audio",
            items: ["/audio/09M/09M-05.mp3"],
          },
          translations: {
  en: {
    purpose:
      "Developing investigative questioning and using questions to narrow down an unknown problem.",
    instruction:
      "You hear a sound, but you do not know where it is coming from. There are several possible sources. Before deciding what the sound is, design questions whose answers could help you narrow down the possibilities.",
    steps: [
      "Listen carefully to the unfamiliar sound.",
      "Think of several different possible sources for it.",
      "Create questions that could give you new information about the sound.",
      "Choose questions that could help distinguish between the different possibilities.",
      "Based on the possible answers, come up with three hypotheses about the source of the sound.",
      "Choose one final question that would be most helpful in distinguishing between your hypotheses.",
    ],
    questions: [
      "Which question could give you the most information?",
      "Which question could rule out several possibilities at once?",
      "If the answer to a question is yes, which possibilities remain?",
      "If the answer is no, what changes?",
      "If the answers do not match your first guess, what new question would you ask?",
    ],
    teacherNote:
      "The goal is not to guess the source of the sound as quickly as possible. The important criteria are how much new information a question provides and how well it distinguishes between possibilities.",
    materials: {
      required: true,
      type: "audio",
      items: ["/audio/09M/09M-05.mp3"],
    },
  },
},
        },
      },

      {
        id: "09M-06",
        title: "یک جواب، پنج سؤال",
        description:
          "دریافت چند پاسخ کوتاه و ساختن سؤال‌های متفاوتی که بتوانند همان پاسخ‌ها را به دنبال داشته باشند.",
          translations: {
  en: {
    title: "One Answer, Five Questions",
    description:
      "Receiving several short answers and creating different questions that could lead to those exact answers.",
  },
},
          activity: {
          purpose:
            "درک این نکته که یک پاسخ کوتاه می‌تواند حاصل سؤال‌های کاملاً متفاوت باشد و تمرین انعطاف در ساختن سؤال.",
          instruction:
            "پنج پاسخ کوتاه به تو داده می‌شود. برای هر پاسخ، چند سؤال متفاوت بنویس که بتوانند دقیقاً با همان پاسخ جواب داده شوند. تلاش کن سؤال‌ها فقط با تغییر چند کلمه شبیه هم نباشند؛ برای هر پاسخ، موقعیت‌های متفاوتی تصور کن.",
          steps: [
            "هر پاسخ را با دقت بخوان.",
            "برای هر پاسخ، یک سؤال ساده و طبیعی بساز.",
            "حالا برای همان پاسخ، سؤال دیگری از یک موقعیت متفاوت بساز.",
            "یک سؤال بساز که زاویه‌ی دیگری نسبت به همان پاسخ داشته باشد.",
            "سؤال‌هایت را با هم مقایسه کن و ببین آیا واقعاً موقعیت‌های متفاوتی را می‌سازند.",
          ],
          questions: [
            "کدام پاسخ بیشترین سؤال‌های متفاوت را به ذهنت آورد؟",
            "کدام سؤال‌ها با وجود داشتن یک پاسخ مشترک، درباره‌ی موقعیت‌های کاملاً متفاوت بودند؟",
            "آیا می‌توانی برای یک پاسخ، سؤالی بسازی که اصلاً به ذهن دوستت نرسیده باشد؟",
            "کدام سؤال را از همه جالب‌تر می‌دانی و چرا؟",
          ],
          teacherNote:
            "هدف این نیست که یک سؤال را با چند واژه‌ی متفاوت تکرار کنند. ارزش فعالیت در ساختن موقعیت‌ها و زاویه‌های متفاوتی است که می‌توانند به یک پاسخ مشترک برسند.",
          materials: {
            required: true,
            type: "text",
            items: ["/text/09M/09M-06.txt"],
          },
          translations: {
  en: {
    purpose:
      "Understanding that one short answer can result from completely different questions and practicing flexibility in question formation.",
    instruction:
      "You will be given five short answers. For each answer, write several different questions that could be answered with exactly that answer. Try not to make your questions sound alike just by changing a few words. Imagine different situations for each answer.",
    steps: [
      "Read each answer carefully.",
      "For each answer, create one simple, natural question.",
      "Now create another question for the same answer, but imagine a different situation.",
      "Create a question that approaches the same answer from another angle.",
      "Compare your questions and see whether they really describe different situations.",
    ],
    questions: [
      "Which answer inspired the greatest number of different questions?",
      "Which questions shared the same answer but described completely different situations?",
      "Can you create a question for one answer that your friend might never have thought of?",
      "Which question do you find the most interesting, and why?",
    ],
    teacherNote:
      "The goal is not to repeat one question using different words. The value of this activity lies in creating different situations and perspectives that can lead to the same answer.",
    materials: {
      required: true,
      type: "text",
      items: ["/text/09M/09M-06.txt"],
    },
  },
},
        },
      },

      {
        id: "09M-07",
        title: "اگر فقط یک چیز را می‌دانستی...",
        description:
          "انتخاب یک سؤال مهم در موقعیتی که اطلاعات کمی درباره‌ی آن داریم.",
           translations: {
  en: {
    title: "If You Could Know Only One Thing...",
    description:
      "Choosing an important question in a situation where we have very little information.",
  },
},
          activity: {
          purpose:
            "تمرین تشخیص اینکه در یک موقعیت ناشناخته، دانستن کدام اطلاعات می‌تواند بیشترین کمک را به فهم موقعیت کند.",
          instruction:
            "فرض کن قرار است وارد جایی شوی که هیچ‌وقت آنجا نبوده‌ای. فقط می‌توانی یک سؤال بپرسی و فقط یک پاسخ بگیری. سؤال خودت را طوری انتخاب کن که دانستن پاسخ آن بیشترین کمک را به تو بکند.",
          steps: [
            "موقعیت را با دقت بخوان.",
            "چند سؤال مختلف که می‌توانی بپرسی در ذهن یا روی کاغذ بنویس.",
            "فکر کن پاسخ هر سؤال چه چیزی به تو خواهد گفت.",
            "فقط یک سؤال را انتخاب کن.",
            "توضیح بده چرا این سؤال را به سؤال‌های دیگر ترجیح دادی.",
            "فکر کن اگر پاسخ این سؤال را بدانی، چه چیزهایی برایت روشن می‌شود و چه چیزهایی هنوز ناشناخته می‌ماند.",
          ],
          questions: [
            "چه سؤال‌های دیگری می‌توانستی بپرسی؟",
            "چرا در نهایت همین سؤال را انتخاب کردی؟",
            "پاسخ این سؤال چه چیزی را برایت روشن می‌کند؟",
            "چه چیزهایی حتی بعد از گرفتن پاسخ هنوز برایت ناشناخته می‌ماند؟",
            "اگر فقط یک سؤال دیگر هم اجازه داشتی، چه می‌پرسیدی؟",
          ],
          teacherNote:
            "هدف پیدا کردن یک پاسخ درست نیست. معیار انتخاب باید از خود دانش‌آموز بیاید. می‌توان از او خواست نشان دهد هر سؤال چه اطلاعاتی در اختیارش می‌گذارد و چرا یکی را مهم‌تر دانسته است.",
          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practicing how to identify which piece of information would be most helpful in understanding an unfamiliar situation.",
    instruction:
      "Imagine you are about to enter a place you have never been before. You can ask only one question and receive only one answer. Choose your question so that knowing its answer would help you as much as possible.",
    steps: [
      "Read the situation carefully.",
      "Think of several different questions you could ask and write them down, either in your mind or on paper.",
      "Consider what each answer would tell you.",
      "Choose only one question.",
      "Explain why you chose this question over the others.",
      "Think about what would become clear if you knew the answer, and what would still remain unknown.",
    ],
    questions: [
      "What other questions could you have asked?",
      "Why did you finally choose this particular question?",
      "What would the answer to this question clarify for you?",
      "What would still remain unknown even after receiving the answer?",
      "If you were allowed to ask just one more question, what would it be?",
    ],
    teacherNote:
      "The goal is not to find one correct answer. The student should determine the criteria for making the choice. You can ask them to explain what information each question would provide and why they consider one more important than the others.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "09M-08",
        title: "سؤال قبل از اختراع",
        description:
          "فکرکردن به مسئله یا نیازی که می‌تواند پیش از یک اختراع به شکل یک سؤال ظاهر شود.",
          translations: {
  en: {
    title: "The Question Before the Invention",
    description:
      "Thinking about a problem or need that might have appeared as a question before an invention was created.",
  },
},
          activity: {
          purpose:
            "کمک به دانش‌آموز برای دیدن رابطه‌ی میان سؤال، نیاز، مسئله و پیدا کردن راه‌حل.",
          instruction:
            "یک وسیله‌ی آشنا را انتخاب کن؛ مثلاً تلفن، دوچرخه، چراغ، یخچال یا ساعت. حالا به زمانی برگرد که این وسیله هنوز وجود نداشت. فکر کن مردم با چه مشکلی روبه‌رو بودند و چه سؤال‌هایی می‌توانستند درباره‌ی آن مشکل بپرسند.",
          steps: [
            "یک وسیله‌ی آشنا انتخاب کن.",
            "فکر کن پیش از وجود آن وسیله، چه نیازی یا مشکلی وجود داشته است.",
            "چند سؤال درباره‌ی آن نیاز یا مشکل بساز.",
            "سعی کن سؤال‌ها مستقیماً یک راه‌حل خاص را پیشنهاد نکنند.",
            "یکی از سؤال‌ها را انتخاب کن که بتواند مسیر فکرکردن به یک راه‌حل را باز کند.",
          ],
          questions: [
            "چه چیزی باعث شد این سؤال برایت مهم شود؟",
            "آیا می‌توان برای یک مشکل، چند سؤال آغازگر متفاوت داشت؟",
            "کدام سؤال بیشتر خودِ مشکل را روشن می‌کند و کدام سؤال زودتر سراغ راه‌حل می‌رود؟",
            "اگر امروز این وسیله وجود نداشت، چه سؤال تازه‌ای ممکن بود مطرح شود؟",
          ],
          teacherNote:
            "هدف بازسازی تاریخ واقعی اختراع نیست. دانش‌آموز لازم نیست سؤال تاریخی مخترع را حدس بزند؛ مهم این است که ببیند یک سؤال چگونه می‌تواند یک نیاز را به مسئله‌ای قابل فکرکردن تبدیل کند.",
          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Helping students recognize the relationship between questions, needs, problems, and the search for solutions.",
    instruction:
      "Choose a familiar device, such as a telephone, bicycle, lamp, refrigerator, or clock. Now go back to a time when this device did not yet exist. Think about the problem people faced and the questions they might have asked about it.",
    steps: [
      "Choose a familiar device.",
      "Think about what need or problem existed before this device came along.",
      "Create several questions about that need or problem.",
      "Try to make sure your questions do not directly suggest a particular solution.",
      "Choose one question that could open up a path toward thinking about a solution.",
    ],
    questions: [
      "What made this question seem important to you?",
      "Can one problem have several different starting questions?",
      "Which question helps clarify the problem itself, and which one moves toward a solution more quickly?",
      "If this device did not exist today, what new question might people ask?",
    ],
    teacherNote:
      "The goal is not to reconstruct the actual history of the invention. Students do not need to guess the historical question asked by its inventor. What matters is recognizing how a question can turn a need into a problem that can be explored and thought about.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "09M-09",
        title: "سؤال‌های یک مسافر",
        description:
          "انتخاب پنج سؤال پُراطلاعات برای شناختن شهری که هیچ‌چیز درباره‌اش نمی‌دانی.",
           translations: {
  en: {
    title: "A Traveler's Questions",
    description:
      "Choosing five information-rich questions to learn about a city you know nothing about.",
  },
},
          activity: {
          purpose:
            "تمرین انتخاب سؤال‌هایی که با تعداد محدود، بیشترین اطلاعات را درباره‌ی یک موقعیت ناشناخته فراهم می‌کنند.",
          instruction:
            "برای اولین بار وارد شهری شده‌ای که هیچ‌چیز درباره‌اش نمی‌دانی. فقط پنج سؤال می‌توانی از یکی از ساکنان شهر بپرسی. سؤال‌هایت را طوری انتخاب کن که با همین پنج پاسخ، تا جای ممکن چیزهای زیادی درباره‌ی شهر بفهمی.",
          steps: [
            "تصور کن چه چیزهایی درباره‌ی شهر برایت ناشناخته است.",
            "سؤال‌های مختلفی پیشنهاد کن؛ فعلاً لازم نیست فقط پنج سؤال باشند.",
            "حالا فقط پنج سؤال را نگه دار.",
            "برای هر سؤال فکر کن پاسخ آن چه اطلاعاتی به تو می‌دهد.",
            "بررسی کن آیا سؤال‌هایت اطلاعات تکراری می‌گیرند یا هرکدام چیز تازه‌ای روشن می‌کنند.",
            "در پایان، پنج سؤال را به ترتیب اهمیت بچین.",
          ],
          questions: [
            "کدام سؤال بیشترین اطلاعات را در اختیارت می‌گذارد؟",
            "آیا یک سؤال می‌تواند درباره‌ی چند چیز مختلف به تو اطلاعات بدهد؟",
            "اگر مجبور شوی یکی از پنج سؤال را حذف کنی، کدام را حذف می‌کنی و چرا؟",
            "چه چیزی هنوز بعد از پنج پاسخ برایت ناشناخته می‌ماند؟",
            "اگر فقط یک سؤال دیگر فرصت داشتی، چه می‌پرسیدی؟",
          ],
          teacherNote:
            "پنج سؤال باید واقعاً محدودیت فعالیت باشند. هدف، پوشش اجباری دسته‌های مشخص نیست؛ دانش‌آموز باید خودش تشخیص دهد کدام سؤال‌ها بیشترین اطلاعات را فراهم می‌کنند.",
          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practicing how to choose questions that provide the greatest amount of information about an unfamiliar situation when the number of questions is limited.",
    instruction:
      "You have arrived in a city for the first time, and you know nothing about it. You can ask one of its residents only five questions. Choose your questions so that these five answers help you learn as much as possible about the city.",
    steps: [
      "Imagine what things about the city are still unknown to you.",
      "Come up with different possible questions. For now, you do not need to limit yourself to five.",
      "Now keep only five questions.",
      "For each question, think about what information its answer would give you.",
      "Check whether your questions ask for repeated information or whether each one reveals something new.",
      "Finally, arrange your five questions in order of importance.",
    ],
    questions: [
      "Which question gives you the greatest amount of information?",
      "Can one question give you information about several different things?",
      "If you had to remove one of your five questions, which would you remove, and why?",
      "What would still remain unknown after receiving all five answers?",
      "If you had the chance to ask just one more question, what would it be?",
    ],
    teacherNote:
      "The five-question limit should be a genuine constraint of the activity. The goal is not to cover a fixed set of categories. Students should decide for themselves which questions would provide the most information.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "09M-10",
        title: "جعبه‌ی بسته",
        description:
          "ساختن سؤال‌هایی که با پاسخ‌های بله و نه، احتمال‌های مختلف را درباره‌ی یک چیز ناشناخته کم کنند.",
           translations: {
  en: {
    title: "The Sealed Box",
    description:
      "Creating questions with yes-or-no answers that narrow down the possibilities about something unknown.",
  },
},
          activity: {
          purpose:
            "تجربه‌ی عملی این نکته که سؤال‌ها ارزش یکسانی ندارند و یک سؤال خوب می‌تواند با یک پاسخ، احتمال‌های زیادی را کنار بگذارد.",
          instruction:
            "یک جعبه‌ی بسته روی میز است. چیزی داخل آن قرار دارد، اما نمی‌توانی آن را ببینی. فقط می‌توانی سؤال‌هایی بپرسی که جوابشان «بله» یا «نه» باشد. یک قانون هم داری: حق نداری بپرسی «داخل جعبه چیست؟» سؤال‌هایت را طوری بساز که با هر پاسخ، بتوانی بعضی از احتمال‌ها را کنار بگذاری و به پاسخ نزدیک‌تر شوی.",
          steps: [
            "چند چیز متفاوت را که ممکن است داخل جعبه باشند تصور کن.",
            "اولین سؤال بله یا خیری را که می‌تواند بعضی از احتمال‌ها را کنار بگذارد بنویس.",
            "با توجه به پاسخ فرضی، سؤال بعدی را انتخاب کن.",
            "این کار را ادامه بده و ببین با چند سؤال می‌توانی به یک حدس مشخص برسی.",
            "حالا به سؤال‌هایت نگاه کن و ببین کدام سؤال بیشترین احتمال‌ها را از بین برده است.",
            "در پایان، یک سؤال بنویس که جوابش بله یا نه باشد اما اطلاعات خیلی کمی درباره‌ی داخل جعبه به تو بدهد.",
          ],
          questions: [
            "کدام سؤال بیشترین احتمال‌ها را کنار گذاشت؟",
            "چرا آن سؤال اطلاعات بیشتری به تو داد؟",
            "آیا سؤالی داشتی که جوابش را فهمیدی اما هنوز چیز زیادی درباره‌ی جعبه نمی‌دانستی؟",
            "اگر می‌توانستی یکی از سؤال‌هایت را عوض کنی، کدام را عوض می‌کردی و چرا؟",
            "آیا می‌توانی سؤالی بسازی که فقط یک احتمال را از بین ببرد؟",
          ],
          teacherNote:
            "لازم نیست دانش‌آموز واقعاً در تعداد مشخصی از سؤال‌ها به جواب برسد. هدف اصلی تجربه‌ی تفاوت میان سؤال‌های کم‌اطلاع و پُراطلاع است. بهتر است در پایان درباره‌ی این صحبت شود که چرا بعضی سؤال‌ها با یک پاسخ، احتمال‌های زیادی را حذف می‌کنند.",
          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Experiencing firsthand that not all questions are equally valuable, and that a good question can eliminate many possibilities with a single answer.",
    instruction:
      "There is a sealed box on the table. Something is inside it, but you cannot see it. You can only ask questions that can be answered with yes or no. There is one rule: you are not allowed to ask, \"What is inside the box?\" Build your questions so that each answer helps you rule out some possibilities and get closer to figuring out what is inside.",
    steps: [
      "Imagine several different things that might be inside the box.",
      "Write your first yes-or-no question that could rule out some of the possibilities.",
      "Based on the hypothetical answer, choose your next question.",
      "Continue this process and see how many questions it takes to arrive at a specific guess.",
      "Now look back at your questions and identify which one eliminated the greatest number of possibilities.",
      "Finally, write a yes-or-no question whose answer would give you very little information about what is inside the box.",
    ],
    questions: [
      "Which question ruled out the greatest number of possibilities?",
      "Why did that question give you more information?",
      "Did you ask a question whose answer you found out, but still knew very little about the box?",
      "If you could change one of your questions, which would you change, and why?",
      "Can you create a question that rules out only one possibility?",
    ],
    teacherNote:
      "Students do not need to reach an answer within a specific number of questions. The main goal is to experience the difference between questions that provide little information and those that provide a lot. At the end, it is useful to discuss why some questions can eliminate many possibilities with a single answer.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
    ],
  },

  {
    id: "rewriting",
    code: "08M",
    title: "بازنویسی",
    description:
      "برگشتن به نوشته و دیدن اینکه با تغییر در نگاه، ساختار یا بیان، چه چیزهایی در متن عوض می‌شوند.",
       translations: {
  en: {
    title: "Rewriting",
    description:
      "Returning to a piece of writing and discovering what changes when we shift our perspective, structure, or way of expression.",
  },
},
    situations: [
      {
        id: "08M-01",
        title: "کوچکش کن",
        description:
          "بازنویسی نوشته‌ی قبلی در نصف تعداد کلمه‌ها، بدون از دست دادن مهم‌ترین اتفاق، ایده یا احساس آن.",
         translations: {
  en: {
    title: "Make It Smaller",
    description:
      "Rewriting an earlier piece in half the number of words without losing its most important event, idea, or feeling.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی تشخیص بخش‌های مهم نوشته، حذف جزئیات کم‌اهمیت و فشرده‌کردن متن بدون از دست دادن هسته‌ی اصلی.",

          instruction:
            "یکی از نوشته‌های قبلی خودت را انتخاب کن. حالا تصور کن فقط نصف فضای قبلی را برای نوشتن در اختیار داری. نوشته را دوباره بنویس، اما مهم‌ترین اتفاق، ایده یا احساس آن را نگه دار.",

          steps: [
            "یک نوشته‌ی قبلی خودت را انتخاب کن.",
            "تعداد تقریبی کلمه‌های آن را مشخص کن و هدف خود را حدود نصف آن قرار بده.",
            "بخش‌هایی را پیدا کن که حذفشان به اصل نوشته آسیب نمی‌زند.",
            "نوشته را کوتاه‌تر کن و مهم‌ترین بخش آن را نگه دار.",
            "نسخه‌ی جدید را با نسخه‌ی قبلی مقایسه کن.",
            "توضیح بده چه چیزی را حذف کردی و چرا.",
          ],

          questions: [
            "کدام بخش‌ها را حذف کردی؟",
            "چطور تصمیم گرفتی چه چیزهایی بمانند و چه چیزهایی حذف شوند؟",
            "آیا مهم‌ترین اتفاق، ایده یا احساس نوشته هنوز در نسخه‌ی جدید دیده می‌شود؟",
            "حذف کدام بخش برایت سخت‌تر بود؟",
          ],

          teacherNote:
            "هدف فقط کوتاه‌کردن متن نیست؛ دانش‌آموز باید میان بخش‌های مهم و کم‌اهمیت تمایز بگذارد و هسته‌ی اصلی نوشته را حفظ کند.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Developing the ability to identify the important parts of a piece of writing, remove less important details, and condense the text without losing its core.",
    instruction:
      "Choose one of your earlier pieces of writing. Now imagine that you have only half as much space as before. Rewrite it, but keep its most important event, idea, or feeling.",
    steps: [
      "Choose one of your earlier pieces of writing.",
      "Estimate its word count and set a target of about half that number.",
      "Identify the parts you can remove without harming the main idea of the writing.",
      "Shorten the text while keeping its most important part.",
      "Compare the new version with the original.",
      "Explain what you removed and why.",
    ],
    questions: [
      "Which parts did you remove?",
      "How did you decide what to keep and what to remove?",
      "Can the most important event, idea, or feeling still be found in the new version?",
      "Which part was the hardest for you to remove?",
    ],
    teacherNote:
      "The goal is not simply to make the text shorter. Students should distinguish between important and less important parts while preserving the core of their writing.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "08M-02",
        title: "از زبان یک نفر دیگر",
        description:
          "بازنویسی یک داستان قبلی از نگاه شخصیت یا شاهد دیگری که در همان ماجرا حضور داشته است.",
          translations: {
  en: {
    title: "From Someone Else's Point of View",
    description:
      "Rewriting an earlier story from the perspective of another character or witness who was present in the same events.",
  },
},
        activity: {
          purpose:
            "تجربه‌ی این نکته که تغییر راوی می‌تواند اطلاعات، احساسات و برداشت‌های یک داستان را تغییر دهد.",

          instruction:
            "یکی از داستان‌های قبلی خودت را انتخاب کن. همان ماجرا را از زبان یک شخصیت یا شاهد دیگر که در آن حضور داشته، دوباره بنویس. اتفاق اصلی لازم نیست عوض شود؛ اما ممکن است راوی جدید چیزهای دیگری ببیند، چیزهایی را نداند یا برداشت متفاوتی داشته باشد.",

          steps: [
            "یکی از داستان‌های قبلی خودت را انتخاب کن.",
            "یک شخصیت یا شاهد دیگر را که در ماجرا حضور داشته انتخاب کن.",
            "فکر کن او چه چیزهایی را می‌داند، چه چیزهایی را نمی‌داند و چه چیزی برایش مهم‌تر است.",
            "همان ماجرا را از زبان او دوباره بنویس.",
            "دو نسخه را کنار هم بگذار و تفاوت‌هایشان را پیدا کن.",
          ],

          questions: [
            "راوی جدید چه چیزی را متفاوت دید؟",
            "چه چیزی را راوی جدید نمی‌دانست؟",
            "احساس یا برداشت او از اتفاق چه تفاوتی داشت؟",
            "کدام بخش داستان به خاطر تغییر راوی عوض شد؟",
          ],

          teacherNote:
            "هدف تغییر صرفاً ضمیر نیست؛ راوی جدید به دلیل جایگاه و دانسته‌های متفاوت ممکن است چیزهایی ببیند یا بداند که راوی قبلی ندیده یا نمی‌دانسته و برخی چیزها را از دست بدهد. داستان لازم نیست از نظر اتفاق‌های اصلی کاملاً متفاوت شود.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Experiencing how changing the narrator can alter the information, feelings, and interpretations in a story.",
    instruction:
      "Choose one of your earlier stories. Rewrite the same events from the perspective of another character or witness who was present. The main events do not have to change, but the new narrator may notice different things, be unaware of certain details, or interpret what happened differently.",
    steps: [
      "Choose one of your earlier stories.",
      "Choose another character or witness who was present in the events.",
      "Think about what this person knows, what they do not know, and what matters most to them.",
      "Rewrite the same events from their point of view.",
      "Place the two versions side by side and identify their differences.",
    ],
    questions: [
      "What did the new narrator see differently?",
      "What did the new narrator not know?",
      "How were their feelings or interpretations of the events different?",
      "Which part of the story changed because the narrator changed?",
    ],
    teacherNote:
      "The goal is not simply to change the pronouns. Because of their different position and knowledge, the new narrator may notice or know things the previous narrator did not, while missing other details. The main events of the story do not need to become completely different.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "08M-03",
        title: "یک چیز را عوض کن",
        description:
          "بازنویسی یک داستان قبلی با تغییر فقط یک عنصر و دنبال‌کردن پیامدهای آن تغییر.",
         translations: {
  en: {
    title: "Change One Thing",
    description:
      "Rewriting an earlier story by changing just one element and following the consequences of that change.",
  },
},
        activity: {
          purpose:
            "تجربه‌ی دیدن رابطه‌ی میان اجزای داستان و اینکه یک تغییر کوچک می‌تواند بخش‌های دیگری از داستان را نیز تغییر دهد.",

          instruction:
            "یکی از داستان‌های قبلی خودت را انتخاب کن. فقط یک چیز در آن را تغییر بده؛ مثلاً زمان، مکان، یک شخصیت یا یکی از اتفاق‌ها. بعد داستان را دوباره بنویس و ببین این تغییر، چه چیزهای دیگری در داستانت تغییر می‌دهد.",

          steps: [
            "یکی از داستان‌های قبلی خودت را انتخاب کن.",
            "فقط یکی از این چهار مورد را برای تغییر انتخاب کن: زمان، مکان، یک شخصیت یا یک اتفاق.",
            "تغییر موردنظر را مشخص کن.",
            "داستان را با همین تغییر دوباره بنویس.",
            "ببین چه بخش‌های دیگری به‌خاطر این تغییر عوض شده‌اند.",
          ],

          questions: [
            "دقیقاً چه چیزی را تغییر دادی؟",
            "کدام بخش داستان مجبور شد به دنبال آن تغییر کند؟",
            "آیا تغییر تو نتیجه یا پایان داستان را هم تغییر داد؟",
            "کدام پیامد تغییرت برایت غیرمنتظره‌تر بود؟",
          ],

          teacherNote:
            "هدف فقط تغییر یک جزئیات نیست؛ دانش‌آموز باید پیامد تغییر را در بخش‌های دیگر دنبال کند. لازم نیست همه‌چیز تغییر کند؛ یک یا دو بخش دیگر هم کافی است.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Exploring the relationships between the elements of a story and discovering how one small change can affect other parts of it.",
    instruction:
      "Choose one of your earlier stories. Change just one thing in it, such as the time, place, a character, or one of the events. Then rewrite the story and see what else changes as a result.",
    steps: [
      "Choose one of your earlier stories.",
      "Choose just one of these four elements to change: the time, the place, a character, or an event.",
      "Decide exactly what you want to change.",
      "Rewrite the story with that change.",
      "Notice which other parts of the story have changed as a result.",
    ],
    questions: [
      "What exactly did you change?",
      "Which part of the story had to change as a result?",
      "Did your change also affect the outcome or ending of the story?",
      "Which consequence of your change surprised you the most?",
    ],
    teacherNote:
      "The goal is not simply to change one detail. Students should follow the consequences of that change through other parts of the story. Not everything needs to change; one or two additional changes are enough.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "08M-04",
        title: "یک بخش را از نو بساز",
        description:
          "انتخاب یک بخش از داستان قبلی و بازنویسی دوباره‌ی همان بخش، بدون تغییر دادن اتفاق اصلی داستان.",
          translations: {
  en: {
    title: "Rebuild One Part",
    description:
      "Choosing one part of an earlier story and rewriting that same part without changing the main event of the story.",
  },
},
        activity: {
          purpose:
            "تمرین بازآفرینی یک بخش از متن و تجربه‌ی اینکه یک اتفاق واحد را می‌توان با توصیف، گفت‌وگو، رفتار و شیوه‌ی بیان متفاوت دوباره ساخت.",

          instruction:
            "یکی از داستان‌های قبلی خودت را انتخاب کن. یک بخش یا صحنه از آن را انتخاب کن و همان بخش را از نو بنویس. اتفاق اصلی آن بخش را نگه دار، اما می‌توانی توصیف‌ها، گفت‌وگوها، رفتار شخصیت‌ها یا شیوه‌ی بیان را تغییر بدهی.",

          steps: [
            "یکی از داستان‌های قبلی خودت را انتخاب کن.",
            "یک بخش یا صحنه‌ی مشخص از داستان را انتخاب کن.",
            "اتفاق اصلی آن بخش را مشخص کن.",
            "همان بخش را از نو بنویس و در شیوه‌ی بیان یا جزئیات آن تغییر ایجاد کن.",
            "بخش جدید را با نسخه‌ی قبلی مقایسه کن.",
          ],

          questions: [
            "چه چیزی را در این بخش تغییر دادی؟",
            "چه چیزی را عمداً همان‌طور نگه داشتی؟",
            "نسخه‌ی جدید چه تفاوتی در تصویر یا احساس صحنه ایجاد کرده است؟",
            "کدام نسخه را بیشتر دوست داری؟ چرا؟",
          ],

          teacherNote:
            "تمرکز فعالیت روی بازسازی یک بخش مشخص از متن است، نه تغییر دادن کل داستان. اتفاق اصلی می‌تواند همان بماند، اما دانش‌آموز باید برای ساختن دوباره‌ی آن بخش انتخاب‌های تازه‌ای داشته باشد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Practicing the recreation of a section of text and discovering that the same event can be rebuilt through different descriptions, dialogue, actions, and ways of expression.",
    instruction:
      "Choose one of your earlier stories. Select one part or scene and rewrite that same section from scratch. Keep its main event, but feel free to change the descriptions, dialogue, characters' actions, or way of expressing things.",
    steps: [
      "Choose one of your earlier stories.",
      "Select a specific part or scene from the story.",
      "Identify the main event in that section.",
      "Rewrite that section from scratch, making changes to the way it is expressed or to its details.",
      "Compare the new section with the original version.",
    ],
    questions: [
      "What did you change in this section?",
      "What did you deliberately keep the same?",
      "How does the new version change the image or feeling of the scene?",
      "Which version do you like more? Why?",
    ],
    teacherNote:
      "The focus is on rebuilding one specific section of the text, not changing the entire story. The main event can remain the same, but students should make new creative choices when reconstructing that section.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "08M-05",
        title: "پایان را دوباره بنویس",
        description:
          "بازنویسی پایان یک داستان قبلی و اصلاح بخش‌های لازم داستان برای هماهنگ شدن با پایان تازه.",
         translations: {
  en: {
    title: "Rewrite the Ending",
    description:
      "Rewriting the ending of an earlier story and revising the necessary parts of the story to make them fit the new ending.",
  },
},
        activity: {
          purpose:
            "تجربه‌ی این نکته که تغییر پایان یک داستان ممکن است به تغییر یا بازنگری بخش‌های قبلی آن نیاز داشته باشد و بخش‌های مختلف داستان به یکدیگر وابسته‌اند.",

          instruction:
            "یکی از داستان‌های قبلی خودت را انتخاب کن. یک پایان متفاوت برای آن بساز؛ مثلاً تصمیم یک شخصیت، یک اتفاق یا نتیجه‌ی ماجرا را تغییر بده. بعد به بخش‌های قبلی داستان نگاه کن و ببین آیا چیزی هست که دیگر با پایان تازه جور درنمی‌آید. فقط همان بخش‌های لازم را بازنویسی کن.",

          steps: [
            "یکی از داستان‌های قبلی خودت را انتخاب کن.",
            "پایان فعلی داستان را مشخص کن.",
            "یک پایان متفاوت برای داستان بساز.",
            "ببین آیا بخش‌هایی از قبل وجود دارند که با پایان تازه دیگر جور درنمی‌آیند.",
            "فقط بخش‌های لازم را برای هماهنگ شدن با پایان جدید بازنویسی کن.",
            "نسخه‌ی قدیمی و جدید را با هم مقایسه کن.",
          ],

          questions: [
            "کدام بخش قبلی داستان مجبور شد تغییر کند؟",
            "چرا آن بخش با پایان جدید جور درنمی‌آمد؟",
            "چه چیزهایی را با وجود تغییر پایان، همان‌طور نگه داشتی؟",
            "آیا پایان جدید معنای یکی از اتفاق‌های قبلی را تغییر داد؟",
            "اگر آن بخش قبلی را تغییر نمی‌دادی، چه چیزی در داستان ناهماهنگ به نظر می‌رسید؟",
          ],

          teacherNote:
            "هدف فقط ساختن یک پایان متفاوت نیست؛ دانش‌آموز باید ببیند پایان تازه ممکن است با بعضی اتفاق‌ها یا تصمیم‌های قبلی ناسازگار شود و برای هماهنگ شدن، فقط بخش‌های مرتبط را تغییر دهد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Discovering that changing the ending of a story may require revising earlier parts of it, and that different parts of a story depend on one another.",
    instruction:
      "Choose one of your earlier stories. Create a different ending for it by changing, for example, a character's decision, an event, or the outcome of the story. Then look back at the earlier parts and see whether anything no longer fits the new ending. Rewrite only the parts that need to change.",
    steps: [
      "Choose one of your earlier stories.",
      "Identify the story's current ending.",
      "Create a different ending for the story.",
      "Check whether any earlier parts no longer fit the new ending.",
      "Rewrite only the parts that need to change to fit the new ending.",
      "Compare the old and new versions.",
    ],
    questions: [
      "Which earlier part of the story had to change?",
      "Why did that part no longer fit the new ending?",
      "What did you keep unchanged despite changing the ending?",
      "Did the new ending change the meaning of any earlier event?",
      "If you had not changed that earlier part, what would have seemed inconsistent in the story?",
    ],
    teacherNote:
      "The goal is not simply to create a different ending. Students should notice that a new ending may conflict with some earlier events or decisions, and revise only the related parts to make the story coherent.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "08M-06",
        title: "یک داستان در پنج جمله",
        description:
          "بازگویی یک داستان از کتاب کودک در پنج جمله، با نگه‌داشتن اتفاق‌ها و اطلاعات ضروری آن.",
          translations: {
  en: {
    title: "A Story in Five Sentences",
    description:
      "Retelling a story from a children's book in five sentences while preserving its essential events and information.",
  },
},
        activity: {
          purpose:
            "تقویت توانایی تشخیص اتفاق‌ها و اطلاعات مهم در یک داستان و بازسازی فشرده‌ی آن در قالبی کوتاه و منسجم.",

          instruction:
            "یک داستان کوتاه از یک کتاب کودک انتخاب کن. داستان را بخوان و بعد آن را دقیقاً در پنج جمله بازگو کن. لازم نیست همه‌ی جزئیات داستان را نگه داری؛ تلاش کن پنج جمله‌ات برای فهمیدن ماجرای اصلی کافی باشند.",

          steps: [
            "یک داستان کوتاه از یک کتاب کودک انتخاب کن.",
            "داستان را با دقت بخوان.",
            "اتفاق‌ها و اطلاعاتی را که برای فهم داستان ضروری‌اند مشخص کن.",
            "داستان را دقیقاً در پنج جمله بازگو کن.",
            "نسخه‌ی پنج‌جمله‌ای خودت را با داستان اصلی مقایسه کن.",
          ],

          questions: [
            "کدام اتفاق‌ها را نگه داشتی؟",
            "کدام جزئیات را کنار گذاشتی؟",
            "اگر یکی از پنج جمله را حذف کنی، چه چیزی از داستان از دست می‌رود؟",
            "آیا پنج جمله‌ی تو برای فهمیدن ماجرای اصلی کافی هستند؟",
          ],

          teacherNote:
            "هدف کوتاه‌کردن مکانیکی داستان نیست؛ دانش‌آموز باید تشخیص دهد برای بازگویی یک داستان، کدام اتفاق‌ها و اطلاعات ضروری‌اند. بهتر است داستان انتخاب‌شده کوتاه و متناسب با سن دانش‌آموزان باشد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Developing the ability to identify the important events and information in a story and reconstruct it in a concise, coherent form.",
    instruction:
      "Choose a short story from a children's book. Read the story, then retell it in exactly five sentences. You do not need to keep every detail. Try to make your five sentences sufficient for someone to understand the main story.",
    steps: [
      "Choose a short story from a children's book.",
      "Read the story carefully.",
      "Identify the events and information that are essential to understanding the story.",
      "Retell the story in exactly five sentences.",
      "Compare your five-sentence version with the original story.",
    ],
    questions: [
      "Which events did you keep?",
      "Which details did you leave out?",
      "If you remove one of the five sentences, what would be lost from the story?",
      "Are your five sentences enough to understand the main story?",
    ],
    teacherNote:
      "The goal is not to shorten the story mechanically. Students should identify which events and pieces of information are essential to retelling it. The chosen story should preferably be short and appropriate for the students' age.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
  id: "08M-07",
  title: "داستانی را به شیوه‌ی خودت بازنویسی کن",
  description:
    "بازآفرینی یک داستان آشنا به شکلی تازه، در حالی که ماجرا یا ایده‌ی اصلی آن حفظ شود.",

  translations: {
    en: {
      title: "Rewrite a Story in Your Own Way",
      description:
        "Retelling a familiar story in a new way while keeping its main idea or central events.",
    },
  },

  activity: {
    purpose:
      "تمرین بازآفرینی یک داستان موجود و تجربه‌ی این نکته که می‌توان یک ماجرا یا ایده را با شیوه‌ای تازه بیان کرد، بدون اینکه اصل آن از دست برود.",

    instruction:
      "یک داستان را انتخاب کن؛ می‌تواند داستانی از کتاب درسی، یک کتاب داستان یا قصه‌ای باشد که قبلاً شنیده‌ای. آن را دوباره بخوان یا به یاد بیاور و سپس همان داستان را به شیوه‌ای تازه بازنویسی کن. می‌توانی راوی، زاویه‌ی دید، گفت‌وگوها، ترتیب اتفاق‌ها یا شیوه‌ی بیان را تغییر بدهی؛ اما سعی کن هسته‌ی اصلی داستان همچنان در نوشته‌ی تو باقی بماند.",

    steps: [
      "یک داستان آشنا انتخاب کن.",
      "داستان را بخوان یا به یاد بیاور و مشخص کن ماجرای اصلی آن چیست.",
      "تصمیم بگیر کدام بخش داستان را می‌خواهی تغییر بدهی.",
      "داستان را با تغییر خودت دوباره بنویس.",
      "نوشته‌ی خودت را با داستان اصلی مقایسه کن.",
    ],

    questions: [
      "در داستان تو چه چیزی با نسخه‌ی اصلی فرق کرده است؟",
      "چه چیزی را عمداً همان‌طور نگه داشتی؟",
      "تغییر تو چه اثری روی داستان یا شیوه‌ی روایت آن گذاشت؟",
      "آیا تغییر یک بخش باعث شد بخش‌های دیگری از داستانت هم تغییر کنند؟",
    ],

    teacherNote:
      "داستان می‌تواند از کتاب درسی، یک کتاب داستان یا قصه‌ای آشنا انتخاب شود. بهتر است دانش‌آموزان امکان انتخاب داستان را داشته باشند. هدف فعالیت، جایگزین کردن چند واژه با واژه‌های دیگر نیست؛ دانش‌آموز باید داستان را دوباره بسازد و در عین حال، هسته‌ی اصلی آن را حفظ کند. تغییر می‌تواند در راوی، زاویه‌ی دید، گفت‌وگوها، ترتیب اتفاق‌ها یا شیوه‌ی بیان باشد. لازم نیست همه‌ی این موارد تغییر کنند.",

    materials: {
      required: false,
      type: "none",
      items: [],
    },

    translations: {
      en: {
        purpose:
          "To practise reimagining an existing story and discover how the same events or central idea can be expressed in a new way without losing what makes the story itself.",

        instruction:
          "Choose a story. It could be from a school textbook, a storybook, or a tale you have heard before. Read it again or recall what happens, then rewrite the story in a new way. You can change the narrator, point of view, dialogue, order of events, or style of telling. Try to keep the central idea or main events of the original story.",

        steps: [
          "Choose a familiar story.",
          "Read or recall the story and identify its main events or central idea.",
          "Decide which part or parts you want to change.",
          "Rewrite the story using your own changes.",
          "Compare your version with the original story.",
        ],

        questions: [
          "What is different in your version of the story?",
          "What did you deliberately keep the same?",
          "How did your changes affect the story or the way it is told?",
          "Did changing one part of the story lead you to change other parts as well?",
        ],

        teacherNote:
          "The story may come from a school textbook, a storybook, or a familiar tale. Whenever possible, allow students to choose their own stories. The aim is not simply to replace a few words with synonyms. Students should reconstruct the story while preserving its central idea or main events. Changes may involve the narrator, point of view, dialogue, sequence of events, or style of telling. Students do not need to change all of these elements.",

        materials: {
          required: false,
          type: "none",
          items: [],
        },
      },
    },
  },
},

      {
        id: "08M-08",
        title: "صدایش را عوض کن",
        description:
          "بازنویسی یک داستان با تغییر اثری که قرار است روی خواننده بگذارد؛ مثلاً خنده‌دار، ترسناک یا هیجان‌انگیز کردن همان اتفاق.",
          translations: {
  en: {
    title: "Change Its Tone",
    description:
      "Rewriting a story to change its intended effect on the reader, for example, making the same events funny, frightening, or exciting.",
  },
},
        activity: {
          purpose:
            "تجربه‌ی این نکته که با تغییر واژه‌ها، جزئیات و شیوه‌ی بیان می‌توان اثر یک متن بر خواننده را تغییر داد، حتی وقتی اتفاق اصلی همان می‌ماند.",

          instruction:
            "یکی از نوشته‌های قبلی خودت را انتخاب کن. همان اتفاق را یک بار طوری دوباره بنویس که خواننده را بترساند یا هیجان‌زده کند و یک بار طوری بنویس که او را بخنداند. اتفاق اصلی می‌تواند همان باشد؛ چیزی که تغییر می‌کند، شیوه‌ی بیان آن است.",

          steps: [
            "یک نوشته‌ی قبلی خودت را انتخاب کن.",
            "تصمیم بگیر می‌خواهی خواننده بعد از خواندن آن چه احساسی پیدا کند.",
            "همان بخش یا اتفاق را طوری بازنویسی کن که این اثر را ایجاد کند.",
            "در بازنویسی دوم، اثر متفاوتی روی خواننده ایجاد کن.",
            "دو نسخه را کنار هم بگذار و تفاوت‌هایشان را پیدا کن.",
          ],

          questions: [
            "در هر نسخه می‌خواستی خواننده چه احساسی پیدا کند؟",
            "کدام واژه یا جزئیات بیشترین تغییر را ایجاد کرد؟",
            "چه چیزی در اتفاق اصلی ثابت ماند؟",
            "کدام نسخه بیشتر توانست اثر موردنظرت را ایجاد کند؟",
          ],

          teacherNote:
            "لازم نیست دانش‌آموز مفهوم «لحن» را به‌صورت نظری بداند. تمرکز فعالیت بر تجربه‌ی عملی است: همان اتفاق را با شیوه‌ی بیان متفاوت طوری بنویسد که اثر متفاوتی روی خواننده بگذارد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Experiencing how changing words, details, and ways of expression can alter the effect of a text on its reader, even when the main events remain the same.",
    instruction:
      "Choose one of your earlier pieces of writing. Rewrite the same events once in a way that frightens or excites the reader, and once in a way that makes the reader laugh. The main events can stay the same; what changes is the way they are expressed.",
    steps: [
      "Choose one of your earlier pieces of writing.",
      "Decide how you want the reader to feel after reading it.",
      "Rewrite the same section or event in a way that creates that effect.",
      "In a second rewrite, create a different effect on the reader.",
      "Place the two versions side by side and identify their differences.",
    ],
    questions: [
      "What did you want the reader to feel in each version?",
      "Which words or details made the greatest difference?",
      "What remained unchanged in the main events?",
      "Which version was more successful in creating the effect you intended?",
    ],
    teacherNote:
      "Students do not need to know the theoretical meaning of 'tone'. The focus is on practical experience: expressing the same event in different ways to create different effects on the reader.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "08M-09",
        title: "یک جمله، سه شکل",
        description:
          "بازنویسی یک جمله‌ی آماده در سه شکل متفاوت: خنده‌دار، ترسناک و عجیب و خیال‌انگیز.",
         translations: {
  en: {
    title: "One Sentence, Three Versions",
    description:
      "Rewriting a given sentence in three different ways: funny, frightening, and strange or imaginative.",
  },
},
        activity: {
          purpose:
            "تقویت انعطاف زبانی و تجربه‌ی این نکته که یک موقعیت واحد را می‌توان با انتخاب‌های زبانی متفاوت به شکل‌های مختلف بیان کرد.",

          instruction:
            "یکی از جمله‌های زیر را انتخاب کن. همان جمله را سه بار بازنویسی کن: یک بار خنده‌دار، یک بار ترسناک و یک بار عجیب و خیال‌انگیز. اتفاق اصلی جمله را تا حد امکان نگه دار، اما شکل بیان و جزئیات آن را تغییر بده.",

          steps: [
            "یکی از جمله‌های زیر را انتخاب کن:",
            "«درِ اتاق باز شد و کسی داخل آمد.»",
            "«پسربچه زیر تخت را نگاه کرد.»",
            "«یک نفر پشت پنجره ایستاده بود.»",
            "«گربه از روی میز پایین پرید.»",
            "«وقتی جعبه را باز کرد، چیزی داخل آن بود.»",
            "جمله‌ی انتخاب‌شده را به شکل خنده‌دار بازنویسی کن.",
            "همان جمله را به شکل ترسناک بازنویسی کن.",
            "همان جمله را به شکل عجیب و خیال‌انگیز بازنویسی کن.",
            "سه نسخه را کنار هم بگذار و تفاوت‌هایشان را بررسی کن.",
          ],

          questions: [
            "چه چیزی باعث شد نسخه‌ی خنده‌دار، خنده‌دار شود؟",
            "چه چیزی باعث شد نسخه‌ی ترسناک، ترسناک شود؟",
            "در نسخه‌ی عجیب و خیال‌انگیز چه چیزی را تغییر دادی؟",
            "کدام نسخه بیشترین فاصله را از جمله‌ی اصلی پیدا کرد؟",
          ],

          teacherNote:
            "جمله‌ها از قبل در اختیار دانش‌آموز قرار گرفته‌اند تا تمرکز فعالیت روی تغییر شیوه‌ی بیان باشد، نه پیدا کردن جمله‌ی مناسب. هدف، تغییر محتوای اصلی به‌طور کامل نیست؛ دانش‌آموز باید ببیند چگونه می‌توان با تغییر واژه‌ها و جزئیات، اثر یک موقعیت واحد را تغییر داد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Developing linguistic flexibility and experiencing how the same situation can be expressed in different ways through different language choices.",
    instruction:
      "Choose one of the sentences below. Rewrite the same sentence three times: once in a funny way, once in a frightening way, and once in a strange and imaginative way. Keep the main event of the sentence as much as possible, but change the way it is expressed and the details.",
    steps: [
      "Choose one of the following sentences:",
      "\"The room door opened, and someone came in.\"",
      "\"The little boy looked under the bed.\"",
      "\"Someone was standing behind the window.\"",
      "\"The cat jumped down from the table.\"",
      "\"When they opened the box, something was inside.\"",
      "Rewrite your chosen sentence in a funny way.",
      "Rewrite the same sentence in a frightening way.",
      "Rewrite the same sentence in a strange and imaginative way.",
      "Place the three versions side by side and examine their differences.",
    ],
    questions: [
      "What made the funny version funny?",
      "What made the frightening version frightening?",
      "What did you change in the strange and imaginative version?",
      "Which version moved the furthest away from the original sentence?",
    ],
    teacherNote:
      "The sentences are provided in advance so that students can focus on changing the way something is expressed rather than finding a suitable sentence. The goal is not to completely change the original content. Students should discover how changing words and details can alter the effect of the same situation.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },

      {
        id: "08M-10",
        title: "دوباره نگاه کن",
        description:
          "بازخوانی یک نوشته‌ی قدیمی و بازنویسی بخشی از آن که اکنون نویسنده می‌خواهد آن را جور دیگری بنویسد.",
          translations: {
  en: {
    title: "Take Another Look",
    description:
      "Rereading an older piece of writing and rewriting a part that the writer now wants to express differently.",
  },
},
        activity: {
          purpose:
            "تجربه‌ی این نکته که با فاصله گرفتن از یک نوشته، می‌توان دوباره آن را دید و درباره‌ی بعضی انتخاب‌های خود در نوشتن تصمیم تازه‌ای گرفت.",

          instruction:
            "یکی از نوشته‌های قدیمی خودت را دوباره بخوان. قرار نیست همه‌چیز را از نو بنویسی. یک بخش را پیدا کن که حالا دوست داری جور دیگری بنویسی و فقط همان بخش را بازنویسی کن.",

          steps: [
            "یک نوشته‌ی قدیمی خودت را انتخاب کن.",
            "آن را دوباره و با دقت بخوان.",
            "یک بخش را پیدا کن که حالا دوست داری جور دیگری بنویسی.",
            "فقط همان بخش را بازنویسی کن.",
            "نسخه‌ی قدیمی و جدید را کنار هم ببین.",
          ],

          questions: [
            "حالا چه چیزی را متفاوت می‌بینی؟",
            "چرا خواستی این قسمت را تغییر بدهی؟",
            "در نسخه‌ی جدید چه چیزی فرق کرده است؟",
            "آیا چیزی در نوشته‌ی قبلی هست که هنوز همان‌طور که هست دوستش داری؟",
          ],

          teacherNote:
            "هدف این فعالیت پیدا کردن «اشتباه» در نوشته‌ی قبلی نیست. دانش‌آموز باید تجربه کند که با گذشت زمان و خواندن دوباره‌ی یک نوشته، ممکن است ایده یا انتخاب تازه‌ای برای بازنویسی آن پیدا کند. لازم نیست بخش انتخاب‌شده حتماً ضعیف باشد؛ ممکن است دانش‌آموز فقط بخواهد آن را به شکل دیگری بنویسد.",

          materials: {
            required: false,
            type: "none",
            items: [],
          },
          translations: {
  en: {
    purpose:
      "Experiencing how gaining some distance from a piece of writing allows us to see it again and make new decisions about some of our writing choices.",
    instruction:
      "Read one of your older pieces of writing again. You do not need to rewrite everything. Find one part that you would now like to express differently, and rewrite only that part.",
    steps: [
      "Choose one of your older pieces of writing.",
      "Read it again carefully.",
      "Find one part that you would now like to write differently.",
      "Rewrite only that part.",
      "Place the old and new versions side by side.",
    ],
    questions: [
      "What do you see differently now?",
      "Why did you want to change this part?",
      "What is different in the new version?",
      "Is there anything in the original writing that you still like just the way it is?",
    ],
    teacherNote:
      "The goal of this activity is not to find a 'mistake' in the earlier writing. Students should experience how, with time and by rereading a piece, they may discover a new idea or make a different choice about how to rewrite it. The selected part does not have to be weak; students may simply want to express it in another way.",
    materials: {
      required: false,
      type: "none",
      items: [],
    },
  },
},
        },
      },
    ],
  },
];

export function getLandById(id: string) {
  return atlas.find((land) => land.id === id);
}

export function getSituationById(id: string) {
  for (const land of atlas) {
    const situation = land.situations.find((item) => item.id === id);

    if (situation) {
      return {
        land,
        situation,
      };
    }
  }

  return undefined;
}
