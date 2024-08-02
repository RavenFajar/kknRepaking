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
                <p>Desa Repaking sebagai salah satu desa di Kecamatan Wonosamodro membawahi lima dusun dalam
                    pemerintahannya. Lima dusun yang ada di Desa Repaking terbentuk dengan latar belakang masing-masing.
                    Terbentuknya dusun-dusun tersebut dapat ditelusuri melalui sastra lisan yang berkembang di
                    masyarakat secara turun-temurun. Sastra lisan atau cerita dari mulut ke mulut mengenai Desa Repaking
                    terdiri dari beberapa jenis.
                    Penjelasan kali ini memuat informasi mengenai terbentuknya dusun-dusun yang ada di Desa Repaking.
                </p>
                <p>Dusun pertama adalah Dusun Traban. Nama Traban merupakan nama dalam Bahasa Jawa "trataban" yang
                    diartikan sebagai "pikiran yang tidak tenang" atau "hati yang selalu gelisah." Nama dusun Traban
                    digunakan karena memiliki korelasi dengan peristiwa zaman dahulu saat Indonesia masih dalam pengaruh
                    pemerintahan kolonial Belanda. Pemerintah kolonial yang saat itu menduduki wilayah Boyolali
                    membangun sebuah lodji. Lodji atau loge berasal dari Bahasa Portugis "feictoria" yang dapat
                    diartikan sebagai tempat tinggal, kantor atau gudang dengan interior besar dan berdinding tembok.
                    Lodji menjadi karya arsitektur pemerintah kolonial Belanda sehingga berbeda dengan rumah-rumah
                    tradisional Indonesia pada umumnya. Lodji yang yang dibangun di sekitar pemukiman warga dianggap
                    sebagai hal asing yang patut diwaspadai. Oleh karena itu, warga
                    selalu merasa tidak tenang dan gelisah dengan keberadaan lodji di dalam desa. Alasan ini yang
                    melatar belakangi pemberian nama "traban" pada Dusun Traban.</p>
                <p>
                    Dusun kedua adalah Dusun Gandusentong. Kata "sentong" sendiri berasal dari Bahasa Jawa yang berarti
                    "bilik" atau "kamar." Dusun ini merupakan dusun kecil yang terletak di bawah pegunungan. Letak dusun
                    yang dekat dengan pegunungan menyebabkan keberadaan dusun ini tidak terlalu terlihat. Akibatnya,
                    Dusun Gandusentong tampak seperti dusun kecil yang bersembunyi di balik pegunungan.
                </p>
                <p>
                    Dusun ketiga adalah Dusun Dukuh. Nama dusun ini merupakan istilah lain untuk menyebut sebuah dusun.
                    Dukuh merujuk kepada wilayah atau kawasan yang berada di bawah desa. Dusun Dukuh juga memiliki
                    korelasi dengan zaman pemerintahan kolonial Belanda. Pada masa itu, banyak pahlawan perang yang
                    berasal dari Dusun Dukuh. Beberapa cerita yang beredar di masyarakat menyebutkan bahwa dusun ini
                    diberi nama dukuh karena prinsip kukuh yang dipegang teguh oleh warganya. Prinsip kukuh diartikan
                    sebagai sikap yang teguh, kuat dalam pendirian dan tidak mudah roboh. Hal ini yang menjadikan warga
                    Dusun Dukuh sering melakukan perlawanan terhadap pemerintah kolonial.
                </p>
                <p>
                    Dusun keempat adalah Dusun Repaking. Dusun ini merupakan dusun tertua di antara empat dusun lain.
                    Repaking berasal dari gabungan dua kata dalam Bahasa Jawa. Kata "rep" atau "ngarep" yang memiliki
                    arti "depan" dan kata "aking" yang memiliki arti keras. Pada zaman dahulu, warga dusun Repaking
                    memiliki ilmu kebatinan tingkat tinggi. Hal ini berhubungan dengan adanya sosok leluhur dengan latar
                    belakang jawa yang dikenal sebagai panglima perang. Warga dusun menyebut leluhur tersebut dengan
                    panggilan Mbah Surawaja. Beliau merupakan tokoh penting yang memberi nama Repaking. Mbah Surawaja
                    diketahui sering menghalau Belanda masuk ke dalam desa. Berkat jasa beliau, warga desa membangun
                    sebuah pepunden guna mengenang jasa beliau. Pepunden diartikan sebagai junjungan atau pujaan untuk
                    tempat penghormatan terhadap seseorang. Terbentuknya Dusun Repaking tidak dapat terlepas dari
                    perjuangan Mbah Surawaja.
                </p>
                <p>
                    Dusun kelima adalah Dusun Kalikidang. Nama dusun ini terdiri dari gabungan dua kata dalam Bahasa
                    Jawa. Kata "kali" yang diartikan sebagai sungai dan kata "kidang" yang berarti kijang atau rusa.
                    Dusun Kalikidang diketahui memiliki aliran sungai yang mengelilingi dusun. Sungai yang mengalir akan
                    selalu menarik perhatian makhluk hidup. Pada saat itu, banyak ditemukan kijang yang berkeliaran di
                    sekitar sungai. Maka, nama dusun diambil dari penemuan kijang yang ada di sekitar sungai.
                </p>
            `,
    english: `
                <h2 style="text-align: center; margin-top: 4rem; color: white">THE ORIGIN OF REPAKING VILLAGE</h2>
                <p>Repaking Village, as one of the villages in Wonosamodro District, oversees five hamlets in its
                    administration. The five hamlets in Repaking Village were formed with their respective backgrounds.
                    The formation of these hamlets can be traced through oral literature that has developed in the
                    community from generation to generation. Oral literature or stories passed down by word of mouth
                    about Repaking Village consist of several types.
                    This explanation contains information about the formation of the hamlets in Repaking Village.
                </p>
                <p>The first hamlet is Traban Hamlet. The name Traban is a Javanese word "trataban" which means "an
                    uneasy mind" or "a restless heart." The name Traban Hamlet was used because it correlates with events
                    in the past when Indonesia was still under the influence of Dutch colonial rule. The colonial
                    government, which at that time occupied the Boyolali area, built a lodge. Lodge or loge comes from
                    the Portuguese word "feictoria" which can be interpreted as a residence, office, or warehouse with a
                    large interior and brick walls. The lodge became a work of architecture of the Dutch colonial
                    government, thus differing from the traditional Indonesian houses in general. The lodge built around
                    the residents' settlements was considered a foreign thing that should be watched out for. Therefore,
                    residents always felt uneasy and restless with the presence of the lodge in the village. This reason
                    underlies the naming of "traban" in Traban Hamlet.</p>
                <p>
                    The second hamlet is Gandusentong Hamlet. The word "sentong" itself comes from Javanese which means
                    "room" or "chamber." This hamlet is a small hamlet located under the mountains. The location of the
                    hamlet close to the mountains makes its existence not very visible. As a result, Gandusentong Hamlet
                    looks like a small hamlet hiding behind the mountains.
                </p>
                <p>
                    The third hamlet is Dukuh Hamlet. The name of this hamlet is another term for a hamlet. Dukuh refers
                    to an area or region that is under the village. Dukuh Hamlet also has a correlation with the era of
                    Dutch colonial rule. At that time, many war heroes came from Dukuh Hamlet. Some stories circulating
                    in the community mention that this hamlet was named dukuh because of the firm principles held by its
                    residents. The firm principle is interpreted as a steadfast attitude, strong in stance, and not
                    easily collapsed. This is what makes the residents of Dukuh Hamlet often resist the colonial
                    government.
                </p>
                <p>
                    The fourth hamlet is Repaking Hamlet. This hamlet is the oldest among the other four hamlets.
                    Repaking comes from the combination of two words in Javanese. The word "rep" or "ngarep" which means
                    "front" and the word "aking" which means hard. In the past, the residents of Repaking Hamlet had a
                    high level of spiritual knowledge. This is related to the presence of an ancestor with a Javanese
                    background known as a warlord. The residents of the hamlet called this ancestor Mbah Surawaja. He was
                    an important figure who named Repaking. Mbah Surawaja was known to often repel the Dutch from
                    entering the village. Thanks to his services, the villagers built a pepunden to commemorate his
                    services. Pepunden is interpreted as a revered or worshiped place to honor someone. The formation of
                    Repaking Hamlet cannot be separated from the struggle of Mbah Surawaja.
                </p>
                <p>
                    The fifth hamlet is Kalikidang Hamlet. The name of this hamlet consists of a combination of two words
                    in Javanese. The word "kali" which means river and the word "kidang" which means deer. Kalikidang
                    Hamlet is known to have a river flow that surrounds the hamlet. The flowing river will always attract
                    the attention of living creatures. At that time, many deer were found roaming around the river.
                    Therefore, the name of the hamlet was taken from the discovery of deer around the river.
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
