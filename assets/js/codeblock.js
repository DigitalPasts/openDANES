var codeBlocks = document.querySelectorAll('pre.highlight');

codeBlocks.forEach(function (codeBlock) {
  codeBlock.classList.add('prettyprint')
  var copyButton = document.createElement('button');
  copyButton.className = 'copy';
  copyButton.type = 'button';
  copyButton.ariaLabel = 'Copy code to clipboard';
  copyButton.innerHTML = '<span class="code-button-emoticon">\uf0c5</span> Copy me';

  codeBlock.before(copyButton);

  copyButton.addEventListener('click', function () {
    var code = codeBlock.querySelector('code').innerText.trim();
    window.navigator.clipboard.writeText(code);

    copyButton.innerHTML = '<span class="code-button-emoticon">\uf00c</span> Copied!';
    var fourSeconds = 2000;

    setTimeout(function () {
      copyButton.innerHTML = '<span class="code-button-emoticon">\uf0c5</span> Copy me';
      
    }, fourSeconds);
  });
});