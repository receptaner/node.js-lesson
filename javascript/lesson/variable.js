//değişkenler
/* değişken oluşturulurken önce "var" yazılır
sonra değişkenin ismi verilir
belli başlı kuralları vardır
 */

// 1- türkçe karakter kullanılmaz
var çiçek ;
// 2- var yerine başka bir şey yazılmaz
string data ;
// 3- başına sayı gelmez
var 1data ;
// 4- belli başlı hariciler vardır bunlar değişken ismi olarak yazılmaz
var function ;
// 5- değişken isimlerinin okunulabilirliği önemlidir ve ne işe yaradığını anlatması önemlidir
var userdatacount ;
// 6- camel case dediğimiz syntax değişken ismi verme çeşidi uygundur
//camel case: deve hörgüçlerini ilham kaynağı olarak kullanan syntax çeşididir
// ilk cümle küçük harflerle
// - ikinci cümlenin baş harfi büyük yazılır
// bu evrensel kod  yazma dilinde kullanılır
var userDataCount ;
// bazen bir anda birden çok değişken tanımlamamız gerek her seferinde başına var yazarak kodu yormay yerine şöyle de kullanabiliriz
var userDataAcount = 1,
    db = 2,
    data = 3;