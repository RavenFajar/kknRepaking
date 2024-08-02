var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function () {
    menu.classList.toggle('active');
}

menu.onclick = function () {
    menu.classList.toggle('active');
}




const content = {
    indonesia: `
                <h2 style="text-align: center; margin-top: 4rem; color: white">ASAL USUL DESA REPAKING</h2>
                <p>     Desa Repaking sebagai salah satu desa di Kecamatan Wonosamodro membawahi lima dusun dalam pemerintahannya. 
                        Lima dusun yang ada di Desa Repaking terbentuk dengan latar belakang masing-masing. Terbentuknya dusun-dusun 
                        tersebut dapat ditelusuri melalui sastra lisan yang berkembang di masyarakat secara turun-temurun. Sastra lisan atau 
                        cerita dari mulut ke mulut mengenai Desa Repaking terdiri dari beberapa jenis. 
                        Penjelasan kali ini memuat informasi mengenai terbentuknya dusun-dusun yang ada di Desa Repaking.
                </p>

                <p>     Dusun pertama adalah Dusun Traban. Nama Traban merupakan nama dalam Bahasa Jawa “<i>trataban</i>” yang diartikan sebagai 
                        “pikiran yang tidak tenang” atau “hati yang selalu gelisah.” Nama dusun Traban digunakan karena memiliki korelasi dengan 
                        peristiwa zaman dahulu saat Indonesia masih dalam pengaruh pemerintahan kolonial Belanda. Pemerintah kolonial yang saat itu 
                        menduduki wilayah Boyolali membangun sebuah lodji. Lodji atau loge berasal dari Bahasa Portugis “feictoria” yang dapat diartikan sebagai 
                        tempat tinggal, kantor atau gudang dengan interior besar dan berdinding tembok. Lodji menjadi karya arsitektur pemerintah kolonial Belanda 
                        sehingga berbeda dengan rumah-rumah tradisional Indonesia pada umumnya. Lodji yang yang dibangun di sekitar pemukiman warga dianggap sebagai 
                        hal asing yang patut diwaspadai. Oleh karena itu, warga selalu merasa tidak tenang dan gelisah dengan keberadaan lodji di dalam desa. Alasan ini 
                        yang melatar belakangi pemberian nama “traban” pada Dusun Traban.
                </p>
                
                <p>
                        Dusun kedua adalah Dusun Gandusentong. Kata “sentong” sendiri berasal dari Bahasa Jawa yang berarti “bilik” atau “kamar.” Dusun ini merupakan 
                        dusun kecil yang terletak di bawah pegunungan. Letak dusun yang dekat dengan pegunungan menyebabkan keberadaan dusun ini tidak terlalu terlihat.
                        Akibatnya, Dusun Gandusentong tampak seperti dusun kecil yang bersembunyi di balik pegunungan.
                </p>
                <p>
                        Dusun ketiga adalah Dusun Dukuh. Nama dusun ini merupakan istilah lain untuk menyebut sebuah dusun. Dukuh merujuk kepada wilayah atau kawasan yang 
                        berada di bawah desa. Dusun Dukuh juga memiliki korelasi dengan zaman pemerintahan kolonial Belanda. Pada masa itu, banyak pahlawan perang yang berasal 
                        dari Dusun Dukuh. Beberapa cerita yang beredar di masyarakat menyebutkan bahwa dusun ini diberi nama dukuh karena prinsip kukuh yang dipegang teguh oleh 
                        warganya. Prinsip kukuh diartikan sebagai sikap yang teguh, kuat dalam pendirian dan tidak mudah roboh. Hal ini yang menjadikan warga Dusun Dukuh sering 
                        melakukan perlawanan terhadap pemerintah kolonial.
                </p>
                <p>
                        Dusun keempat adalah Dusun Repaking. Dusun ini merupakan dusun tertua di antara empat dusun lain. Repaking berasal dari gabungan dua kata dalam Bahasa Jawa.
                        Kata “rep” atau “ngarep” yang memiliki arti “depan” dan kata “aking” yang memiliki arti keras. Pada zaman dahulu, warga dusun Repaking memiliki ilmu kebatinan 
                        tingkat tinggi. Hal ini berhubungan dengan adanya sosok leluhur dengan latar belakang jawa yang dikenal sebagai panglima perang. Warga dusun menyebut leluhur tersebut dengan
                        panggilan Mbah Surawaja. Beliau merupakan tokoh penting yang memberi nama Repaking. Mbah Surawaja diketahui sering menghalau Belanda masuk ke dalam desa. Berkat jasa
                        beliau, warga desa membangun sebuah pepunden guna mengenang jasa beliau. Pepunden diartikan sebagai junjungan atau pujaan untuk tempat penghormatan terhadap seseorang. 
                        Terbentuknya Dusun Repaking tidak dapat terlepas dari perjuangan Mbah Surawaja.
                </p>
                <p>
                        Dusun kelima adalah Dusun Kalikidang. Nama dusun ini terdiri dari gabungan dua kata dalam Bahasa Jawa. Kata “kali” yang diartikan sebagai sungai dan kata “kidang” yang berarti kijang atau
                        rusa. Dusun Kalikidang diketahui memiliki aliran sungai yang mengelilingi dusun. Sungai yang mengalir akan selalu menarik perhatian makhluk hidup. Pada saat itu, banyak ditemukan kijang yang berkeliaran
                        di sekitar sungai. Maka, nama dusun diambil dari penemuan kijang yang ada di sekitar sungai.
                </p>
            `,
    english: `
                <h2 style="text-align: center; margin-top: 4rem; color: white">THE ORIGIN OF REPAKING VILLAGE</h2>
                <p>     Repaking Village, located in the Wonosamodro District, oversees five hamlets within its administration. 
                        Each of these five hamlets has its unique background and history. The formation of these hamlets can be 
                        traced through oral literature that has been passed down through generations. This oral literature or stories 
                        shared from one person to another provide information about how these hamlets in Repaking Village came to be.
                </p>
                <p>     The first hamlet is Dusun Traban. The name "Traban" comes from the Javanese word “trataban,” which means 
                        “uneasy mind” or “restless heart.” The name Traban is used because it is related to an event from the past 
                        when Indonesia was under Dutch colonial rule. The colonial government at that time built a lodji in the Boyolali area. 
                        The term "lodji" or "loge" comes from the Portuguese word "feitoria," meaning a residence, office, or warehouse with a large 
                        interior and brick walls. The lodji, an architectural work of the Dutch colonial government, was different from traditional Indonesian houses. 
                        The lodji built near the villagers' settlements was considered something strange and potentially dangerous. As a result, the villagers always 
                        felt uneasy and restless with the presence of the lodji in their village, leading to the name "Traban."
                </p>
                <p>
                    The second hamlet is Dusun Gandusentong. The word “sentong” itself comes from the Javanese language, 
                    meaning "room" or "chamber." This hamlet is a small village located at the foot of the mountains. 
                    The hamlet's proximity to the mountains makes it not easily visible, causing Dusun Gandusentong to seem 
                    like a small hamlet hidden behind the mountains.
                </p>
                <p>
                    The third hamlet is Dusun Dukuh. The name of this hamlet is another term for referring to a hamlet. 
                    "Dukuh" refers to an area or region under a village. Dusun Dukuh also has historical ties to the Dutch colonial era. 
                    During that time, many war heroes came from Dusun Dukuh. Several stories circulating among the people 
                    mention that the hamlet was named "dukuh" due to the strong principles held by its residents. The principle of 
                    "kukuh" means steadfast, strong in resolve, and unyielding. This characteristic led the residents of Dusun Dukuh 
                    to frequently resist the colonial government.
                </p>
                <p>
                    The fourth hamlet is Dusun Repaking. This hamlet is the oldest among the five hamlets. "Repaking" comes 
                    from the combination of two Javanese words. The word "rep" or "ngarep" means "front" and "aking" meaning hard. 
                    In the past, the residents of Dusun Repaking possessed high levels of spiritual knowledge. This is related to an 
                    ancestor known as a war commander. The villagers referred to this ancestor as Mbah Surawaja. He was a significant 
                    figure who was named Repaking. Mbah Surawaja was known for often preventing the Dutch from entering the village. 
                    Due to his services, the villagers built a "pepunden" (a shrine or place of respect) to honor him. The formation of Repaking 
                    hamlet cannot be separated from the struggles of Mbah Surawaja.
                </p>
                <p>
                    The fifth hamlet is Kalikidang. The name of this hamlet consists of two Javanese words. The word "kali" means "river" and 
                    "kidang" means "deer." Dusun Kalikidang is known to have a river flowing around the hamlet. The flowing river always attracts 
                    living creatures. At that time, many deer were found roaming around the river. Thus, the name of the hamlet was taken from the 
                    discovery of deer near the river.
                </p>
            `
};

let currentLanguage = 'indonesia';

document.getElementById('toggleLanguage').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'indonesia' ? 'english' : 'indonesia';
    document.getElementById('cerita').innerHTML = content[currentLanguage];
});

// Initialize with Indonesian content
document.getElementById('cerita').innerHTML = content['indonesia'];
