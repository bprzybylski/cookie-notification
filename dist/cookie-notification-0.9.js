/**
* @Author: Bartek Przybylski
* @Date:   2016-09-22T17:25:58+02:00
* @Last modified by:   Bartek Przybylski
* @Last modified time: 2016-09-22T19:26:21+02:00
*/

var cookieNotification = {

  params : {
    position : "bottom",
    maxWidth: "960px",
    backgroundColor: "#DEF7FF",
    textColor: "#222",
    linkColor: "#666",
    notificationHeader : "Ta strona wykorzystuje pliki cookies",
    notificationText : "Ta strona wykorzystuje pliki cookies do zapewniania najwyższej wygody korzystania z serwisu. Te same pliki mogą być wykorzystywane przez współpracujące z nami firmy w celach badawczych. Jeśli wyrażasz zgodę na nasze działania, zamknij ten komunikat. Pamiętaj, że zawsze możesz wyłączyć obsługę plików cookies w swojej przeglądarce.",
    closeText : "Zamknij",
    moreLink : null,
    moreText : "Dowiedz się więcej"
  },

  load : function(p){
    if(p != undefined)
      for (var t in p) { this.params[t] = p[t]; }
    if(!this.getCookie("cnCloseFlag")){
      if(window.attachEvent)
        window.attachEvent("onload", function(){ cookieNotification.install(cookieNotification); });
      else
        window.addEventListener("load", function(){ cookieNotification.install(cookieNotification); });
    }
  },

  install : function(o){
    o.style = [
      "#cnContainer{ font-size: 14px; font-family: 'tahoma', sans-serif; z-index: 2000; background-color: " + o.params.backgroundColor + "; position: fixed; bottom: 0; left: 0; box-sizing: border-box; width: 100%; padding: 1em 1em 0.5em 1em; }",
      "#cnContainer.on-top{ bottom: auto; top: 0; }",
      "#cnContainer h6, #cnContainer p{ max-width: " + o.params.maxWidth + "; }",
      "#cnContainer h6{ margin: 0 auto 0.7em auto; padding: 0; line-height: 135%; font-size: 1em; font-weight: bold; color: " + o.params.textColor + "; }",
      "#cnContainer p{ margin: 0 auto 0.7em auto; padding: 0; line-height: 135%; font-size: 0.9em; color: " + o.params.textColor + "; }",
      "#cnContainer p a{ color: " + o.params.linkColor + "; text-decoration: none; }",
      "#cnContainer p a:hover{ text-decoration: underline; }",
      "#cnContainer p#cnLinkParagraph a{ display: inline-block; margin-right: 0.5em; }"
    ];

    var cnStyle = document.createElement('style');
    cnStyle.appendChild(document.createTextNode(o.style.join("\n")));

    document.body.appendChild(cnStyle);

    var cnContentHeader = document.createElement('h6');
      cnContentHeader.appendChild(document.createTextNode(o.params.notificationHeader));

    var cnContentParagraph = document.createElement('p');
      cnContentParagraph.appendChild(document.createTextNode(o.params.notificationText));

    var cnLinkParagraph = document.createElement('p');
      cnLinkParagraph.setAttribute('id', 'cnLinkParagraph');
      if(o.params.moreLink !== null){
        var cnMoreLink = document.createElement('a');
        cnMoreLink.setAttribute('id', 'cnMoreLink');
        cnMoreLink.setAttribute('href', o.params.moreLink);
        cnMoreLink.appendChild(document.createTextNode(o.params.moreText));
        cnLinkParagraph.appendChild(cnMoreLink);
      }

      var cnCloseLink = document.createElement('a');
      cnCloseLink.setAttribute('id', 'cnCloseLink');
      cnCloseLink.setAttribute('href', "#");
      cnCloseLink.appendChild(document.createTextNode(o.params.closeText));
      if(window.attachEvent)
        cnCloseLink.attachEvent("onclick", function(e){ o.closeClick(e); });
      else
        cnCloseLink.addEventListener("click", function(e){ o.closeClick(e); });
      cnLinkParagraph.appendChild(cnCloseLink);


    var cnContainer = document.createElement('div');
      cnContainer.setAttribute('id', 'cnContainer');
      if(o.params.position == "top") cnContainer.setAttribute('class', 'on-top');
      cnContainer.appendChild(cnContentHeader);
      cnContainer.appendChild(cnContentParagraph);
      cnContainer.appendChild(cnLinkParagraph);
      this.cnContainer = cnContainer;

    document.body.appendChild(cnContainer);
  },

  closeClick : function(e){
    e.preventDefault();
    this.setCookie("cnCloseFlag", "1", 90);
    this.cnContainer.style.display = "none";
    return false;
  },

  setCookie : function(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  },

  getCookie : function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

}
