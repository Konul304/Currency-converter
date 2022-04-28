# Modul3_Project

Modul 3. "Valyuta konvertoru tərtibatı" layihəsi


Açıq API-dən aktual məlumatları əldə edərək onlayn valyuta çeviricisi tərtib etmək:
https://exchangerate.host/#/#docs 
Valyuta məzənnəsi haqqında məlumat əldə etmək üçün URL-ə bu valyutaların iki abreviaturasını əlavə edərək (boşluq və ayırıcılar olmadan) valyuta cütü haqqında məlumat sorğulamaq lazımdır. USD və RUB cütü üçün nümunə:


https://api.exchangerate.host/latest?base=USD&symbols=RUB 
Cavab JSON obyekti olaraq qayıdır. Bu obyektin rates dəyişənində key-value cütləri şəklində obyekt var. RUB key-inə uyğun ədəd — hazırda olan cari məzənnə var.
Kalkulyatorun idarəetmə elementlərindən istifadə edərək istifadəçi iki valyuta və konvertasiya ediləcək məbləği seçmək imkanı əldə edir. Seçdikdən sonra kalkulyator çarpaz kursu və yekun məbləği göstərir. 


Yükləmə xətası halının emal olunmasını təmin edilməlidir.


Tələblər

İnterfeys layout-a uyğun olmalıdır:
https://www.figma.com/file/jprZt6p7xO6T7oj85woJyi/Converter-m4-part-time?node-id=59%3A0 
Başlıq üçün yalnız layout realizasiya olunmuşdur. Linklər və düymələrə hər hansı əməliyyat bağlamağa ehtiyac yoxdur.
Valyutaları daxil etmək üçün iki input. Rəqəm və nöqtələrin daxil edilməsi, həmçinin vergül daxil edildikdə onun nöqtəyə çevrilməsi mümkündür. 
Default olaraq sahələr aşağıdakı formatda əvvəlcədən doldurulur:
Sol sahədə bir ədədi daxil edilmişdir.
Sağ sahə isə sol sahədə olan ədədlə alınmış valyuta vahidi üzrə ədədin hasili ilə doldurulur.
Sahələrin yaxınlığında valyuta seçmək üçün düymə mövcuddur. 
İki eyni valyuta seçərkən serverə sorğu göndərməyə ehtiyac yoxdur. Default  olaraq sol sahə üçün RUB, sağ sahə üçün isə ABŞ dolları seçilmişdir (layout-da olduğu kimi).
Konvertor həm dəyişdirilən valyutanın istənilənə, həm də istənilən valyutanın dəyişdirilənə kursunu göstərə bilir.
API əlçatmaz olduqda və ya ona sorğu göndərərkən xəta olarsa, proqram donmur, fəaliyyətini dayandırmır və  istifadəçiyə nəyinsə səhv getdiyi barədə mesaj göstərilir.
Layihə GitHub-da ayrıca repozitoriyada olmalıdır.


Çeklist

Şərt
Bəli / Xeyr
Layihə faylını yükləyərkən ekranda istifadəçi interfeysinin lazımi elementlərini nəzərdən keçiririk. İdarəetmə vasitələri düzgün default qiymətlərə malikdir. 


Default olaraq iki valyuta seçilmişdir: RUB və USD.


Solda RUB valyutası və məbləğ olaraq 100 dəyərini təyin edin.
Sağda USD valyutasını təyin edir, düzgün valyuta dəyəri rublun cari məzənnəsinə uyğun yenidən hesablanır.
Soldakı valyutanı EUR-ya dəyişdirilir.
Sağ inputun dəyəri cari EUR/USD məzənnəsi ilə yenidən hesablanır.


Solda RUB valyutası və məbləğ olaraq 100 dəyərini təyin edin.
Sağda isə USD valyutasını təyin edirik.
Sağdakı valyutanı EUR-ya dəyişirik.
Sağ inputun dəyəri cari RUB/EUR məzənnəsinə uyğun yenidən hesablanır.
   
Solda RUB valyutası və məbləğ olaraq 100 dəyərini təyin edin.
Sağda isə USD valyutasını təyin edirik, düzgün valyuta dəyəri rublun cari məzənnəsinə uyğun yenidən hesablanır.
Sol inputun dəyərini 200-ə dəyişdirin.
Sağ inputun dəyəri cari məzənnə ilə yenidən hesablanır və iki dəfə böyük olur.


Solda RUB valyutası və məbləğ olaraq 100 dəyərini təyin edin.
Sağda isə USD valyutasını təyin edirik, düzgün valyuta dəyəri rublun cari məzənnəsinə uyğun yenidən hesablanır.
Sağ inputun dəyərini 100-ə dəyişdiririk.
Sol inputun dəyəri cari məzənnə ilə yenidən hesablanır.


Chrome brauzerində developer alətlərini açın. Network tabına keçin, Throttling sahəsini tapın (Default olaraq Onlayn təyin olunmuşdur) və onu Oflayn seçin. Sahələrdən birinin dəyərini dəyişdirin. İstifadəçiyə nəyinsə səhv getdiyi barədə mesaj göstərildi.


Netlify link: https://willowy-valkyrie-c6cb0a.netlify.app/
