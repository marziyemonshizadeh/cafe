import Navbar from "@/components/modules/navbar/navbar";
import WeblogHeader from "@/components/templates/weblog/header";
import { authUser } from "@/utils/auth";

async function TermsAndConditions() {
  const user = await authUser();

  return (
    <div className="bg-white dark:bg-[#2e2b27]">
      <Navbar isLogin={user ? true : false} userName={user?.userName} />

      <WeblogHeader title="شرایط-قوانین " />
      <div className="text-slate-600 leading-9 lg:mx-20 md:mx-10 mx-5 my-10">
        کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات و برنامه‌‏های
        کاربردی قهوه ست به دقت ملاحظه فرمایید.
        <br />
        ورود کاربران به وب‏‌سایت قهوه ست هنگام استفاده از پروفایل شخصی، طرح‏‌های
        تشویقی، ویدئوهای رسانه تصویری قهوه ست و سایر خدمات ارائه شده توسط قهوه
        ست به معنای آگاه بودن و پذیرفتن شرایط و قوانین و همچنین نحوه استفاده از
        سرویس‌‏ها و خدمات قهوه ست است. توجه داشته باشید که ثبت سفارش نیز در هر
        زمان به معنی پذیرفتن کامل کلیه شرایط و قوانین قهوه ست از سوی کاربر است.
        <br />
        لازم به ذکر است شرایط و قوانین مندرج، جایگزین کلیه توافق‏‌های قبلی محسوب
        می‏‌شود.
        <p className="font-extrabold text-xl">قوانین عمومی</p>
        توجه داشته باشید کلیه اصول و رویه‏‌های قهوه ست منطبق با قوانین جمهوری
        اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است
        و متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط با کاربر است. در صورتی که
        در قوانین مندرج، رویه‏‌ها و سرویس‏‌های قهوه ست تغییراتی در آینده ایجاد
        شود، در همین صفحه منتشر و به روز رسانی می شود و شما توافق می‏‌کنید که
        استفاده مستمر شما از سایت به معنی پذیرش هرگونه تغییر است.
        <p className="font-extrabold text-xl">تعریف مشتری یا کاربر</p>
        مشتری یا کاربر به شخصی گفته می‌شود که با اطلاعات کاربری خود که در فرم
        ثبت نام درج کرده است، به ثبت سفارش یا هرگونه استفاده از خدمات قهوه ست
        اقدام کند. همچنین از آنجا که قهوه ست یک وب‌سایت خرده‌فروشی آنلاین است،
        طبق قانون تجارت الکترونیک مشتری یا مصرف کننده هر شخصی است که به منظوری
        جز تجارت یا شغل حرفه‌ای به خرید کالا یا خدمات اقدام می‌کند.
        <p className="font-extrabold text-xl">ارتباطات الکترونیکی</p>
        هنگامی که شما از سرویس‌‏ها و خدمات قهوه ست استفاده می‏‌کنید، سفارش
        اینترنتی خود را ثبت یا خرید می‏‌کنید و یا به قهوه ست ایمیل می‏‌زنید، این
        ارتباطات به صورت الکترونیکی انجام می‏‌شود و در صورتی که درخواست شما با
        رعایت کلیه اصول و رویه‏‌ها باشد، شما موافقت می‌‏کنید که قهوه ست به صورت
        الکترونیکی (از طریق پست الکترونیکی، سرویس پیام کوتاه و سایر سرویس‌های
        الکترونیکی) به درخواست شما پاسخ دهد. جهت اطلاع رسانی رویدادها، خدمات و
        سرویس‌های ویژه یا پروموشن‌ها، امکان دارد قهوه ست برای اعضای وب سایت
        ایمیل یا پیامک ارسال نماید. در صورتی که کاربران تمایل به دریافت اینگونه
        ایمیل و پیامک‌ها نداشته باشند، می‌توانند عضویت دریافت خبرنامه قهوه ست را
        در پروفایل خود لغو کنند.
        <p className="font-extrabold text-xl">سیاست‏‌های رعایت حریم شخصی</p>
        قهوه ست به اطلاعات خصوصی اشخاصى که از خدمات سایت استفاده می‏‌کنند،
        احترام گذاشته و از آن محافظت می‏‌کند. قهوه ست متعهد می‏‌شود در حد توان
        از حریم شخصی شما دفاع کند و در این راستا، تکنولوژی مورد نیاز برای هرچه
        مطمئن‏‌تر و امن‏‌تر شدن استفاده شما از سایت را، توسعه دهد. در واقع با
        استفاده از سایت قهوه ست، شما رضایت خود را از این سیاست نشان می‏‌دهید.
        همه مطالب در دسترس از طریق هر یک از خدمات قهوه ست، مانند متن، گرافیک،
        آرم، آیکون دکمه، تصاویر، ویدئوهای تصویری، موارد قابل دانلود و کپی،
        داده‌ها و کلیه محتوای تولید شده توسط قهوه ست جزئی از اموال قهوه ست محسوب
        می‏‌شود و حق استفاده و نشر تمامی مطالب موجود و در دسترس در انحصار قهوه
        ست است و هرگونه استفاده بدون کسب مجوز کتبی، حق پیگرد قانونی را برای قهوه
        ست محفوظ می‏‌دارد. علاوه بر این، اسکریپت‌ها، و اسامی خدمات قابل ارائه از
        طریق هر یک از خدمات ایجاد شده توسط قهوه ست و علائم تجاری ثبت شده نیز در
        انحصار قهوه ست است و هر گونه استفاده با مقاصد تجاری پیگرد قانونی دارد.
        کاربران مجاز به بهره‌‏برداری و استفاده از لیست محصولات، مشخصات فنی، قیمت
        و هر گونه استفاده از مشتقات وب‏‌سایت قهوه ست و یا هر یک از خدمات و یا
        مطالب، دانلود یا کپی کردن اطلاعات با مقاصد تجاری، هر گونه استفاده از
        داده کاوی، روبات، یا روش‌‏های مشابه مانند جمع آوری داده‌‏ها و ابزارهای
        استخراج نیستند و کلیه این حقوق به صراحت برای قهوه ست محفوظ است. در صورت
        استفاده از هر یک از خدمات قهوه ست، کاربران مسئول حفظ محرمانه بودن حساب و
        رمز عبور خود هستند و تمامی مسئولیت فعالیت‌‏هایی که تحت حساب کاربری و یا
        رمز ورود انجام می‏‌پذیرد به عهده کاربران است. قهوه ست محصولاتی مناسب
        استفاده افراد زیر 18 سال به فروش می‏‌رساند و در صورتی که کاربران از سن
        ذکر شده جوان‌‏تر هستند می‌‏باید با اطلاع والدین و یا قیم قانونی، به خرید
        و پرداخت اقدام کنند. تنها مرجع رسمی مورد تایید ما برای ارتباط با شما،
        پایگاه رسمی این سایت یعنی set-coffee.com است. ما با هیچ روش دیگری جز
        ارسال نامه از طرف آدرس‏‌های رسمی و تایید شده در سایت، با شما تماس
        نمی‌‏گیریم. وب سایت قهوه ست هیچگونه سایت اینترنتی با آدرسی غیر از
        set-coffee.com همچنین، شماره های 09023030738 و 09366726563 در پیام رسان
        تلگرام و واتز آپ نمی باشند. صفحه رسمی اینستاگرام قهوه ست
        instagram.com/set_coffee می باشد. لطفا به آی دی آن دقت کنید. کاربران جهت
        برقراری ارتباط، تنها می‏‌توانند از آدرس‌‏های ذکر شده در بخش ارتباط با ما
        استفاده کنند.
        <p className="font-extrabold text-xl">ثبت، پردازش و ارسال سفارش</p>
        <ul>
          <li>
            روز کاری به معنی روز شنبه تا پنج شنبه هر هفته، به استثنای تعطیلات
            عمومی در ایران است و کلیه سفارش‏‌های ثبت شده در طول روزهای کاری و
            اولین روز پس از تعطیلات پردازش می‌‏شوند. قهوه ست به مشتریان خود در 7
            روز هفته و 24 ساعت در روز امکان سفارش‌‏گذاری می‌‏دهد.
          </li>
          <li>
            کلیه سفارش‌‏های ثبت شده در سایت قهوه ست به وسیله ارسال پیش فاکتور از
            طریق ایمیل، در صف پردازش قرار گرفته و به کارخانه گزارش داده می شوند
            تا در صف تولید و بسته بندی قرار گیرد. قهوه ست همواره در ارسال و
            تحویل کلیه سفارش‌‏های ثبت شده، نهایت دقت و تلاش خود را انجام می‌دهد.
            با وجود این، در صورتی که موجودی محصولی در قهوه ست به پایان برسد، حتی
            پس از اقدام مشتری به سفارش‌‏گذاری، حق کنسل کردن آن سفارش و یا
            استرداد وجه سفارش برای قهوه ست محفوظ است و یا مشتری می‏‌تواند به جای
            کالای به اتمام رسیده، محصول دیگری را جایگزین کند.
          </li>
          <li>
            در صورت بروز مشکل در پردازش نهایی سبد خرید مانند اتمام موجودی کالا
            یا انصراف مشتری، مبلغ پرداخت شده طی 24 الی 48 ساعت کاری به حساب
            مشتری واریز خواهد شد.
          </li>
          <li>
            قهوه ست مجاز است بدون اطلاع قبلی نسبت به توقف سفارش‌‏گیری جدید،
            اقدام و فروش خود را متوقف کند و کلیه سفارش‌‏های ثبت شده قبل از توقف
            سفارش‌‏گیری، پردازش و ارسال می‌‏شود. حق قطع فروش کلیه و یا بخشی از
            محصولات به هر دلیلی مانند اتمام موجودی کالا بدون اطلاع قبلی، برای
            قهوه ست محفوظ است.
          </li>
          <li>
            در صورت بروز هرگونه خطا نسبت به درج قیمت و ارزش ریالی کالاهای موجود
            در سایت قهوه ست، حق بلا اثر نمودن سفارش و خرید انجام شده توسط مشتری،
            برای قهوه ست محفوظ است. قهوه ست در اسرع وقت وجوه دریافتی را به حساب
            اعلام شده توسط مشتری واریز و عودت می‌نماید و مشتری با ورود به سایت
            قهوه ست می‌پذیرد از این امر آگاهی داشته و در این خصوص ادعایی نخواهد
            داشت.
          </li>
          <li>
            کاربران باید هنگام سفارش کالای مورد نظر خود، فرم سفارش را با اطلاعات
            صحیح و به طور کامل تکمیل کنند. بدیهی است درصورت ورود اطلاعات ناقص یا
            نادرست، سفارش کاربر قابل پیگیری و تحویل نخواهد بود. مشتریان
            می‌توانند نام، آدرس و تلفن شخص دیگری را برای تحویل گرفتن سفارش وارد
            کنند و اگر مبلغ سفارش از پیش پرداخت شده باشد، تحویل گیرنده سفارش
            هنگام دریافت کالا باید کارت شناسایی همراه داشته باشد.
          </li>
          <li> امکان پرداخت در محل برای سفارش‌ها وجود ندارد.</li>
        </ul>
        <ul>
          <li>
            <span className="font-bold">ارسال شهرستان : </span> کلیه سفارشات
            شهرستان ها به وسیله پست پیشتاز ارسال می شود و هزینه ارسال طبق تعرفه
            شرکت پست محاسبه می شود. پس از ارسال کد رهگیری پست، از طریق ایمیل
            اطلاع رسانی می شود. سفارشات ظرف 24 ساعت کاری پس از دریافت سفارش،
            تحویل اداره پست می شوند.
          </li>
          <li className="text-black font-bold">
            ارسال تهران : برای کلیه سفارشاتی که ارسال از طریق “پیک اختصاصی
            تهران” انتخاب شده، سفارشات{" "}
            <span className="text-red-600">ظرف 24 ساعت کاری</span> پس از دریافت
            سفارش، ارسال می شوند. کلیه سفارشات تهران با پیک ارسال می شوند و
            هزینه ثابت <span className="text-red-600">50.000</span> تومان جهت
            ارسال از مشتری اخذ می شود. (سفارشات بالای{" "}
            <span className="text-red-600">1.000.000</span> تومان رایگان خواهد
            بود)
          </li>
          <li className="text-center">*******</li>
          <li>
            مشتری گرامی هزینه های ذکر شده فقط مربوط به خریدهای آنلاین از سایت می
            باشد و شامل سفارشات تلفنی به فروشگاه نمی شود . لذا در صورت سفارش
            تلفنی به فروشگاه و یا خرید کالایی که در فروشگاه آنلاین عرضه نمی شود
            هزینه پیک طبق تعرفه پیک محل و مقصد مورد نظر با هر میزان خرید محاسبه
            خواهد شد
          </li>
          <li className="text-center">*******</li>
          <li>
            مشتریان گرامی توجه داشته باشید که قهوه ها در روزهای شنبه و سه شنبه
            هر هفته رست می شوند، لذا سفارشاتی که روز یکشنبه، دوشنبه و سه شنبه
            ارسال می شوند رست روز شنبه همان هفته است و سفارشاتی که روزهای
            چهارشنبه، پنجشنبه و شنبه ارسال می شوند رست روز سه شنبه است.
          </li>
        </ul>
        <p className="font-extrabold text-xl">خسارت در هنگام حمل و نقل</p>
        <ul>
          <li>
            قهوه ست همواره نهایت تلاش خود را می‏‌کند تا کلیه سفارش‏‌ها در نهایت
            صحت و بدون آسیب به دست مشتریان خود در سراسر کشور برسد. با توجه به
            بسته بندی ایمن و استاندارد همه مرسولات، تحویل به هر یک از شرکت‌‏های
            حمل و نقل معتبر به انتخاب کاربر و اعلام بارنامه مرسوله (درج در سبد
            خرید و اطلاع رسانی از طریق سرویس پیام کوتاه) به این معنی است که بروز
            هر گونه حادثه در هنگام حمل و تحویل به عهده شرکت حمل و نقل است و قهوه
            ست تنها در صورت تایید شرکت حمل کننده سفارش و در راستای تسهیل امور
            پیگیری، خسارت را جبران می‌‏کند.
          </li>
          <li>
            آسیب‏‌های ناشی از حمل و نقل باید در عرض 24 ساعت کاری پس از تحویل
            سفارش به خدمات پس از فروش قهوه ست اطلاع داده شود و کالای آسیب دیده
            به همراه صورت جلسه رسمی شرکت حمل کننده و کلیه متعلقات و فاکتور به
            خدمات پس از فروش قهوه ست ارسال شود.
          </li>
          <li>
            برای اطلاعات بیشتر به صفحه رویه‌های بازگرداندن کالا مراجعه کنید.
          </li>
          <li>
            همچنین آدرس ایمیل و تلفن‌هایی که مشتری در پروفایل خود ثبت می‌کند،
            تنها آدرس ایمیل و تلفن‌های رسمی و مورد تایید مشتری است و تمام
            مکاتبات و پاسخ‌های شرکت از طریق آنها صورت می‌گیرد.
          </li>
          <li>
            با توجه به ثبت سیستمی سفارش، به هیچ عنوان امکان صدور فاکتور مجدد یا
            تغییر مشخصات آن از جمله تغییر فاکتور حقیقی به حقوقی وجود ندارد.
            بنابراین لازم است مشتریان هنگام ثبت سفارش، نسبت به این مساله دقت
            لازم را داشته باشند و اگر نیاز دارند که فاکتور حقوقی برای آنها صادر
            شود، هنگام ثبت سفارش خود، با انتخاب گزینه ” تکمیل اطلاعات حقوقی ” و
            وارد کردن مشخصات سازمان موردنظر، برای خرید سازمانی و دریافت فاکتور
            رسمی اقدام کنند.
          </li>
        </ul>
        <p className="font-extrabold text-xl">قوه قهریه</p>
        تمامی شرایط و قوانین مندرج، در شرایط عادی قابل اجرا است و در صورت بروز
        هرگونه از موارد قوه قهریه، قهوه ست هیچ گونه مسئولیتی ندارد.
        <br />
        قهوه ست خود را ملزم به رعایت حریم شخصی کاربران می‌داند، لطفا در صورت
        مشاهده هرگونه تخلف، مراتب را از طریق کانال‏‌های ارتباطی ذکر شده با ما در
        میان بگذارید.
      </div>
    </div>
  );
}

export default TermsAndConditions;