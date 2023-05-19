const faNavbarData = {
  title: " نام شما ",
  Home: " خانه ",
  publications: " مقالات ",
  Research: " تحقیقات ",
  Jobs: " سوابق شغلی ",
  Contact: " ارتباط با من ",
};

const faHomePageData = {
  name: "  نام شما ",
  jobTitle: "  عنوان شغلی ",
  home_title: " درباره من ",
  home_content: ` <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد </p>
    <h2 class='title'> کارهای من </h2>
    <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد. </p>
    <ul>
      <li> عنوان تستی </li>
      <li>  عنوان تستی  2  </li>
      <li> عنوان تستی 3  </li>
    </ul>
  `,
};

const faPublicationsPageData = {
  type_one_title: "مقالات منتشر شده",

  type_one_items: [
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده (با ). `,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "",
      link: "http://link.com",
      github: "",
      writers: ["علی احمدی", " سارا امینی "],
    },
    {
      title: ` "اکنون شما به زبان من صحبت می کنید" شفافیت ویژه زبان و مذاکرات قانونی در شورای وزیران اتحادیه اروپا. (با ).`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "1996",
      link: "",
      github: "http://github.com",
      writers: ["علی احمدی"],
    },
  ],

  type_two_title: "مقالات تحت بررسی ",
  type_two_items: [
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده (با ). `,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "",
      link: "http://link.com",
      github: "",
      writers: [],
    },
    {
      title: ` "اکنون شما به زبان من صحبت می کنید" شفافیت ویژه زبان و مذاکرات قانونی در شورای وزیران اتحادیه اروپا. (با ).`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی", " سارا امینی "],
    },
  ],

  type_three_title: "فصل های کتاب ",
  type_three_items: [
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده (با ). `,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "",
      link: "http://link.com",
      github: "",
      writers: [],
    },
    {
      title: ` "اکنون شما به زبان من صحبت می کنید" شفافیت ویژه زبان و مذاکرات قانونی در شورای وزیران اتحادیه اروپا. (با ).`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. با این حال `,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی"],
    },
  ],

  type_four_title: "",
  type_four_items: [],
};

const faResearchPageData = {
  title: " تحقیقات ",
  content: `
    <div class='research_content'>
        <p>هدف تحقیق من ترکیب سه زیر زمینه اصلی علوم اجتماعی محاسباتی، از جمله تجزیه و تحلیل داده های رسانه های اجتماعی، تجزیه و تحلیل شبکه، و مدل سازی مبتنی بر عامل، برای مطالعه مسائل مختلف علوم اجتماعی است. در زیر می توانید خلاصه ای از پروژه های گذشته و فعلی من را مشاهده کنید. </p>
        <h2> شناسایی و شناسایی افراط گرایان ایدئولوژیک داخلی ایالات متحده </h2>
        <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </p>
        <img src='https://help.apple.com/assets/6386527A37942448492EAC1A/6386527B37942448492EAC36/en_US/121bcf2f3cc84c028d355aebd1db08ed.png' />
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
    </div>
  `,
};

const faJobsPageData = {
  title: " سوابق شغلی ",
  items: [
    {
      title: `عنوان شغلی `,
      company: " نام شرکت ",
      startData: "11 شهریور 1401 ",
      endDate: "11 مرداد 1402",
      location: " برلین ",
      abstract:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      achievements: [" دستاورد 1 ", " دستاورد 2 ", " دستاورد 3 "],
    },
    {
      title: `عنوان شغلی `,
      company: " نام شرکت ",
      startData: "11 شهریور 1401 ",
      endDate: "",
      location: " برلین ",
      abstract:
        " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ",
      achievements: [" دستاورد 1 ", " دستاورد 2 "],
    },
  ],
};
