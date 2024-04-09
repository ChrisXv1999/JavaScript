type FrontLanguage = 'Javascript' | 'Typescript' | 'css' | 'html';
function study(language:FrontLanguage):void{
    console.log(language);
}
let l = 'Javascript' as const ;
study(l);
