# 
Proqram tələbləri artdıqca prosessual proqramlaşdırma bir çox problemi özü ilə gətirirdi. Bu problemlərə kod qarisixliginin artması, baxımın olduqca çətin olması, 
qrup halında işi zorlasmasi, xərclərin artması nümunə olaraq verilə bilər. Bütün bu problemlərin nəticəsi olaraq da "Obyekt Yönümlü Proqramlaşdırma" ortaya çıxmışdır. 
OOP ilk olaraq 60-ci illərdə Norveçdə inkişaf etdirilən "Simula" proqramlaşdırma dili ilə ortaya çıxmışdır. Simula isə ALQOL əsaslı bir proqramlaşdırma dilidir. 
İndiki vaxtda dərhal dərhal bütün müasir dillər OOP dəstəkləməkdədir.
 
OOP deyilincə ağla dörd xüsusiyyət gəlir. 
bunlar:

Encapsulation
Inheritance
Polymorphism 
Abstraction 
***
Encapsulation qısaca tanımlarsak bir obyektin daxili quruluşunu (məlumatlarını və xüsusiyyətlərini) xarici dünyadan birbaşa giriş bağlanılması mənasını verər.
Bu sayədə obyektə aid məlumatlar dəyər təyin etməsi edilərkən səhv istifadədən qorunmuş olur. Daxili quruluşunun çölə açıq olmaması eyni zamanda daxili quruluş ilə 
əlaqədar dəyişikliklərin xarici dünyanın təsirlənməməsini də təmin etmiş olur. Bu baxımdan çox əhəmiyyətlidir.

  dörd giriş determinant (access modifier) vardır.

public: public sözü xalqa açıq və ya ictimai mənasını verməkdədir. Bu giriş determinant ilə təyin olunan hər şey digər bütün sinif tərəfindən əldə edilə bilər.
private: xüsusi və ya gizli mənasını verər. Bu giriş determinant ilə müəyyən edilmiş hər hansı bir işçi yalnız və yalnız eyni sinif içərisindən erişilebilir.
Yəni digər Derece heç bir şəkildə çata bilməz.
package-private: Adı üstündə paket deməkdir. Bu giriş determinant ilə işaretlenen hər şey yalnız və yalnız eyni paket içərisində təyin olunan siniflər tərəfindən əldə
edilə bilər. Fərqli paketlərdə olan Derece çata bilməz.
protected: Qorumalı mənasını verər. Bu giriş determinant ilə hər hansı bir işçi törədilmiş olan və eyni paket içərisində olan siniflər içərisindən erişilebilir.
  
***
Inheritance (miras alma, varislik), bir obyektin xüsusiyyətlərinin fərqli obyektlər tərəfindən da istifadə edilə imkan təmin edən OOP xüsusiyyətidir.
 Yazılan bir sinif bir başqa sinif tərəfindən miras alına bilər. Bu əməliyyat edildiyi zaman təməl alınan sinifin bütün xüsusiyyətləri yeni sinifə köçürülər.

deve - məməli əlaqəsində, devenin məməli sinifini miras aldığı deyilə bilər.
 Bu sayədə devenin sinifini yazarkən məməlilərin xüsusiyyətlərini təkrar yazmamıza ehtiyac qalmaz
***

Polymorphism fərqli obyektlərin eyni hadisəyə fərqli fərqli şəkillərdə cavab verməsidir.
Məsələn C dilində, mütləq dəyər tapmaq əməliyyatı üçün üç fərqli funksiya təyin olunub: abs (), labs () və fabs ().
 Lakin Polymorphism u dəstəkləyən C ++ 'da bufunksiyaları, abs() kimi tək bir adla adlandırılırlar.

Abstraction deyilincə, obyekti bəzi xarakteristikaları olan və bəzi hərəkətləri reallaşdıra bir məlumat növü olaraq ümumiləşdirmək başa düşülməlidir. 
Yer üzü üzərində olan hər şey bir obyektdir. Kompüter proqramı baxımından obyekt, bir varlığın təmsil formasıdır. 
Məsələn; bina bir obyektdir. Binanı kompüter proqramı içində təmsil etmək istəsək, əvvəlcə bu obyektin yəni binanın fərqləndirici xüsusiyyətlərini belirlemeliyiz.

Məsələn;

Bina yüksəkliyi
mərtəbə sayı
Yer sahəsi
Yer ölçüləri
kimi xüsusiyyətlər, binanı təmsil etmək üçün ilk ağla gələn bir neçə xüsusiyyətdir. O halda obyektin kompüterdə təmsilində, xüsusiyyətləri kilid rol oynamaqdadır.

Obyektin xarakteristikaları, xüsusiyyətlər və reallaşdıra tədbirlər də metod adını alır. Bu mənada,  Abstraction   nəticəsində bir obyekt;

Xüsusiyyətləri, metodları ilə təmsil oluna bilər.
Sinif (class) mücərrəd bir məlumat tipidir. Obyekt (object) onun konkret olan bir cismidir.
