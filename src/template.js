function template(content = ""){
    const page = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#00ff00">
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.ico">
    <meta name="description" content="Want to breathe?"/>
    <meta name="og:title" content="Breathe!"/>
    <meta name="og:description" content="Want to breathe?"/>
    <meta name="og:url" content="https://breathe.network"/>
    <meta name="og:image" content="/lain.jpg"/>
    <title>Breathe!</title>
</head>
<body>
<noscript>
    You need to enable JavaScript to run this app.
</noscript>
<div id="root">
{content}
</div>
</body>
</html>`;
    return page;
}

module.exports = template;