// Hello there.

// Making sure this page isn't hosted somewhere else...

if(document.location.href.indexOf('vvxweb.ga') > -1 || document.location.href.indexOf('about:blank') || document.location.href.indexOf('vvxwebsite.vercel.app')) { 
    console.log('URL STATUS...OK');
} else {

    document.location.href = 'http://vvxweb.ga';
}