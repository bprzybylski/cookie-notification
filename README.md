# Cookie notification

This repository is all about a simple JavaScript file that lets you display a cookie notification on your website. The script does not use any external libraries, like jQuery, so you can use it as-it-is.

## Usage

Just put the following code in the `<header>` section of your webpage or at the end of the `<body>` content:

```html
<script src="/path/to/cookie-notification-0.9.js" /></script>
<script>
  cookieNotification.load();
</script>
```

If you want, you can pass some custom parameters to the `load` function, for example:

```html
<script src="/path/to/cookie-notification-0.9.js" /></script>
<script>
  cookieNotification.load({
      position: "top",
      backgroundColor: "#FCFFBF"
  });
</script>
```

## Parameters

The full list of parameters with their default values is as following:

```javascript
{
  position : "bottom", // "top" or "bottom"
  maxWidth: "960px", // max-width of the inner content
  backgroundColor: "#DEF7FF",
  textColor: "#222",
  linkColor: "#666",
  notificationHeader : "Ta strona wykorzystuje pliki cookies",
  notificationText : "Ta strona wykorzystuje pliki cookies do zapewniania najwyższej wygody korzystania z serwisu. Te same pliki mogą być wykorzystywane przez współpracujące z nami firmy w celach badawczych. Jeśli wyrażasz zgodę na nasze działania, zamknij ten komunikat. Pamiętaj, że zawsze możesz wyłączyć obsługę plików cookies w swojej przeglądarce.",
  closeText : "Zamknij",
  moreLink : null, // you can set it to a web address for user to get
                   // some more information about the cookie policy;
                   // the "more" link will show automatically
  moreText : "Dowiedz się więcej"
}
```
