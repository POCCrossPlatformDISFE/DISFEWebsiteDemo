/*
 Call a post message in all parent iframes to prevent all use cases.
*/
(function(){
    try {
        var wParent = window.parent;
        while (wParent != window.top) {
            wParent.postMessage('ebz:conversion:'+window.location.host,'*');
            wParent = wParent.parent;
        }
        wParent.postMessage('ebz:conversion:'+window.location.host,'*');
    } catch(e) {
        if(window.console){ console.error('cannot call conversion, postMessage is not available'); }
    }
})();
