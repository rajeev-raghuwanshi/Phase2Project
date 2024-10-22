// Translations object with text for each language

let btn = document.querySelector('#lanugage-button');
btn.addEventListener('click', () => {
    let list = document.querySelector(".language-options");
    // Toggle the display of the dropdown
    if (list.classList.contains("language-options-display")) {
        list.classList.remove("language-options-display");
    } else {
        list.classList.add("language-options-display");
    }
});


const translations = {
    English: {
      heading: "Article 5 of the Indian Constitution",
      subheading: "Article 5: Citizenship at the commencement of the Constitution",
      intro: "Article 5 of the Indian Constitution is a significant provision that deals with the concept of citizenship at the commencement of the Constitution...",
      sectionTitle: "Understanding Article 5",
      definition: "Article 5 states that at the commencement of the Constitution, every person who has their domicile...",
      criteria1: "Was born in India, or",
      criteria2: "Either of whose parents was born in India, or",
      criteria3: "Who has been ordinarily resident in India for not less than five years...",
      explanation: "This provision essentially means that individuals who fulfill any of the above criteria...",
      keyElements: "Key Elements of Article 5",
      domicileTitle: "Domicile",
      domicileDesc: "Domicile refers to the place where an individual has their permanent home...",
      birthTitle: "Birth in India",
      birthDesc: "If a person is born in India, they automatically become a citizen...",
      parentsTitle: "Parents Born in India",
      parentsDesc: "If either of the parents of an individual is born in India...",
      residenceTitle: "Ordinary Residence",
      residenceDesc: "An individual who has been ordinarily resident in India...",
      conclusion: "Conclusion",
      conclusionPara: "Article 5 of the Indian Constitution provides a comprehensive framework..."
    },
    Hindi: {
      // Hindi translations
      heading: "भारतीय संविधान का अनुच्छेद 5",
      subheading: "अनुच्छेद 5: संविधान के प्रारंभ में नागरिकता",
      intro: "भारतीय संविधान का अनुच्छेद 5 नागरिकता की अवधारणा से संबंधित एक महत्वपूर्ण प्रावधान है...",
      sectionTitle: "अनुच्छेद 5 को समझना",
      definition: "अनुच्छेद 5 में यह कहा गया है कि संविधान के प्रारंभ में, प्रत्येक व्यक्ति जो भारत के क्षेत्र में निवास करता है...",
      criteria1: "भारत में जन्म हुआ था, या",
      criteria2: "जिसके माता-पिता में से कोई एक भारत में जन्मा हो, या",
      criteria3: "जो पांच साल तक सामान्य रूप से भारत में निवास कर रहा हो...",
      explanation: "इस प्रावधान का अर्थ है कि जो व्यक्ति उपरोक्त मानदंडों को पूरा करता है...",
      keyElements: "अनुच्छेद 5 के मुख्य तत्व",
      domicileTitle: "निवास स्थान",
      domicileDesc: "निवास स्थान उस जगह को संदर्भित करता है जहां किसी व्यक्ति का स्थायी घर हो...",
      birthTitle: "भारत में जन्म",
      birthDesc: "यदि किसी व्यक्ति का जन्म भारत में हुआ है...",
      parentsTitle: "माता-पिता का भारत में जन्म",
      parentsDesc: "यदि किसी व्यक्ति के माता-पिता में से कोई एक भारत में पैदा हुआ हो...",
      residenceTitle: "सामान्य निवास",
      residenceDesc: "जो व्यक्ति संविधान के प्रारंभ से पहले पांच साल से भारत में निवास कर रहा हो...",
      conclusion: "निष्कर्ष",
      conclusionPara: "भारतीय संविधान का अनुच्छेद 5 एक व्यापक ढांचा प्रदान करता है..."
    },
    Punjabi: {
        heading: "ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦਾ ਆਰਟਿਕਲ 5",
        subheading: "ਆਰਟਿਕਲ 5: ਸੰਵਿਧਾਨ ਦੀ ਸ਼ੁਰੂਆਤ 'ਤੇ ਨਾਗਰਿਕਤਾ",
        intro: "ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦਾ ਆਰਟਿਕਲ 5 ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਪ੍ਰਾਵਧਾਨ ਹੈ ਜੋ ਸੰਵਿਧਾਨ ਦੀ ਸ਼ੁਰੂਆਤ 'ਤੇ ਨਾਗਰਿਕਤਾ ਦੇ ਸੰਕਲਪ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ...",
        sectionTitle: "ਆਰਟਿਕਲ 5 ਨੂੰ ਸਮਝਣਾ",
        definition: "ਆਰਟਿਕਲ 5 ਵਿੱਚ ਕਿਹਾ ਗਿਆ ਹੈ ਕਿ ਸੰਵਿਧਾਨ ਦੀ ਸ਼ੁਰੂਆਤ 'ਤੇ, ਹਰ ਵਿਅਕਤੀ ਜਿਸਦਾ ਡੋਮਿਸਾਈਲ...",
        criteria1: "ਭਾਰਤ ਵਿੱਚ ਜਨਮ ਲਿਆ, ਜਾਂ",
        criteria2: "ਜਿਸ ਦੇ ਕਿਸੇ ਵੀ ਮਾਪੇ ਦਾ ਜਨਮ ਭਾਰਤ ਵਿੱਚ ਹੋਇਆ, ਜਾਂ",
        criteria3: "ਜੋ ਸੰਵਿਧਾਨ ਦੀ ਸ਼ੁਰੂਆਤ ਤੋਂ ਪਹਿਲਾਂ ਪੰਜ ਸਾਲਾਂ ਲਈ ਆਮਤੌਰ 'ਤੇ ਭਾਰਤ ਵਿੱਚ ਰਿਹਾਇਸ਼ ਕਰਦਾ ਹੈ...",
        explanation: "ਇਹ ਪ੍ਰਾਵਧਾਨ ਮੂਲਤ: ਇਸ ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਜਿਹੜੇ ਵਿਅਕਤੀ ਉਪਰੋਕਤ ਕਿਸੇ ਵੀ ਮਾਪਦੰਡ ਨੂੰ ਪੂਰਾ ਕਰਦੇ ਹਨ...",
        keyElements: "ਆਰਟਿਕਲ 5 ਦੇ ਮੁੱਖ ਤੱਤ",
        domicileTitle: "ਡੋਮਿਸਾਈਲ",
        domicileDesc: "ਡੋਮਿਸਾਈਲ ਉਸ ਸਥਾਨ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ ਜਿੱਥੇ ਇਕ ਵਿਅਕਤੀ ਦੀ ਸਦੀਵੀ ਘਰ ਹੋਵੇ...",
        birthTitle: "ਭਾਰਤ ਵਿੱਚ ਜਨਮ",
        birthDesc: "ਜੇ ਕੋਈ ਵਿਅਕਤੀ ਭਾਰਤ ਵਿੱਚ ਜਨਮ ਲੈਂਦਾ ਹੈ, ਤਾਂ ਉਹ ਆਪਣੇ ਮਾਪਿਆਂ ਦੀ ਨਾਗਰਿਕਤਾ ਦੀ ਸਥਿਤੀ ਤੋਂ ਬਿਨਾਂ ਨਾਗਰਿਕ ਬਣ ਜਾਂਦਾ ਹੈ...",
        parentsTitle: "ਭਾਰਤ ਵਿੱਚ ਜਨਮ ਲਿਆ ਮਾਪੇ",
        parentsDesc: "ਜੇ ਕਿਸੇ ਵਿਅਕਤੀ ਦੇ ਮਾਪਿਆਂ ਵਿੱਚੋਂ ਕੋਈ ਇੱਕ ਭਾਰਤ ਵਿੱਚ ਜਨਮ ਲਿਆ ਹੈ...",
        residenceTitle: "ਆਮ ਰਿਹਾਇਸ਼",
        residenceDesc: "ਇੱਕ ਵਿਅਕਤੀ ਜੋ ਸੰਵਿਧਾਨ ਦੀ ਸ਼ੁਰੂਆਤ ਤੋਂ ਪਹਿਲਾਂ ਘੱਟੋ-ਘੱਟ ਪੰਜ ਸਾਲਾਂ ਲਈ ਆਮ ਰਿਹਾਇਸ਼ ਕਰਦਾ ਹੈ...",
        conclusion: "ਨਿਸ਼ਕਰਸ਼",
        conclusionPara: "ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦਾ ਆਰਟਿਕਲ 5 ਨਾਗਰਿਕਤਾ ਦੇ ਨਿਰਧਾਰਣ ਲਈ ਇੱਕ ਵਿਸਤ੍ਰਿਤ ਫਰੇਮਵਰਕ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ..."
      },

    
      Bangla: {
        heading: "ভারতীয় সংবিধানের অনুচ্ছেদ 5",
        subheading: "অনুচ্ছেদ 5: সংবিধানের শুরুতে নাগরিকত্ব",
        intro: "ভারতীয় সংবিধানের অনুচ্ছেদ 5 একটি উল্লেখযোগ্য বিধান যা সংবিধানের শুরুতে নাগরিকত্বের ধারণার সাথে সম্পর্কিত...",
        sectionTitle: "অনুচ্ছেদ 5 বোঝা",
        definition: "অনুচ্ছেদ 5 বলে যে সংবিধানের প্রারম্ভে, প্রত্যেক ব্যক্তি যার আবাসস্থল আছে...",
        criteria1: "ভারতে জন্ম হয়েছিল, বা",
        criteria2: "যাদের বাবা-মা ভারতে জন্মগ্রহণ করেছেন, অথবা",
        criteria3: "যিনি সাধারণত পাঁচ বছরের কম সময় ধরে ভারতে বসবাস করছেন...",
        explanation: "এই বিধানটি মূলত বোঝায় যে ব্যক্তিরা উপরোক্ত মানদণ্ডের যেকোনো একটি পূরণ করে...",
        keyElements: "অনুচ্ছেদ 5 এর মূল উপাদান",
        domicileTitle: "আবাসিক",
        domicileDesc: "আবাসস্থল বলতে সেই স্থানকে বোঝায় যেখানে একজন ব্যক্তির স্থায়ী বাড়ি আছে...",
        birthTitle: "ভারতে জন্ম",
        birthDesc: "যদি একজন ব্যক্তি ভারতে জন্মগ্রহণ করেন, তবে তারা স্বয়ংক্রিয়ভাবে নাগরিক হয়ে যায়...",
        parentsTitle: "ভারতে জন্মগ্রহণকারী পিতামাতা",
        parentsDesc: "যদি কোনো ব্যক্তির পিতামাতার কেউ ভারতে জন্মগ্রহণ করেন...",
        residenceTitle: "সাধারণ বাসস্থান",
        residenceDesc: "একজন ব্যক্তি যিনি সাধারণত ভারতে বসবাস করেন...",
        conclusion: "উপসংহার",
        conclusionPara: "ভারতীয় সংবিধানের অনুচ্ছেদ 5 একটি বিস্তৃত কাঠামো প্রদান করে..."
    
      },
    
      Assamese: {
        heading: "ভাৰতীয় সংবিধানৰ ৫ নং অনুচ্ছেদ",
        subheading: "অনুচ্ছেদ ৫: সংবিধান আৰম্ভ হোৱাৰ সময়ত নাগৰিকত্ব",
        intro: "ভাৰতীয় সংবিধানৰ ৫ নং অনুচ্ছেদ হৈছে সংবিধানৰ আৰম্ভণিতে নাগৰিকত্বৰ ধাৰণাটোৰ সৈতে জড়িত এক উল্লেখযোগ্য বিধান...",
        sectionTitle: "৫ নং অনুচ্ছেদ বুজা",
        definition: "৫ নং অনুচ্ছেদত উল্লেখ আছে যে সংবিধান আৰম্ভ হোৱাৰ সময়ত প্ৰতিজন ব্যক্তিৰ বাসস্থান আছে...",
        criteria1: "ভাৰতত জন্ম হৈছিল, বা",
        criteria2: "যাৰ পিতৃ-মাতৃৰ কোনো এজনৰ জন্ম ভাৰতত, বা",
        criteria3: "যি সাধাৰণতে ভাৰতত বাস কৰা পাঁচ বছৰতকৈ কম নহয়...",
        explanation: "এই বিধানৰ মূল অৰ্থ হ'ল ওপৰৰ যিকোনো মাপকাঠী পূৰণ কৰা ব্যক্তিসকলে...",
        keyElements: "৫ নং অনুচ্ছেদৰ মূল উপাদানসমূহ",
        domicileTitle: "ডমিচিল",
        domicileDesc: "Domicile মানে ব্যক্তিৰ স্থায়ী ঘৰ থকা ঠাই...",
        birthTitle: "ভাৰতত জন্ম",
        birthDesc: "ভাৰতত এজন ব্যক্তিৰ জন্ম হ'লে স্বয়ংক্ৰিয়ভাৱে নাগৰিক হৈ পৰে...",
        parentsTitle: "ভাৰতত জন্মগ্ৰহণ কৰা পিতৃ-মাতৃ",
        parentsDesc: "যদি কোনো ব্যক্তিৰ পিতৃ-মাতৃৰ কোনো এজনৰ জন্ম ভাৰতত হয়...",
        residenceTitle: "সাধাৰণ বাসস্থান",
        residenceDesc: "সাধাৰণতে ভাৰতৰ বাসিন্দা হৈ অহা এজন ব্যক্তি...",
        conclusion: "উপসংহাৰ",
        conclusionPara: "ভাৰতীয় সংবিধানৰ ৫ নং অনুচ্ছেদে এক বিস্তৃত কাঠামো প্ৰদান কৰিছে..."
      },
      
      Boho: {
        heading: "भारतर सिंबोखोनार फायसां",
        subheading: "अनुच्छेद 5: संविधान आरम्भराव दखालसों",
        intro: "भारतमै संविधाननि धारा 5 फि खनैथिखाव ब्वव फाया मनाइ संविधाननि फाजोलिफ्रायै नाथारोनानै नाफोरनि बिथाय गोनजोंखों।",
        sectionTitle: "आर्टिकल 5 नाय खावाय",
        definition: "आर्टिकल 5 कहां कि संविधान के आरम्भ में, हरेक मनुष्य जिउन का ठिकाना...",
        criteria1: "भारतथा जन्म लखों, नाय",
        criteria2: "जिनि गोरखखोन बथाइ आनि, नां",
        criteria3: "जिउं भारतत सामान्य निवास करी थांइ पाच साल नखलाल...",
        explanation: "इंगखो बुनथां जाबै हौ, जिनो हाबै फालाब बिनिजाबिलि फालाब बाय...",
        keyElements: "आर्टिकल 5 र बुनियादी तत्त्व",
        domicileTitle: "बानां",
        domicileDesc: "डोमिसाइल माने होबाय फालांथां, निसुम थांदिक बागाबा हाफालां।",
        birthTitle: "भारतत जन्म",
        birthDesc: "जोखिम भारतत जन्म लाय, तिनि आपन-आपन नागरिक होजाय...",
        parentsTitle: "भारतफोर बाइआं",
        parentsDesc: "अगर कोनो एक बापक भारत मं जन्म लुबा...",
        residenceTitle: "सामान्य निवास",
        residenceDesc: "एक व्यक्ती जो भारत में सामान्यत: निवासित हाबा...",
        conclusion: "उपसंहार",
        conclusionPara: "भारतीय संविधानक अनुच्छेद ५ एक बृहत् रूपरेखा प्रदान कराय.."
      },
    
      Dogri: {
        heading: "भारतीय संविधान दा अनुच्छेद 5",
        subheading: "अनुच्छेद 5: संविधान दे प्रारंभ होने पर नागरिकता",
        intro: "भारतीय संविधान दा अनुच्छेद 5 इक महत्वपूर्ण प्रावधान ऐ जेह्ड़ा संविधान दे शुरू होने पर नागरिकता दी अवधारणा कन्नै सरबंधत ऐ...",
        sectionTitle: "अनुच्छेद 5 गी समझना",
        definition: "अनुच्छेद 5 च आखेआ गेआ ऐ जे संविधान दे शुरू होने पर हर इक माह् नू जिसदा आवास ऐ...",
        criteria1: "भारत च पैदा होया हा, या",
        criteria2: "जिस दे माता-पिता दा जन्म भारत च होआ हा, जां",
        criteria3: "जो आम तौर पर भारत च पंज सालें थमां घट्ट नेईं रौंह् दा ऐ...",
        explanationा: "इस प्रावधान दा अनिवार्य रूप कन्नै मतलब ऐ जे व्यक्ति जेह् ड़े उप्पर दित्ते गेदे मापदंडें च कुसै बी मापदंड गी पूरा करदे न...",
        keyElements: "अनुच्छेद 5 दे मुक्ख तत्व",
        domicileTitle: "निवास",
        domicileDesc: "डोमिसिल उस थाह् र गी दस्सेआ जंदा ऐ जित्थें कुसै व्यक्ति दा अपना स्थाई घर होंदा ऐ...",
        birthTitle: "भारत च जन्म",
        birthDesc: "जेकर कोई व्यक्ति भारत च पैदा होंदा ऐ तां ओह् अपने आप गै नागरिक बनी जंदा ऐ...",
        parentsTitle: "भारत च पैदा होए माता-पिता",
        parentsDesc: "अगर कुसै व्यक्ति दे माता-पिता च कोई बी भारत च पैदा होए दा ऐ...",
        residenceTitle: "साधारण निवास",
        residenceDesc: "एक व्यक्ति जो आम तौर पर भारत च निवासी रेहा ऐ...",
        conclusion: "निष्कर्ष",
        conclusionPara: "भारतीय संविधान दे अनुच्छेद 5 च इक व्यापक ढांचे दा प्रावधान ऐ..."
      },
    
     
      Gujarati:{
       heading: "ભારતીય બંધારણની કલમ 5",
        subheading: "કલમ 5: બંધારણના પ્રારંભ પર નાગરિકતા",
        intro: "ભારતીય બંધારણની કલમ 5 એ એક મહત્વપૂર્ણ જોગવાઈ છે જે બંધારણના પ્રારંભ સમયે નાગરિકત્વની વિભાવના સાથે સંબંધિત છે...",
        sectionTitle: "કલમ 5ને સમજવું",
        definition: "કલમ 5 જણાવે છે કે બંધારણના પ્રારંભ સમયે, દરેક વ્યક્તિ કે જેની પાસે તેમનું નિવાસસ્થાન છે...",
        criteria1: "ભારતમાં જન્મ્યો હતો, અથવા",
        criteria2: "કોના માતા-પિતાનો જન્મ ભારતમાં થયો હતો, અથવા",
        criteria3: "કોણ સામાન્ય રીતે ભારતમાં ઓછામાં ઓછા પાંચ વર્ષથી રહે છે...",
        explanation: "આ જોગવાઈનો આવશ્યક અર્થ એવો થાય છે કે જે વ્યક્તિઓ ઉપરના કોઈપણ માપદંડોને પૂર્ણ કરે છે...",
        keyElements: "કલમ 5 ના મુખ્ય તત્વો",
        domicileTitle: "ડોમિસાઇલ",
        domicileDesc: "ડોમિસાઇલ એ સ્થળનો ઉલ્લેખ કરે છે જ્યાં વ્યક્તિનું કાયમી ઘર હોય...",
        birthTitle: "ભારતમાં જન્મ",
        birthDesc: "જો કોઈ વ્યક્તિ ભારતમાં જન્મે છે, તો તે આપોઆપ નાગરિક બની જાય છે...",
        parentsTitle: "ભારતમાં જન્મેલા માતાપિતા",
        parentsDesc: "જો કોઈ વ્યક્તિના માતા-પિતામાંથી કોઈનો જન્મ ભારતમાં થયો હોય તો...",
        residenceTitle: "સામાન્ય રહેઠાણ",
        residenceDesc: "ભારતમાં સામાન્ય રીતે રહેનાર વ્યક્તિ...",
        conclusion: "નિષ્કર્ષ",
        conclusionPara : "ભારતીય બંધારણની કલમ 5 એક વ્યાપક માળખું પ્રદાન કરે છે..."
      },
    
    
      Kannada: {
        heading: "ಭಾರತೀಯ ಸಂವಿಧಾನದ 5 ನೇ ವಿಧಿ",
        subheading: "ಆರ್ಟಿಕಲ್ 5: ಸಂವಿಧಾನದ ಪ್ರಾರಂಭದಲ್ಲಿ ಪೌರತ್ವ",
        intro: "ಭಾರತೀಯ ಸಂವಿಧಾನದ 5 ನೇ ವಿಧಿಯು ಸಂವಿಧಾನದ ಪ್ರಾರಂಭದಲ್ಲಿ ಪೌರತ್ವದ ಪರಿಕಲ್ಪನೆಯೊಂದಿಗೆ ವ್ಯವಹರಿಸುವ ಮಹತ್ವದ ನಿಬಂಧನೆಯಾಗಿದೆ...",
        sectionTitle: "ಆರ್ಟಿಕಲ್ 5 ಅನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
        definition: "ಸಂವಿಧಾನದ ಪ್ರಾರಂಭದಲ್ಲಿ, ತಮ್ಮ ನಿವಾಸವನ್ನು ಹೊಂದಿರುವ ಪ್ರತಿಯೊಬ್ಬ ವ್ಯಕ್ತಿಯೂ...",
        criteria2: "ಯಾರ ಪೋಷಕರು ಭಾರತದಲ್ಲಿ ಜನಿಸಿದರು, ಅಥವಾ",
        criteria3 : "ಯಾರು ಸಾಮಾನ್ಯವಾಗಿ ಭಾರತದಲ್ಲಿ ಐದು ವರ್ಷಗಳಿಗಿಂತ ಕಡಿಮೆಯಿಲ್ಲದೆ ವಾಸಿಸುತ್ತಿದ್ದಾರೆ...",
        explanation: "ಈ ನಿಬಂಧನೆಯು ಮೂಲಭೂತವಾಗಿ ಎಂದರೆ ಮೇಲಿನ ಯಾವುದೇ ಮಾನದಂಡಗಳನ್ನು ಪೂರೈಸುವ ವ್ಯಕ್ತಿಗಳು...",
        keyElements: "ಆರ್ಟಿಕಲ್ 5 ರ ಪ್ರಮುಖ ಅಂಶಗಳು",
        domicileTitle: "ಮನೆ",
        domicileDesc: "ವಸತಿಯು ಒಬ್ಬ ವ್ಯಕ್ತಿಯು ತನ್ನ ಶಾಶ್ವತ ಮನೆಯನ್ನು ಹೊಂದಿರುವ ಸ್ಥಳವನ್ನು ಸೂಚಿಸುತ್ತದೆ...",
        birthTitle: "ಭಾರತದಲ್ಲಿ ಜನನ",
        birthDesc: "ಒಬ್ಬ ವ್ಯಕ್ತಿಯು ಭಾರತದಲ್ಲಿ ಜನಿಸಿದರೆ, ಅವರು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಾಗರಿಕರಾಗುತ್ತಾರೆ...",
        parentsTitle: "ಪೋಷಕರು ಭಾರತದಲ್ಲಿ ಜನಿಸಿದರು",
        parentsDesc: "ಒಬ್ಬ ವ್ಯಕ್ತಿಯ ಪೋಷಕರು ಭಾರತದಲ್ಲಿ ಜನಿಸಿದರೆ...",
        residenceTitle: "ಸಾಮಾನ್ಯ ನಿವಾಸ",
        residenceDesc: "ಭಾರತದಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ವಾಸಿಸುತ್ತಿರುವ ವ್ಯಕ್ತಿ...",
        conclusion: "ತೀರ್ಮಾನ",
        conclusionPara: "ಭಾರತೀಯ ಸಂವಿಧಾನದ 5 ನೇ ವಿಧಿಯು ಸಮಗ್ರ ಚೌಕಟ್ಟನ್ನು ಒದಗಿಸುತ್ತದೆ..."
      },
    
      Maithili: {
        heading: "भारतीय संविधान के अनुच्छेद ५", 
        subheading: "अनुच्छेद ५: संविधान प्रारंभमे नागरिकता", 
        intro: "भारतीय संविधान के अनुच्छेद ५ एकटा महत्वपूर्ण प्रावधान अछि जे संविधान के प्रारंभ में नागरिकता के अवधारणा स संबंधित अछि...",
        sectionTitle: "अनुच्छेद 5 को समझना",
        definition: "अनुच्छेद ५ मे कहल गेल अछि जे संविधानक प्रारंभ मे प्रत्येक व्यक्ति जकर आवास अछि...",
        criteria1: "भारत मे जन्म भेल छल, वा",
        criteria2: "जकर माता-पिता मे सँ कोनो एकटाक जन्म भारत मे भेल छल, वा",
        criteria3: "जे आम तौर पर भारत मे पांच साल स कम नहि अछि...",
        explanation: "ई प्रावधान कें अनिवार्य रूप सं मतलब छै की जे व्यक्ति उपरोक्त मे सं कोनों मानदंड कें पूरा करय छै...",
        keyElements: "अनुच्छेद 5 के प्रमुख तत्व",
        domicileTitle: "निवास", 
        domicileDesc: "डोमिसिल ओ स्थान कें संदर्भित करएयत छै जतय कोनों व्यक्ति कें ओकर स्थायी घर छै...",
        birthTitle: "भारत में जन्म",
        birthDesc: "भारत मे जँ कोनो व्यक्तिक जन्म होइत छैक त' स्वतः नागरिक भ' जाइत छैक...",
        parentsTitle: "भारत में जन्मे माता-पिता",
        parentsDesc: "यदि कोनो व्यक्ति के माता-पिता में स कोनो के जन्म भारत में भेल अछि...",
        residenceTitle: "साधारण निवास",
        residenceDesc: "एकटा व्यक्ति जे सामान्यतः भारत मे निवासी रहल अछि...",
        conclusion: "निष्कर्ष", 
        conclusionPara: "भारतीय संविधान के अनुच्छेद 5 एकटा व्यापक रूपरेखा प्रदान करैत अछि..."
      },
    
      Malayalam:
      {
        heading: "ഇന്ത്യൻ ഭരണഘടനയുടെ ആർട്ടിക്കിൾ 5",
        subheading: "ആർട്ടിക്കിൾ 5: ഭരണഘടനയുടെ ആരംഭത്തിൽ പൗരത്വം",
        intro: "ഇന്ത്യൻ ഭരണഘടനയുടെ ആർട്ടിക്കിൾ 5 ഭരണഘടനയുടെ ആരംഭത്തിൽ പൗരത്വം എന്ന ആശയം കൈകാര്യം ചെയ്യുന്ന ഒരു സുപ്രധാന വ്യവസ്ഥയാണ്...",
        sectionTitle: "ആർട്ടിക്കിൾ 5 മനസ്സിലാക്കുന്നു",
        definition: "ഭരണഘടനയുടെ ആരംഭത്തിൽ, അവരുടെ വാസസ്ഥലമുള്ള ഓരോ വ്യക്തിയും...", 
        criteria1: "ഇന്ത്യയിലാണ് ജനിച്ചത്, bഅല്ലെങ്കിൽ",
        criteria2: "ആരുടെ മാതാപിതാക്കളിൽ ഒന്നുകിൽ ഇന്ത്യയിൽ ജനിച്ചവരാണോ, അല്ലെങ്കിൽ",
        criteria3: "സാധാരണയായി അഞ്ച് വർഷത്തിൽ കുറയാതെ ഇന്ത്യയിൽ താമസിക്കുന്നവർ...",
        explanation: "ഈ വ്യവസ്ഥ പ്രധാനമായും അർത്ഥമാക്കുന്നത് മേൽപ്പറഞ്ഞ ഏതെങ്കിലും മാനദണ്ഡങ്ങൾ പാലിക്കുന്ന വ്യക്തികൾ എന്നാണ്...",
        keyElements: "ആർട്ടിക്കിൾ 5 ൻ്റെ പ്രധാന ഘടകങ്ങൾ",
        domicileTitle: "Domicile",
        domicileDesc: "ഡൊമിസൈൽ എന്നത് ഒരു വ്യക്തിക്ക് അവരുടെ സ്ഥിരമായ വീടുള്ള സ്ഥലത്തെ സൂചിപ്പിക്കുന്നു...",
        birthTitle: "ഇന്ത്യയിൽ ജനനം",
        birthDesc: "ഒരു വ്യക്തി ഇന്ത്യയിൽ ജനിച്ചാൽ, അവൻ സ്വയമേവ പൗരനാകുന്നു...",
        parentsTitle: "ഇന്ത്യയിൽ ജനിച്ച മാതാപിതാക്കൾ",
        parentsDesc: "ഒരു വ്യക്തിയുടെ മാതാപിതാക്കളിൽ ആരെങ്കിലും ഇന്ത്യയിൽ ജനിച്ചതാണെങ്കിൽ...",
        residenceTitle: "സാധാരണ വസതി",
        residenceDesc: "സാധാരണയായി ഇന്ത്യയിൽ താമസിക്കുന്ന ഒരു വ്യക്തി...",
        conclusion: "ഉപസംഹാരം",
        conclusionPara: "ഇന്ത്യൻ ഭരണഘടനയുടെ ആർട്ടിക്കിൾ 5 സമഗ്രമായ ഒരു ചട്ടക്കൂട് നൽകുന്നു..."
      },
    
    
      Marathi: {
        heading: "भारतीय राज्यघटनेचे कलम 5",
        subheading: "अनुच्छेद 5: संविधानाच्या प्रारंभाच्या वेळी नागरिकत्व",
        intro: "भारतीय राज्यघटनेतील कलम 5 ही एक महत्त्वाची तरतूद आहे जी संविधानाच्या प्रारंभी नागरिकत्वाच्या संकल्पनेशी संबंधित आहे...",
        sectionTitle: "कलम 5 समजून घेणे",
        definition: "अनुच्छेद 5 असे सांगते की राज्यघटनेच्या प्रारंभी, प्रत्येक व्यक्ती ज्याचे अधिवास आहे...",
        criteria1: "भारतात जन्म झाला, किंवा",
        criteria2: "एकतर कोणाच्या पालकांचा जन्म भारतात झाला, किंवा",
        criteria3: "कोण साधारणपणे भारतात पाच वर्षांपेक्षा जास्त काळ रहिवासी आहे...",
        explanation: "या तरतुदीचा अर्थ असा होतो की ज्या व्यक्ती वरीलपैकी कोणतेही निकष पूर्ण करतात...",
        keyElements: "कलम 5 चे मुख्य घटक",
        domicileTitle: "अधिवास",
        domicileDesc: "अधिवास म्हणजे एखाद्या व्यक्तीचे कायमस्वरूपी घर असते त्या ठिकाणाचा संदर्भ...",
        birthTitle: "भारतात जन्म",
        birthDesc: "जर एखादी व्यक्ती भारतात जन्माला आली तर ती आपोआप नागरिक बनते...",
        parentsTitle: "भारतात जन्मलेले पालक",
        ParentsDesc: "जर एखाद्या व्यक्तीच्या पालकांपैकी एकाचा जन्म भारतात झाला असेल तर...",
        residenceTitle: "सामान्य निवासस्थान",
        residenceDesc: "भारतात सामान्यतः रहिवासी असलेली व्यक्ती...",
        conclusion: "निष्कर्ष",
        conclusionPara: "भारतीय राज्यघटनेचे कलम 5 एक सर्वसमावेशक फ्रेमवर्क प्रदान करते..."
      },
      
      Nepali: {
        heading: "भारतीय संविधानको अनुच्छेद 5",
        subheading: "धारा ५: संविधानको प्रारम्भमा नागरिकता",
        intro: "भारतीय संविधानको अनुच्छेद 5 एउटा महत्त्वपूर्ण प्रावधान हो जुन संविधानको प्रारम्भमा नागरिकताको अवधारणासँग सम्बन्धित छ...",
        sectionTitle: "अनुच्छेद ५ बुझ्दै",
        definition: "धारा ५ ले संविधान प्रारम्भ हुँदा आफ्नो अधिवास भएका प्रत्येक व्यक्तिलाई...",
        criteria1: "भारतमा जन्मेको, वा",
        criteria2: "जसका आमाबाबु भारतमा जन्मेका थिए, वा",
        criteria3: "जो साधारणतया पाँच वर्षभन्दा कम समयदेखि भारतमा बसेको...",
        explanation: "यस प्रावधानले अनिवार्य रूपमा माथिको कुनै पनि मापदण्ड पूरा गर्ने व्यक्तिहरू...",
        keyElements: "धारा 5 को मुख्य तत्व",
        domicileTitle: "आवासीय",
        domicileDesc: "डोमिसाइल भन्नाले व्यक्तिको स्थायी घर भएको ठाउँलाई जनाउँछ...",
        birthTitle: "भारतमा जन्म",
        birthDesc: "यदि कुनै व्यक्ति भारतमा जन्मेको छ भने, तिनीहरू स्वतः नागरिक बन्छन् ...",
        parentsTitle: "भारतमा जन्मेका अभिभावक",
        parentsDesc: "यदि कुनै व्यक्तिको आमाबाबु भारतमा जन्मेका छन् भने ...",
        residenceTitle: "साधारण निवास",
        ResidenceDesc: "एक व्यक्ति जो सामान्यतया भारतमा बसोबास गरेको छ...",
        conclusion: "निष्कर्ष",
        conclusionPara: "भारतीय संविधानको अनुच्छेद 5 ले एक व्यापक रूपरेखा प्रदान गर्दछ ..."
      },
    
      Odia: {
        heading: "ଭାରତୀୟ ସମ୍ବିଧାନର ଧାରା 5",
        subheading: "ଧାରା :: ସମ୍ବିଧାନ ଆରମ୍ଭରେ ନାଗରିକତା",
        intro: "ଭାରତୀୟ ସମ୍ବିଧାନର ଧାରା 5 ହେଉଛି ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ବ୍ୟବସ୍ଥା ଯାହା ସମ୍ବିଧାନ ଆରମ୍ଭରେ ନାଗରିକତ୍ୱର ସଂକଳ୍ପ ସହିତ ଜଡିତ ...",
        sectionTitle: "ଧାରା 5 କୁ ବୁ standing ିବା",
        definition: "ଧାରା states ରେ କୁହାଯାଇଛି ଯେ ସମ୍ବିଧାନ ଆରମ୍ଭରେ, ପ୍ରତ୍ୟେକ ବ୍ୟକ୍ତିଙ୍କର ସେମାନଙ୍କର ବାସସ୍ଥାନ ଅଛି ...",
        criteria1: "ଭାରତରେ ଜନ୍ମ ହୋଇଥିଲା, କିମ୍ବା",
        criteria2: "ଯାହାର ପିତାମାତା ଭାରତରେ ଜନ୍ମ ହୋଇଥିଲେ, କିମ୍ବା",
        criteria3: "ଯିଏ ସାଧାରଣତ five ପାଞ୍ଚ ବର୍ଷରୁ କମ୍ ଭାରତରେ ରହିଆସିଛି ...",
        explanation: "ଏହି ବ୍ୟବସ୍ଥାର ଅର୍ଥ ହେଉଛି ବ୍ୟକ୍ତିବିଶେଷ ଯେଉଁମାନେ ଉପରୋକ୍ତ ମାନଦଣ୍ଡ ମଧ୍ୟରୁ କ fulfill ଣସିଟି ପୂରଣ କରନ୍ତି ...",
        keyElements: "ଧାରା 5 ର ମୁଖ୍ୟ ଉପାଦାନଗୁଡିକ",
        domicileTitle: "Domicile",
        domicileDesc: "ଡୋମିକାଇଲ୍ ସେହି ସ୍ଥାନକୁ ବୁ refers ାଏ ଯେଉଁଠାରେ ଜଣେ ବ୍ୟକ୍ତିଙ୍କର ସ୍ଥାୟୀ ଘର ଅଛି ...",
        birthTitle: "ଭାରତରେ ଜନ୍ମ",
        birthDesc: "ଯଦି ଜଣେ ବ୍ୟକ୍ତି ଭାରତରେ ଜନ୍ମ ହୁଅନ୍ତି, ସେମାନେ ସ୍ୱୟଂଚାଳିତ ଭାବରେ ନାଗରିକ ହୁଅନ୍ତି ...",
        parentsTitle: "ଭାରତରେ ଜନ୍ମ ହୋଇଥିବା ପିତାମାତା",
        parentDesc: "ଯଦି କ individual ଣସି ବ୍ୟକ୍ତିର ପିତାମାତା ଭାରତରେ ଜନ୍ମ ହୁଅନ୍ତି ...",
        residenceTitle: "ସାଧାରଣ ଆବାସ",
        residenceDescକ: "ଜଣେ ବ୍ୟକ୍ତି ଯିଏ ସାଧାରଣତ India ଭାରତରେ ବାସ କରିଆସୁଛନ୍ତି ...",
        conclusion: "ସିଦ୍ଧାନ୍ତ",
        conclusionPara: "ଭାରତୀୟ ସମ୍ବିଧାନର ଧାରା 5 ଏକ ବ୍ୟାପକ framework ାଞ୍ଚା ପ୍ରଦାନ କରେ ..."
      },
    
      
      Sanskrit: {
        heading: "भारतीय संविधानस्य अनुच्छेदः ५", 
        subheading : "अनुच्छेदः ५ : संविधानस्य आरम्भे नागरिकता",
        intro: "भारतीयसंविधानस्य अनुच्छेदः ५ एकः महत्त्वपूर्णः प्रावधानः अस्ति यः संविधानस्य आरम्भे नागरिकतायाः अवधारणायाः विषये वर्तते...",
        sectionTitle: "अनुच्छेद ५ अवगमनम्", 
        definition: "अनुच्छेदे ५ उक्तं यत् संविधानस्य आरम्भे प्रत्येकं व्यक्तिः यस्य निवासस्थानं भवति...",
        criteria1: "भारते जातः, अथवा",
        criteria2: "यस्य मातापितरौ भारते जातः, अथवा",
        criteria3: "यः सामान्यतया भारते पञ्चवर्षेभ्यः न्यूनं न निवसति...",
        explanation: "अस्य प्रावधानस्य मूलतः अर्थः अस्ति यत् ये व्यक्तिः उपर्युक्तेषु मापदण्डेषु कञ्चित् पूरयन्ति...",
        keyElements: "अनुच्छेद ५ इत्यस्य प्रमुखतत्त्वानि",
        domicileTitle: "निवासस्थान",
        domicileDesc: "निवासस्थानं तत् स्थानं निर्दिशति यत्र व्यक्तिस्य स्थायी गृहं भवति...",
        birthTitle: "भारते जन्म",
        birthDesc: "यदि कश्चन व्यक्तिः भारते जन्म प्राप्नोति तर्हि सः स्वयमेव नागरिकः भवति...",
        parentsTitle: "भारते जन्म मातापितरौ",
        parentsDesc: "यदि कस्यचित् व्यक्तिस्य मातापितृणां मध्ये कश्चन अपि भारते जन्म प्राप्नोति...",
        residenceTitle: "साधारण निवास",
        residenceDesc: "एकः व्यक्तिः यः सामान्यतया भारते निवसति...",
        conclusion: "उपसंहारः",
        conclusionPara: "भारतीयसंविधानस्य अनुच्छेदः ५ व्यापकरूपरेखां प्रददाति..."
      }, 
    
    
      Sindhi: {
        heading: "هندستاني آئين جو آرٽيڪل 5",
        subheading: "آرٽيڪل 5: آئين جي شروعات تي شهريت",
        intro: "هندستاني آئين جو آرٽيڪل 5 هڪ اهم شق آهي جيڪو آئين جي شروعات تي شهريت جي تصور سان واسطو رکي ٿو ...",
        sectionTitle: "آرٽيڪل 5 کي سمجھڻ",
       definition: "آرٽيڪل 5 چوي ٿو ته آئين جي شروعات تي، هر ماڻهو جنهن کي پنهنجي ڊوميسائيل آهي ...",
        criteria1: "ڀارت ۾ پيدا ٿيو، يا",
        criteria2: "يا ته جن جا والدين هندستان ۾ پيدا ٿيا، يا",
        criteria3: "جيڪو عام طور تي هندستان ۾ پنجن سالن کان گهٽ ۾ گهٽ رهائش پذير آهي ...",
        explanation: "هن روزي جو بنيادي طور مطلب اهو آهي ته اهي ماڻهو جيڪي مٿين معيارن مان ڪنهن کي پورو ڪن ٿا ...",
        keyElements: "آرٽيڪل 5 جا اهم عنصر",
        domicileTitle: "ڊوميسائل",
        domicileDesc: "ڊوميسائل ان جاءِ ڏانهن اشارو ڪري ٿو جتي ڪنهن فرد جو مستقل گهر هجي...",
        birthTitle: "ت ۾ جنم",
        birthDesc: "جيڪڏهن ڪو ماڻهو هندستان ۾ پيدا ٿئي ٿو، اهي خودڪار طور تي هڪ شهري بڻجي ويندا آهن ...",
        parentsTitle: "ڀارت ۾ پيدا ٿيل والدين",
        parentsDesc: "جيڪڏهن ڪنهن فرد جي والدين مان هڪ هندستان ۾ پيدا ٿيو آهي ...",
        residenceTitle: "عام رهائش",
        residenceDesc: "هڪ فرد جيڪو هندستان ۾ عام طور تي رهائش پذير آهي...",
        conclusion: "نتيجو",
        conclusionPara: "هندستاني آئين جو آرٽيڪل 5 هڪ جامع فريم ورڪ مهيا ڪري ٿو ..."
      },
    
      Tamil: {
        heading: "இந்திய அரசியலமைப்பின் பிரிவு 5",
        subheading: "கட்டுரை 5: அரசியலமைப்பின் தொடக்கத்தில் குடியுரிமை",
        intro: "இந்திய அரசியலமைப்பின் பிரிவு 5 என்பது அரசியலமைப்பின் தொடக்கத்தில் குடியுரிமை பற்றிய கருத்தைக் கையாளும் ஒரு குறிப்பிடத்தக்க ஏற்பாடு...",
        sectionTitle: "கட்டுரை 5 ஐப் புரிந்துகொள்வது",
        definition: "அரசியலமைப்புச் சட்டத்தின் தொடக்கத்தில், ஒவ்வொரு நபரும் தங்களுடைய குடியுரிமையைக் கொண்டுள்ளனர் என்று பிரிவு 5 கூறுகிறது...",
      criteria1: "இந்தியாவில் பிறந்தார், அல்லது",
       criteria2: "யாருடைய பெற்றோர் இந்தியாவில் பிறந்தவர்கள் அல்லது",
        criteria3: "இந்தியாவில் சாதாரணமாக ஐந்து வருடங்களுக்குக் குறையாமல் வசிப்பவர்கள்...",
        explanation: "இந்த விதியின் அர்த்தம் மேலே உள்ள நிபந்தனைகளில் ஏதேனும் ஒன்றை பூர்த்தி செய்யும் நபர்கள்...",
       keyElements: "கட்டுரை 5 இன் முக்கிய கூறுகள்",
        domicileTitle: "குடியிருப்பு",
        domicileDesc: "குடியிருப்பு என்பது ஒரு தனிநபரின் நிரந்தர வீட்டைக் குறிக்கும்...",
        birthTitle: "இந்தியாவில் பிறப்பு",
        birthDesc: "ஒருவர் இந்தியாவில் பிறந்தால், அவர் தானாகவே குடிமகனாக மாறுகிறார்...",
        parentsTitle: "இந்தியாவில் பிறந்த பெற்றோர்",
       parentsDesc: "ஒரு தனிநபரின் பெற்றோரில் ஒருவர் இந்தியாவில் பிறந்திருந்தால்...",
       residenceTitle: "சாதாரண குடியிருப்பு",
        residenceDesc: "சாதாரணமாக இந்தியாவில் வசிக்கும் ஒரு தனிநபர்...",
        conclusion: "முடிவு",
        conclusionPara: "இந்திய அரசியலமைப்பின் 5வது பிரிவு ஒரு விரிவான கட்டமைப்பை வழங்குகிறது..."
      },
    
      
      Telugu: {
        heading: "భారత రాజ్యాంగంలోని ఆర్టికల్ 5",
       subheading: "ఆర్టికల్ 5: రాజ్యాంగం ప్రారంభంలో పౌరసత్వం",
        intro: "భారత రాజ్యాంగంలోని ఆర్టికల్ 5 రాజ్యాంగం ప్రారంభంలో పౌరసత్వం యొక్క భావనతో వ్యవహరించే ఒక ముఖ్యమైన నిబంధన...",
        sectionTitle: "ఆర్టికల్ 5ని అర్థం చేసుకోవడం",
        definition: "రాజ్యాంగం ప్రారంభంలో, వారి నివాసం ఉన్న ప్రతి వ్యక్తి...", 
        criteria1: "భారతదేశంలో పుట్టింది, లేదా",
        criteria2: "తల్లిదండ్రులలో ఎవరికైనా భారతదేశంలో జన్మించారు, లేదా",
        criteria3: "భారతదేశంలో సాధారణంగా ఐదు సంవత్సరాలకు తక్కువ కాకుండా నివసించేవారు...",
        explanation: "ఈ నిబంధన తప్పనిసరిగా పైన పేర్కొన్న ప్రమాణాలలో దేనినైనా నెరవేర్చే వ్యక్తులు అని అర్థం...",
        keyElements: "ఆర్టికల్ 5 యొక్క ముఖ్య అంశాలు",
        domicileTitle: "నివాసం",
        domicileDesc: "డొమిసిల్ అనేది ఒక వ్యక్తి వారి శాశ్వత నివాసం ఉన్న ప్రదేశాన్ని సూచిస్తుంది...",
        birthTitle: "భారతదేశంలో జననం",
        birthDesc: "ఒక వ్యక్తి భారతదేశంలో జన్మించినట్లయితే, వారు స్వయంచాలకంగా పౌరులు అవుతారు...",
        parentsTitle: "తల్లిదండ్రులు భారతదేశంలో జన్మించారు",
       parentsDesc: "ఒక వ్యక్తి యొక్క తల్లిదండ్రులలో ఎవరైనా భారతదేశంలో జన్మించినట్లయితే...",
       residenceTitle: "సాధారణ నివాసం",
       residenceDesc: "భారతదేశంలో సాధారణంగా నివసించే వ్యక్తి...",
       conclusion: "ముగింపు",
      conclusionPara: "భారత రాజ్యాంగంలోని ఆర్టికల్ 5 సమగ్ర ఫ్రేమ్‌వర్క్‌ను అందిస్తుంది..."
      },
    
      Urdu: {
        heading: "ہندوستانی آئین کا آرٹیکل 5",
        subheading: "آرٹیکل 5: آئین کے آغاز پر شہریت",
        intro: "ہندوستانی آئین کا آرٹیکل 5 ایک اہم شق ہے جو آئین کے آغاز پر شہریت کے تصور سے متعلق ہے...",
        sectionTitle: "آرٹیکل 5 کو سمجھنا",
        definition: "آرٹیکل 5 کہتا ہے کہ آئین کے آغاز پر، ہر وہ شخص جس کا اپنا ڈومیسائل ہے...",
        criteria1: "ہندوستان میں پیدا ہوا، یا",
        criteria2: "یا تو جن کے والدین ہندوستان میں پیدا ہوئے تھے، یا",
        criteria3: "جو عام طور پر ہندوستان میں کم از کم پانچ سال سے مقیم ہے...",
        explanation: "اس شق کا بنیادی طور پر مطلب یہ ہے کہ وہ افراد جو مندرجہ بالا معیارات میں سے کسی کو پورا کرتے ہیں...",
        keyElements: "آرٹیکل 5 کے کلیدی عناصر",
        domicileTitle:"ومیسائل",
        domicileDesc: "ڈومیسائل سے مراد وہ جگہ ہے جہاں کسی فرد کا مستقل گھر ہو...",
        birthTitle: "بھارت میں پیدائش",
        birthDesc: "اگر کوئی شخص ہندوستان میں پیدا ہوتا ہے، تو وہ خود بخود شہری بن جاتا ہے...",
       parentsTitle: "بھارت میں پیدا ہونے والے والدین",
        parentsDesc: "اگر کسی فرد کے والدین میں سے کوئی بھی ہندوستان میں پیدا ہوا ہے...",
        residenceTitle: "عام رہائش",
        residenceDesc: "ایک فرد جو ہندوستان میں عام طور پر مقیم رہا ہے...",
       conclusion: "نتیجہ",
        conclusionPara: "ہندوستانی آئین کا آرٹیکل 5 ایک جامع فریم ورک فراہم کرتا ہے..."
      },
    
    // Add other languages similarly here...
  };
  
  // Function to change language
  function changeLanguage(par) {
    const selectedLanguage = par;
  
    document.getElementById('heading').innerText = translations[selectedLanguage].heading;
    document.getElementById('subheading').innerText = translations[selectedLanguage].subheading;
    document.getElementById('intro-paragraph').innerText = translations[selectedLanguage].intro;
    document.getElementById('section-title').innerText = translations[selectedLanguage].sectionTitle;
    document.getElementById('article5-definition').innerText = translations[selectedLanguage].definition;
    document.getElementById('criteria-item-1').innerText = translations[selectedLanguage].criteria1;
    document.getElementById('criteria-item-2').innerText = translations[selectedLanguage].criteria2;
    document.getElementById('criteria-item-3').innerText = translations[selectedLanguage].criteria3;
    document.getElementById('citizenship-explanation').innerText = translations[selectedLanguage].explanation;
    document.getElementById('key-elements-title').innerText = translations[selectedLanguage].keyElements;
    document.getElementById('domicile-title').innerText = translations[selectedLanguage].domicileTitle;
    document.getElementById('domicile-description').innerText = translations[selectedLanguage].domicileDesc;
    document.getElementById('birth-in-india-title').innerText = translations[selectedLanguage].birthTitle;
    document.getElementById('birth-in-india').innerText = translations[selectedLanguage].birthDesc;
    document.getElementById('parents-born-in-india-title').innerText = translations[selectedLanguage].parentsTitle;
    document.getElementById('parents-born-in-india').innerText = translations[selectedLanguage].parentsDesc;
    document.getElementById('ordinary-residence-title').innerText = translations[selectedLanguage].residenceTitle;
    document.getElementById('ordinary-residence').innerText = translations[selectedLanguage].residenceDesc;
    document.getElementById('conclusion-title').innerText = translations[selectedLanguage].conclusion;
    document.getElementById('conclusion-paragraph').innerText = translations[selectedLanguage].conclusionPara;
  };
   
