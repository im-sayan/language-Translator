const translate = require('translate-google');

// // Text to translate
 const textToTranslate = 'Day-2 Workout plan';

// Translate to Arabic
translate(textToTranslate, { to: 'ar' })
    .then((translation) => {
        console.log(translation);
    })
    .catch((error) => {
        console.error('Translation error:', error);
});


// module.exports.translate = (data) => {
//     return new Promise(async (resolve, reject) => {
//             try {
//                 let Translate = translate('Hello, how are you?', {to: 'ar'});
//                 console.log(Translate,"Translate")
//                 resolve(Translate);
//             } catch (error) {
//                 reject(error);
//             }
//     });
// };
