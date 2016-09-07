if(typeof(adnext_flags) != 'undefined' && typeof(adnext_flags["f_"+adnext_rich['i']]) != 'undefined' && adnext_flags["f_"+adnext_rich['i']] == 1) {
  document.write("<script type='text/javascript'>" + adnext_rich['c'] + "</scr"+"ipt>");
  adnext_autoresize(adnext_rich['i']);
} else {
  (function() {
    var ADVERLINE = window.ADVERLINE || {};
 
    ADVERLINE.writeInlineIframe = ADVERLINE.writeInlineIframe || function(width, height, iframeId, content, newFrame) {
      var iframeElement,
          iframeDocument;
      
      if (newFrame == 1) {
        document.write('<iframe id="' + iframeId + '" width="' + width + '" height="' + height + '" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true"></iframe>');
      }
			
      if (iframeId == 'adv_ifr_footer') {
        try {
					content = decodeURIComponent(content);
				}
				catch(e){}
      }
			
      //var dcontent = decodeURIComponent(content);
      iframeElement = document.getElementById(iframeId);
      iframeDocument = iframeElement.contentWindow.document || iframeElement.contentDocument;
      iframeDocument.open();
      iframeDocument.write([
        '<!doctype html><html><head></head><body marginwidth="0" marginheight="0"><script type="text/javascript">',
        'function adnext_autoresize(iframe){',
        '  var adnext_tags = new Array("iframe","img","ins","a","object","embed","div","ul","li"), newSize = {width: 0, height: 0};',
        '  for (var i=0; i<adnext_tags.length; i++) {',
        '    var adnext_elements = document.getElementsByTagName(adnext_tags[i]);',
        '    for (var j=0; j<adnext_elements.length; j++) {',
        '      if (adnext_elements[j].id == \'advskin_divzero\'){newSize[\'width\']=0;newSize[\'height\']=0; break;}',
        '      if (adnext_tags[i] == \'img\') {',
        '        if ((typeof adnext_elements[j].style.width != \'undefined\' && parseInt(adnext_elements[j].style.width.toString().replace("px","")) == 1) || (typeof adnext_elements[j].width != \'undefined\' && parseInt(adnext_elements[j].width.toString().replace("px","")) == 1)) {',
        '        adnext_elements[j].style.display=\'none\';',
        '        }',
        '      }',
        '      if (typeof adnext_elements[j].style.width != \'undefined\' && parseInt(adnext_elements[j].style.width.toString().replace("px","")) > newSize[\'width\']) { newSize[\'width\'] = parseInt(adnext_elements[j].style.width.toString().replace("px",""));}',
        '      if (typeof adnext_elements[j].width != \'undefined\' && parseInt(adnext_elements[j].width.toString().replace("px","")) > newSize[\'width\']) { newSize[\'width\'] = parseInt(adnext_elements[j].width.toString().replace("px",""));}',
        '      if (typeof adnext_elements[j].style.height != \'undefined\' && parseInt(adnext_elements[j].style.height.toString().replace("px","")) > newSize[\'height\']) { newSize[\'height\'] = parseInt(adnext_elements[j].style.height.toString().replace("px",""));}',
        '      if (typeof adnext_elements[j].height != \'undefined\' && parseInt(adnext_elements[j].height.toString().replace("px","")) > newSize[\'height\']) { newSize[\'height\'] = parseInt(adnext_elements[j].height.toString().replace("px",""));}',
        '    }',
        '  }',
        '  window.parent.document.getElementById(iframe).width = newSize[\'width\'];',
        '  window.parent.document.getElementById(iframe).height = newSize[\'height\'];',
        '  if (typeof window.parent.resize_'+iframeId+' == "function") window.parent.resize_'+iframeId+'(newSize[\'width\'], newSize[\'height\']);',
        '}',
        content,
        '  \n if(typeof adnext_flags == \'undefined\') { adnext_flags = {};}',
        '  adnext_flags["f_'+iframeId+'"] = 1;',
        '  document.write("<script type=\'text/javascript\'>var adnext_timer=setInterval(\\"adnext_autoresize(\''+iframeId+'\')\\",50);setTimeout(\\"clearInterval(adnext_timer)\\", 5000);</scr"+"ipt>");',
        '</scr'+'ipt></body></html>'
      ].join(""));
      iframeDocument.close();
    };
    window.ADVERLINE = ADVERLINE;
  })();
  ADVERLINE.writeInlineIframe(1, 1, adnext_rich['i'], adnext_rich['c'], 1);
}