let English=document.querySelector('#English');
let Hindi=document.querySelector('#Hindi');
let Assamese=document.querySelector('#Assamese');
let Bengali=document.querySelector('#Bengali');
let Bodo=document.querySelector('#Bodo');
let Dogri=document.querySelector('#Dogri');
let Gujarati=document.querySelector('#Gujarati');
let Kannadan=document.querySelector('#Kannada');
let Kashmiri=document.querySelector('#Kashmiri');
let Konkani=document.querySelector('#Konkani');
let Maithi=document.querySelector('#Maithi');
let Malayalam=document.querySelector('#Malayalam');
let Marathi=document.querySelector('#Marathi');
let Meitei=document.querySelector('#Meitei');
let Nepali=document.querySelector('#Nepali');
let Odia=document.querySelector('#Odia');
let Punjabi=document.querySelector('#Punjabi');
let Sanskrit=document.querySelector('#Sanskrit');
let Santali=document.querySelector('#Santali');
let Sindhi=document.querySelector('#Sindhi');
let Tamil=document.querySelector('#Tamil');
let Telugu=document.querySelector('#Telugu');
let Urdu=document.querySelector('#Urdu');

English.addEventListener('click',function(){
  console.log('englis');
  changeLanguage(English.id);
});
Hindi.addEventListener('click',function(){
  changeLanguage(Hindi.id);
});
Assamese.addEventListener('click',function(){
  changeLanguage(Assamese.id);
});
Bengali.addEventListener('click',function(){
  changeLanguage(Bengali.id);
});
Bodo.addEventListener('click',function(){
  changeLanguage(Bodo.id);
});
Dogri.addEventListener('click',function(){
  changeLanguage(Dogri.id);
});
Gujarati.addEventListener('click',function(){
  changeLanguage(Gujarati.id);
});
Kannada.addEventListener('click',function(){
  changeLanguage(Kannada.id);
});
Kashmiri.addEventListener('click',function(){
  changeLanguage(Kashmiri.id);
});
Konkani.addEventListener('click',function(){
  changeLanguage(Konkani.id);
});
Maithi.addEventListener('click',function(){
  changeLanguage(Maithi.id);
});
Malayalam.addEventListener('click',function(){
  changeLanguage(Malayalam.id);
});
Marathi.addEventListener('click',function(){
  changeLanguage(Marathi.id);
});
Meitei.addEventListener('click',function(){
  changeLanguage(Meitei.id);
});
Nepali.addEventListener('click',function(){
  changeLanguage(Nepali.id);
});
Odia.addEventListener('click',function(){
  changeLanguage(Odia.id);
});
Punjabi.addEventListener('click',function(){
  changeLanguage(Punjabi.id);
});
Sanskrit.addEventListener('click',function(){
  changeLanguage(Sanskrit.id);
});
Santali.addEventListener('click',function(){
  changeLanguage(Santali.id);
});
Sindhi.addEventListener('click',function(){
  changeLanguage(Sindhi.id);
});
Tamil.addEventListener('click',function(){
  changeLanguage(Tamil.id);
});
Telugu.addEventListener('click',function(){
  changeLanguage(Telugu.id);
});

Urdu.addEventListener('click',function(){
  changeLanguage(Urdu.id);
});

  